// import React, { useEffect, useState } from "react";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import styled from "@emotion/styled/macro";
// import { Button, Paper } from "@mui/material";

// import "./CusTable.css";
// // import SearchIcon from '@mui/icons-material/Search';
// import { IoSearch, IoPencil, IoTrash } from "react-icons/io5";
// import { FaAngleDoubleLeft, FaEye } from "react-icons/fa";
// import { RiSearchLine } from "react-icons/ri";
// import { Height } from "@mui/icons-material";
// import { FaAngleDoubleRight } from "react-icons/fa";
// // import actions from "../../ReduxStore/actions/index";
// import { useDispatch, useSelector } from "react-redux";
// import CustomDropdownMui from "../CustomDropDown/CustomDropdown";
// import { Formik, Form } from "formik";
// import TrackParcelBox1 from "../TeackingComponent/TrackParcelBox1";
// import TrackingModal from "../TeackingComponent/TrackingModal";
// // import { Form } from "react-router-dom";
// // import { useDispatch, useSelector } from 'react-redux';
// import actions from "../../ReduxStore/actions";
// import CustomDropdownwithButton from "../CustomDropDown/CustomDropdownwithButton";
// import CustomDropdownWithSwitch from "../CustomDropdownWithSwitch/CustomDropdownWithSwitch";
// import PaymentUtrModalview from "../../Pages/Operators/Dashboard/PaymentUtrModalview";
// import UpdatePaymentUtrModal from "../../Pages/Customer/Orders/UpdatePaymentUtrModal";
// import CustomDropDownPaid from "../CustomDropDown/CustomDropDownPaid";

// const CusTable = ({ TableHeading, Tabledata, TableTittle, setmyDefaultFieldValues, handleDelete, action, status1, payment_utr, payment_details, UpdatePayment_Utr }) => {
//   // console.log(MASTER.TableVaues.map((datas)=>{datas.Sno})
//   // console.log(TableHeading, "tableHeading...............");
//   // console.log(Tabledata, "Tabledatsss...............");
//   const dispatch = useDispatch();
//   console.log(UpdatePayment_Utr, "UpdatePayment_Utr")

//   const recordperpage = 5;
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");
//   function prepage() {
//     if (currentPage !== 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   }
//   function changeCPage(id) {
//     setCurrentPage(id);
//   }
//   function Nextpage() {
//     const totalPages = Math.ceil(filteredRecords.length / recordperpage);
//     if (currentPage !== totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   }

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//     setCurrentPage(1); // Reset to the first page when search query changes
//   };
//   // console.log(searchQuery,"searchQuery_-----____---___-__-_-_--_")

//   const filteredRecords = Tabledata.filter((record) => {
//     // console.log(record,"record?????????????????????")
//     return Object.values(record).some((value) => {
//       if (typeof value === 'string') {
//         return value.toLowerCase().includes(searchQuery.toLowerCase());
//       }
//       return false;
//     }
//     )
//   }
//   );

//   //   this code is to get object keys

//   for (const item of Tabledata) {
//     const keys = Object.keys(item);
//     // console.log("Keys:", keys);
//   }

//   const lastindex = currentPage * recordperpage;
//   const fisrtindex = lastindex - recordperpage;
//   const records = filteredRecords.slice(fisrtindex, lastindex);
//   const npage = Math.ceil(filteredRecords.length / recordperpage);
//   const numbers = [...Array(npage + 1).keys()].slice(1);
//   console.log(records, "records-----------------")

//   const payment_utrDrop = [
//     // { label: "Payment Status", value: "0" },

//     { label: "Not Paid", value: "1" },
//     { label: "Paid", value: "2" },
//     { label: "Partially Paid", value: "3" }
//   ];
//   const statusDrop = [
//     { label: "Oredered", value: "1" },
//     { label: "Shipped", value: "2" },
//     { label: "Deliverd", value: "3" }
//   ];

//   const [selectedOrderedId, setSelectedOrderedId] = useState(null);

//   const [isModalOpen, setModalOpen] = useState(false);
//   const [modalOrederId, setModalOrderId] = useState(0);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [allStudentsData, setAllStudentsData] = useState([]);
//   console.log(allStudentsData, "allStudentsData");
//   const [toggledSwitches, setToggledSwitches] = useState({});
//   const { GetDropDataForStatusChage } = useSelector(
//     (state) => state?.GetDropDataForStatusChage
//   );
//   const [selectedDropData, setSelectedDropData] = useState([])
//   console.log(selectedDropData, "selectedDropData")

//   const handleSwitchChange = (studentId, accessGranted) => {
//     const updatedData = allStudentsData.map((student) =>
//       student.value === studentId
//         ? { ...student, access_granted: accessGranted } // Set true for the selected student
//         : { ...student, access_granted: false } // Set false for all other students
//     );

//     setToggledSwitches((prev = []) => {
//       // Ensure 'prev' is an array
//       if (!Array.isArray(prev)) {
//         prev = [];
//       }

//       const existingIndex = prev.findIndex(
//         (entry) => entry.student_id === studentId
//       );

//       if (existingIndex !== -1) {
//         // Update the existing student's access_granted value
//         const updatedSwitches = prev.map((entry) =>
//           entry.student_id === studentId
//             ? { ...entry, access_granted: accessGranted } // Set true for the selected student
//             : { ...entry, access_granted: false } // Set false for all other students
//         );
//         return updatedSwitches;
//       }

//       // If not found, add a new entry for the student and set others to false
//       return [
//         ...prev.map((entry) => ({ ...entry, access_granted: false })), // Set false for all existing entries
//         { student_id: studentId, access_granted: accessGranted }, // Add new entry for the selected student
//       ];
//     });

//     setAllStudentsData(updatedData); // Update the parent state
//   };

//   const updateStudentsData = (publishId) => {
//     const data = {
//       data: {},
//       method: "get",
//       apiName: `getAllOrderStatusHistoryByOrderId/${publishId}`,
//     };
//     // Dispatch the action and handle the response to update the allStudentsData
//     dispatch(actions.GETDROPDATAFORSTATUSCHANGE(data))
//     setLoadingStudents(true);

//   };

//   const [loadingStudents, setLoadingStudents] = useState(true);
//   useEffect(() => {
//     const tempArr = [];
//     console.log(GetDropDataForStatusChage?.data, "inside useEffect");

//     GetDropDataForStatusChage?.data?.map((data, index) => {
//       return tempArr.push({
//         value: data?.orderStatusHistory_id,
//         label: data?.order_status,
//         access_granted: data?.active_status,
//         tracing_status: data?.tracing_status,
//         order_id: data?.order_id,
//       });
//     });
//     setAllStudentsData(tempArr);
//     setLoadingStudents(false)
//   }, [GetDropDataForStatusChage?.data]);

//   console.log(modalOrederId, "modal")

//   const { GetTrackingOrder } = useSelector(
//     (state) => state?.GetTrackingOrder
//   );

//   const handleOpenModal = (id) => {
//     if (id) {
//       const data = { data: {}, method: "get", apiName: `getAllOrderStatusHistoryByOrderId/${id}` };
//       // console.log("Dispatching MOVIESTABLEGETALL action:", data);
//       dispatch(actions.GETTRACKINGORDER(data));
//     }
//     setModalOpen(true);
//     setModalOrderId(id)
//   };

//   // Function to handle modal close
//   const handleCloseModal = () => {
//     setModalOpen(false);

//   };

//   const [anchorEl, setAnchorEl] = useState(null); // For opening/closing menu
//   const [selectedValue, setSelectedValue] = useState(""); // Initialize with initialValue
//   // console.log(Ordered_Status, "Ordered_id")

//   // useEffect(() => {
//   //     if (Ordered_Status) {
//   //         setSelectedValue(Ordered_Status); // Set the dropdown value to the active status from the API
//   //     }
//   // }, [ Ordered_Status]);

//   const { OrderStatusChange } = useSelector(
//     (state) => state?.OrderStatusChange
//   );

//   const handleDropdataClick = (order_id, Ordered_Status, orderStatusHistory_id) => {
//     if (order_id) {
//       console.log(order_id, "order_id")
//       console.log(Ordered_Status, "ordered_Status")

//       console.log(orderStatusHistory_id, "orderStatusHistory_id")

//       const data = {
//         data: {
//           order_status: Ordered_Status, // ["ordered","shipped","delivered"]
//           orderStatusHistory_id: orderStatusHistory_id
//         }, method: "put", apiName: `updateOrderStatusWithTime/${order_id}`
//       };
//       // console.log("Dispatching MOVIESTABLEGETALL action:", data);
//       dispatch(actions.ORDERSTATUSCHANGE(data));
//     }
//     // setAnchorEl(event.currentTarget);
//   }

//   // };

//   // const handleMenuItemClick = (option) => {
//   //     setSelectedValue(option.label); // Set the selected option as the button label
//   //     setAnchorEl(null);              // Close the menu
//   //     if (onChange) onChange(option); // Call custom onChange handler if provided
//   //     setFieldValue(name, option.value); // Update Formik field value
//   // };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const [paymentDetailsViewModalOpen, setPaymentDetailsViewModalOpen] = useState(false); // Initialize state
//   const [selectedPaymentviewData, setSelectedPaymentviewData] = useState([])
//   console.log(selectedPaymentviewData, "datattaata111")
//   const handlePaymentOpenModal = (data) => {
//     console.log(data, "datattaata")
//     setPaymentDetailsViewModalOpen(true);
//     setSelectedPaymentviewData(data)

//   };

//   // Function to handle modal close
//   const handlePaymentCloseModal = () => {
//     setPaymentDetailsViewModalOpen(false);

//   };

//   const [updataPaymentDetailsViewModalOpen, setUpdatePaymentDetailsViewModalOpen] = useState(false); // Initialize state
//   const [selectedOrderId, setSelectedOrderId] = useState(0)
//   const handleUpdatePaymentOpenModal = (id) => {
//     console.log(id, "datattaata")
//     setUpdatePaymentDetailsViewModalOpen(true);
//     setSelectedOrderId(id)

//   };

//   // Function to handle modal close
//   const handleUpdatePaymentCloseModal = () => {
//     setUpdatePaymentDetailsViewModalOpen(false);

//   };

//   return (
//     <Grid container xs={12} >
//       <Grid
//         item
//         xs={12}
//         style={{
//           backgroundColor: "white",
//           minHeight: "300px",
//           width: "100%",
//           padding: "15px",
//           borderRadius: "15px",
//         }}
//       >
//         <Grid container className="table_search_grid">
//           <Grid item xs={4}>
//             <h3 className="Table_heading" style={{ fontSize: "16px" }}>
//               {TableTittle}
//             </h3>
//           </Grid>
//           <Grid item xs={6}></Grid>
//           <Grid
//             item
//             xs={2}
//             mb={1}
//             sx={{
//               display: "flex",
//               justifyContent: "end",
//             }}
//           >
//             <div className="search-container">
//               <RiSearchLine className="search-icon" />
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="Table_search_input"
//                 onChange={handleSearchChange}
//               />
//             </div>

//             {/* <IoSearch /> */}
//             {/* <input
//               type="text"
//               name="search"
//               placeholder="      Search.."
//               className="Table_search_input"
//               onChange={handleSearchChange}
//             /> */}
//           </Grid>
//         </Grid>

//         <Grid item xs={12} sx={{ width: "100%" }}>
//           <Box mt={2} mb={2} sx={{ marginBottom: "0", marginTop: "0", width: "100%" }}>
//             {/* Add this div to make the table scrollable */}
//             <div style={{ overflowX: "auto" }}>
//               <Formik
//                 initialValues={{ payment_utr: "", status: "Ordered" }}
//               // validationSchema={Yup.object({
//               //   station: Yup.string().required('Station Name Required'),
//               //   volume: Yup.number().required('Volume Required').positive('Must be a positive number'),
//               //   product: Yup.string().required('Product Required'),
//               //   date_required: Yup.date().required('Date Required').nullable(),
//               // })}
//               // onSubmit={AdminLoginSubmit}
//               >
//                 {({ errors, touched, handleChange, setFieldValue }) => (
//                   <Form>
//                     {" "}
//                     {/* Margin top and bottom */}
//                     <table
//                       className="table table-borderless custom-table"
//                       style={{ width: "100%" }}
//                     >
//                       <thead>
//                         <tr style={{ height: "40px" }}>
//                           {/*in this value is change in click so will pass through via props */}
//                           {TableHeading.map((data) => (
//                             <th
//                               scope="col"
//                               className="thead_data"
//                               style={{
//                                 backgroundColor: "var(--tablehead-bgcolor)",
//                                 borderBottom: "1px solid rgb(217 226 231 / 77%)",
//                                 fontSize: "15px",
//                                 color: "var(--tablehead-color)",

//                                 whiteSpace: "nowrap",
//                               }}
//                             >
//                               {data}
//                             </th>
//                           ))}
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {/* {records.map((datas, i) => (
//                           <tr key={i}>
//                             {Object.keys(datas).map((key) => (key !== "id" && !datas.order_status &&
//                               <td key={key} style={{ fontWeight: "700", width: "300px", background: "var(--tabledata-bgcolor)" }}>
//                                 {datas[key]}
//                               </td>
//                             ))} */}
//                         {records.map((datas, i) => (
//                           <tr key={i}>
//                             {Object.keys(datas).map((key) => {
//                               if (key !== "id" && !datas.order_status) {
//                                 if (key === "paymentProofImages") {
//                                   // Parse the paymentProofImages JSON string
//                                   const paymentProofs = JSON.parse(datas[key]) || [] ;
//                                   return (
//                                     <td key={key} style={{ fontWeight: "700", width: "300px", background: "var(--tabledata-bgcolor)" }}>
//                                       {/* {paymentProofs.map((proof, index) => (
//                                         <div key={index}>
//                                           <p>UTR: {proof.payment_utr || "N/A"}</p>
//                                           <img src={proof.image} alt="Payment Proof" style={{ maxWidth: "100px" }} />
//                                         </div>
//                                       ))} */}
//                                       <Button
//                                         startIcon={<FaEye style={{ fontSize: "15px" }} />}
//                                         onClick={() => handlePaymentOpenModal(paymentProofs)}
//                                         sx={{
//                                           background: "linear-gradient(90deg, rgba(76,94,96,1) 13%, rgba(80,197,209,1) 57%)",
//                                           color: "white",
//                                           cursor: "pointer",
//                                           padding: "7px",
//                                           fontSize: "10px",
//                                           borderRadius: "7px",
//                                           fontWeight: "800",
//                                         }}
//                                       >
//                                         Payment View
//                                       </Button>
//                                     </td>
//                                   );
//                                 } else {
//                                   // Render other data normally
//                                   return (
//                                     <td key={key} style={{ fontWeight: "700", width: "300px", background: "var(--tabledata-bgcolor)" }}>
//                                       {datas[key]}
//                                     </td>
//                                   );
//                                 }
//                               }
//                               return null;
//                             })}

//                             {(status1 || payment_utr !== "Dropdowm") ? (
//                               action === true ? (
//                                 <td style={{ background: "var(--tabledata-bgcolor)" }}>
//                                   <IoPencil
//                                     onClick={() => setmyDefaultFieldValues(datas.id)}
//                                     style={{
//                                       marginRight: "10px",
//                                       color: "#4318FF",
//                                       cursor: "pointer",
//                                       backgroundColor: "#F4F7FE",
//                                       padding: "3px",
//                                       fontSize: "20px",
//                                       borderRadius: "7px",
//                                     }}
//                                   />{" "}
//                                   {/* Edit icon */}
//                                   <IoTrash onClick={() => { handleDelete(datas.id) }}
//                                     style={{
//                                       color: "#4318FF",
//                                       cursor: "pointer",
//                                       backgroundColor: "#F4F7FE",
//                                       padding: "3px",
//                                       fontSize: "20px",
//                                       borderRadius: "7px",
//                                     }}
//                                   />{" "}
//                                   {/* Delete icon */}
//                                 </td>) : (
//                                 <>
//                                   <td style={{ background: "var(--tabledata-bgcolor)" }}>

//                                     <Button
//                                       // nClick={() => { handleDelete(datas.id) }}
//                                       startIcon={<FaEye style={{ fontSize: "15px" }} />}
//                                       onClick={() => handleOpenModal(datas.Ordered_id
//                                       )}
//                                       sx={{
//                                         color: "var(--button-color)",
//                                         cursor: "pointer",
//                                         background: "var(--button-bgcolor)",
//                                         // background:"red",
//                                         padding: "3px",
//                                         fontSize: "10px",
//                                         borderRadius: "7px",
//                                         fontWeight: "800",
//                                         padding: "7px"

//                                       }}
//                                     >Tracking</Button>
//                                   </td>

//                                   {UpdatePayment_Utr && (

//                                     <td key={datas.order_id} style={{ fontWeight: "700", width: "300px", background: "var(--tabledata-bgcolor)" }}>

//                                       <Button
//                                         startIcon={<FaEye style={{ fontSize: "15px" }} />}
//                                         onClick={() => handleUpdatePaymentOpenModal(datas.Ordered_id)}
//                                         sx={{
//                                           background: "linear-gradient(90deg, rgba(76,94,96,1) 13%, rgba(80,197,209,1) 57%)",
//                                           color: "white",
//                                           cursor: "pointer",
//                                           padding: "7px",
//                                           fontSize: "10px",
//                                           borderRadius: "7px",
//                                           fontWeight: "800",
//                                         }}
//                                       >
//                                         Update UTR
//                                       </Button>
//                                     </td>
//                                   )
//                                   }

//                                 </>

//                               )
//                             ) : (
//                               <>

//                                 <td style={{ background: "var(--tabledata-bgcolor)" }}

//                                 >
//                                   <Formik
//                                     initialValues={{ [`payment_utr${datas.Ordered_id}`]: ""}}

//                                   >
//                                     {({ errors, touched, handleChange, setFieldValue ,values}) => (
//                                       <Form>

//                                         <CustomDropDownPaid
//                                           // label="Product"
//                                           name={`payment_utr${datas.Ordered_id}`}
//                                           options={payment_utrDrop}
//                                           Ordered_id={datas.Ordered_id}
//                                           datas={datas}
//                                           selectedOrderedId={selectedOrderedId}
//                                           value={values[`payment_utr${datas.Ordered_id}`]} // pass value

//                                           onClick={() => setSelectedOrderedId(datas.Ordered_id)}
//                                           custPlaceholder="Payment Status"
//                                           setFieldValue={setFieldValue}
//                                         />
//                                       </Form>)}
//                                   </Formik>
//                                 </td>
//                                 <td style={{ background: "var(--tabledata-bgcolor)" }}>

//                                   <>
//                                     {/* <Button>{datas.status}</Button> */}
//                                     <Formik
//                                       key={datas.Ordered_id}
//                                       initialValues={{
//                                         [`accessControl${datas.Ordered_id}`]: allStudentsData,
//                                       }}
//                                     // onSubmit={(values) => handleSubmitAccsee(datas.Ordered_id, values)}
//                                     >
//                                       {({ isSubmitting, resetForm, setFieldValue }) => (
//                                         <Form>
//                                           <CustomDropdownWithSwitch
//                                             setSelectedDropData={setSelectedDropData}
//                                             button_text={datas.status}
//                                             name={`accessControl${datas.Ordered_id}`}
//                                             options={allStudentsData}
//                                             formikValues={allStudentsData} // Pass the latest formik state
//                                             isOpen={openDropdown === i}
//                                             publishId={datas.Ordered_id}
//                                             allStudentsData={allStudentsData}
//                                             handleDropdataClick={handleDropdataClick}
//                                             toggleDropdown={() => {
//                                               //  Toggle dropdown state
//                                               setOpenDropdown(
//                                                 openDropdown === i ? null : i
//                                               ); // Close if already open, open if not
//                                               updateStudentsData(datas.Ordered_id);

//                                             }}
//                                             onSwitchChange={handleSwitchChange}
//                                             loading={loadingStudents}
//                                           />          </Form>
//                                       )}
//                                     </Formik>

//                                   </>

//                                 </td>

//                                 <>
//                                   {/* {UpdatePayment_Utr && ( */}

//                                   {/* ) } */}
//                                 </>
//                               </>
//                             )}
//                           </tr>

//                         ))}
//                       </tbody>
//                     </table>
//                   </Form>)}
//               </Formik>
//             </div>
//           </Box>
//         </Grid>
//       </Grid>
//       <Grid item xs={12}>
//         <Box style={{ marginTop: "10px" }}>
//           <nav
//             className="nav_pagination"
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <p
//               style={{
//                 color: "gray",
//                 fontSize: "13px",
//                 marginLeft: "3%",
//                 fontWeight: "650",
//               }}
//             >
//               Page {currentPage} out of {npage}
//             </p>
//             <ul className="pagination">
//               <li className="page-item">
//                 <a
//                   className="page-link"
//                   href="#"
//                   aria-label="Previous"
//                   onClick={prepage}
//                 >
//                   <FaAngleDoubleLeft />
//                 </a>
//               </li>
//               {numbers.map((n, i) => (
//                 <li
//                   className={`page-item ${currentPage === n ? "active" : ""}`}
//                   key={i}
//                 >
//                   <a
//                     className="page-link"
//                     href="#"
//                     onClick={() => changeCPage(n)}
//                   >
//                     {n}
//                   </a>
//                 </li>
//               ))}
//               <li class="page-item">
//                 <a

//                   className="page-link"
//                   href="#"
//                   aria-label="Previous"
//                   onClick={Nextpage}
//                 >
//                   <FaAngleDoubleRight />
//                 </a>
//               </li>
//             </ul>
//           </nav>

//         </Box>
//         <PaymentUtrModalview
//           open={paymentDetailsViewModalOpen}
//           onClose={handlePaymentCloseModal}
//           // modalOrederId={modalOrederId}
//           selectedPaymentviewData={selectedPaymentviewData}
//         />
//       </Grid>
//       <TrackingModal
//         open={isModalOpen}
//         onClose={handleCloseModal}
//         modalOrederId={modalOrederId}
//       />

//       <UpdatePaymentUtrModal
//         open={updataPaymentDetailsViewModalOpen}
//         onClose={handleUpdatePaymentCloseModal}
//         // modalOrederId={modalOrederId}
//         selectedPaymentviewData={selectedPaymentviewData}
//         selectedOrderId={selectedOrderId}
//       />

//     </Grid>
//   );
// };

// export default CusTable;

import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styled from "@emotion/styled/macro";
import { Button, Paper } from "@mui/material";

import "./CusTable.css";
// import SearchIcon from '@mui/icons-material/Search';
import { IoSearch, IoPencil, IoTrash } from "react-icons/io5";
import { FaAngleDoubleLeft, FaEye } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { Height } from "@mui/icons-material";
import { FaAngleDoubleRight } from "react-icons/fa";
// import actions from "../../ReduxStore/actions/index";
import { useDispatch, useSelector } from "react-redux";
import CustomDropdownMui from "../CustomDropDown/CustomDropdown";
import { Formik, Form } from "formik";
import TrackParcelBox1 from "../TeackingComponent/TrackParcelBox1";
import TrackingModal from "../TeackingComponent/TrackingModal";
// import { Form } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';
import actions from "../../ReduxStore/actions";
import CustomDropdownwithButton from "../CustomDropDown/CustomDropdownwithButton";
import CustomDropdownWithSwitch from "../CustomDropdownWithSwitch/CustomDropdownWithSwitch";
import PaymentUtrModalview from "../../Pages/Operators/Dashboard/PaymentUtrModalview";
import UpdatePaymentUtrModal from "../../Pages/Customer/Orders/UpdatePaymentUtrModal";
import CustomDropDownPaid from "../CustomDropDown/CustomDropDownPaid";
import { Navigate, useNavigate } from "react-router-dom";

const CusTable = ({
  TableHeading,
  Tabledata,
  TableTittle,
  setmyDefaultFieldValues,
  handleDelete,
  action,
  status1,
  payment_utr,
  payment_details,
  UpdatePayment_Utr,
  Tracking,
}) => {
  // console.log(MASTER.TableVaues.map((datas)=>{datas.Sno})
  // console.log(TableHeading, "tableHeading...............");
  // console.log(Tabledata, "Tabledatsss...............");
  const dispatch = useDispatch();
  console.log(UpdatePayment_Utr, "UpdatePayment_Utr");
  const navigate = useNavigate();

  const recordperpage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  function prepage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
  function Nextpage() {
    const totalPages = Math.ceil(filteredRecords.length / recordperpage);
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when search query changes
  };
  // console.log(searchQuery,"searchQuery_-----____---___-__-_-_--_")

  const filteredRecords = Tabledata.filter((record) => {
    // console.log(record,"record?????????????????????")
    return Object.values(record).some((value) => {
      if (typeof value === "string") {
        return value.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return false;
    });
  });

  //   this code is to get object keys

  for (const item of Tabledata) {
    const keys = Object.keys(item);
    // console.log("Keys:", keys);
  }

  const lastindex = currentPage * recordperpage;
  const fisrtindex = lastindex - recordperpage;
  const records = filteredRecords.slice(fisrtindex, lastindex);
  const npage = Math.ceil(filteredRecords.length / recordperpage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  console.log(records, "records-----------------");

  const payment_utrDrop = [
    // { label: "Payment Status", value: "0" },

    { label: "Not Paid", value: "1" },
    { label: "Paid", value: "2" },
    { label: "Partially Paid", value: "3" },
  ];
  const statusDrop = [
    { label: "Oredered", value: "1" },
    { label: "Shipped", value: "2" },
    { label: "Deliverd", value: "3" },
  ];

  const [selectedOrderedId, setSelectedOrderedId] = useState(null);
  console.log(selectedOrderedId, "selectedOrderedIdselectedOrderedId");

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalOrederId, setModalOrderId] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [allStudentsData, setAllStudentsData] = useState([]);
  console.log(allStudentsData, "allStudentsData");
  const [toggledSwitches, setToggledSwitches] = useState({});
  const { GetDropDataForStatusChage } = useSelector(
    (state) => state?.GetDropDataForStatusChage
  );
  const [selectedDropData, setSelectedDropData] = useState([]);
  console.log(selectedDropData, "selectedDropData");

  const handleSwitchChange = (studentId, accessGranted) => {
    const updatedData = allStudentsData.map(
      (student) =>
        student.value === studentId
          ? { ...student, access_granted: accessGranted } // Set true for the selected student
          : { ...student, access_granted: false } // Set false for all other students
    );

    setToggledSwitches((prev = []) => {
      // Ensure 'prev' is an array
      if (!Array.isArray(prev)) {
        prev = [];
      }

      const existingIndex = prev.findIndex(
        (entry) => entry.student_id === studentId
      );

      if (existingIndex !== -1) {
        // Update the existing student's access_granted value
        const updatedSwitches = prev.map(
          (entry) =>
            entry.student_id === studentId
              ? { ...entry, access_granted: accessGranted } // Set true for the selected student
              : { ...entry, access_granted: false } // Set false for all other students
        );
        return updatedSwitches;
      }

      // If not found, add a new entry for the student and set others to false
      return [
        ...prev.map((entry) => ({ ...entry, access_granted: false })), // Set false for all existing entries
        { student_id: studentId, access_granted: accessGranted }, // Add new entry for the selected student
      ];
    });

    setAllStudentsData(updatedData); // Update the parent state
  };

  const updateStudentsData = (publishId) => {
    const data = {
      data: {},
      method: "get",
      apiName: `getAllOrderStatusHistoryByOrderId/${publishId}`,
    };
    // Dispatch the action and handle the response to update the allStudentsData
    dispatch(actions.GETDROPDATAFORSTATUSCHANGE(data));
    setLoadingStudents(true);
  };

  const { DeleteOrderById } = useSelector((state) => state?.DeleteOrderById);

  const handleDeleteOrder = (order_id) => {
    const data = {
      data: {},
      method: "delete",
      apiName: `deleteOrder/${order_id}`,
    };
    // Dispatch the action and handle the response to update the allStudentsData
    dispatch(actions.DELETEORDERBYID(data));
  };

  const [loadingStudents, setLoadingStudents] = useState(true);
  useEffect(() => {
    const tempArr = [];
    console.log(GetDropDataForStatusChage?.data, "inside useEffect");

    GetDropDataForStatusChage?.data?.map((data, index) => {
      return tempArr.push({
        value: data?.orderStatusHistory_id,
        label: data?.order_status,
        access_granted: data?.active_status,
        tracing_status: data?.tracing_status,
        order_id: data?.order_id,
      });
    });
    setAllStudentsData(tempArr);
    setLoadingStudents(false);
  }, [GetDropDataForStatusChage?.data]);

  console.log(modalOrederId, "modal");

  const { GetTrackingOrder } = useSelector((state) => state?.GetTrackingOrder);

  const handleOpenModal = (id) => {
    if (id) {
      const data = {
        data: {},
        method: "get",
        apiName: `getAllOrderStatusHistoryByOrderId/${id}`,
      };
      // console.log("Dispatching MOVIESTABLEGETALL action:", data);
      dispatch(actions.GETTRACKINGORDER(data));
    }
    setModalOpen(true);
    setModalOrderId(id);
  };

  // Function to handle modal close
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const [anchorEl, setAnchorEl] = useState(null); // For opening/closing menu
  const [selectedValue, setSelectedValue] = useState(""); // Initialize with initialValue
  // console.log(Ordered_Status, "Ordered_id")

  // useEffect(() => {
  //     if (Ordered_Status) {
  //         setSelectedValue(Ordered_Status); // Set the dropdown value to the active status from the API
  //     }
  // }, [ Ordered_Status]);

  const { OrderStatusChange } = useSelector(
    (state) => state?.OrderStatusChange
  );

  const handleDropdataClick = (
    order_id,
    Ordered_Status,
    orderStatusHistory_id
  ) => {
    if (order_id) {
      console.log(order_id, "order_id");
      console.log(Ordered_Status, "ordered_Status");

      console.log(orderStatusHistory_id, "orderStatusHistory_id");

      const data = {
        data: {
          order_status: Ordered_Status, // ["ordered","shipped","delivered"]
          orderStatusHistory_id: orderStatusHistory_id,
        },
        method: "put",
        apiName: `updateOrderStatusWithTime/${order_id}`,
      };
      // console.log("Dispatching MOVIESTABLEGETALL action:", data);
      dispatch(actions.ORDERSTATUSCHANGE(data));
    }
    // setAnchorEl(event.currentTarget);
  };

  // };

  // const handleMenuItemClick = (option) => {
  //     setSelectedValue(option.label); // Set the selected option as the button label
  //     setAnchorEl(null);              // Close the menu
  //     if (onChange) onChange(option); // Call custom onChange handler if provided
  //     setFieldValue(name, option.value); // Update Formik field value
  // };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [paymentDetailsViewModalOpen, setPaymentDetailsViewModalOpen] =
    useState(false); // Initialize state
  const [selectedPaymentviewData, setSelectedPaymentviewData] = useState([]);
  console.log(selectedPaymentviewData, "datattaata111");
  const handlePaymentOpenModal = (data) => {
    // console.log(JSON.parse(data), "datattaata12")
    setPaymentDetailsViewModalOpen(true);
    setSelectedPaymentviewData(JSON.parse(data));
  };

  // Function to handle modal close
  const handlePaymentCloseModal = () => {
    setPaymentDetailsViewModalOpen(false);
  };

  const [
    updataPaymentDetailsViewModalOpen,
    setUpdatePaymentDetailsViewModalOpen,
  ] = useState(false); // Initialize state
  const [selectedOrderId, setSelectedOrderId] = useState(0);
  const handleUpdatePaymentOpenModal = (id) => {
    console.log(id, "datattaata");
    setUpdatePaymentDetailsViewModalOpen(true);
    setSelectedOrderId(id);
  };

  // Function to handle modal close
  const handleUpdatePaymentCloseModal = () => {
    setUpdatePaymentDetailsViewModalOpen(false);
  };

  const { GetOrderByIdForAdmin } = useSelector(
    (state) => state?.GetOrderByIdForAdmin
  );

  console.log(GetOrderByIdForAdmin, "GetOrderByIdForAdmin");
  const handleEditClick = (order_id) => {
    const data = {
      data: {},
      method: "get",
      apiName: `getOrderById/${order_id}`,
    };
    // console.log("Dispatching MOVIESTABLEGETALL action:", data);
    dispatch(actions.GETORDERBYIDFORADMIN(data));
  };

  return (
    <Grid container xs={12}>
      <Grid
        item
        xs={12}
        style={{
          backgroundColor: "white",
          minHeight: "300px",
          width: "100%",
          padding: "15px",
          borderRadius: "15px",
        }}
      >
        <Grid container className="table_search_grid">
          <Grid item xs={4}>
            <h3 className="Table_heading" style={{ fontSize: "16px" }}>
              {TableTittle}
            </h3>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid
            item
            xs={2}
            mb={1}
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <div className="search-container">
              <RiSearchLine className="search-icon" />
              <input
                type="text"
                placeholder="Search"
                className="Table_search_input"
                onChange={handleSearchChange}
              />
            </div>

            {/* <IoSearch /> */}
            {/* <input
              type="text"
              name="search"
              placeholder="      Search.."
              className="Table_search_input"
              onChange={handleSearchChange}
            /> */}
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ width: "100%" }}>
          <Box
            mt={2}
            mb={2}
            sx={{ marginBottom: "0", marginTop: "0", width: "100%" }}
          >
            {/* Add this div to make the table scrollable */}
            <div style={{ overflowX: "auto" }}>
              <Formik
                initialValues={{ payment_utr: "", status: "Ordered" }}
                // validationSchema={Yup.object({
                //   station: Yup.string().required('Station Name Required'),
                //   volume: Yup.number().required('Volume Required').positive('Must be a positive number'),
                //   product: Yup.string().required('Product Required'),
                //   date_required: Yup.date().required('Date Required').nullable(),
                // })}
                // onSubmit={AdminLoginSubmit}
              >
                {({ errors, touched, handleChange, setFieldValue }) => (
                  <Form>
                    {" "}
                    {/* Margin top and bottom */}
                    <table
                      className="table table-borderless custom-table"
                      style={{ width: "100%" }}
                    >
                      <thead>
                        <tr style={{ height: "40px" }}>
                          {/*in this value is change in click so will pass through via props */}
                          {TableHeading.map((data) => (
                            <th
                              scope="col"
                              className="thead_data"
                              style={{
                                backgroundColor: "var(--tablehead-bgcolor)",
                                borderBottom:
                                  "1px solid rgb(217 226 231 / 77%)",
                                fontSize: "15px",
                                color: "var(--tablehead-color)",
                                textAlign: "center",
                                borderRight: "1px solid #c9c6c6",

                                whiteSpace: "nowrap",
                              }}
                            >
                              {data}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {/* {records.map((datas, i) => (
                          <tr key={i}>
                            {Object.keys(datas).map((key) => (key !== "id" && !datas.order_status &&
                              <td key={key} style={{ fontWeight: "700", width: "300px", background: "var(--tabledata-bgcolor)" }}>
                                {datas[key]}
                              </td>
                            ))} */}
                        {records.map((datas, i) => (
                          <tr key={i}>
                            {Object.keys(datas).map((key) => {
                              if (key !== "id" && !datas.order_status) {
                                if (key === "paymentProofImages") {
                                  // Parse the paymentProofImages JSON string
                                  const paymentProofs = datas[key] || [];
                                  return (
                                    <td
                                      key={key}
                                      style={{
                                        fontWeight: "700",
                                        borderBottom: "1px solid #c9c6c6",
                                        borderRight: "1px solid #c9c6c6",
                                        textAlign: "center",

                                        width: "300px",
                                        background: "var(--tabledata-bgcolor)",
                                      }}
                                    >
                                      {/* {paymentProofs.map((proof, index) => (
                                        <div key={index}>
                                          <p>UTR: {proof.payment_utr || "N/A"}</p>
                                          <img src={proof.image} alt="Payment Proof" style={{ maxWidth: "100px" }} />
                                        </div>
                                      ))} */}
                                      <Button
                                        startIcon={
                                          <FaEye style={{ fontSize: "15px" }} />
                                        }
                                        onClick={() =>
                                          handlePaymentOpenModal(paymentProofs)
                                        }
                                        sx={{
                                          background:
                                            "linear-gradient(90deg, rgba(76,94,96,1) 13%, rgba(80,197,209,1) 57%)",
                                          color: "white",
                                          cursor: "pointer",
                                          padding: "7px",
                                          fontSize: "10px",
                                          borderRadius: "7px",
                                          fontWeight: "800",
                                        }}
                                      >
                                        Payment View
                                      </Button>
                                    </td>
                                  );
                                } else {
                                  // Render other data normally
                                  return (
                                    <td
                                      key={key}
                                      style={{
                                        fontWeight: "700",
                                        width: "300px",
                                        // borderRight: "1px solid black",
                                        borderBottom: "1px solid #c9c6c6",
                                        borderRight: "1px solid #c9c6c6",
                                        textAlign: "center",

                                        background: "var(--tabledata-bgcolor)",
                                      }}
                                    >
                                      {datas[key]}
                                    </td>
                                  );
                                }
                              }
                              return null;
                            })}

                            {status1 || payment_utr !== "Dropdowm" ? (
                              <>
                                {Tracking && (
                                  <td
                                    style={{
                                      background: "var(--tabledata-bgcolor)",
                                      borderBottom: "1px solid #c9c6c6",
                                      textAlign: "center",
                                      borderRight: "1px solid #c9c6c6",
                                    }}
                                  >
                                    <Button
                                      // nClick={() => { handleDelete(datas.id) }}
                                      startIcon={
                                        <FaEye style={{ fontSize: "15px" }} />
                                      }
                                      onClick={() =>
                                        handleOpenModal(datas.Ordered_id)
                                      }
                                      sx={{
                                        color: "var(--button-color)",
                                        cursor: "pointer",
                                        background: "var(--button-bgcolor)",
                                        // background:"red",
                                        padding: "3px",
                                        fontSize: "10px",
                                        borderRadius: "7px",
                                        fontWeight: "800",
                                        padding: "7px",
                                      }}
                                    >
                                      Tracking
                                    </Button>
                                  </td>
                                )}

                                {UpdatePayment_Utr && (
                                  <td
                                    key={datas.order_id}
                                    style={{
                                      fontWeight: "700",
                                      width: "300px",
                                      borderBottom: "1px solid #c9c6c6",
                                      textAlign: "center",
                                      borderRight: "1px solid #c9c6c6",

                                      background: "var(--tabledata-bgcolor)",
                                    }}
                                  >
                                    <Button
                                      startIcon={
                                        <FaEye style={{ fontSize: "15px" }} />
                                      }
                                      onClick={() =>
                                        handleUpdatePaymentOpenModal(
                                          datas.Ordered_id
                                        )
                                      }
                                      sx={{
                                        background:
                                          "linear-gradient(90deg, rgba(76,94,96,1) 13%, rgba(80,197,209,1) 57%)",
                                        color: "white",
                                        cursor: "pointer",
                                        padding: "7px",
                                        fontSize: "10px",
                                        borderRadius: "7px",
                                        fontWeight: "800",
                                      }}
                                    >
                                      Update UTR
                                    </Button>
                                  </td>
                                )}
                              </>
                            ) : (
                              <>
                                <td
                                  style={{
                                    background: "var(--tabledata-bgcolor)",
                                    borderBottom: "1px solid #c9c6c6",
                                    textAlign: "center",
                                    borderRight: "1px solid #c9c6c6",
                                  }}
                                >
                                  <Formik
                                    initialValues={{
                                      [`payment_utr${datas.Ordered_id}`]: "",
                                    }}
                                  >
                                    {({
                                      errors,
                                      touched,
                                      handleChange,
                                      setFieldValue,
                                      values,
                                    }) => (
                                      <Form>
                                        <CustomDropDownPaid
                                          // label="Product"
                                          name={`payment_utr${datas.Ordered_id}`}
                                          options={payment_utrDrop}
                                          Ordered_id={datas.Ordered_id}
                                          datas={datas}
                                          selectedOrderedId={selectedOrderedId}
                                          value={
                                            values[
                                              `payment_utr${datas.Ordered_id}`
                                            ]
                                          } // pass value
                                          onClick={() =>
                                            setSelectedOrderedId(
                                              datas.Ordered_id
                                            )
                                          }
                                          custPlaceholder="Payment Status"
                                          setFieldValue={setFieldValue}
                                        />
                                      </Form>
                                    )}
                                  </Formik>
                                </td>

                                <td
                                  style={{
                                    background: "var(--tabledata-bgcolor)",
                                    borderBottom: "1px solid #c9c6c6",
                                    textAlign: "center",
                                    borderRight: "1px solid #c9c6c6",
                                  }}
                                >
                                  <>
                                    {/* <Button>{datas.status}</Button> */}
                                    <Formik
                                      key={datas.Ordered_id}
                                      initialValues={{
                                        [`accessControl${datas.Ordered_id}`]:
                                          allStudentsData,
                                      }}
                                      // onSubmit={(values) => handleSubmitAccsee(datas.Ordered_id, values)}
                                    >
                                      {({
                                        isSubmitting,
                                        resetForm,
                                        setFieldValue,
                                      }) => (
                                        <Form>
                                          <CustomDropdownWithSwitch
                                            setSelectedDropData={
                                              setSelectedDropData
                                            }
                                            button_text={datas.status}
                                            name={`accessControl${datas.Ordered_id}`}
                                            options={allStudentsData}
                                            formikValues={allStudentsData} // Pass the latest formik state
                                            isOpen={openDropdown === i}
                                            publishId={datas.Ordered_id}
                                            allStudentsData={allStudentsData}
                                            handleDropdataClick={
                                              handleDropdataClick
                                            }
                                            toggleDropdown={() => {
                                              //  Toggle dropdown state
                                              setOpenDropdown(
                                                openDropdown === i ? null : i
                                              ); // Close if already open, open if not
                                              updateStudentsData(
                                                datas.Ordered_id
                                              );
                                            }}
                                            onSwitchChange={handleSwitchChange}
                                            loading={loadingStudents}
                                          />{" "}
                                        </Form>
                                      )}
                                    </Formik>
                                  </>
                                </td>

                                <>
                                  {/* {UpdatePayment_Utr && ( */}

                                  {/* ) } */}
                                </>
                              </>
                            )}
                            {action && (
                              <td
                                style={{
                                  background: "var(--tabledata-bgcolor)",
                                  borderRight: "1px solid #c9c6c6",
                                  textAlign: "center",
                                  borderBottom: "1px solid #c9c6c6",
                                }}
                              >
                                <IoPencil
                                  onClick={() => {
                                    // setmyDefaultFieldValues(datas.id)
                                    handleEditClick(datas.Ordered_id);
                                    navigate("/admin/editorders");
                                  }}
                                  style={{
                                    marginRight: "10px",
                                    color: "var(--button-bgcolor)",
                                    cursor: "pointer",
                                    backgroundColor: "#F4F7FE",
                                    padding: "3px",
                                    fontSize: "20px",
                                    borderRadius: "7px",
                                  }}
                                />{" "}
                                {/* Edit icon */}
                                <IoTrash
                                  onClick={() => {
                                    handleDeleteOrder(datas.Ordered_id);
                                  }}
                                  style={{
                                    // color: "#4318FF",
                                    color: "var(--button-bgcolor)",
                                    cursor: "pointer",
                                    backgroundColor: "#F4F7FE",
                                    padding: "3px",
                                    fontSize: "20px",
                                    borderRadius: "7px",
                                  }}
                                />{" "}
                                {/* Delete icon */}
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Form>
                )}
              </Formik>
            </div>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box style={{ marginTop: "10px" }}>
          <nav
            className="nav_pagination"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                color: "gray",
                fontSize: "13px",
                marginLeft: "3%",
                fontWeight: "650",
              }}
            >
              Page {currentPage} out of {npage}
            </p>
            <ul className="pagination">
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  aria-label="Previous"
                  onClick={prepage}
                >
                  <FaAngleDoubleLeft />
                </a>
              </li>
              {numbers.map((n, i) => (
                <li
                  className={`page-item ${currentPage === n ? "active" : ""}`}
                  key={i}
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={() => changeCPage(n)}
                  >
                    {n}
                  </a>
                </li>
              ))}
              <li class="page-item">
                <a
                  className="page-link"
                  href="#"
                  aria-label="Previous"
                  onClick={Nextpage}
                >
                  <FaAngleDoubleRight />
                </a>
              </li>
            </ul>
          </nav>
        </Box>
        <PaymentUtrModalview
          open={paymentDetailsViewModalOpen}
          onClose={handlePaymentCloseModal}
          // modalOrederId={modalOrederId}
          selectedPaymentviewData={selectedPaymentviewData}
        />
      </Grid>
      <TrackingModal
        open={isModalOpen}
        onClose={handleCloseModal}
        modalOrederId={modalOrederId}
      />

      <UpdatePaymentUtrModal
        open={updataPaymentDetailsViewModalOpen}
        onClose={handleUpdatePaymentCloseModal}
        // modalOrederId={modalOrederId}
        selectedPaymentviewData={selectedPaymentviewData}
        selectedOrderId={selectedOrderId}
      />
    </Grid>
  );
};

export default CusTable;
