// import React from "react";
// import {
//     Card,
//     CardContent,
//     Typography,
//     Button,
//     Box,
//     Grid,
//     Divider,
//     Tooltip,
// } from "@mui/material";
// import { IoIosInformation } from "react-icons/io";
// import { Link, useNavigate } from "react-router-dom";
// import cart_icon from "../../Assets/cart_icon.svg"
// import { AiFillThunderbolt } from "react-icons/ai";

// // const schemes = [
// //   {
// //     name: "Scheme Name 1",
// //     valueOfPurchase: "$1000",
// //     purchase: "13.8 Grm",
// //     maturity: "2 Years",
// //     lockIn: "24 Month's",
// //     benefit: "6%* Per Quarter",
// //     closingDate: "15/Mar/2025",
// //     backgroundImage: "gold-card-1", // replace with the background image URL
// //   },
// //   {
// //     name: "Scheme Name 2",
// //     valueOfPurchase: "$10000",
// //     purchase: "138 Grm",
// //     maturity: "2 Years",
// //     lockIn: "24 Month's",
// //     benefit: "6%* Per Quarter",
// //     closingDate: "15/Mar/2025",
// //     backgroundImage: "gold-card-2", // replace with the background image URL
// //   },
// // ];

// const SchemeCard = ({ schemes,handleNextModal }) => {
//     const Navigate = useNavigate()
//     const handleNavigate = () => {
//         Navigate("/Add-to-cart")
//     }
//     const handleNavigateAddToCart = () => {
//         Navigate("/addtocart")
//     }
//     console.log(schemes, "schemessssss")
//     return (
//         <Box sx={{ padding:{xs:2,md:2}, cursor: "pointer" }}
//             // onClick={handleNavigate}

//         >
//             <Grid container spacing={4}>
//                 {schemes.map((scheme, index) => (
//                     <Grid item xs={12} md={6} key={index}>
//                         <Typography
//                             variant="h6"
//                             sx={{ marginBottom: 1 }}
//                         >
//                             {scheme.name}
//                         </Typography>
//                         <Card
//                             sx={{
//                                 borderRadius: 2,
//                                 // backgroundImage: `url(${scheme.backgroundImage})`,
//                                 backgroundSize: "cover",
//                                 objectFit: "contain",
//                                 backgroundSize: "cover",
//                                 backgroundPosition: "center",
//                                 color: "white",
//                                 // background:
//                                 //     `linear-gradient(to right, #000000 0%, #333333BD 50%, #1A1A1A 100%) ,url(${scheme.backgroundImage})`,

//                                 p: { xs: "20px", md: "20px 50px" },
//                                 width: { xs: "100%", md: "100%" },
//                             }}
//                             style={{ background: `linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1)),url(${scheme.backgroundImage}) no-repeat center center`, backgroundSize: 'cover'}}
//                         >

//                             {/* Content goes here */}

//                             <CardContent sx={{ padding: "0px" }}>

//                                 <Box
//                                     display="flex" justifyContent="space-between" mb={1}

//                                 >
//                                     <Box
//                                     //  display="flex" justifyContent="space-between"
//                                     >
//                                         <Typography variant="subtitle2" sx={{ color: "#FFFFFF", mb: "2px" }}>Value of Purchase</Typography>
//                                         <Typography variant="body2" sx={{ fontSize: "20px", color: "#C38F51" }}>{scheme.valueOfPurchase}</Typography>
//                                     </Box>

//                                     <Box
//                                     // display="flex" justifyContent="space-between"
//                                     >
//                                         <Typography variant="subtitle2" sx={{ color: "#FFFFFF", mb: "2px" }}>Purchase</Typography>
//                                         <Typography
//                                             variant="body2"
//                                             sx={{
//                                                 fontSize: "20px",
//                                                 color: "#C38F51",

//                                             }}
//                                         >
//                                             {scheme.purchase}
//                                             <Tooltip title="Purchase">

//                                                 <span
//                                                     style={{
//                                                         background: "#FF8800",
//                                                         borderRadius: "50%",
//                                                         display: "inline-flex",
//                                                         alignItems: "center",
//                                                         justifyContent: "center",
//                                                         width: "10px", // Set a fixed width
//                                                         height: "10px", // Set a fixed height
//                                                         marginLeft: "1px", // Optional spacing between text and icon
//                                                     }}
//                                                 >
//                                                     <IoIosInformation style={{ fontSize: "12px", color: "white" }} />
//                                                 </span>
//                                             </Tooltip>
//                                         </Typography>

//                                         {/* <Typography sx={{ borderRadius:"50%",bgcolor:"red" }}></Typography> */}

//                                     </Box>
//                                 </Box>
//                                 <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }} />
//                                 <Box
//                                     display="flex" justifyContent="space-between" mt={1}

//                                 >
//                                     <Box
//                                     // display="flex" justifyContent="space-between" mb={1}

//                                     >
//                                         <Typography variant="subtitle2" sx={{ color: "#FFFFFF", mb: "2px" }}>Matures at</Typography>
//                                         <Typography variant="body2" sx={{ color: "#C38F51" }}>{scheme.maturity}
//                                             <Tooltip title="Matures date">
//                                                 <span
//                                                     style={{
//                                                         background: "#FF8800",
//                                                         borderRadius: "50%",
//                                                         display: "inline-flex",
//                                                         alignItems: "center",
//                                                         justifyContent: "center",
//                                                         width: "10px", // Set a fixed width
//                                                         height: "10px", // Set a fixed height
//                                                         marginLeft: "1px", // Optional spacing between text and icon
//                                                     }}
//                                                 >
//                                                     <IoIosInformation style={{ fontSize: "12px", color: "white" }} />
//                                                 </span>
//                                             </Tooltip>
//                                         </Typography>
//                                     </Box>

//                                     <Box
//                                     // display="flex" justifyContent="space-between" mb={2}
//                                     >
//                                         <Typography variant="subtitle2" sx={{ color: "#FFFFFF", mb: "2px" }}>Lock-in</Typography>
//                                         <Typography variant="body2" sx={{ color: "#C38F51" }}>{scheme.lockIn}</Typography>
//                                     </Box>

//                                 </Box>
//                                 <Box sx={{ textAlign: "center" }}>
//                                     <Box>
//                                         <Typography
//                                             variant="subtitle1"
//                                             sx={{
//                                                 marginTop: 2,
//                                                 // fontWeight: "bold",
//                                                 fontSize: "18px"
//                                             }}
//                                         >
//                                             Estimated Reap Benefit
//                                         </Typography>
//                                         <Typography
//                                             sx={{
//                                                 color: "#1FC45B",
//                                                 fontSize: "25px",

//                                                 fontWeight: "bold",

//                                                 // marginBottom: 1,
//                                             }}
//                                         >
//                                             {scheme.benefit} <span style={{ color: "white", fontSize: "14px" }}>Every 3 Months</span>
//                                         </Typography>
//                                         {/* <Link fontSize="10px" color="white" > * Read Offer Documents</Link> */}
//                                         <Typography
//                                             style={{ fontSize: "10px", color: "white" }}
//                                         >
//                                             * Read Offer Documents
//                                         </Typography>

//                                     </Box>
//                                     <Box
//                                         gap={2}
//                                         display="flex" justifyContent="space-around"
//                                         sx={{ display: { xs: 'flex', md: "block" } }}
//                                         mt={2}>
//                                         {/* <Button
//                                             // onClick={handleNavigateAddToCart}
//                                             variant="contained"
//                                             startIcon={<img src={cart_icon} style={{ minHeight: "14px" }}></img>}
//                                             // sx={{
//                                             //     backgroundColor: "black",
//                                             //     borderRadius:"23px",
//                                             //     "&:hover": { backgroundColor: "grey" },
//                                             // }}
//                                             sx={{
//                                                 // backgroundColor: "#C38F51",
//                                                 textTransform: "none",
//                                                 color: "white",
//                                                 fontSize: "13px",
//                                                 mr: { xs: "0", md: "10px" },
//                                                 // padding: "0px 20px",
//                                                 // minHeight: "30px",

//                                                 borderRadius: "23px",
//                                                 background: "#252525 0% 0% no-repeat padding-box",
//                                                 // "&:hover": {
//                                                 //     backgroundColor: "#C38F51",
//                                                 // },
//                                             }}
//                                         >
//                                             Add to Cart
//                                         </Button> */}
//                                         <Button
//                                             onClick={handleNextModal}
//                                             variant="contained"
//                                             startIcon={<AiFillThunderbolt sx={{ fontSize: "12px", color: "white" }} />}
//                                             sx={{
//                                                 // backgroundColor: "#C38F51",
//                                                 textTransform: "none",
//                                                 color: "white",
//                                                 fontSize: "14px",
//                                                 // padding: "0px 20px",
//                                                 // minHeight: "30px",
//                                                 borderRadius: "23px",
//                                                 background: "#C38F51 0% 0% no-repeat padding-box",
//                                                 // "&:hover": {
//                                                 //     backgroundColor: "#C38F51",
//                                                 // },
//                                             }}
//                                         >
//                                             Buy Now
//                                         </Button>

//                                     </Box>
//                                 </Box>
//                             </CardContent>
//                         </Card>
//                         <Typography
//                             variant="subtitle2"
//                             align="end"
//                             sx={{
//                                 marginTop: 0.5, color: "#7A7A7A", fontSize: "12px"

//                             }}
//                         >
//                             Scheme Closes on: -<span style={{ color: "#F53E5C" }}>{scheme.closingDate}</span>
//                         </Typography>
//                     </Grid>
//                 ))}
//             </Grid>
//         </Box >
//     );
// };

// export default SchemeCard;

import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Grid,
  Divider,
  Tooltip,
} from "@mui/material";
import { IoIosInformation } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import cart_icon from "../../Assets/cart_icon.svg";
import { AiFillThunderbolt } from "react-icons/ai";
// import { incrementQuantity } from "../../ReduxStore/Slices/AddToCard/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { adminUrl } from "../../constants";
import { format } from "date-fns";
import actions from "../../ReduxStore/actions";

// const schemes = [
//   {
//     name: "Scheme Name 1",
//     valueOfPurchase: "$1000",
//     purchase: "13.8 Grm",
//     maturity: "2 Years",
//     lockIn: "24 Month's",
//     benefit: "6%* Per Quarter",
//     closingDate: "15/Mar/2025",
//     backgroundImage: "gold-card-1", // replace with the background image URL
//   },
//   {
//     name: "Scheme Name 2",
//     valueOfPurchase: "$10000",
//     purchase: "138 Grm",
//     maturity: "2 Years",
//     lockIn: "24 Month's",
//     benefit: "6%* Per Quarter",
//     closingDate: "15/Mar/2025",
//     backgroundImage: "gold-card-2", // replace with the background image URL
//   },
// ];

const SchemeCard = ({ schemes, handleNextModal }) => {
  console.log(schemes, "schemessssssssssssssss");
  const { getAllActivePlans } = useSelector(
    (state) => state?.getAllActivePlans
  );
  const customerId = useSelector((state) => state.customer);
console.log(customerId.customerId,"customerIdcustomerIdcustomerIdcustomerId")
  // const { getPlanById } = useSelector((state) => state?.getPlanById);

  const Navigate = useNavigate();
  const handleNavigate = (id) => {
    console.log(id, "schemeplanid");
    // const requestData = {
    //     data: {

    //     },
    //     method: "get",
    //     apiName: `getPlanById/${id}`,
    // };

    // dispatch(actions.GETPLANBYID(requestData));
    handleNextModal();
    // Navigate("/Add-to-cart")
  };
  const handleNavigateAddToCart = (event) => {
    event.stopPropagation();
    Navigate("/addtocart");
  };
  console.log(getAllActivePlans, "getAllActivePlansgetAllActivePlans");

  const dispatch = useDispatch();

  const handleAddToCart = async (item) => {
    // if (JSON.parse(sessioncustomer_id) !== null) {
      const data1 = {
        data: {
          customer_id: customerId.customerId,
          plan_id: item.plan_id,
        },
        method: "patch",
        apiName: `incrementQuantity`,
      };
      await dispatch(actions.INCREMENTQUANTITY(data1));
    // }
  };

  const formattedDate = schemes.closure_date
    ? format(new Date(schemes.closure_date), "MMMM d, yyyy")
    : "Invalid Date";

  console.log(schemes.closure_date, "datatatattatatattatwtwt"); // Check the value being passed

  return (
    <Box
      sx={{ padding: 2, cursor: "pointer" }}
      // onClick={handleNavigate}
    >
      <Grid container spacing={4}>
        {getAllActivePlans?.data?.map((scheme, index) => (
          <Grid
            item
            xs={12}
            md={6}
            key={index}
            // onClick={() => handleNavigate(scheme.plan_id)}
          >
            <Typography variant="h6" sx={{ marginBottom: 1 }}>
              {scheme.title}
            </Typography>
            <Card
              // onClick={() =>}
              sx={{
                borderRadius: 2,
                // backgroundImage: `url(${scheme.backgroundImage})`,
                backgroundSize: "cover",
                objectFit: "contain",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                // background:
                //     `linear-gradient(to right, #000000 0%, #333333BD 50%, #1A1A1A 100%) ,url(${scheme.backgroundImage})`,

                p: { xs: "20px", md: "20px 50px" },
                width: { xs: "100%", md: "100%" },
              }}
              style={{
                background: `linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1)),url(${adminUrl}/${scheme.image_url}) no-repeat center center`,
                backgroundSize: "cover",
              }}
            >
              {/* Content goes here */}

              <CardContent sx={{ padding: "0px" }}>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Box
                  //  display="flex" justifyContent="space-between"
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#FFFFFF", mb: "2px" }}
                    >
                      Value of Purchase
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "20px", color: "#C38F51" }}
                    >
                      {" "}
                      $ {scheme.value_of_purchase}
                    </Typography>
                  </Box>

                  <Box
                  // display="flex" justifyContent="space-between"
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#FFFFFF", mb: "2px" }}
                    >
                      Purchase
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "20px",
                        color: "#C38F51",
                      }}
                    >
                      {scheme.purchase_stake} Grm
                      <Tooltip title="Purchase">
                        <span
                          style={{
                            background: "#FF8800",
                            borderRadius: "50%",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "10px", // Set a fixed width
                            height: "10px", // Set a fixed height
                            marginLeft: "1px", // Optional spacing between text and icon
                          }}
                        >
                          <IoIosInformation
                            style={{ fontSize: "12px", color: "white" }}
                          />
                        </span>
                      </Tooltip>
                    </Typography>

                    {/* <Typography sx={{ borderRadius:"50%",bgcolor:"red" }}></Typography> */}
                  </Box>
                </Box>
                <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }} />
                <Box display="flex" justifyContent="space-between" mt={1}>
                  <Box
                  // display="flex" justifyContent="space-between" mb={1}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#FFFFFF", mb: "2px" }}
                    >
                      Matures at
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#C38F51" }}>
                      {scheme.maturity_in_months} Month's
                      <Tooltip title="Matures date">
                        <span
                          style={{
                            background: "#FF8800",
                            borderRadius: "50%",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "10px", // Set a fixed width
                            height: "10px", // Set a fixed height
                            marginLeft: "1px", // Optional spacing between text and icon
                          }}
                        >
                          <IoIosInformation
                            style={{ fontSize: "12px", color: "white" }}
                          />
                        </span>
                      </Tooltip>
                    </Typography>
                  </Box>

                  <Box
                  // display="flex" justifyContent="space-between" mb={2}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#FFFFFF", mb: "2px" }}
                    >
                      Lock-in
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#C38F51" }}>
                      {scheme.lock_in_months} Month's
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        marginTop: 2,
                        // fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      Estimated Reap Benefit
                    </Typography>
                    <Typography
                      sx={{
                        color: "#1FC45B",
                        fontSize: "25px",

                        fontWeight: "bold",

                        // marginBottom: 1,
                      }}
                    >
                      {scheme.reap_percentage} %*{" "}
                      <span style={{ color: "white", fontSize: "14px" }}>
                        {" "}
                        every {scheme.reap_months} months{" "}
                      </span>
                    </Typography>
                    {/* <Link fontSize="10px" color="white" > * Read Offer Documents</Link> */}
                    <Link style={{ fontSize: "10px", color: "white" }}>
                      * Read Offer Documents
                    </Link>
                  </Box>
                  <Box
                    gap={2}
                    display="flex"
                    justifyContent="space-around"
                    sx={{ display: { xs: "flex", md: "block" } }}
                    mt={2}
                  >
                    {/* <Button
                                            // onClick={handleNavigateAddToCart}
                                            onClick={(e) => {
                                                handleNavigateAddToCart(e)
                                                handleAddToCart({
                                                    plan_id: scheme.plan_id,
                                                    title: scheme.title,
                                                    value_of_purchase: scheme.value_of_purchase,
                                                    "image_url": `${adminUrl}/${scheme.image_url}`,
                                                })
                                            }
                                            }
                                            variant="contained"
                                            startIcon={<img src={cart_icon} style={{ minHeight: "14px" }}></img>}
                                            // sx={{
                                            //     backgroundColor: "black",
                                            //     borderRadius:"23px",
                                            //     "&:hover": { backgroundColor: "grey" },
                                            // }}
                                            sx={{
                                                // backgroundColor: "#C38F51",
                                                textTransform: "none",
                                                color: "white",
                                                fontSize: "13px",
                                                mr: { xs: "0", md: "10px" },
                                                // padding: "0px 20px",
                                                // minHeight: "30px",

                                                borderRadius: "23px",
                                                background: "#252525 0% 0% no-repeat padding-box",
                                                // "&:hover": {
                                                //     backgroundColor: "#C38F51",
                                                // },
                                            }}
                                        >
                                            {scheme.primary_button_text}
                                        </Button> */}
                    <Button
                      onClick={() => {
                        handleNavigate(scheme.plan_id);

                        // handleNavigateAddToCart(e)
                        handleAddToCart({
                          plan_id: scheme.plan_id,
                          title: scheme.title,
                          value_of_purchase: scheme.value_of_purchase,
                          image_url: `${adminUrl}/${scheme.image_url}`,
                        });
                      }}
                      variant="contained"
                      startIcon={
                        <AiFillThunderbolt
                          sx={{ fontSize: "12px", color: "white" }}
                        />
                      }
                      sx={{
                        // backgroundColor: "#C38F51",
                        textTransform: "none",
                        color: "white",
                        fontSize: "14px",
                        // padding: "0px 20px",
                        // minHeight: "30px",
                        borderRadius: "23px",
                        background: "#C38F51 0% 0% no-repeat padding-box",
                        // "&:hover": {
                        //     backgroundColor: "#C38F51",
                        // },
                      }}
                    >
                      Buy Now
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
            <Typography
              variant="subtitle2"
              align="end"
              sx={{
                marginTop: 0.5,
                color: "#7A7A7A",
                fontSize: "12px",
              }}
            >
              Scheme Closes on: -
              <span style={{ color: "#F53E5C" }}>
                {/* {scheme.closure_date} */}
                {scheme.closure_date && !isNaN(new Date(scheme.closure_date))
                  ? format(new Date(scheme.closure_date), "MMMM d, yyyy")
                  : "Invalid Date"}
              </span>
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SchemeCard;
