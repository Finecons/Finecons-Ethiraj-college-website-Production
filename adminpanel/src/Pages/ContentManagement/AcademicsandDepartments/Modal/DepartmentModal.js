// // import React, { useEffect, useState } from "react";
// // import {
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   DialogActions,
// //   IconButton,
// //   Button,
// //   Box,
// //   Typography,
// //   Grid,
// // } from "@mui/material";
// // import { Close as CloseIcon, Description } from "@mui/icons-material";
// // import { Formik, Form, FieldArray } from "formik";

// // import { FaPlus } from "react-icons/fa6";
// // import { MdPayment } from "react-icons/md";

// // import CustomInputLogin from "../../../../Components/CustomInputLogin/CustomInputLogin";
// // // import '../BannerinputGetModal.css'; // Import external CSS
// // import "../../../../Components/ModalCss/BannerinputGetModal.css";

// // import { MdCancel } from "react-icons/md";
// // import * as Yup from "yup";
// // import { FiUpload } from "react-icons/fi";
// // import FileUploadComponent from "../../../../Components/FileUploadComponent/FileUploadComponent";
// // import ActiveInactiveRadio from "../../../../Components/ActiveInactiveRadio/ActiveInactiveRadio";
// // import { useDispatch, useSelector } from "react-redux";
// // import { toast, ToastContainer } from "react-toastify";
// // import actions from "../../../../ReduxStore/actions";
// // import { clearCustomerId } from "../../../../ReduxStore/Slices/Operator/customerSlice";
// // import { clearTableGetId } from "../../../../ReduxStore/Slices/TableId/TableIdGetSlice";
// // import CustomSingleFileUpload from "../../../../Components/FileUploadComponent/CustomSingleFileUpload";
// // import { setInitialStateOfgetAcademicById } from "../../../../ReduxStore/Slices/AcademicDivisions/getAcademicById";
// // import CustomDynamicTextArea from "../../../../Components/CustomDynamicTextArea/CustomDynamicTextArea";
// // import MultiFileUploadComponent from "../../../../Components/FileUploadComponent/MultiFileUploadComponent";

// // const DepartmentModal = ({
// //   open,
// //   onClose,
// //   setSubmittedValues,
// //   submittedValues,
// // }) => {
// //   const [uploadedFile, setUploadedFile] = useState(null);
// //   const [multipleUploadedFile, setMultipleUploadedFile] = useState([]);

// //   console.log(uploadedFile, "uploadedfile");
// //   const dispatch = useDispatch();

// //   const [editResponseData, setEditResponseData] = useState();
// //   const TableId = useSelector((state) => state.Table.TableId);

// //   const { getAcademicById } = useSelector((state) => state?.getAcademicById);

// //   console.log(getAcademicById, "getAcademicById");

// //   console.log(TableId, "TebleIddddd");

// //   const [loading, setLoading] = useState(false);
// //   const handleSubmit = async (values, { resetForm }) => {
// //     setLoading(true);

// //     const data1 = {
// //       data: {
// //         academic_name: values.academic_name,
// //         description: values.description,
// //         image_url: values?.img_url,
// //       },
// //       method: getAcademicById?.data?.academic_id ? "put" : "Post",
// //       apiName: getAcademicById?.data?.academic_id
// //         ? `updateAcademic/${getAcademicById?.data?.academic_id}`
// //         : `addAcademic`,
// //     };
// //     const responseData = await dispatch(
// //       getAcademicById?.data?.academic_id
// //         ? actions.UPDATEACADEMIC(data1)
// //         : actions.ADDACADEMIC(data1)
// //     );
// //     console.log(responseData?.payload?.message, "1111111");

// //     if (
// //       responseData?.payload?.message === getAcademicById?.data?.academic_id
// //         ? "Academic updated successfully."
// //         : "Academic level added successfully."
// //     ) {
// //       // handlePreviewCloseModal()

// //       // setTimeout(() => {
// //       //     setLoading(false)
// //       //     onClose()

// //       //     handlePreviewCloseModal()

// //       //     resetForm()

// //       //     setUploadedFile(null)

// //       // }, 2500)
// //       // setInitialStateOfgetAcademicById()
// //       dispatch(setInitialStateOfgetAcademicById());

// //       console.log("hiiiiiiii");
// //       // toast.success("Programme level updated successfully.");

// //       setTimeout(() => {
// //         setLoading(false);
// //         onClose();
// //         resetForm();

// //         setUploadedFile(null);

// //         // handlePreviewCloseModal();
// //       }, 2000);

// //       // setTimeout(() => {
// //       // setLoading(false)
// //       dispatch(setInitialStateOfgetAcademicById());

// //       toast.success(responseData?.payload?.message);

// //       dispatch(clearCustomerId(null));
// //       dispatch(clearTableGetId(null));

// //       // }, 1500);
// //     } else {
// //       setTimeout(() => {
// //         setLoading(false);
// //       }, 2500);

// //       toast.error(responseData?.payload?.message);
// //     }
// //   };

// //   return (
// //     <Dialog
// //       open={open}
// //       onClose={onClose}
// //       fullWidth
// //       maxWidth="md"
// //       className="custom-dialog"
// //       sx={{
// //         // maxWidth: "600px",
// //         // margin: "auto",
// //         "& .MuiPaper-root": {
// //           borderRadius: "14px", // Target the Paper component
// //         },
// //       }}
// //     >
// //       <Box sx={{ position: "relative" }}>
// //         <Box className="dialog-heading">
// //           <IconButton
// //             aria-label="Close"
// //             onClick={onClose}
// //             sx={{
// //               position: "absolute",
// //               top: 8,
// //               right: 8,
// //               color: "text.secondary",
// //             }}
// //           >
// //             <MdCancel />
// //           </IconButton>
// //           <DialogTitle className="custom-dialog-title">
// //             <Box>
// //               <Typography
// //                 className="custom-title-text"
// //                 fontSize="16px"
// //                 color="white"
// //               >
// //                 Academic Divisions
// //               </Typography>
// //             </Box>
// //           </DialogTitle>
// //         </Box>

// //         <Formik
// //           enableReinitialize
// //           initialValues={{
// //             description: getAcademicById?.data?.description || "",
// //             academic_name: getAcademicById?.data?.academic_name || "",
// //             img_url: getAcademicById?.data?.image_url || null,
// //             department: [""],
// //             // cards:[]
// //             cards:[{ events: '', resource_person: [""]}]
// //           }}
// //           validationSchema={Yup.object({
// //             academic_name: Yup.string().required(
// //               "Academic Division is required"
// //             ),
// //             description: Yup.string().required("Description Text is required"),
// //           })}
// //           onSubmit={handleSubmit}
// //         >
// //           {({ handleSubmit, setFieldValue, resetForm, values }) => (
// //             <Form onSubmit={handleSubmit}>
// //               <DialogContent dividers>
// //                 <Grid container spacing={2}>
// //                   <Grid size={{ xs: 12, md: 6 }}>
// //                     <CustomInputLogin
// //                       label="Academic Dision"
// //                       name="academic_name"
// //                       inputType="text"
// //                       custPlaceholder="Enter Academic Division"
// //                     />
// //                   </Grid>
// //                   <Grid size={{ xs: 12, md: 6 }}>
// //                     <CustomInputLogin
// //                       label="Department"
// //                       name="department"
// //                       inputType="text"
// //                       custPlaceholder="Enter Department"
// //                     />
// //                   </Grid>
// //                   <Grid size={{ xs: 12, md: 12 }}>
// //                     <Typography
// //                       variant="h4"
// //                       sx={{
// //                         fontSize: "20px",
// //                         color: "var(--main-color)",
// //                         mt: "20px",
// //                       }}
// //                     >
// //                       Banner
// //                     </Typography>
// //                   </Grid>
// //                   <Grid size={{ xs: 12, md: 6 }}>
// //                     {/* <CustomSingleFileUpload name="img_url"  setUploadedFile={setUploadedFile} uploadedFile={uploadedFile || getAcademicById?.data?.image_url}/> */}
// //                     <CustomSingleFileUpload
// //                       name="img_url"
// //                       uploadedFile={uploadedFile}
// //                       setUploadedFile={setUploadedFile}
// //                       setFieldValue={setFieldValue}
// //                       existingUrl={getAcademicById?.data?.image_url} // For Edit
// //                     />
// //                   </Grid>
// //                   <Grid size={{ xs: 12, md: 12 }}>
// //                     <Typography
// //                       variant="h4"
// //                       sx={{
// //                         fontSize: "20px",
// //                         color: "var(--main-color)",
// //                         mt: "20px",
// //                       }}
// //                     >
// //                       About Department
// //                     </Typography>
// //                   </Grid>
// //                   <Grid size={{ xs: 12, md: 12 }}>
// //                     {/* <CustomInputLogin
// //                       label="About Department"
// //                       name="department"
// //                       inputType="textarea"
// //                       custPlaceholder="Enter About Department"
// //                     /> */}
// //                     <CustomDynamicTextArea
// //                       label="About Department"
// //                       name="department"
// //                     />
// //                   </Grid>

// //                   <Grid size={{ xs: 12, md: 12 }}>
// //                     <Typography
// //                       variant="h4"
// //                       sx={{
// //                         fontSize: "20px",
// //                         color: "var(--main-color)",
// //                         mt: "20px",
// //                       }}
// //                     >
// //                       Facilites & infrastructure
// //                     </Typography>
// //                   </Grid>
// //                   <Grid size={{ xs: 12, md: 12 }}>
// //                     <CustomInputLogin
// //                       label="Description"
// //                       name="department"
// //                       inputType="textarea"
// //                       custPlaceholder="Enter Description"
// //                     />
// //                   </Grid>

// //                   <Grid size={{ xs: 12, md: 6 }}>
// //                     <MultiFileUploadComponent
// //                       uploadedFile={multipleUploadedFile}
// //                       setUploadedFile={setMultipleUploadedFile}
// //                       // name={`cards.${index}.image`}
// //                       // uploadedFile={values.cards[index].image} // Use individual card image
// //                       // setUploadedFile={(file) => {
// //                       //   setFieldValue(`cards.${index}.image`, file);
// //                       //   console.log(file, "filelelelellele");
// //                       // }}
// //                       // onFileUpload={(file) =>
// //                       //   setFieldValue(`cards.${index}.image`, file)
// //                       // }
// //                     />
// //                   </Grid>

// //                   <Grid size={{ xs: 12, md: 12 }}>
// //                     <Typography
// //                       variant="h4"
// //                       sx={{
// //                         fontSize: "20px",
// //                         color: "var(--main-color)",
// //                         mt: "20px",
// //                       }}
// //                     >
// //                       Activities
// //                     </Typography>
// //                   </Grid>
// //                   <Grid size={{ xs: 12, md: 12 }}>
// //                     <FieldArray name="cards">
// //                       {({ push, remove }) => (
// //                         <>
// //                           {values.cards.map((card, index) => (
// //                             <Grid
// //                               container
// //                               spacing={2}
// //                               key={index}
// //                               sx={{ mt: index > 0 ? 1 : 0 }}
// //                             >
// //                               <Grid item size={{ xs: 12 }}>
// //                                 <Typography
// //                                   variant="body2"
// //                                   sx={{ color: "#6B3C58" }}
// //                                 >
// //                                   Activity {index + 1}
// //                                 </Typography>
// //                               </Grid>
// //                               <Grid item size={{ xs: 12, md: 6 }}>
// //                                 <CustomInputLogin
// //                                   label="Events & Activity"
// //                                   name={`cards.${index}.events`}
// //                                   inputType="text"
// //                                   custPlaceholder="Enter Card Title"
// //                                 />
// //                               </Grid>

// //                               <Grid item size={{ xs: 12 }}>
// //                                 <CustomDynamicTextArea
// //                                   label="Resource Person"
// //                                   name={`cards.${index}.resource_person`}
// //                                   // inputType="textarea"
// //                                   // custPlaceholder="Enter Content"
// //                                 />
// //                               </Grid>
// //                               {index > 0 && (
// //                                 <Grid item size={{ xs: 12 }}>
// //                                   <Button
// //                                     variant="outlined"
// //                                     color="error"
// //                                     onClick={() => remove(index)}
// //                                     sx={{
// //                                       textTransform: "none",
// //                                       color: "white",
// //                                       fontSize: "16px",
// //                                       boxShadow: "none",
// //                                       padding: {
// //                                         xs: "0px 20px",
// //                                         md: "0px 40px",
// //                                       },
// //                                       minHeight: "40px",
// //                                       borderRadius: "23px",
// //                                       background: "#3B4056",
// //                                       "&:hover": { backgroundColor: "#3B4056" },
// //                                     }}
// //                                   >
// //                                     Remove Card
// //                                   </Button>
// //                                 </Grid>
// //                               )}
// //                             </Grid>
// //                           ))}

// //                           {/* Add Card Button */}
// //                           {values.cards.length < 3 && (
// //                             <Grid
// //                               item
// //                               size={{ xs: 12 }}
// //                               sx={{ display: "flex", justifyContent: "end" }}
// //                             >
// //                               <Button
// //                                 variant="outlined"
// //                                 onClick={() =>
// //                                   push({
// //                                     events: "",
// //                                     resource_person: [""],

// //                                   })
// //                                 }
// //                                 sx={{
// //                                   textTransform: "none",
// //                                   color: "#6B3C58",
// //                                   borderColor: "#6B3C58",
// //                                   "&:hover": {
// //                                     backgroundColor: "#6B3C58",
// //                                     color: "white",
// //                                   },
// //                                 }}
// //                               >
// //                                 Add Card
// //                               </Button>
// //                             </Grid>
// //                           )}
// //                         </>
// //                       )}
// //                     </FieldArray>
// //                   </Grid>

// //                   <Grid
// //                     size={{ xs: 12 }}
// //                     sx={{ display: "flex", justifyContent: "end", mt: 4 }}
// //                   >
// //                     <Grid>
// //                       <Button
// //                         onClick={() => {
// //                           resetForm();
// //                           setUploadedFile(null);
// //                         }}
// //                         variant="text"
// //                         // className="custom-clear-button"
// //                         sx={{
// //                           // backgroundColor: "#C38F51",
// //                           textTransform: "none",
// //                           color: "white",
// //                           fontSize: "16px",
// //                           mr: "10px",
// //                           // padding: "0px 40px",
// //                           padding: { xs: "0px 20px", md: "0px 40px" },

// //                           minHeight: "40px",
// //                           borderRadius: "23px",
// //                           background: "white",
// //                           boxShadow: "none",
// //                           color: "black",
// //                           border: "1px solid black",
// //                           "&:hover": {
// //                             backgroundColor: "#3B4056",
// //                             color: "white",
// //                           },
// //                         }}
// //                       >
// //                         Cancel
// //                       </Button>
// //                       <Button
// //                         type="submit"
// //                         variant="contained"
// //                         // className="custom-ok-button"
// //                         sx={{
// //                           // backgroundColor: "#C38F51",
// //                           textTransform: "none",
// //                           color: "white",
// //                           fontSize: "16px",
// //                           boxShadow: "none",

// //                           // padding: "0px 40px",
// //                           padding: { xs: "0px 20px", md: "0px 40px" },

// //                           minHeight: "40px",
// //                           borderRadius: "23px",
// //                           background: "var(--main-color)",
// //                           "&:hover": {
// //                             backgroundColor: "#3B4056",
// //                             boxShadow: "none",
// //                           },
// //                         }}
// //                       >
// //                         Submit
// //                       </Button>
// //                     </Grid>
// //                   </Grid>
// //                 </Grid>
// //               </DialogContent>

// //               {/* </DialogActions> */}
// //             </Form>
// //           )}
// //         </Formik>
// //         <ToastContainer
// //           position="top-right"
// //           autoClose={1500}
// //           hideProgressBar={false}
// //           newestOnTop={false}
// //           closeOnClick
// //           rtl={false}
// //           pauseOnFocusLoss
// //           draggable
// //           pauseOnHover
// //           theme="dark"
// //         />
// //       </Box>
// //     </Dialog>
// //   );
// // };

// // export default DepartmentModal;

// import React, { useEffect, useState } from "react";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   IconButton,
//   Button,
//   Box,
//   Typography,
//   Grid,
// } from "@mui/material";
// import { MdCancel } from "react-icons/md";
// import { Formik, Form, FieldArray } from "formik";
// import * as Yup from "yup";
// import { toast, ToastContainer } from "react-toastify";

// import CustomInputLogin from "../../../../Components/CustomInputLogin/CustomInputLogin";
// import CustomSingleFileUpload from "../../../../Components/FileUploadComponent/CustomSingleFileUpload";
// import CustomDynamicTextArea from "../../../../Components/CustomDynamicTextArea/CustomDynamicTextArea";
// import MultiFileUploadComponent from "../../../../Components/FileUploadComponent/MultiFileUploadComponent";

// import "../../../../Components/ModalCss/BannerinputGetModal.css";
// import actions from "../../../../ReduxStore/actions";
// import { useDispatch, useSelector } from "react-redux";
// import { clearCustomerId } from "../../../../ReduxStore/Slices/Operator/customerSlice";
// import { clearTableGetId } from "../../../../ReduxStore/Slices/TableId/TableIdGetSlice";
// import { setInitialStateOfgetAcademicById } from "../../../../ReduxStore/Slices/AcademicDivisions/getAcademicById";
// import CustomDropdownMui from "../../../../Components/CustomDropDown/CustomDropdown";
// import FileUploadComponent from "../../../../Components/FileUploadComponent/FileUploadComponent";

// const validationSchema = Yup.object().shape({
//   academic_name: Yup.string().required("Academic division is required"),

//   department: Yup.string().required("Department is required"),

//   about_department: Yup.array()
//     .of(Yup.string().required("About department cannot be empty"))
//     .min(1, "At least one about section is required"),

//   img_url: Yup.mixed().required("Banner image is required"),

//   facitltyDescription: Yup.string().required(
//     "Facility description is required"
//   ),

//   facilityImages: Yup.array()
//     .of(Yup.string().required("Image URL is required"))
//     .min(1, "At least one facility image is required"),

//   pdf_url: Yup.mixed().required("PDF is required"),

//   activityCards: Yup.array().of(
//     Yup.object().shape({
//       events: Yup.string().required("Event is required"),
//       resource_person: Yup.array()
//         .of(Yup.string().required("Resource person cannot be empty"))
//         .min(1, "At least one resource person required"),
//     })
//   ),

//   acheivementCards: Yup.array().of(
//     Yup.object().shape({
//       acheivement: Yup.string().required("Achievement is required"),
//       student_details: Yup.string().required("Student details required"),
//     })
//   ),

//   researchCards: Yup.array().of(
//     Yup.object().shape({
//       title: Yup.string().required("Title is required"),
//       description: Yup.string().required("Description is required"),
//       Date: Yup.string().required("Date is required"),
//     })
//   ),

//   studentcards: Yup.array().of(
//     Yup.object().shape({
//       student_name: Yup.string().required("Student name is required"),
//       program: Yup.string().required("Program is required"),
//       year: Yup.number()
//         .typeError("Year must be a number")
//         .required("Year is required"),
//       description: Yup.string().required("Description required"),
//       studentImage_url: Yup.mixed().required("Student image is required"),
//     })
//   ),
// });

// const DepartmentModal = ({ open, onClose }) => {
//   const dispatch = useDispatch();
//   const { getAcademicById } = useSelector((state) => state?.getAcademicById);
//   const { getAllAcademics } = useSelector((state) => state?.getAllAcademics);
//   const academicDivisionsOptions = getAllAcademics?.data?.map((data) => ({
//     value: data?.academic_name,
//     label: data?.academic_name,
//   }));
//   const [uploadedFile, setUploadedFile] = useState(null);

//   const [bannerUploadedFile, setBannerUploadedFile] = useState(null);
//   const [pdfUploadFile, setPdfUploadFile] = useState(null);
//   const [studentUploadFile, setStudentUploadFile] = useState(null);

//   const [multipleUploadedFile, setMultipleUploadedFile] = useState([]);

//   // Helpful defaults and limits
//   const MAX_CARDS = 3;
//   const MAX_RESOURCE_PERSONS = 5;

//   // Validation schema: ensure nested resource_person arrays have at least 1 non-empty item

//   useEffect(() => {
//     const fetchData = async () => {
//       const data1 = {
//         data: {},
//         method: "get",
//         apiName: `getAllAcademics`,
//       };
//       const responseData = await dispatch(actions.GETALLACADEMICS(data1));
//     };

//     fetchData();
//   }, []);

//   const handleSubmit = async (values, { resetForm }) => {
//     // map data as your API expects
//     console.log(values, "values");
//     const payload = {
//       data: {
//         academic_name: values.academic_name,
//         description: values.description,
//         image_url: values?.img_url,
//         department: values.department, // string
//         about_department: values.about_department, // array
//         cards: values.cards,
//       },
//       method: getAcademicById?.data?.academic_id ? "put" : "Post",
//       apiName: getAcademicById?.data?.academic_id
//         ? `updateAcademic/${getAcademicById?.data?.academic_id}`
//         : `addAcademic`,
//     };

//     try {
//       const responseData = await dispatch(
//         getAcademicById?.data?.academic_id
//           ? actions.UPDATEACADEMIC(payload)
//           : actions.ADDACADEMIC(payload)
//       );

//       // Use response payload message if exists
//       const message = responseData?.payload?.message;

//       // assume success if no error thrown and message exists
//       if (message) {
//         dispatch(setInitialStateOfgetAcademicById());
//         toast.success(message);
//         setTimeout(() => {
//           resetForm();
//           setUploadedFile(null);
//           onClose();
//           dispatch(clearCustomerId(null));
//           dispatch(clearTableGetId(null));
//         }, 800);
//       } else {
//         throw new Error("Unexpected API response");
//       }
//     } catch (err) {
//       toast.error(err?.message || "Failed to submit");
//     }
//   };

//   return (
//     <Dialog
//       open={open}
//       onClose={onClose}
//       fullWidth
//       maxWidth="md"
//       className="custom-dialog"
//       sx={{
//         "& .MuiPaper-root": {
//           borderRadius: "14px",
//         },
//       }}
//     >
//       <Box sx={{ position: "relative" }}>
//         <Box className="dialog-heading">
//           <IconButton
//             aria-label="Close"
//             onClick={onClose}
//             sx={{
//               position: "absolute",
//               top: 8,
//               right: 8,
//               color: "text.secondary",
//             }}
//           >
//             <MdCancel />
//           </IconButton>
//           <DialogTitle className="custom-dialog-title">
//             <Box>
//               <Typography
//                 className="custom-title-text"
//                 fontSize="16px"
//                 color="white"
//               >
//                 Academic Divisions
//               </Typography>
//             </Box>
//           </DialogTitle>
//         </Box>

//         <Formik
//           enableReinitialize
//           validationSchema={validationSchema}
//           initialValues={{
//             academic_name: getAcademicById?.data?.academic_name || "",
//             department: getAcademicById?.data?.department || "",
//             about_department: getAcademicById?.data?.about_department || [""],
//             img_url: getAcademicById?.data?.image_url || null,
//             // description: getAcademicById?.data?.description || "",
//             facilityImages: [],
//             facitltyDescription: "",
//             pdf_url: null,
//             activityCards:
//               getAcademicById?.data?.activityCards?.length > 0
//                 ? getAcademicById?.data?.activityCards
//                 : [{ events: "", resource_person: [""] }],
//             acheivementCards:
//               getAcademicById?.data?.acheivementCards?.length > 0
//                 ? getAcademicById?.data?.acheivementCards
//                 : [{ acheivement: "", student_details: "" }],
//             researchCards:
//               getAcademicById?.data?.researchCards?.length > 0
//                 ? getAcademicById?.data?.researchCards
//                 : [{ title: "", description: "", Date: "" }],
//             studentcards:
//               getAcademicById?.data?.studentcards?.length > 0
//                 ? getAcademicById?.data?.studentcards
//                 : [
//                     {
//                       student_name: "",
//                       program: "",
//                       year: "",
//                       description: "",
//                       studentImage_url: null,
//                     },
//                   ],
//           }}
//           onSubmit={handleSubmit}
//         >
//           {({ handleSubmit, setFieldValue, resetForm, values, form }) => (
//             <Form onSubmit={handleSubmit}>
//               <DialogContent dividers>
//                 <Grid container spacing={2}>
//                   <Grid item size={{ xs: 12 }}>
//                     <CustomDropdownMui
//                       label="Academic Division"
//                       name="academic_name"
//                       // inputType="text"
//                       options={academicDivisionsOptions}
//                       custPlaceholder="Enter Academic Division"
//                     />
//                   </Grid>

//                   <Grid item size={{ xs: 12 }}>
//                     <CustomInputLogin
//                       label="Department"
//                       name="department"
//                       inputType="text"
//                       custPlaceholder="Enter Department"
//                     />
//                   </Grid>

//                   <Grid item size={{ xs: 12 }}>
//                     <Typography
//                       variant="h4"
//                       sx={{
//                         fontSize: "20px",
//                         color: "var(--main-color)",
//                         mt: "20px",
//                       }}
//                     >
//                       Banner
//                     </Typography>
//                   </Grid>

//                   <Grid item size={{ xs: 12, md: 6 }}>
//                     <CustomSingleFileUpload
//                       name="img_url"
//                       uploadedFile={uploadedFile}
//                       setUploadedFile={setUploadedFile}
//                       setFieldValue={setFieldValue}
//                       existingUrl={getAcademicById?.data?.image_url}
//                     />
//                   </Grid>

//                   <Grid item size={{ xs: 12 }}>
//                     <Typography
//                       variant="h4"
//                       sx={{
//                         fontSize: "20px",
//                         color: "var(--main-color)",
//                         mt: "20px",
//                       }}
//                     >
//                       About Department
//                     </Typography>
//                   </Grid>

//                   <Grid item size={{ xs: 12 }}>
//                     {/* Use about_department (array) for dynamic textarea */}
//                     <CustomDynamicTextArea
//                       form={form}
//                       label="About Department"
//                       name="about_department"
//                       maxItems={5}
//                       textareaHeight={90}
//                     />
//                   </Grid>

//                   <Grid item size={{ xs: 12 }}>
//                     <Typography
//                       variant="h4"
//                       sx={{
//                         fontSize: "20px",
//                         color: "var(--main-color)",
//                         mt: "20px",
//                       }}
//                     >
//                       Facilities & Infrastructure
//                     </Typography>
//                   </Grid>

//                   <Grid item size={{ xs: 12 }}>
//                     {/* Use description field (single textarea) */}
//                     <CustomInputLogin
//                       label="Description"
//                       name="facitltyDescription"
//                       inputType="textarea"
//                       custPlaceholder="Enter Description"
//                     />
//                   </Grid>

//                   <Grid item size={{ xs: 12, md: 6 }}>
//                     <MultiFileUploadComponent
//                       name="facilityImages"
//                       uploadedFile={multipleUploadedFile}
//                       setUploadedFile={setMultipleUploadedFile}
//                       //  onFileUpload={(urls) => setFieldValue("facilityImages", urls)}  // FIX
//                       onFileUpload={setFieldValue}
//                     />
//                   </Grid>

//                   <Grid item size={{ xs: 12 }}>
//                     <Typography
//                       variant="h4"
//                       sx={{
//                         fontSize: "20px",
//                         color: "var(--main-color)",
//                         mt: "20px",
//                       }}
//                     >
//                       Activities
//                     </Typography>
//                   </Grid>

//                   <Grid item size={{ xs: 12 }}>
//                     <FieldArray name="activityCards">
//                       {({ push, remove }) => (
//                         <>
//                           {values.activityCards.map((card, index) => (
//                             <Grid
//                               container
//                               spacing={2}
//                               key={index}
//                               sx={{ mt: index > 0 ? 1 : 0, mb: 2 }}
//                             >
//                               <Grid item size={{ xs: 12 }}>
//                                 <Typography
//                                   variant="body2"
//                                   sx={{ color: "#6B3C58" }}
//                                 >
//                                   Activity {index + 1}
//                                 </Typography>
//                               </Grid>

//                               <Grid item size={{ xs: 12 }}>
//                                 <CustomInputLogin
//                                   label="Events & Activity"
//                                   name={`activityCards.${index}.events`}
//                                   inputType="text"
//                                   custPlaceholder="Enter Activity Card Title"
//                                 />
//                               </Grid>

//                               <Grid item size={{ xs: 12 }}>
//                                 <CustomDynamicTextArea
//                                   form={form}
//                                   label="Resource Person"
//                                   name={`activityCards.${index}.resource_person`}
//                                   // maxItems={MAX_RESOURCE_PERSONS}
//                                   textareaHeight={90}
//                                 />
//                               </Grid>

//                               {index > 0 && (
//                                 <Grid item size={{ xs: 12 }}>
//                                   <Button
//                                     variant="outlined"
//                                     color="error"
//                                     onClick={() => remove(index)}
//                                     sx={{
//                                       textTransform: "none",
//                                       color: "white",
//                                       fontSize: "16px",
//                                       boxShadow: "none",
//                                       padding: {
//                                         xs: "0px 20px",
//                                         md: "0px 40px",
//                                       },
//                                       minHeight: "40px",
//                                       borderRadius: "23px",
//                                       background: "#3B4056",
//                                       "&:hover": { backgroundColor: "#3B4056" },
//                                     }}
//                                     type="button"
//                                   >
//                                     Remove Card
//                                   </Button>
//                                 </Grid>
//                               )}
//                             </Grid>
//                           ))}

//                           {/* Add Card Button */}
//                           {/* {values.cards.length < MAX_CARDS && ( */}
//                           <Grid
//                             item
//                             size={{ xs: 12 }}
//                             sx={{ display: "flex", justifyContent: "end" }}
//                           >
//                             <Button
//                               variant="outlined"
//                               onClick={() =>
//                                 push({
//                                   events: "",
//                                   resource_person: [""],
//                                 })
//                               }
//                               sx={{
//                                 textTransform: "none",
//                                 color: "#6B3C58",
//                                 borderColor: "#6B3C58",
//                                 "&:hover": {
//                                   backgroundColor: "#6B3C58",
//                                   color: "white",
//                                 },
//                               }}
//                               type="button"
//                             >
//                               Add Card
//                             </Button>
//                           </Grid>
//                           {/* )} */}
//                         </>
//                       )}
//                     </FieldArray>
//                   </Grid>

//                   <Grid item size={{ xs: 12 }}>
//                     <Typography
//                       variant="h4"
//                       sx={{
//                         fontSize: "20px",
//                         color: "var(--main-color)",
//                         mt: "20px",
//                       }}
//                     >
//                       Acheivements
//                     </Typography>
//                   </Grid>

//                   <Grid item size={{ xs: 12 }}>
//                     <FieldArray name="acheivementCards">
//                       {({ push, remove }) => (
//                         <>
//                           {values.acheivementCards.map((card, index) => (
//                             <Grid
//                               container
//                               spacing={2}
//                               key={index}
//                               sx={{ mt: index > 0 ? 1 : 0, mb: 2 }}
//                             >
//                               <Grid item size={{ xs: 12 }}>
//                                 <Typography
//                                   variant="body2"
//                                   sx={{ color: "#6B3C58" }}
//                                 >
//                                   Acheivement {index + 1}
//                                 </Typography>
//                               </Grid>

//                               <Grid item size={{ xs: 12 }}>
//                                 <CustomInputLogin
//                                   label="Acheivement"
//                                   name={`acheivementCards.${index}.acheivement`}
//                                   inputType="text"
//                                   custPlaceholder="Enter Card Title"
//                                 />
//                               </Grid>

//                               <Grid item size={{ xs: 12 }}>
//                                 <CustomInputLogin
//                                   label="Student Details"
//                                   name={`acheivementCards.${index}.student_details`}
//                                   // maxItems={MAX_RESOURCE_PERSONS}
//                                   inputType="textarea"
//                                   textareaHeight={90}
//                                 />
//                               </Grid>

//                               {index > 0 && (
//                                 <Grid item size={{ xs: 12 }}>
//                                   <Button
//                                     variant="outlined"
//                                     color="error"
//                                     onClick={() => remove(index)}
//                                     sx={{
//                                       textTransform: "none",
//                                       color: "white",
//                                       fontSize: "16px",
//                                       boxShadow: "none",
//                                       padding: {
//                                         xs: "0px 20px",
//                                         md: "0px 40px",
//                                       },
//                                       minHeight: "40px",
//                                       borderRadius: "23px",
//                                       background: "#3B4056",
//                                       "&:hover": { backgroundColor: "#3B4056" },
//                                     }}
//                                     type="button"
//                                   >
//                                     Remove Card
//                                   </Button>
//                                 </Grid>
//                               )}
//                             </Grid>
//                           ))}

//                           {/* Add Card Button */}
//                           {/* {values.cards.length < MAX_CARDS && ( */}
//                           <Grid
//                             item
//                             size={{ xs: 12 }}
//                             sx={{ display: "flex", justifyContent: "end" }}
//                           >
//                             <Button
//                               variant="outlined"
//                               onClick={() =>
//                                 push({
//                                   events: "",
//                                   resource_person: [""],
//                                 })
//                               }
//                               sx={{
//                                 textTransform: "none",
//                                 color: "#6B3C58",
//                                 borderColor: "#6B3C58",
//                                 "&:hover": {
//                                   backgroundColor: "#6B3C58",
//                                   color: "white",
//                                 },
//                               }}
//                               type="button"
//                             >
//                               Add Card
//                             </Button>
//                           </Grid>
//                           {/* )} */}
//                         </>
//                       )}
//                     </FieldArray>
//                   </Grid>

//                   <Grid item size={{ xs: 12 }}>
//                     <Typography
//                       variant="h4"
//                       sx={{
//                         fontSize: "20px",
//                         color: "var(--main-color)",
//                         mt: "20px",
//                       }}
//                     >
//                       PDF Upload Activities & Acheivements
//                     </Typography>
//                   </Grid>
//                   <Grid item size={{ xs: 12, md: 6 }}>
//                     <CustomSingleFileUpload
//                       name="pdf_url"
//                       uploadedFile={pdfUploadFile}
//                       setUploadedFile={setPdfUploadFile}
//                       setFieldValue={setFieldValue}
//                       // existingUrl={getAcademicById?.data?.image_url}
//                     />
//                   </Grid>
//                   <Grid item size={{ xs: 12 }}>
//                     <Typography
//                       variant="h4"
//                       sx={{
//                         fontSize: "20px",
//                         color: "var(--main-color)",
//                         mt: "20px",
//                       }}
//                     >
//                       Research
//                     </Typography>
//                   </Grid>
//                   <Grid item size={{ xs: 12 }}>
//                     <FieldArray name="researchCards">
//                       {({ push, remove }) => (
//                         <>
//                           {values.researchCards.map((card, index) => (
//                             <Grid
//                               container
//                               spacing={2}
//                               key={index}
//                               sx={{ mt: index > 0 ? 1 : 0, mb: 2 }}
//                             >
//                               <Grid item size={{ xs: 12 }}>
//                                 <Typography
//                                   variant="body2"
//                                   sx={{ color: "#6B3C58" }}
//                                 >
//                                   Research {index + 1}
//                                 </Typography>
//                               </Grid>

//                               <Grid item size={{ xs: 12 }}>
//                                 <CustomInputLogin
//                                   label="Title"
//                                   name={`researchCards.${index}.title`}
//                                   inputType="textarea"
//                                   custPlaceholder="Enter Research Title"
//                                 />
//                               </Grid>

//                               <Grid item size={{ xs: 12 }}>
//                                 <CustomInputLogin
//                                   label="Decription"
//                                   name={`researchCards.${index}.description`}
//                                   // maxItems={MAX_RESOURCE_PERSONS}
//                                   inputType="textarea"
//                                   textareaHeight={90}
//                                 />
//                               </Grid>
//                               <Grid item size={{ xs: 12, md: 6 }}>
//                                 <CustomInputLogin
//                                   label="Date"
//                                   name={`researchCards.${index}.Date`}
//                                   // maxItems={MAX_RESOURCE_PERSONS}
//                                   inputType="date"
//                                   textareaHeight={90}
//                                 />
//                               </Grid>

//                               {index > 0 && (
//                                 <Grid item size={{ xs: 12 }}>
//                                   <Button
//                                     variant="outlined"
//                                     color="error"
//                                     onClick={() => remove(index)}
//                                     sx={{
//                                       textTransform: "none",
//                                       color: "white",
//                                       fontSize: "16px",
//                                       boxShadow: "none",
//                                       padding: {
//                                         xs: "0px 20px",
//                                         md: "0px 40px",
//                                       },
//                                       minHeight: "40px",
//                                       borderRadius: "23px",
//                                       background: "#3B4056",
//                                       "&:hover": { backgroundColor: "#3B4056" },
//                                     }}
//                                     type="button"
//                                   >
//                                     Remove Card
//                                   </Button>
//                                 </Grid>
//                               )}
//                             </Grid>
//                           ))}

//                           {/* Add Card Button */}
//                           {/* {values.cards.length < MAX_CARDS && ( */}
//                           <Grid
//                             item
//                             size={{ xs: 12 }}
//                             sx={{ display: "flex", justifyContent: "end" }}
//                           >
//                             <Button
//                               variant="outlined"
//                               onClick={() =>
//                                 push({
//                                   events: "",
//                                   resource_person: [""],
//                                 })
//                               }
//                               sx={{
//                                 textTransform: "none",
//                                 color: "#6B3C58",
//                                 borderColor: "#6B3C58",
//                                 "&:hover": {
//                                   backgroundColor: "#6B3C58",
//                                   color: "white",
//                                 },
//                               }}
//                               type="button"
//                             >
//                               Add Card
//                             </Button>
//                           </Grid>
//                           {/* )} */}
//                         </>
//                       )}
//                     </FieldArray>
//                   </Grid>

//                   <Grid item size={{ xs: 12 }}>
//                     <Typography
//                       variant="h4"
//                       sx={{
//                         fontSize: "20px",
//                         color: "var(--main-color)",
//                         mt: "20px",
//                       }}
//                     >
//                       {/* Our past student say about us college */}
//                       What Our Past Students Say About Us
//                     </Typography>
//                   </Grid>
//                   <Grid item size={{ xs: 12 }}>
//                     <FieldArray name="studentcards">
//                       {({ push, remove }) => (
//                         <>
//                           {values.studentcards.map((card, index) => (
//                             <Grid
//                               container
//                               spacing={2}
//                               key={index}
//                               sx={{ mt: index > 0 ? 1 : 0, mb: 2 }}
//                             >
//                               <Grid item size={{ xs: 12 }}>
//                                 <Typography
//                                   variant="body2"
//                                   sx={{ color: "#6B3C58" }}
//                                 >
//                                   Student {index + 1}
//                                 </Typography>
//                               </Grid>

//                               <Grid item size={{ xs: 12, md: 6 }}>
//                                 <CustomInputLogin
//                                   label="Student Name"
//                                   name={`studentcards.${index}.student_name`}
//                                   inputType="text"
//                                   custPlaceholder="Enter Student Name"
//                                 />
//                               </Grid>
//                               <Grid item size={{ xs: 12, md: 6 }}>
//                                 <CustomInputLogin
//                                   label="Student Name"
//                                   name={`studentcards.${index}.student_name`}
//                                   inputType="text"
//                                   custPlaceholder="Enter Student Name"
//                                 />
//                               </Grid>
//                               <Grid item size={{ xs: 12, md: 6 }}>
//                                 <CustomInputLogin
//                                   label="Program"
//                                   name={`studentcards.${index}.program`}
//                                   inputType="text"
//                                   custPlaceholder="Enter Program"
//                                 />
//                               </Grid>
//                               <Grid item size={{ xs: 12, md: 6 }}>
//                                 <CustomInputLogin
//                                   label="Year"
//                                   name={`studentcards.${index}.year`}
//                                   inputType="number"
//                                   custPlaceholder="Enter Year"
//                                 />
//                               </Grid>

//                               <Grid item size={{ xs: 12, md: 6 }}>
//                                 {/* <Typography> Student Image</Typography> */}
//                                 <CustomSingleFileUpload
//                                   // name="studentImage_url"
//                                   name={`studentcards.${index}.studentImage_url`}
//                                   uploadedFile={studentUploadFile}
//                                   setUploadedFile={setStudentUploadFile}
//                                   setFieldValue={setFieldValue}
//                                   existingUrl={getAcademicById?.data?.image_url}
//                                 />
//                               </Grid>
//                               <Grid item size={{ xs: 12 }}>
//                                 <CustomInputLogin
//                                   label="Decription"
//                                   name={`researchCards.${index}.description`}
//                                   // maxItems={MAX_RESOURCE_PERSONS}
//                                   inputType="textarea"
//                                   textareaHeight={90}
//                                 />
//                               </Grid>

//                               {index > 0 && (
//                                 <Grid item size={{ xs: 12 }}>
//                                   <Button
//                                     variant="outlined"
//                                     color="error"
//                                     onClick={() => remove(index)}
//                                     sx={{
//                                       textTransform: "none",
//                                       color: "white",
//                                       fontSize: "16px",
//                                       boxShadow: "none",
//                                       padding: {
//                                         xs: "0px 20px",
//                                         md: "0px 40px",
//                                       },
//                                       minHeight: "40px",
//                                       borderRadius: "23px",
//                                       background: "#3B4056",
//                                       "&:hover": { backgroundColor: "#3B4056" },
//                                     }}
//                                     type="button"
//                                   >
//                                     Remove Card
//                                   </Button>
//                                 </Grid>
//                               )}
//                             </Grid>
//                           ))}

//                           {/* Add Card Button */}
//                           {/* {values.cards.length < MAX_CARDS && ( */}
//                           <Grid
//                             item
//                             size={{ xs: 12 }}
//                             sx={{ display: "flex", justifyContent: "end" }}
//                           >
//                             <Button
//                               variant="outlined"
//                               onClick={() =>
//                                 push({
//                                   events: "",
//                                   resource_person: [""],
//                                 })
//                               }
//                               sx={{
//                                 textTransform: "none",
//                                 color: "#6B3C58",
//                                 borderColor: "#6B3C58",
//                                 "&:hover": {
//                                   backgroundColor: "#6B3C58",
//                                   color: "white",
//                                 },
//                               }}
//                               type="button"
//                             >
//                               Add Card
//                             </Button>
//                           </Grid>
//                           {/* )} */}
//                         </>
//                       )}
//                     </FieldArray>
//                   </Grid>

//                   <Grid
//                     item
//                     size={{ xs: 12 }}
//                     sx={{ display: "flex", justifyContent: "end", mt: 4 }}
//                   >
//                     <Box>
//                       <Button
//                         onClick={() => {
//                           resetForm();
//                           setUploadedFile(null);
//                         }}
//                         variant="text"
//                         sx={{
//                           textTransform: "none",
//                           color: "black",
//                           fontSize: "16px",
//                           mr: "10px",
//                           padding: { xs: "0px 20px", md: "0px 40px" },
//                           minHeight: "40px",
//                           borderRadius: "23px",
//                           background: "white",
//                           boxShadow: "none",
//                           border: "1px solid black",
//                           "&:hover": {
//                             backgroundColor: "#3B4056",
//                             color: "white",
//                           },
//                         }}
//                         type="button"
//                       >
//                         Cancel
//                       </Button>

//                       <Button
//                         type="submit"
//                         variant="contained"
//                         sx={{
//                           textTransform: "none",
//                           color: "white",
//                           fontSize: "16px",
//                           boxShadow: "none",
//                           padding: { xs: "0px 20px", md: "0px 40px" },
//                           minHeight: "40px",
//                           borderRadius: "23px",
//                           background: "var(--main-color)",
//                           "&:hover": {
//                             backgroundColor: "#3B4056",
//                             boxShadow: "none",
//                           },
//                         }}
//                       >
//                         Submit
//                       </Button>
//                     </Box>
//                   </Grid>
//                 </Grid>
//               </DialogContent>
//             </Form>
//           )}
//         </Formik>

//         <ToastContainer
//           position="top-right"
//           autoClose={1500}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="dark"
//         />
//       </Box>
//     </Dialog>
//   );
// };

// export default DepartmentModal;

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Button,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import { MdCancel } from "react-icons/md";
import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";

import CustomInputLogin from "../../../../Components/CustomInputLogin/CustomInputLogin";
import CustomSingleFileUpload from "../../../../Components/FileUploadComponent/CustomSingleFileUpload";
import CustomDynamicTextArea from "../../../../Components/CustomDynamicTextArea/CustomDynamicTextArea";
import MultiFileUploadComponent from "../../../../Components/FileUploadComponent/MultiFileUploadComponent";

import "../../../../Components/ModalCss/BannerinputGetModal.css";
import actions from "../../../../ReduxStore/actions";
import { useDispatch, useSelector } from "react-redux";
import { clearCustomerId } from "../../../../ReduxStore/Slices/Operator/customerSlice";
import { clearTableGetId } from "../../../../ReduxStore/Slices/TableId/TableIdGetSlice";
import { setInitialStateOfgetAcademicById } from "../../../../ReduxStore/Slices/AcademicDivisions/getAcademicById";
import CustomDropdownMui from "../../../../Components/CustomDropDown/CustomDropdown";
import FileUploadComponent from "../../../../Components/FileUploadComponent/FileUploadComponent";
import { setInitialStateOfgetDepartmentById } from "../../../../ReduxStore/Slices/Department/getDepartmentById";
import { data } from "react-router-dom";
import PdfFileUploadComponent from "../../../../Components/FileUploadComponent/PdfFileUploadComponent";

const validationSchema = Yup.object().shape({
  academic_name: Yup.string().required("Academic division is required"),
  department: Yup.string().required("Department is required"),

  aidedEmail: Yup.string().required("Email is required"),

  selfSupportingEmail: Yup.string().required("Email is required"),

  extraAidedEmails: Yup.array()
    .of(Yup.string().required("Email is required"))
    .min(0),

  extraSelfSupportingEmails: Yup.array()
    .of(Yup.string().required("Email is required"))
    .min(0),

  about_department: Yup.array()
    .of(Yup.string().required("About department cannot be empty"))
    .min(1, "At least one about section is required"),
  img_url: Yup.mixed().required("Banner image is required"),
  facitltyDescription: Yup.string().required(
    "Facility description is required",
  ),
  facilityImages: Yup.array()
    .of(Yup.string().required("Image URL is required"))
    .min(1, "At least one facility image is required"),
  pdf_url: Yup.mixed().required("PDF is required"),
  activityCards: Yup.array().of(
    Yup.object().shape({
      events: Yup.string().required("Event is required"),
      resource_person: Yup.array()
        .of(Yup.string().required("Resource person cannot be empty"))
        .min(1, "At least one resource person required"),
      year: Yup.string().required("Year is required"),
      //     year: Yup.number()
      // .typeError("Year must be a number")
      // .required("Year is required")

    }),
  ),
  acheivementCards: Yup.array().of(
    Yup.object().shape({
      acheivement: Yup.string().required("Achievement is required"),
      student_details: Yup.string().required("Student details required"),
      year: Yup.string().required("Year is required"),
    }),
  ),
  // researchCards: Yup.array().of(
  //   Yup.object().shape({
  //     title: Yup.string().required("Title is required"),
  //     description: Yup.string().required("Description is required"),
  //     Date: Yup.string().required("Date is required"),
  //   })
  // ),
  // studentcards: Yup.array().of(
  //   Yup.object().shape({
  //     student_name: Yup.string().required("Student name is required"),
  //     program: Yup.string().required("Program is required"),
  //     year: Yup.number()
  //       .typeError("Year must be a number")
  //       .required("Year is required"),
  //     description: Yup.string().required("Description required"),
  //     studentImage_url: Yup.mixed().required("Student image is required"),
  //   })
  // ),
});

const DepartmentModal = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const { getDepartmentById } = useSelector(
    (state) => state?.getDepartmentById || {},
  );
  const { getAllAcademics } = useSelector(
    (state) => state?.getAllAcademics || {},
  );
  const academicDivisionsOptions =
    getAllAcademics?.data?.map((data) => ({
      value: data?.academic_id,
      label: data?.academic_name,
    })) || [];

  const [uploadedFile, setUploadedFile] = useState(null);
  const [bannerUploadedFile, setBannerUploadedFile] = useState(null);
  const [pdfUploadFile, setPdfUploadFile] = useState(null);
  const [studentUploadFiles, setStudentUploadFiles] = useState([]);
  const [multipleUploadedFile, setMultipleUploadedFile] = useState([]);

  console.log(studentUploadFiles, "studentUploadFiles");

  // useEffect(() => {
  //   if (!open) return;

  //   // Student card files
  //   const studentCards =
  //     getDepartmentById?.data?.additional_data?.cards?.studentcards || [];
  //   setStudentUploadFiles(studentCards.map((c) =>

  //     fileUrl: response?.payload?.data.additional_data[0]?.banner,
  //                       type: "img",
  //                       progress: 100,
  //     c.studentImage_url
  //   || null));

  //   // Facility images
  //   const facilityImages =
  //     getDepartmentById?.data?.additional_data?.facilityImages || [];
  //   setMultipleUploadedFile(facilityImages);

  //   // Activity banner image
  //   if (getDepartmentById?.data?.image_url) {
  //     setUploadedFile({ileUrl:getDepartmentById.data.image_url ,
  //                       type: "img",
  //                       progress: 100});
  //   }

  //   // PDF file
  //   if (getDepartmentById?.data?.additional_data?.pdf_url) {
  //     setPdfUploadFile(getDepartmentById.data.additional_data.pdf_url);
  //   }
  // }, [open, getDepartmentById]);
  const [annualAssociationFile, setAnnualAssociationFile] = useState(null);

  useEffect(() => {
    if (!open) return;

    // -----------------------------
    // 1️⃣ Student Cards (Multiple)
    // -----------------------------
    const studentCards =
      getDepartmentById?.data?.additional_data?.cards?.studentcards?.length > 0
        ? getDepartmentById?.data?.additional_data?.cards?.studentcards
        : [];

    setStudentUploadFiles(
      studentCards.map((c) => ({
        fileUrl: c.studentImage_url || null,
        type: "img",
        progress: 100,
      })),
    );

    // -----------------------------
    // 2️⃣ Facility Images (Multiple)
    // -----------------------------
    const facilityImages =
      getDepartmentById?.data?.additional_data?.facilityImages || [];

    setMultipleUploadedFile(
      facilityImages.map((img) => ({
        fileUrl: img,
        type: "img",
        progress: 100,
      })),
    );

    // -----------------------------
    // 3️⃣ Activity Banner Image (Single)
    // -----------------------------
    if (getDepartmentById?.data?.image_url) {
      setUploadedFile({
        fileUrl: getDepartmentById.data.image_url,
        type: "img",
        progress: 100,
      });
    }
    if (getDepartmentById?.data?.additional_data?.annual_associaction_img_url) {
      setAnnualAssociationFile({
        fileUrl:
          getDepartmentById?.data?.additional_data?.annual_associaction_img_url,
        type: "img",
        progress: 100,
      });
    }

    // -----------------------------
    // 4️⃣ PDF File
    // -----------------------------
    if (getDepartmentById?.data?.additional_data?.pdf_url) {
      setPdfUploadFile({
        fileUrl: getDepartmentById.data.additional_data.pdf_url,
        type: "pdf",
        progress: 100,
      });
    }
  }, [open, getDepartmentById]);

  // Helpful defaults and limits
  const MAX_CARDS = 3;
  const MAX_RESOURCE_PERSONS = 5;

  useEffect(() => {
    const fetchData = async () => {
      const data1 = {
        data: {},
        method: "get",
        apiName: `getAllAcademics`,
      };
      await dispatch(actions.GETALLACADEMICS(data1));
    };

    fetchData();
  }, [dispatch]);

  const handleClose = () => {
    dispatch(setInitialStateOfgetDepartmentById());
    // reset and close
    // resetForm();
    setUploadedFile(null);
    setBannerUploadedFile(null);
    setPdfUploadFile(null);
    setStudentUploadFiles([]);
    setMultipleUploadedFile([]);
    onClose();
    dispatch(clearCustomerId(null));
    dispatch(clearTableGetId(null));
  };

  const handleSubmit = async (values, { resetForm }) => {
    // Build payload in shape API expects
    console.log(values, "valuess");
    const filteredStudentCards =
      values.studentcards?.filter(
        (card) =>
          card.student_name ||
          card.program ||
          card.year ||
          card.description ||
          card.studentImage_url,
      ) || [];

    const data1 = {
      data: {
        department_name: values.department,
        academic_id: values?.academic_name,
        image_url: values?.img_url,

        additional_data: {
          singleLineAchievements: values?.singleLineAchievements,
          singleLineActivities: values?.singleLineActivities,
          singleLineResearches: values?.singleLineResearches,
          aidedEmail: values?.aidedEmail,
          selfSupportingEmail: values?.selfSupportingEmail,
          extraAidedEmails: values?.extraAidedEmails?.filter(e => e.trim() !== ""),
          extraSelfSupportingEmails: values?.extraSelfSupportingEmails?.filter(e => e.trim() !== ""),
          facitltyDescription: values.facitltyDescription,

          annual_associaction_descriptions:
            values?.annual_associaction_descriptions,
          annual_associaction_img_url: values?.annual_associaction_img_url,
          // department: values.department,
          about_department: values.about_department,
          facilityImages: values.facilityImages,
          pdf_url: values.pdf_url,
          cards: {
            researchCards: values?.researchCards,

            // activityCards: values.activityCards,
            activitiesData: values.activitiesData,
            acheivementCards: values.acheivementCards,
            // researchCards: values.researchCards,
            // studentcards:
            //   values.studentcards?.length > 0 ? values.studentcards : [],
            studentcards: filteredStudentCards,
          },
        },
      },
      method: getDepartmentById?.data?.department_id ? "put" : "Post",
      // method: "Post",
      apiName: getDepartmentById?.data?.department_id
        ? `updateDepartment/${getDepartmentById?.data?.department_id}`
        : `addDepartment`,

      // apiName: `addDepartment`,
    };

    try {
      const responseData = await dispatch(
        getDepartmentById?.data?.department_id
          ? actions.UPDATEDEPARTMENT(data1)
          : actions.ADDDEPARTMENT(data1),
      );

      // const responseData = await dispatch(actions.ADDDEPARTMENT(data1));
      const message = responseData?.payload?.message;

      if (message) {
        toast.success(message);

        setTimeout(() => {
          // dispatch(setInitialStateOfgetDepartmentById());
          // // reset and close
          // resetForm();
          // setUploadedFile(null);
          // setBannerUploadedFile(null);
          // setPdfUploadFile(null);
          // setStudentUploadFiles([]);
          // setMultipleUploadedFile([]);
          // onClose();
          // dispatch(clearCustomerId(null));
          // dispatch(clearTableGetId(null));
          handleClose(resetForm);
        }, 1500);
      } else {
        throw new Error("Unexpected API response");
      }
    } catch (err) {
      toast.error(err?.message || "Failed to submit");
    }
  };

  return (
    <Dialog
      open={open}
      // onClose={handleClose}
      fullWidth
      maxWidth="md"
      className="custom-dialog"
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "14px",
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Box className="dialog-heading">
          <IconButton
            aria-label="Close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "text.secondary",
            }}
          >
            <MdCancel />
          </IconButton>
          <DialogTitle className="custom-dialog-title">
            <Box>
              <Typography
                className="custom-title-text"
                fontSize="16px"
                color="white"
              >
                Departments
              </Typography>
            </Box>
          </DialogTitle>
        </Box>

        <Formik
          enableReinitialize
          // validationSchema={validationSchema}
          initialValues={{
            academic_name: getDepartmentById?.data?.academic_id || "",
            department: getDepartmentById?.data?.department_name || "",
            about_department: getDepartmentById?.data?.additional_data
              ?.about_department || [""],
            img_url: getDepartmentById?.data?.image_url || null,
            facitltyDescription:
              getDepartmentById?.data?.additional_data?.facitltyDescription ||
              "",
            facilityImages:
              getDepartmentById?.data?.additional_data?.facilityImages || [],
            pdf_url: getDepartmentById?.data?.additional_data?.pdf_url || null,
            // activityCards:
            //   getDepartmentById?.data?.additional_data?.cards?.activityCards
            //     ?.length > 0
            //     ? getDepartmentById?.data?.additional_data?.cards?.activityCards
            //     : [{ events: "", resource_person: [""], year: "" }],

            activitiesData:
              getDepartmentById?.data?.additional_data?.cards?.activitiesData?.length > 0
                ? getDepartmentById?.data?.additional_data?.cards?.activitiesData
                : [{academic_year: "",activities: [{title: "",image: null,},],},],

            singleLineActivities: getDepartmentById?.data?.additional_data
              ?.singleLineActivities || [""],

            annual_associaction_descriptions: getDepartmentById?.data
              ?.additional_data?.annual_associaction_descriptions || [""],
            annual_associaction_img_url:
              getDepartmentById?.data?.additional_data
                ?.annual_associaction_img_url || null,
            acheivementCards:
              getDepartmentById?.data?.additional_data?.cards?.acheivementCards
                ?.length > 0
                ? getDepartmentById?.data?.additional_data?.cards
                  ?.acheivementCards
                : [
                  {
                    acheivement: "",
                    student_details: "",
                    year: "",
                  },
                ],
            singleLineAchievements: getDepartmentById?.data?.additional_data
              ?.singleLineAchievements || [""],
            researchCards:
              getDepartmentById?.data?.additional_data?.cards?.researchCards
                ?.length > 0
                ? getDepartmentById?.data?.additional_data?.cards?.researchCards
                : [{ title: "", facultyName: "", publisher: "", Date: "" }],
            singleLineResearches: getDepartmentById?.data?.additional_data
              ?.singleLineResearches || [""],
            studentcards:
              getDepartmentById?.data?.additional_data?.cards?.studentcards
                ?.length > 0
                ? getDepartmentById?.data?.additional_data?.cards?.studentcards
                : [
                  {
                    student_name: "",
                    program: "",
                    year: "",
                    description: "",
                    studentImage_url: null,
                  },
                ],
            aidedEmail:
              getDepartmentById?.data?.additional_data?.aidedEmail || "",
            selfSupportingEmail:
              getDepartmentById?.data?.additional_data?.selfSupportingEmail ||
              "",
            extraAidedEmails:
              getDepartmentById?.data?.additional_data?.extraAidedEmails || [""],
            extraSelfSupportingEmails:
              getDepartmentById?.data?.additional_data?.extraSelfSupportingEmails || [""],
          }}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, setFieldValue, resetForm, values, form }) => (
            <Form onSubmit={handleSubmit}>
              <DialogContent dividers>
                <Grid container spacing={2}>
                  <Grid item size={{ xs: 12 }}>
                    <CustomDropdownMui
                      label="Academic Division"
                      name="academic_name"
                      options={academicDivisionsOptions}
                      custPlaceholder="Enter Academic Division"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Department"
                      name="department"
                      inputType="text"
                      custPlaceholder="Enter Department"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Banner
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12, md: 6 }}>
                    <FileUploadComponent
                      name="img_url"
                      uploadedFile={uploadedFile}
                      setUploadedFile={(fileObj) => {
                        setUploadedFile(fileObj);
                      }}
                      onFileUpload={(url) => {
                        setFieldValue("img_url", url);
                      }}
                      existingUrl={getDepartmentById?.data?.image_url}
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      About Department
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomDynamicTextArea
                      form={form}
                      label="About Department"
                      name="about_department"
                      maxItems={5}
                      textareaHeight={90}
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Facilities & Infrastructure
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Description"
                      name="facitltyDescription"
                      inputType="textarea"
                      custPlaceholder="Enter Description"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12, md: 6 }}>
                    <MultiFileUploadComponent
                      name="facilityImages"
                      uploadedFile={multipleUploadedFile}
                      setUploadedFile={(files) =>
                        setMultipleUploadedFile(files)
                      }
                      onFileUpload={(urls) =>
                        setFieldValue("facilityImages", urls)
                      }
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Activities
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    {/* Academic Year FieldArray */}
                    <FieldArray name="activitiesData">
                      {({ push, remove }) => (
                        <>
                          {values.activitiesData.map((year, yearIndex) => (

                            <Grid item size={{ xs: 12 }} key={yearIndex}>
                              <Grid
                                container
                                spacing={2}
                                sx={{
                                  // border: "1px solid #ddd",
                                  p: 2,
                                  mb: 3,
                                  // borderRadius: "10px",
                                }}
                              >

                              {/* Academic Year */}
                              <Grid item size={{ xs: 12 }} >
                                <Typography variant="h6">
                                  Academic Year {yearIndex + 1}
                                </Typography>
                              </Grid>

                              <Grid item size={{ xs: 12,md:6}}>
                                <CustomInputLogin
                                  label="Academic Year"
                                  name={`activitiesData.${yearIndex}.academic_year`}
                                  inputType="text"
                                  custPlaceholder="2024 - 2025"
                                />
                              </Grid>

                              {/* ================= Activities ================= */}
                              <FieldArray name={`activitiesData.${yearIndex}.activities`}>
                                {({ push: pushActivity, remove: removeActivity }) => (
                                  <>

                                    {year.activities.map((activity, actIndex) => (

                                      <Grid item size={{ xs: 12 }} key={actIndex}>
                                        <Grid
                                          container
                                          spacing={2}
                                          sx={{ mt: 2 }}
                                        >

                                        <Grid item size={{ xs: 12 }}>
                                          <Typography variant="body2" color="#6B3C58">
                                            Activity {actIndex + 1}
                                          </Typography>
                                        </Grid>

                                        {/* Title */}
                                        <Grid item size={{ xs: 12,md:6 }}>
                                          <CustomInputLogin
                                            label="Activity Title"
                                            name={`activitiesData.${yearIndex}.activities.${actIndex}.title`}
                                            inputType="text"
                                            custPlaceholder="Enter Title"
                                          />
                                        </Grid>

                                        {/* Image */}
                                        <Grid item size={{ xs: 12,md:6 }}>
                                          <FileUploadComponent
                                            name={`activitiesData.${yearIndex}.activities.${actIndex}.image`}
                                            uploadedFile={
                                              values.activitiesData[yearIndex]
                                                .activities[actIndex].image
                                            }
                                            setUploadedFile={(file) =>
                                              setFieldValue(
                                                `activitiesData.${yearIndex}.activities.${actIndex}.image`,
                                                file
                                              )
                                            }
                                            onFileUpload={(file) =>
                                              setFieldValue(
                                                `activitiesData.${yearIndex}.activities.${actIndex}.image`,
                                                file
                                              )
                                            }
                                          />
                                        </Grid>

                                        {/* Remove Activity */}
                                        {actIndex > 0 && (
                                          <Grid item size={{ xs: 12 }}>
                                            <Button
                                              variant="outlined"
                                              color="error"
                                              onClick={() => removeActivity(actIndex)}
                                            >
                                              Remove Activity
                                            </Button>
                                          </Grid>
                                        )}

                                      </Grid>
                                      </Grid>
                                    ))}

                                    {/* Add Activity (Max 5) */}
                                    {year.activities.length < 6 && (
                                      <Grid item size={{ xs: 12 }} textAlign="right">
                                        <Button
                                          onClick={() =>
                                            pushActivity({
                                              title: "",
                                              image: null,
                                            })
                                          }
                                          variant="outlined"
                                        >
                                          Add Activity
                                        </Button>
                                      </Grid>
                                    )}

                                  </>
                                )}
                              </FieldArray>

                              {/* Remove Academic Year */}
                              {yearIndex > 0 && (
                                <Grid item size={{ xs: 12 }} >
                                  <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={() => remove(yearIndex)}
                                  >
                                    Remove Academic Year
                                  </Button>
                                </Grid>
                              )}

                            </Grid>
                            </Grid>
                          ))}

                          {/* Add Academic Year (Max 2) */}
                          {values.activitiesData.length < 2 && (
                            <Grid item size={{ xs: 12 }} textAlign="right">
                              <Button
                                variant="contained"
                                onClick={() =>
                                  push({
                                    academic_year: "",
                                    activities: [
                                      {
                                        title: "",
                                        image: null,
                                      },
                                    ],
                                  })
                                }
                              >
                                Add Academic Year
                              </Button>
                            </Grid>
                          )}
                        </>
                      )}
                    </FieldArray>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Research
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <FieldArray name="researchCards">
                      {({ push, remove }) => (
                        <>
                          {values.researchCards.map((card, index) => (
                            <Grid
                              container
                              spacing={2}
                              key={index}
                              sx={{ mt: index > 0 ? 1 : 0, mb: 2 }}
                            >
                              <Grid item size={{ xs: 12 }}>
                                <Typography
                                  variant="body2"
                                  sx={{ color: "#6B3C58" }}
                                >
                                  Research {index + 1}
                                </Typography>
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  label="Title"
                                  name={`researchCards.${index}.title`}
                                  inputType="textarea"
                                  custPlaceholder="Enter Research Title"
                                />
                              </Grid>
                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  label="Faculty Name"
                                  name={`researchCards.${index}.facultyName`}
                                  inputType="textarea"
                                  custPlaceholder="Enter Faculty Name"
                                />
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  label="Publisher"
                                  name={`researchCards.${index}.publisher`}
                                  inputType="textarea"
                                  textareaHeight={90}
                                />
                              </Grid>
                              <Grid item size={{ xs: 12, md: 6 }}>
                                <CustomInputLogin
                                  label="Date"
                                  name={`researchCards.${index}.Date`}
                                  inputType="date"
                                  textareaHeight={90}
                                />
                              </Grid>

                              {index > 0 && (
                                <Grid item size={{ xs: 12 }}>
                                  <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={() => remove(index)}
                                    sx={{
                                      textTransform: "none",
                                      color: "white",
                                      fontSize: "16px",
                                      boxShadow: "none",
                                      padding: {
                                        xs: "0px 20px",
                                        md: "0px 40px",
                                      },
                                      minHeight: "40px",
                                      borderRadius: "23px",
                                      background: "#3B4056",
                                      "&:hover": { backgroundColor: "#3B4056" },
                                    }}
                                    type="button"
                                  >
                                    Remove Card
                                  </Button>
                                </Grid>
                              )}
                            </Grid>
                          ))}

                          <Grid
                            item
                            size={{ xs: 12 }}
                            sx={{ display: "flex", justifyContent: "end" }}
                          >
                            <Button
                              variant="outlined"
                              onClick={() =>
                                push({
                                  title: "",
                                  description: "",
                                  Date: "",
                                })
                              }
                              sx={{
                                textTransform: "none",
                                color: "#6B3C58",
                                borderColor: "#6B3C58",
                                "&:hover": {
                                  backgroundColor: "#6B3C58",
                                  color: "white",
                                },
                              }}
                              type="button"
                            >
                              Add Card
                            </Button>
                          </Grid>
                        </>
                      )}
                    </FieldArray>

                    <Grid item size={{ xs: 12 }}>
                      <CustomDynamicTextArea
                        form={form}
                        label="Single Paragraph Research "
                        name="singleLineResearches"
                        textareaHeight={90}
                        maxItems={MAX_RESOURCE_PERSONS}
                      />
                    </Grid>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Acheivements
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <FieldArray name="acheivementCards">
                      {({ push, remove }) => (
                        <>
                          {values.acheivementCards.map((card, index) => (
                            <Grid
                              container
                              spacing={2}
                              key={index}
                              sx={{ mt: index > 0 ? 1 : 0, mb: 2 }}
                            >
                              <Grid item size={{ xs: 12 }}>
                                <Typography
                                  variant="body2"
                                  sx={{ color: "#6B3C58" }}
                                >
                                  Acheivement {index + 1}
                                </Typography>
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  label="Acheivement"
                                  name={`acheivementCards.${index}.acheivement`}
                                  inputType="text"
                                  custPlaceholder="Enter Card Title"
                                />
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  label="Student Details"
                                  name={`acheivementCards.${index}.student_details`}
                                  inputType="textarea"
                                  textareaHeight={90}
                                />
                              </Grid>
                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  label="Year"
                                  name={`acheivementCards.${index}.year`}
                                  inputType="text"
                                  textareaHeight={90}
                                  custPlaceholder="Ex. 2024"
                                />
                              </Grid>
                              {index > 0 && (
                                <Grid item size={{ xs: 12 }}>
                                  <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={() => remove(index)}
                                    sx={{
                                      textTransform: "none",
                                      color: "white",
                                      fontSize: "16px",
                                      boxShadow: "none",
                                      padding: {
                                        xs: "0px 20px",
                                        md: "0px 40px",
                                      },
                                      minHeight: "40px",
                                      borderRadius: "23px",
                                      background: "#3B4056",
                                      "&:hover": { backgroundColor: "#3B4056" },
                                    }}
                                    type="button"
                                  >
                                    Remove Card
                                  </Button>
                                </Grid>
                              )}
                            </Grid>
                          ))}

                          <Grid
                            item
                            size={{ xs: 12 }}
                            sx={{ display: "flex", justifyContent: "end" }}
                          >
                            <Button
                              variant="outlined"
                              onClick={() =>
                                push({
                                  acheivement: "",
                                  student_details: "",
                                })
                              }
                              sx={{
                                textTransform: "none",
                                color: "#6B3C58",
                                borderColor: "#6B3C58",
                                "&:hover": {
                                  backgroundColor: "#6B3C58",
                                  color: "white",
                                },
                              }}
                              type="button"
                            >
                              Add Card
                            </Button>
                          </Grid>
                        </>
                      )}
                    </FieldArray>
                    <Grid item size={{ xs: 12 }}>
                      <CustomDynamicTextArea
                        form={form}
                        label="Single Paragraph Achievement"
                        name="singleLineAchievements"
                        textareaHeight={90}
                        maxItems={MAX_RESOURCE_PERSONS}
                      />
                    </Grid>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      PDF Upload Activities & Acheivements
                    </Typography>
                  </Grid>
                  <Grid item size={{ xs: 12, md: 6 }}>
                    <PdfFileUploadComponent
                      name="pdf_url"
                      uploadedFile={pdfUploadFile}
                      setUploadedFile={(fileObj) => {
                        setPdfUploadFile(fileObj);
                      }}
                      onFileUpload={(url) => {
                        setFieldValue("pdf_url", url);
                      }}
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Annual Association Event
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12, md: 6 }}>
                    <FileUploadComponent
                      name="annual_associaction_img_url"
                      uploadedFile={annualAssociationFile}
                      setUploadedFile={(fileObj) =>
                        setAnnualAssociationFile(fileObj)
                      }
                      onFileUpload={(url) =>
                        setFieldValue("annual_associaction_img_url", url)
                      }
                    />
                  </Grid>
                  <Grid item size={{ xs: 12 }}>
                    <CustomDynamicTextArea
                      form={form}
                      label="Description"
                      name="annual_associaction_descriptions"
                      textareaHeight={90}
                      maxItems={MAX_RESOURCE_PERSONS}
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      What Our Past Students Say About Us
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <FieldArray name="studentcards">
                      {({ push, remove }) => (
                        <>
                          {values.studentcards.map((card, index) => (
                            <Grid
                              container
                              spacing={2}
                              key={index}
                              sx={{ mt: index > 0 ? 1 : 0, mb: 2 }}
                            >
                              <Grid item size={{ xs: 12 }}>
                                <Typography
                                  variant="body2"
                                  sx={{ color: "#6B3C58" }}
                                >
                                  Student {index + 1}
                                </Typography>
                              </Grid>

                              <Grid item size={{ xs: 12, md: 6 }}>
                                <CustomInputLogin
                                  label="Student Name"
                                  name={`studentcards.${index}.student_name`}
                                  inputType="text"
                                  custPlaceholder="Enter Student Name"
                                />
                              </Grid>

                              <Grid item size={{ xs: 12, md: 6 }}>
                                <CustomInputLogin
                                  label="Program"
                                  name={`studentcards.${index}.program`}
                                  inputType="text"
                                  custPlaceholder="Enter Program"
                                />
                              </Grid>
                              <Grid item size={{ xs: 12, md: 6 }}>
                                <CustomInputLogin
                                  label="Year"
                                  name={`studentcards.${index}.year`}
                                  inputType="number"
                                  custPlaceholder="Enter Year"
                                />
                              </Grid>

                              <Grid item size={{ xs: 12, md: 6 }}>
                                {/* <CustomSingleFileUpload
                                  name={`studentcards.${index}.studentImage_url`}
                                  uploadedFile={studentUploadFile}
                                  setUploadedFile={(file, url) => {
                                    setStudentUploadFile(file);
                                    // setFieldValue(`studentcards.${index}.studentImage_url`, url);
                                  }}
                                  setFieldValue={setFieldValue}
                                  existingUrl={card.studentImage_url || null}
                                /> */}

                                <FileUploadComponent
                                  name={`studentcards.${index}.studentImage_url`}
                                  uploadedFile={studentUploadFiles?.[index]}
                                  setUploadedFile={(fileObj) => {
                                    setStudentUploadFiles((prev) => {
                                      const updated = [...prev];
                                      updated[index] = fileObj;
                                      return updated;
                                    });
                                  }}
                                  onFileUpload={(url) => {
                                    setFieldValue(
                                      `studentcards.${index}.studentImage_url`,
                                      url,
                                    );
                                  }}
                                  existingUrl={
                                    values.studentcards[index].studentImage_url
                                  }
                                />
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  label="Decription"
                                  name={`studentcards.${index}.description`}
                                  inputType="textarea"
                                  textareaHeight={90}
                                />
                              </Grid>

                              {index > 0 && (
                                <Grid item size={{ xs: 12 }}>
                                  <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={() => remove(index)}
                                    sx={{
                                      textTransform: "none",
                                      color: "white",
                                      fontSize: "16px",
                                      boxShadow: "none",
                                      padding: {
                                        xs: "0px 20px",
                                        md: "0px 40px",
                                      },
                                      minHeight: "40px",
                                      borderRadius: "23px",
                                      background: "#3B4056",
                                      "&:hover": { backgroundColor: "#3B4056" },
                                    }}
                                    type="button"
                                  >
                                    Remove Card
                                  </Button>
                                </Grid>
                              )}
                            </Grid>
                          ))}

                          <Grid
                            item
                            size={{ xs: 12 }}
                            sx={{ display: "flex", justifyContent: "end" }}
                          >
                            <Button
                              variant="outlined"
                              onClick={() =>
                                push({
                                  student_name: "",
                                  program: "",
                                  year: "",
                                  description: "",
                                  studentImage_url: null,
                                })
                              }
                              sx={{
                                textTransform: "none",
                                color: "#6B3C58",
                                borderColor: "#6B3C58",
                                "&:hover": {
                                  backgroundColor: "#6B3C58",
                                  color: "white",
                                },
                              }}
                              type="button"
                            >
                              Add Card
                            </Button>
                          </Grid>
                        </>
                      )}
                    </FieldArray>
                  </Grid>
                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Contact Details
                    </Typography>
                  </Grid>
                  <Grid item size={{ xs: 12, md: 6 }}>
                    <CustomInputLogin
                      label="Aided Email"
                      name="aidedEmail"
                      inputType="text"
                      custPlaceholder="Enter Email"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12, md: 6 }}>
                    <CustomInputLogin
                      label="Self Supporting Email"
                      name="selfSupportingEmail"
                      inputType="text"
                      custPlaceholder="Enter Email"
                    />
                  </Grid>

                  {/* Extra Aided Emails Section */}
                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "16px",
                        color: "var(--main-color)",
                        mt: "15px",
                        mb: "10px",
                      }}
                    >
                      Additional Aided Emails
                    </Typography>
                  </Grid>
                  <FieldArray name="extraAidedEmails">
                    {({ push, remove }) => (
                      <>
                        {values.extraAidedEmails?.map((email, index) => (
                          <Grid
                            container
                            spacing={2}
                            key={index}
                            size={{ xs: 12 }}
                            sx={{ alignItems: "flex-end" }}
                          >
                            <Grid item size={{ xs: 12, md: 10 }}>
                              <CustomInputLogin
                                label={`Additional Aided Email ${index + 1}`}
                                name={`extraAidedEmails.${index}`}
                                inputType="text"
                                custPlaceholder="Enter Email"
                              />
                            </Grid>
                            <Grid item size={{ xs: 12, md: 2 }}>
                              <Button
                                type="button"
                                variant="outlined"
                                color="error"
                                onClick={() => remove(index)}
                                sx={{
                                  textTransform: "none",
                                  mt: "8px",
                                  width: "100%",
                                }}
                              >
                                Remove
                              </Button>
                            </Grid>
                          </Grid>
                        ))}
                        <Grid item size={{ xs: 12 }} sx={{ mt: 1 }}>
                          <Button
                            type="button"
                            variant="outlined"
                            onClick={() => push("")}
                            sx={{
                              textTransform: "none",
                              color: "#6B3C58",
                              borderColor: "#6B3C58",
                              "&:hover": {
                                backgroundColor: "#6B3C58",
                                color: "white",
                              },
                            }}
                          >
                            + Add Extra Aided Email
                          </Button>
                        </Grid>
                      </>
                    )}
                  </FieldArray>

                  {/* Extra Self Supporting Emails Section */}
                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "16px",
                        color: "var(--main-color)",
                        mt: "15px",
                        mb: "10px",
                      }}
                    >
                      Additional Self Supporting Emails
                    </Typography>
                  </Grid>
                  <FieldArray name="extraSelfSupportingEmails">
                    {({ push, remove }) => (
                      <>
                        {values.extraSelfSupportingEmails?.map((email, index) => (
                          <Grid
                            container
                            spacing={2}
                            key={index}
                            size={{ xs: 12 }}
                            sx={{ alignItems: "flex-end" }}
                          >
                            <Grid item size={{ xs: 12, md: 10 }}>
                              <CustomInputLogin
                                label={`Additional Self Supporting Email ${index + 1}`}
                                name={`extraSelfSupportingEmails.${index}`}
                                inputType="text"
                                custPlaceholder="Enter Email"
                              />
                            </Grid>
                            <Grid item size={{ xs: 12, md: 2 }}>
                              <Button
                                type="button"
                                variant="outlined"
                                color="error"
                                onClick={() => remove(index)}
                                sx={{
                                  textTransform: "none",
                                  mt: "8px",
                                  width: "100%",
                                }}
                              >
                                Remove
                              </Button>
                            </Grid>
                          </Grid>
                        ))}
                        <Grid item size={{ xs: 12 }} sx={{ mt: 1 }}>
                          <Button
                            type="button"
                            variant="outlined"
                            onClick={() => push("")}
                            sx={{
                              textTransform: "none",
                              color: "#6B3C58",
                              borderColor: "#6B3C58",
                              "&:hover": {
                                backgroundColor: "#6B3C58",
                                color: "white",
                              },
                            }}
                          >
                            + Add Extra Self Supporting Email
                          </Button>
                        </Grid>
                      </>
                    )}
                  </FieldArray>

                  <Grid
                    item
                    size={{ xs: 12 }}
                    sx={{ display: "flex", justifyContent: "end", mt: 4 }}
                  >
                    <Box>
                      <Button
                        onClick={() => {
                          handleClose();
                          resetForm();
                          setUploadedFile(null);
                          setBannerUploadedFile(null);
                          setPdfUploadFile(null);
                          setStudentUploadFiles(null);
                          setMultipleUploadedFile([]);
                        }}
                        variant="text"
                        sx={{
                          textTransform: "none",
                          color: "black",
                          fontSize: "16px",
                          mr: "10px",
                          padding: { xs: "0px 20px", md: "0px 40px" },
                          minHeight: "40px",
                          borderRadius: "23px",
                          background: "white",
                          boxShadow: "none",
                          border: "1px solid black",
                          "&:hover": {
                            backgroundColor: "#3B4056",
                            color: "white",
                          },
                        }}
                        type="button"
                      >
                        Cancel
                      </Button>

                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          color: "white",
                          fontSize: "16px",
                          boxShadow: "none",
                          padding: { xs: "0px 20px", md: "0px 40px" },
                          minHeight: "40px",
                          borderRadius: "23px",
                          background: "var(--main-color)",
                          "&:hover": {
                            backgroundColor: "#3B4056",
                            boxShadow: "none",
                          },
                        }}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </DialogContent>
            </Form>
          )}
        </Formik>

        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Box>
    </Dialog>
  );
};

export default DepartmentModal;
