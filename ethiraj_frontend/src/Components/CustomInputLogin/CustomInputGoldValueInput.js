// // // import React, { useState, useEffect } from "react";
// // // import "./CustomInputLogin.css";
// // // import "../ComponentsCss/componet.css";
// // // import { Field, ErrorMessage } from "formik";
// // // import { InputAdornment } from "@mui/material";

// // // const CustomInputGoldValueInput = ({
// // //   label,
// // //   name,
// // //   custPlaceholder,
// // //   image,
// // //   setFieldValue,
// // //   inputType,
// // //   currency,
// // //   stakeAmountName, // New prop for stake amount
// // //   ...rest
// // // }) => {
// // //   const [goldPrice, setGoldPrice] = useState(60); // Set default price per gram
// // //   const [grams, setGrams] = useState(0);

// // //   // Function to calculate grams
// // //   const calculateGrams = (amount) => {
// // //     if (!amount || isNaN(amount)) return;
// // //     const calculatedGrams = (parseFloat(amount) / goldPrice).toFixed(2);
// // //     setGrams(calculatedGrams);
// // //     setFieldValue(name, calculatedGrams); // Update Formik field value
// // //   };

// // //   return (
// // //     <div style={{ width: "100%" }}>
// // //       <div style={{ paddingBottom: "4px" }}>
// // //         <label htmlFor={name} className="input-heading12" style={{ fontSize: "16px" }}>
// // //           {label}
// // //         </label>
// // //       </div>

// // //       <div style={{ display: "flex", alignItems: "center", width: "100%", gap: "8px" }}>
// // //         {/* Stake Amount Input */}
// // //         <div style={{ flex: "1" }}>
// // //           <Field
// // //             id={stakeAmountName}
// // //             name={stakeAmountName}
// // //             type="number"
// // //             placeholder={custPlaceholder || "Enter amount"}
// // //             {...rest}
// // //             onChange={(e) => {
// // //               setFieldValue(stakeAmountName, e.target.value);
// // //               calculateGrams(e.target.value);
// // //             }}
// // //             className="custominput-field12"
// // //             style={{
// // //               borderRadius: "3px",
// // //               width: "100%",
// // //               color: "#7A7A7A",
// // //               fontSize: "14px",
// // //               boxSizing: "border-box",
// // //               height: "35px",
// // //               paddingLeft: "10px",
// // //             }}
// // //           />
// // //         </div>

// // //         {/* Currency Selection */}
// // //         {currency && (
// // //           <Field
// // //             as="select"
// // //             name="currency"
// // //             onChange={(e) => setFieldValue("currency", e.target.value)}
// // //             style={{
// // //               borderRadius: "3px",
// // //               width: "80px",
// // //               height: "35px",
// // //               fontSize: "14px",
// // //               padding: "5px",
// // //             }}
// // //           >
// // //             <option value="USD">$ USD</option>
// // //             <option value="EUR">€ EUR</option>
// // //             <option value="GBP">£ GBP</option>
// // //           </Field>
// // //         )}
// // //       </div>

// // //       {/* Grams (Read-Only) */}
// // //       <div style={{ paddingTop: "10px" }}>
// // //         <label className="input-heading12" style={{ fontSize: "16px" }}>
// // //           Purchase of Stake (grams)
// // //         </label>
// // //         <Field
// // //           id={name}
// // //           name={name}
// // //           type="text"
// // //           className="custominput-field12"
// // //           value={grams} // Display calculated grams
// // //           readOnly
// // //           style={{
// // //             borderRadius: "3px",
// // //             width: "100%",
// // //             color: "#7A7A7A",
// // //             fontSize: "14px",
// // //             boxSizing: "border-box",
// // //             height: "35px",
// // //             backgroundColor: "#f2f2f2", // Disabled input style
// // //             paddingLeft: "10px",
// // //           }}
// // //         />
// // //       </div>

// // //       {/* Error Message */}
// // //       <ErrorMessage name={name} component="div" style={{ color: "red", fontSize: "10px" }} />
// // //     </div>
// // //   );
// // // };

// // // export default CustomInputGoldValueInput;


// // import React, { useState, useEffect } from "react";
// // import "./CustomInputLogin.css";
// // import "../ComponentsCss/componet.css";
// // import { Field, ErrorMessage } from "formik";
// // import { InputAdornment } from "@mui/material";

// // const CustomInputGoldValueInput = ({
// //   label,
// //   name,
// //   custPlaceholder,
// //   image,
// //   setFieldValue,
// //   inputType,
// //   currency,
// //   stakeAmountName, // New prop for stake amount
// //   ...rest
// // }) => {
// //   const [goldPrice, setGoldPrice] = useState(60); // Set default price per gram (in USD)
// //   const [grams, setGrams] = useState(0);
// //   const [selectedCurrency, setSelectedCurrency] = useState("USD");

// //   // Currency to gold price conversion rates (example)
// //   const currencyRates = {
// //     USD: 60, // Gold price in USD per gram
// //     EUR: 1, // Gold price in EUR per gram
// //     GBP: 10, // Gold price in GBP per gram
// //   };

// //   // Function to calculate grams based on the amount and selected currency
// //   const calculateGrams = (amount, currency) => {
// //     if (!amount || isNaN(amount)) return;

// //     // Get the gold price in the selected currency
// //     const pricePerGram = currencyRates[currency];
// //     console.log(pricePerGram,"pricePerGram")
// //     const calculatedGrams = (parseFloat(amount) / pricePerGram).toFixed(2);

// //     setGrams(calculatedGrams);
// //     setFieldValue(name, calculatedGrams); // Update Formik field value
// //   };

// //   // Update the currency and recalculate grams when currency changes
// //   const handleCurrencyChange = (e) => {
// //     const newCurrency = e.target.value;
// //     setSelectedCurrency(newCurrency);
// //     setFieldValue("currency", newCurrency); // Update the currency in Formik
// //     calculateGrams(stakeAmountName, newCurrency); // Recalculate grams with the selected currency
// //   };

// //   return (
// //     <div style={{ width: "100%" }}>
// //       <div style={{ paddingBottom: "4px" }}>
// //         <label htmlFor={name} className="input-heading12" style={{ fontSize: "16px" }}>
// //           {label}
// //         </label>
// //       </div>

// //       <div style={{ display: "flex", alignItems: "center", width: "100%", gap: "8px" }}>
// //         {/* Stake Amount Input */}
// //         <div style={{ flex: "1" }}>
// //           <Field
// //             id={stakeAmountName}
// //             name={stakeAmountName}
// //             type="number"
// //             placeholder={custPlaceholder || "Enter amount"}
// //             {...rest}
// //             onChange={(e) => {
// //               setFieldValue(stakeAmountName, e.target.value);
// //               calculateGrams(e.target.value, selectedCurrency);
// //             }}
// //             className="custominput-field12"
// //             style={{
// //               borderRadius: "3px",
// //               width: "100%",
// //               color: "#7A7A7A",
// //               fontSize: "14px",
// //               boxSizing: "border-box",
// //               height: "35px",
// //               paddingLeft: "10px",
// //             }}
// //           />
// //         </div>

// //         {/* Currency Selection */}
// //         {currency && (
// //           <Field
// //             as="select"
// //             name="currency"
// //             onChange={handleCurrencyChange}
// //             value={selectedCurrency}
// //             style={{
// //               borderRadius: "3px",
// //               width: "80px",
// //               height: "35px",
// //               fontSize: "14px",
// //               padding: "5px",
// //             }}
// //           >
// //             <option value="USD">$ USD</option>
// //             <option value="EUR">€ EUR</option>
// //             <option value="GBP">£ GBP</option>
// //           </Field>
// //         )}
// //       </div>

// //       {/* Grams (Read-Only) */}
// //       <div style={{ paddingTop: "10px" }}>
// //         <label className="input-heading12" style={{ fontSize: "16px" }}>
// //           Purchase of Stake (grams)
// //         </label>
// //         <Field
// //           id={name}
// //           name={name}
// //           type="text"
// //           className="custominput-field12"
// //           value={grams} // Display calculated grams
// //           readOnly
// //           style={{
// //             borderRadius: "3px",
// //             width: "100%",
// //             color: "#7A7A7A",
// //             fontSize: "14px",
// //             boxSizing: "border-box",
// //             height: "35px",
// //             backgroundColor: "#f2f2f2", // Disabled input style
// //             paddingLeft: "10px",
// //           }}
// //         />
// //       </div>

// //       {/* Error Message */}
// //       <ErrorMessage name={name} component="div" style={{ color: "red", fontSize: "10px" }} />
// //     </div>
// //   );
// // };

// // export default CustomInputGoldValueInput;




// import React, { useState, useEffect } from "react";
// import "./CustomInputLogin.css";
// import "../ComponentsCss/componet.css";
// import { Field, ErrorMessage } from "formik";

// const CustomInputGoldValueInput = ({
//   label,
//   name,
//   custPlaceholder,
//   image,
//   setFieldValue,
//   inputType,
//   currency,
//   stakeAmountName, // New prop for stake amount
//   ...rest
// }) => {
//   const [goldPrice, setGoldPrice] = useState(60); // Set default price per gram (in USD)
//   const [grams, setGrams] = useState(0);
//   const [selectedCurrency, setSelectedCurrency] = useState("USD");

//   // Currency to gold price conversion rates (example)
//   const currencyRates = {
//     USD: 60, // Gold price in USD per gram
//     EUR: 55, // Gold price in EUR per gram
//     GBP: 50, // Gold price in GBP per gram
//   };

//   // Function to calculate grams based on the amount and selected currency
//   const calculateGrams = (amount) => {
//     if (!amount || isNaN(amount)) return;

//     // Get the gold price in the selected currency
//     const pricePerGram = currencyRates[selectedCurrency];
//     const calculatedGrams = (parseFloat(amount) / pricePerGram).toFixed(2);

//     setGrams(calculatedGrams);
//     setFieldValue(name, calculatedGrams); // Update Formik field value
//   };

//   // Update the currency without recalculating grams
//   const handleCurrencyChange = (e) => {
//     const newCurrency = e.target.value;
//     setSelectedCurrency(newCurrency);
//     setFieldValue("currency", newCurrency); // Update the currency in Formik
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <div style={{ paddingBottom: "4px" }}>
//         <label htmlFor={name} className="input-heading12" style={{ fontSize: "16px" }}>
//           {label}
//         </label>
//       </div>

//       <div style={{ display: "flex", alignItems: "center", width: "100%", gap: "8px" }}>
//         {/* Stake Amount Input */}
//         <div style={{ flex: "1" }}>
//           <Field
//             id={stakeAmountName}
//             name={stakeAmountName}
//             type="number"
//             placeholder={custPlaceholder || "Enter amount"}
//             {...rest}
//             onChange={(e) => {
//               const amount = e.target.value;
//               setFieldValue(stakeAmountName, amount);
//               calculateGrams(amount); // Only recalculate grams when amount changes
//             }}
//             className="custominput-field12"
//             style={{
//               borderRadius: "3px",
//               width: "100%",
//               color: "#7A7A7A",
//               fontSize: "14px",
//               boxSizing: "border-box",
//               height: "35px",
//               paddingLeft: "10px",
//             }}
//           />
//         </div>

//         {/* Currency Selection */}
//         {currency && (
//           <Field
//             as="select"
//             name="currency"
//             onChange={handleCurrencyChange} // Only update currency without recalculating grams
//             value={selectedCurrency}
//             style={{
//               borderRadius: "3px",
//               width: "80px",
//               height: "35px",
//               fontSize: "14px",
//               padding: "5px",
//             }}
//           >
//             <option value="USD">$ USD</option>
//             <option value="EUR">€ EUR</option>
//             <option value="GBP">£ GBP</option>
//           </Field>
//         )}
//       </div>

//       {/* Grams (Read-Only) */}
//       <div style={{ paddingTop: "10px" }}>
//         <label className="input-heading12" style={{ fontSize: "16px" }}>
//           Purchase of Stake (grams)
//         </label>
//         <Field
//           id={name}
//           name={name}
//           type="text"
//           className="custominput-field12"
//           value={grams} // Display calculated grams
//           readOnly
//           style={{
//             borderRadius: "3px",
//             width: "100%",
//             color: "#7A7A7A",
//             fontSize: "14px",
//             boxSizing: "border-box",
//             height: "35px",
//             backgroundColor: "#f2f2f2", // Disabled input style
//             paddingLeft: "10px",
//           }}
//         />
//       </div>

//       {/* Error Message */}
//       <ErrorMessage name={name} component="div" style={{ color: "red", fontSize: "10px" }} />
//     </div>
//   );
// };

// export default CustomInputGoldValueInput;


import React, { useState, useEffect } from "react";
import "./CustomInputLogin.css";
import "../ComponentsCss/componet.css";
import { Field, ErrorMessage } from "formik";
import { InputAdornment } from "@mui/material";

const CustomInputGoldValueInput = ({
  label,
  name,
  custPlaceholder,
  image,
  setFieldValue,
  inputType,
  currency,
  grams,
  setGrams,
  value_of_purchase, // New prop for stake amount
  ...rest
}) => {
  const [goldPrice, setGoldPrice] = useState(60); // Set default price per gram (in USD)
  //   const [grams, setGrams] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [initialAmount, setInitialAmount] = useState(0); // Store the initial amount entered by the user

  // Currency to gold price conversion rates (example)
  const currencyRates = {
    USD: 60, // Gold price in USD per gram
    EUR: 55, // Gold price in EUR per gram
    GBP: 50, // Gold price in GBP per gram
  };



  // Function to calculate grams based on the amount and selected currency
  const calculateGrams = (amount, currency) => {
    if (!amount || isNaN(amount)) return;

    // Get the gold price in the selected currency
    const pricePerGram = currencyRates[currency];
    const calculatedGrams = (parseFloat(amount) / pricePerGram).toFixed(2);

    setGrams(calculatedGrams);
    setFieldValue(name, calculatedGrams); // Update Formik field value
  };

  // Update the currency and recalculate grams when currency changes, but only if the amount has been entered
  const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;
    setSelectedCurrency(newCurrency);
    setFieldValue("currency", newCurrency); // Update the currency in Formik
    // Only recalculate grams if an amount has been entered
    if (initialAmount > 0) {
      calculateGrams(initialAmount, newCurrency);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={{ paddingBottom: "4px" }}>
        <label htmlFor={name} className="input-heading12" style={{ fontSize: "16px" }}>
          {label}
        </label>
      </div>

      <div style={{ display: "flex", alignItems: "center", width: "100%", gap: "8px" }}>
        {/* Stake Amount Input */}
        <div style={{ flex: "1" }}>
          <Field
            // id={value_of_purchase}
            // name={value_of_purchase}
            // type="number"
            placeholder={custPlaceholder || "Enter amount"}
            {...rest}
            // onChange={(e) => {
            //   const value = e.target.value;
            //   setFieldValue(value_of_purchase, value);
            //   setInitialAmount(value); // Store the entered amount to recalculate grams when currency changes
            //   calculateGrams(value, selectedCurrency);
            // }}
            
              id="value_of_purchase"
              name="value_of_purchase"
              onChange={(e) => {
                const value = e.target.value;
                setFieldValue("value_of_purchase", value);
                setInitialAmount(value);
                calculateGrams(value, selectedCurrency);
              }}

              className="custominput-field12"
              style={{
                borderRadius: "3px",
                width: "100%",
                color: "#7A7A7A",
                fontSize: "14px",
                boxSizing: "border-box",
                height: "35px",
                paddingLeft: "10px",
              }}
            />
        </div>

        {/* Currency Selection */}
        {currency && (
          <Field
            as="select"
            name="currency"
            onChange={handleCurrencyChange}
            value={selectedCurrency}
            style={{
              borderRadius: "3px",
              width: "80px",
              height: "35px",
              fontSize: "14px",
              padding: "5px",
            }}
          >
            <option value="USD">$ USD</option>
            <option value="EUR">€ EUR</option>
            <option value="GBP">£ GBP</option>
          </Field>
        )}
      </div>

      {/* Grams (Read-Only) */}
      {/* <div style={{ paddingTop: "10px" }}>
        <label className="input-heading12" style={{ fontSize: "16px" }}>
          Purchase of Stake (grams)
        </label>
        <Field
          id={name}
          name={name}
          type="text"
          className="custominput-field12"
          value={grams} // Display calculated grams
          readOnly
          style={{
            borderRadius: "3px",
            width: "100%",
            color: "#7A7A7A",
            fontSize: "14px",
            boxSizing: "border-box",
            height: "35px",
            backgroundColor: "#f2f2f2", // Disabled input style
            paddingLeft: "10px",
          }}
        />
      </div> */}

      {/* Error Message */}
      <ErrorMessage name={name} component="div" style={{ color: "red", fontSize: "10px" }} />
    </div>
  );
};

export default CustomInputGoldValueInput;
