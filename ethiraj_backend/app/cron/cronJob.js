const cron = require("node-cron");
const db = require("../models");  // Adjust the path to match your project structure
const Plan = db.plans; // Access the Plan model
const Reap = db.reaps; // Access the Reap model
const CustomerGoldBalance = db.customer_gold_balances; // Access the CustomerGoldBalance model
const Purchase = db.purchases; // Access the Purchase model
const {
  sendGlobalNotificationToCustomers,
  sendNotificationToFinanceConsultants,
  sendNotificationToSpecificCustomer,
} = require("../controllers/admin_controller/customer_notifications.controller");


// Cron job scheduled to run daily at midnight (00:00)
cron.schedule("0 0 * * *", async () => {
  console.log("Running the cron job to check for expired plans...");

  const today = new Date();  // Get current date

  try {
    // Update all active plans where the closure date is today or earlier
    const result = await Plan.update(
      { status: "Inactive" },
      {
        where: {
          closure_date: {
            [db.Sequelize.Op.lte]: today,  // Check if closure_date <= today
          },
          status: "Active", // Only consider plans with status "Active"
        },
      }
    );

    console.log(`Updated ${result[0]} plans to 'Inactive'.`);
  } catch (error) {
    console.error("Error running cron job:", error);
  }
});



// Cron job scheduled to run daily at midnight (00:00)
cron.schedule("0 0 * * *", async () => {
  console.log("Running the cron job to process reaps...");

  const today = new Date(); // Get current date
  console.log(today,"currentdateGet currentdate");
  

  // this is  for seting the today 12.00 like start of the date
  today.setHours(0, 0, 0, 0); // Normalize time to midnight for comparison 

  // console.log(today)

  // const reapdata = await Reap.findAll({where: {
  //   reap_id:1, // Check if reap_date matches today
  // }})
  // console.log(reapdata);
  
  const transaction = await db.sequelize.transaction();

  try {
    // Find all reaps scheduled for today
    const reaps = await Reap.findAll({
      where: {
        reap_date: today, // Check if reap_date matches today
        delete_status: 0, // Only consider active reaps
        reaped: "in progress", // Only process reaps that are still in progress
      },
      include: {
        model: Purchase,
        as: "purchase",
        // attributes: ["purchase_id", "customer_id", "purchase_stake"],
      },
    });

    if (reaps.length === 0) {
      console.log("No reaps scheduled for today.");
      await transaction.commit();
      return;
    }

    if (reaps.length > 0) {
    console.log(`Processing ${reaps.length} reaps for ${today.toDateString()}`);

    let updatedGoldCount = 0;

    for (const reap of reaps) {
      const { purchase, reap_percentage,reap_month,purchase_id} = reap;
      const { customer_id, purchase_stake,value_of_purchase } = purchase;

      const goldPricePerGram = 58.50; // Example value, USD per gram (current static price)

      
      // // Calculate gold earned
      // const goldEarned = (reap_percentage / 100) * purchase_stake;

      // Calculate gold earned
      const reap_amount = (reap_percentage / 100) * value_of_purchase;

      // Convert USD to gold (grams)
      const goldEarned = reap_amount / goldPricePerGram;



      // Update customer's gold balance
      const customerGoldBalance = await CustomerGoldBalance.findOne({
        where: { customer_id },
      });

      if (customerGoldBalance) {
        // Update existing balance
        await customerGoldBalance.update(
          {
            available_gold: customerGoldBalance.available_gold + goldEarned,
            // earned_gold_referrals:customerGoldBalance.earned_gold_referrals+ goldEarned,
          },
          { transaction }
        );
      } else {
        // Create a new record if none exists
        await CustomerGoldBalance.create(
          {
            customer_id,
            available_gold: goldEarned,
            // earned_gold_referrals:goldEarned,
            // total_purchased_gold: 0, // Assuming this is managed separately
            // earned_gold_referrals: 0, // Assuming this is managed separately
          },
          { transaction }
        );
      }

      // Mark the reap as processed (optional step to avoid re-processing)
      await reap.update(
        {
          reaped: "claimed", // Mark as claimed after processing
          delete_status: 1, // Mark as processed or inactive
          deletedAt: new Date(), // Set current timestamp as the deleted time
        },
        { transaction }
      );

      sendNotificationToSpecificCustomer(
        customer_id,
        `Your Purchase ID ${purchase_id}'s Month ${reap_month} Reap Has Been Completed!`,
        `Purchase ID ${purchase_id}'s ${goldEarned} Grams of Gold from Month ${reap_month} Reap (from Purchase Date) Has Been Redeemed!`,
        "reaps",
        " ",
        purchase_id

      );



          updatedGoldCount++;
    }

    console.log(`Successfully processed ${updatedGoldCount} reaps.`);
  } else {
    console.log("No reaps scheduled for today.");
  }

// ------------------------------------------------------------------------------------------------

   /*** PROCESS MATURED STAKES ***/
   console.log("Processing matured stakes...");
   const maturedPurchases = await Purchase.findAll({
     where: {
       stake_maturity: today, // Check if stake_maturity matches today
       principle_gold_reaped_status: "in progress", // Process only those still in progress
       delete_status: 0, // Only consider active purchases
     },
   });

   if (maturedPurchases.length === 0) {
     console.log("No matured stakes found for today.");
   } else {
     console.log(`Processing ${maturedPurchases.length} matured purchases.`);

     for (const purchase of maturedPurchases) {
       const { customer_id, purchase_stake,purchase_id } = purchase;

       // Update customer's gold balance
       const customerGoldBalance = await CustomerGoldBalance.findOne({
         where: { customer_id },
       });

       if (customerGoldBalance) {
         // Update existing balance
         await customerGoldBalance.update(
           {
             available_gold: customerGoldBalance.available_gold + purchase_stake,
           },
           { transaction }
         );
       } else {
         // Create a new record if none exists
         await CustomerGoldBalance.create(
           {
             customer_id,
             available_gold: purchase_stake,
            //  earned_gold_referrals: 0, // Assuming no referral gold for matured stakes
           },
           { transaction }
         );
       }

       // Mark the purchase as processed for maturity
       await purchase.update(
         {
           delete_status: 1, // Mark as processed or inactive
           deletedAt: new Date(), // Set deleted timestamp
           principle_gold_reaped_status: "claimed", // Update status to claimed
           principle_gold_reaped_date: new Date(), // Record the claimed date
         },
         { transaction }
       );


       sendNotificationToSpecificCustomer(
        customer_id,
        `Your Purchase ID ${purchase_id} Scheme Has Matured!`,
        `Purchase ID ${purchase_id}'s Stake Fully Matured – You Have Received ${purchase_stake} Grams of Principal Gold!`,
        "reaps",
        " ",
        purchase_id
      );


     }
     console.log(`Successfully processed ${maturedPurchases.length} matured purchases.`);
   }

   console.log("Cron job completed successfully.");

    await transaction.commit();

  } catch (error) {
    await transaction.rollback();
    console.error("Error processing reaps or matured stakes:", error);
  }
});


// Cron job scheduled to run daily at midnight (00:00)

// cron.schedule("0 0 * * *", async () => {
//   console.log("Running the cron job to process reaps...");

//   const today = new Date();
//   today.setHours(0, 0, 0, 0); // Normalize time to midnight for comparison

//   const transaction = await db.sequelize.transaction();

//   try {
//     // Find all active reaps scheduled for today and not already processed
//     const reaps = await Reap.findAll({
//       where: {
//         reap_date: today, // Check if reap_date matches today
//         reaped: false,    // Ensure the reap hasn't already been processed
//         delete_status: 0, // Only consider active reaps
//       },
//       include: {
//         model: Purchase,
//         as: "purchase",
//         attributes: ["purchase_id", "customer_id", "purchase_stake","value_of_purchase"],
//       },
//     });

//     if (reaps.length === 0) {
//       console.log("No reaps scheduled for today.");
//       await transaction.commit();
//       return;
//     }

//     console.log(`Processing ${reaps.length} reaps for ${today.toDateString()}`);

//     for (const reap of reaps) {
//       const { purchase, reap_percentage } = reap;
//       const { customer_id, purchase_stake,value_of_purchase } = purchase;

//       const goldPricePerGram = 58.50; // Example value, USD per gram (current static price)

      
//       // // Calculate gold earned
//       // const goldEarned = (reap_percentage / 100) * purchase_stake;

//       // Calculate gold earned
//       const reap_amount = (reap_percentage / 100) * value_of_purchase;

//       // Convert USD to gold (grams)
//       const goldEarned = reap_amount / goldPricePerGram;

//       // Update or create CustomerGoldBalance
//       const [customerGoldBalance, created] = await CustomerGoldBalance.findOrCreate({
//         where: { customer_id },
//         defaults: {
//           customer_id,
//           available_gold: goldEarned,
//           // total_purchased_gold: 0, // Adjust if necessary
//           // earned_gold_referrals: 0, // Adjust if necessary
//         },
//         transaction,
//       });

//       if (!created) {
//         // Update existing balance
//         await customerGoldBalance.update(
//           {
//             available_gold: db.Sequelize.literal(`available_gold + ${goldEarned}`),
//           },
//           { transaction }
//         );
//       }

//       // Mark the reap as processed
//       await reap.update(
//         {
//           reaped: true, // Mark as processed
//           delete_status: 1, // Optionally mark as inactive
//         },
//         { transaction }
//       );
//     }

//     await transaction.commit();
//     console.log(`Successfully processed ${reaps.length} reaps.`);
//   } catch (error) {
//     await transaction.rollback();
//     console.error("Error processing reaps:", error);
//   }
// });









// cron.schedule("* * * * *", async () => { // Runs every minute
//     const currentTime = new Date();
//     const currentTimeUTC = new Date(currentTime.toUTCString()); // Get current UTC time

//     // Log the current UTC time
//     console.log("Current time (UTC):", currentTimeUTC.toISOString());

//     // Target UTC time: 2025-01-07 14:35:00 UTC
//     const targetDateUTC = new Date("2025-01-07T09:39:00.000Z"); // Ensure 'Z' is added for UTC
    
//     // Log the target UTC time for reference
//     console.log("Target time (UTC):", targetDateUTC.toISOString());

//     // Calculate the time difference between current UTC time and target UTC time
//     const timeDifference = Math.abs(currentTimeUTC.getTime() - targetDateUTC.getTime());
    
//     // If the difference is less than 1 minute (60,000 ms), perform the update
//     if (timeDifference < 60000) { // If the difference is within 1 minute
//         console.log("Running the cron job to check for expired plan_id=2...");

//         try {
//             // Only update the plan with plan_id = 2 if the time is close enough (within 1 minute)
//             const result = await Plan.update(
//                 { status: "Inactive" },
//                 {
//                     where: {
//                         plan_id: 2,  // Only update where plan_id = 2
//                         // closure_date: {
//                         //     [db.Sequelize.Op.lte]: currentTimeUTC, // Check closure date is today or earlier in UTC
//                         // },
//                         status: "Active", // Only update if the status is currently Active
//                     },
//                 }
//             );

//             if (result[0] > 0) {
//                 console.log(`Plan with ID 2 has been updated to 'Inactive'.`);
//             } else {
//                 console.log('Plan with ID 2 was not updated because it was not active or did not meet criteria.');
//             }
//         } catch (error) {
//             console.error("Error running cron job:", error);
//         }
//     } else {
//         console.log(`Current UTC time does not match the target. Current: ${currentTimeUTC.toISOString()}`);
//     }
// });
