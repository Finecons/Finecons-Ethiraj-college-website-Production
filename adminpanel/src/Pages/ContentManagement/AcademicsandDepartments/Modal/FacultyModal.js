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
// import { setInitialStateOfgetProgramById } from "../../../../ReduxStore/Slices/Department/getDepartmentById";
// import { data } from "react-router-dom";
// import CustomMultipleCheckbox from "../../../../Components/CustomMultipleCheckbox/CustomMultipleCheckbox";
// import CustomDynamicText from "../../../../Components/CustomDynamicTextArea/CustomDynamicText";
// // import * as Yup from "yup";

// const validationSchema = Yup.object().shape({
//   academic_name: Yup.string().required("Academic Division is required"),

//   department: Yup.string().required("Program name is required"),

//   about_department: Yup.array()
//     .of(Yup.string().required("Description is required"))
//     .min(1, "At least one description is required"),

//   // Degree
//   degree_name: Yup.string().required("Degree name is required"),
//   degree_years: Yup.string().required("Degree years are required"),
//   degree_semesters: Yup.string().required("Degree semesters are required"),

//   // Stream
//   stream: Yup.array().min(1, "Select at least one stream"),

//   // Credits
//   credits: Yup.array()
//     .of(Yup.string().required("Credit value required"))
//     .min(1, "At least one credit entry is required"),

//   img_url: Yup.string().nullable(),

//   // Program Outcome Cards
//   programOutcomeCards: Yup.array()
//     .of(
//       Yup.object().shape({
//         title: Yup.string().required("Title is required"),
//         description: Yup.string().required("Description is required"),
//       })
//     )
//     .min(1, "At least one Program Outcome card is required"),

//   programOutcomeDecription: Yup.string().required(
//     "Program Outcome Description is required"
//   ),

//   // Syllabus
//   syllabus_description: Yup.string().required("Description is required"),
//   syllabus_pdf_url: Yup.string().nullable(),

//   // Value Added Course
//   valueAddedCourseCards: Yup.array()
//     .of(
//       Yup.object().shape({
//         title: Yup.string().required("Title is required"),
//         description: Yup.string().required("Description is required"),
//       })
//     )
//     .min(1, "At least one Value Added Course card is required"),

//   // Future Career Paths
//   futureCareerPathsCards: Yup.array()
//     .of(
//       Yup.object().shape({
//         title: Yup.string().required("Title is required"),
//         career_paths: Yup.string().required("Career paths are required"),
//       })
//     )
//     .min(1, "At least one Career Path card is required"),

//   placed_company_logos: Yup.array(),

//   beyond_classroom_description: Yup.string().required(
//     "Beyond the classroom description is required"
//   ),
//   student_association_description: Yup.string().required(
//     "This field is required"
//   ),
//   entrepreneurship_cell_description: Yup.string().required(
//     "This field is required"
//   ),
//   seminars_Workshops_Conferences_description: Yup.string().required(
//     "This field is required"
//   ),
//   beyond_classroom_img_url: Yup.string().nullable(),

//   // Faculty
//   facultyCards: Yup.array()
//     .of(
//       Yup.object().shape({
//         name: Yup.string().required("Name is required"),
//         position: Yup.string().required("Position is required"),
//         qualification: Yup.string().required("Qualification is required"),
//         areaofspecilization: Yup.string().required(
//           "Area of specialization is required"
//         ),
//         profilelink: Yup.string().required("Profile link is required"),
//         faculty_img_url: Yup.string().nullable(),
//       })
//     )
//     .min(1, "At least one faculty card is required"),

//   // Admission & Eligibility
//   elgibility_criteria: Yup.string().required("Eligibility criteria required"),
//   subject_requirements: Yup.string().required("Subject requirement required"),
//   any_two_subjects_list: Yup.string().required("This field is required"),
// });

// const FacultyModal = ({ open, onClose }) => {
//   const dispatch = useDispatch();
//   const { getDepartmentById } = useSelector(
//     (state) => state?.getDepartmentById || {}
//   );
//   const { getAllAcademics } = useSelector(
//     (state) => state?.getAllAcademics || {}
//   );
//   const { getAllDepartments } = useSelector(
//     (state) => state?.getAllDepartments || {}
//   );
//   const { getAllProgrammeLevels } = useSelector(
//     (state) => state?.getAllProgrammeLevels || {}
//   );
//   const { getAllFundingTypes } = useSelector(
//     (state) => state?.getAllFundingTypes || {}
//   );

//   const academicDivisionsOptions =
//     getAllAcademics?.data?.map((data) => ({
//       value: data?.academic_id,
//       label: data?.academic_name,
//     })) || [];

//   const departmentOptions =
//     getAllDepartments?.data?.map((data) => ({
//       value: data?.department_id,
//       label: data?.department_name,
//     })) || [];
//   const programLevelOptions =
//     getAllProgrammeLevels?.data?.map((data) => ({
//       value: data?.programme_level_id,
//       label: data?.level_name,
//     })) || [];
//   const streamTypeOptions =
//     getAllFundingTypes?.data?.map((data) => ({
//       value: data?.funding_type_id,
//       label: data?.type_name,
//     })) || [];

//   const [uploadedFile, setUploadedFile] = useState(null);
//   const [bannerUploadedFile, setBannerUploadedFile] = useState(null);
//   const [pdfUploadFile, setPdfUploadFile] = useState(null);
//   const [studentUploadFiles, setStudentUploadFiles] = useState([]);
//   const [multipleUploadedFile, setMultipleUploadedFile] = useState([]);

//   console.log(studentUploadFiles, "studentUploadFiles");

//   // useEffect(() => {
//   //   if (!open) return;

//   //   // Student card files
//   //   const studentCards =
//   //     getDepartmentById?.data?.additional_data?.studentcards || [];
//   //   setStudentUploadFiles(studentCards.map((c) =>

//   //     fileUrl: response?.payload?.data.additional_data[0]?.banner,
//   //                       type: "img",
//   //                       progress: 100,
//   //     c.studentImage_url
//   //   || null));

//   //   // Facility images
//   //   const facilityImages =
//   //     getDepartmentById?.data?.additional_data?.facilityImages || [];
//   //   setMultipleUploadedFile(facilityImages);

//   //   // Activity banner image
//   //   if (getDepartmentById?.data?.image_url) {
//   //     setUploadedFile({ileUrl:getDepartmentById.data.image_url ,
//   //                       type: "img",
//   //                       progress: 100});
//   //   }

//   //   // PDF file
//   //   if (getDepartmentById?.data?.additional_data?.pdf_url) {
//   //     setPdfUploadFile(getDepartmentById.data.additional_data.pdf_url);
//   //   }
//   // }, [open, getDepartmentById]);

//   useEffect(() => {
//     if (!open) return;

//     // -----------------------------
//     // 1️⃣ Student Cards (Multiple)
//     // -----------------------------
//     const studentCards =
//       getDepartmentById?.data?.additional_data?.studentcards || [];

//     setStudentUploadFiles(
//       studentCards.map((c) => ({
//         fileUrl: c.studentImage_url || null,
//         type: "img",
//         progress: 100,
//       }))
//     );

//     // -----------------------------
//     // 2️⃣ Facility Images (Multiple)
//     // -----------------------------
//     const facilityImages =
//       getDepartmentById?.data?.additional_data?.facilityImages || [];

//     setMultipleUploadedFile(
//       facilityImages.map((img) => ({
//         fileUrl: img,
//         type: "img",
//         progress: 100,
//       }))
//     );

//     // -----------------------------
//     // 3️⃣ Activity Banner Image (Single)
//     // -----------------------------
//     if (getDepartmentById?.data?.image_url) {
//       setUploadedFile({
//         fileUrl: getDepartmentById.data.image_url,
//         type: "img",
//         progress: 100,
//       });
//     }

//     // -----------------------------
//     // 4️⃣ PDF File
//     // -----------------------------
//     if (getDepartmentById?.data?.additional_data?.pdf_url) {
//       setPdfUploadFile({
//         fileUrl: getDepartmentById.data.additional_data.pdf_url,
//         type: "pdf",
//         progress: 100,
//       });
//     }
//   }, [open, getDepartmentById]);

//   // Helpful defaults and limits
//   const MAX_CARDS = 3;
//   const MAX_RESOURCE_PERSONS = 5;

//   useEffect(() => {
//     const fetchData = async () => {
//       const data1 = {
//         data: {},
//         method: "get",
//         apiName: `getAllAcademics`,
//       };
//       await dispatch(actions.GETALLACADEMICS(data1));

//       const data2 = {
//         data: {},
//         method: "get",
//         apiName: `getAllFundingTypes`,
//       };
//       await dispatch(actions.GETALLFUNDINGTYPES(data2));

//       const data3 = {
//         data: {},
//         method: "get",
//         apiName: `getAllDepartments`,
//       };
//       await dispatch(actions.GETALLDEPARTMENTS(data3));

//       const data4 = {
//         data: {},
//         method: "get",
//         apiName: `getAllProgrammeLevels`,
//       };
//       await dispatch(actions.GETALLPROGRAMMELEVELS(data4));
//     };

//     fetchData();
//   }, [dispatch]);

//   const handleClose = () => {
//     dispatch(setInitialStateOfgetDepartmentById());
//     // reset and close
//     // resetForm();
//     setUploadedFile(null);
//     setBannerUploadedFile(null);
//     setPdfUploadFile(null);
//     setStudentUploadFiles([]);
//     setMultipleUploadedFile([]);
//     onClose();
//     dispatch(clearCustomerId(null));
//     dispatch(clearTableGetId(null));
//   };

//   const handleSubmit = async (values, { resetForm }) => {
//     // Build payload in shape API expects
//     console.log(values, "valuess");
//     const data1 = {
//       data: {
//         academic_id: values?.academic_name,
//         image_url: values?.banner_img_url,
//         description: values?.description,
//         //

//         // academic_name: getDepartmentById?.data?.academic_id || "",
//         department_id: values?.department_name || "",
//         about_department: values?.department_name,
//         program_name: values?.program_name,
//         funding_type_id: values?.stream_name,
//         programme_level_id: values?.program_level,

//         // --

//         additional_data: {
//           degree: {
//             degree_name: values?.degree_name,
//             degree_semesters: values?.degree_semesters,
//             degree_years: values?.degree_years,
//           },
//           stream: values?.stream,

//           // Credits
//           credits: values?.credits,

//           programOutcomeCards: values?.programOutcomeCards,
//           programOutcomeDecription: values?.programOutcomeDecription,
//           syllabus_description: values?.syllabus_description,
//           syllabus_pdf_url: values?.syllabus_pdf_url,

//           valueAddedCourseCards: values?.valueAddedCourseCards,

//           futureCareerPathsCards: values?.futureCareerPathsCards,

//           // Student Placed
//           placed_company_logos: values?.placed_company_logos,

//           // Beyond the Classroom
//           beyond_classroom_details: {
//             beyond_classroom_description: values?.beyond_classroom_description,
//             student_association_description:
//               values?.student_association_description,
//             entrepreneurship_cell_description:
//               values?.entrepreneurship_cell_description,
//             seminars_Workshops_Conferences_description:
//               values?.seminars_Workshops_Conferences_description,
//             beyond_classroom_img_url: values?.beyond_classroom_img_url,
//           },

//           // Faculty
//           facultyCards: values?.facultyCards,

//           // Admission & Eligibility
//           adminsistraion_and_eligibility: {
//             elgibility_criteria: values?.elgibility_criteria,
//             subject_requirements: values?.subject_requirements,
//             any_two_subjects_list: values?.any_two_subjects_list,
//             administration_img_url: values?.administration_img_url,
//           },
//         },
//       },
//       method: getDepartmentById?.data?.department_id ? "put" : "Post",
//       // method: "Post",
//       apiName: getDepartmentById?.data?.department_id
//         ? `updateDepartment/${getDepartmentById?.data?.department_id}`
//         : `adddDepartment`,

//       // apiName: `addDepartment`,
//     };

//     try {
//       const responseData = await dispatch(
//         getDepartmentById?.data?.department_id
//           ? actions.UPDATEDEPARTMENT(data1)
//           : actions.ADDDEPARTMENT(data1)
//       );

//       // const responseData = await dispatch(actions.ADDDEPARTMENT(data1));
//       const message = responseData?.payload?.message;

//       if (message) {
//         toast.success(message);

//         setTimeout(() => {
//           // dispatch(setInitialStateOfgetDepartmentById());
//           // // reset and close
//           // resetForm();
//           // setUploadedFile(null);
//           // setBannerUploadedFile(null);
//           // setPdfUploadFile(null);
//           // setStudentUploadFiles([]);
//           // setMultipleUploadedFile([]);
//           // onClose();
//           // dispatch(clearCustomerId(null));
//           // dispatch(clearTableGetId(null));
//           handleClose(resetForm);
//         }, 1500);
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
//             onClick={handleClose}
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
//                 Program
//               </Typography>
//             </Box>
//           </DialogTitle>
//         </Box>

//         <Formik
//           enableReinitialize
//           // validationSchema={validationSchema}
//           initialValues={{
//             program_level: "",
//             stream_name: "",
//             academic_name: getDepartmentById?.data?.academic_id || "",
//             department_name: getDepartmentById?.data?.department_name || "",
//             about_department: getDepartmentById?.data?.additional_data
//               ?.about_department || [""],
//             program_name: "",

//             // Degree
//             degree_name: "",
//             degree_years: "",
//             degree_semesters: "",

//             // Stream
//             stream: [],

//             // Credits
//             credits: [" "],

//             // Banner Image
//             img_url: getDepartmentById?.data?.image_url || null,

//             // Program Outcomes
//             programOutcomeCards:
//               getDepartmentById?.data?.additional_data?.cards
//                 ?.programOutcomeCards?.length > 0
//                 ? getDepartmentById?.data?.additional_data?.cards
//                     ?.programOutcomeCards
//                 : [{ title: "", description: "" }],
//             programOutcomeDecription: "",

//             // Syllabus
//             syllabus_description: "",
//             syllabus_pdf_url: null,

//             // Value Added Course
//             valueAddedCourseCards:
//               getDepartmentById?.data?.additional_data?.cards
//                 ?.valueAddedCourseCards?.length > 0
//                 ? getDepartmentById?.data?.additional_data?.cards
//                     ?.valueAddedCourseCards
//                 : [{ title: "", description: "" }],

//             // Future Career Path
//             futureCareerPathsCards:
//               getDepartmentById?.data?.additional_data?.cards
//                 ?.futureCareerPathsCards?.length > 0
//                 ? getDepartmentById?.data?.additional_data?.cards
//                     ?.futureCareerPathsCards
//                 : [{ title: "", career_paths: "" }],

//             // Student Placed
//             placed_company_logos: [],

//             // Beyond the Classroom
//             beyond_classroom_description: "",
//             student_association_description: "",
//             entrepreneurship_cell_description: "",
//             seminars_Workshops_Conferences_description: "",
//             beyond_classroom_img_url: null,

//             // Faculty
//             facultyCards:
//               getDepartmentById?.data?.additional_data?.facultyCards
//                 ?.length > 0
//                 ? getDepartmentById?.data?.additional_data?.facultyCards
//                 : [
//                     {
//                       name: "",
//                       position: "",
//                       qualification: "",
//                       areaofspecilization: "",
//                       profilelink: "",
//                       faculty_img_url: null,
//                     },
//                   ],

//             // Admission & Eligibility
//             elgibility_criteria: "",
//             subject_requirements: "",
//             any_two_subjects_list: "",
//             administration_img_url: null,
//           }}
//           onSubmit={handleSubmit}
//         >
//           {({ handleSubmit, setFieldValue, resetForm, values, form }) => (
//             <Form onSubmit={handleSubmit}>
//               <DialogContent dividers>
//                 <Grid container spacing={2}>
//                   <Grid item size={{ xs: 12 }}>
//                     <CustomDropdownMui
//                       label="program_level"
//                       name="academic_name"
//                       options={programLevelOptions}
//                       custPlaceholder="Enter Academic Division"
//                     />
//                   </Grid>
//                   <Grid item size={{ xs: 12 }}>
//                     <CustomDropdownMui
//                       label="Academic Division"
//                       name="academic_name"
//                       options={academicDivisionsOptions}
//                       custPlaceholder="Enter Academic Division"
//                     />
//                   </Grid>

//                   <Grid item size={{ xs: 12 }}>
//                     <CustomDropdownMui
//                       label="Departmet"
//                       name="department_name"
//                       options={departmentOptions}
//                       custPlaceholder="Select Department Name"
//                     />
//                   </Grid>
//                   <Grid item size={{ xs: 12 }}>
//                     <CustomDropdownMui
//                       label="Stream"
//                       name="stream_name"
//                       options={streamTypeOptions}
//                       custPlaceholder="Select Stream Name"
//                     />
//                   </Grid>
//                   <Grid item size={{ xs: 12 }}>
//                     <CustomInputLogin
//                       label="Program"
//                       name="program_name"
//                       inputType="text"
//                       custPlaceholder="Enter Program"
//                     />
//                   </Grid>
//                   <Grid item size={{ xs: 12 }}>
//                     <CustomInputLogin
//                       label="Description"
//                       name="description"
//                       inputType="text"
//                       custPlaceholder="Enter Description"
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
//                       Degree
//                     </Typography>
//                   </Grid>
//                   <Grid item size={{ xs: 12 }}>
//                     <CustomInputLogin
//                       label="Degree Name"
//                       name="degree_name"
//                       inputType="text"
//                       custPlaceholder="Enter Degree Name"
//                     />
//                   </Grid>

//                   <Grid item size={{ xs: 12 }}>
//                     <CustomInputLogin
//                       label="Years"
//                       name="degree_years"
//                       inputType="text"
//                       custPlaceholder="Enter Degree Years"
//                     />
//                   </Grid>

//                   <Grid item size={{ xs: 12 }}>
//                     <CustomInputLogin
//                       label="Semesters"
//                       name="degree_semesters"
//                       inputType="text"
//                       custPlaceholder="Enter Degree Semesters"
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
//                       Stream
//                     </Typography>
//                   </Grid>
//                   <Grid item size={{ xs: 12 }}>
//                     <CustomMultipleCheckbox
//                       name="stream"
//                       label="Stream"
//                       // component={MultipleCheckboxFormik}
//                       // options={options}
//                       options={[
//                         { value: "Aided", label: "Aided" },
//                         { value: "Self-Supporting", label: "Self-Supporting" },
//                       ]}
//                       maxSelections={3}
//                       allowSelectAll={true}
//                       showChips={true}
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
//                       Credits
//                     </Typography>
//                   </Grid>
//                   <Grid item size={{ xs: 12 }}>
//                     <CustomDynamicText
//                       form={form}
//                       label="Credits"
//                       name="credits"
//                       // textareaHeight={90}

//                       // maxItems={MAX_RESOURCE_PERSONS}
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
//                     <FileUploadComponent
//                       name="banner_img_url"
//                       uploadedFile={uploadedFile}
//                       setUploadedFile={(fileObj) => {
//                         setUploadedFile(fileObj);
//                       }}
//                       onFileUpload={(url) => {
//                         setFieldValue("img_url", url);
//                       }}
//                       existingUrl={getDepartmentById?.data?.image_url}
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
//                       Program Outcomes
//                     </Typography>
//                   </Grid>

//                   <Grid item size={{ xs: 12 }}>
//                     <FieldArray name="programOutcomeCards">
//                       {({ push, remove }) => (
//                         <>
//                           {values.programOutcomeCards.map((card, index) => (
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
//                                   Program Outcome {index + 1}
//                                 </Typography>
//                               </Grid>

//                               <Grid item size={{ xs: 12 }}>
//                                 <CustomInputLogin
//                                   label="Title"
//                                   name={`programOutcomeCards.${index}.title`}
//                                   inputType="text"
//                                   custPlaceholder="Enter Title"
//                                 />
//                               </Grid>

//                               <Grid item size={{ xs: 12 }}>
//                                 <CustomInputLogin
//                                   form={form}
//                                   label="Description"
//                                   name={`programOutcomeCards.${index}.decription`}
//                                   inputType="textarea"
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
//                           {values?.programOutcomeCards?.length < 4 && (
//                             <Grid
//                               item
//                               size={{ xs: 12 }}
//                               sx={{ display: "flex", justifyContent: "end" }}
//                             >
//                               <Button
//                                 variant="outlined"
//                                 onClick={() =>
//                                   push({
//                                     events: "",
//                                     resource_person: [""],
//                                   })
//                                 }
//                                 sx={{
//                                   textTransform: "none",
//                                   color: "#6B3C58",
//                                   borderColor: "#6B3C58",
//                                   "&:hover": {
//                                     backgroundColor: "#6B3C58",
//                                     color: "white",
//                                   },
//                                 }}
//                                 type="button"
//                               >
//                                 Add Card
//                               </Button>
//                             </Grid>
//                           )}
//                         </>
//                       )}
//                     </FieldArray>
//                   </Grid>
//                   <Grid item size={{ xs: 12 }}>
//                     <CustomInputLogin
//                       form={form}
//                       label="Program Outcome Description"
//                       name={`programOutcomeDecription`}
//                       inputType="textarea"
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
//                       Syllabus
//                     </Typography>
//                   </Grid>
//                   <Grid item size={{ xs: 12 }}>
//                     <CustomInputLogin
//                       form={form}
//                       label="Description"
//                       name="syllabus_description"
//                       maxItems={5}
//                       textareaHeight={90}
//                     />
//                   </Grid>

//                   <Grid item size={{ xs: 12, md: 6 }}>
//                     <FileUploadComponent
//                       name="syllabus_pdf_url"
//                       uploadedFile={pdfUploadFile}
//                       setUploadedFile={(fileObj) => {
//                         setPdfUploadFile(fileObj);
//                       }}
//                       onFileUpload={(url) => {
//                         setFieldValue("syllabus_pdf_url", url);
//                       }}
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
//                       Values added Courses
//                     </Typography>
//                   </Grid>

//                   <Grid item size={{ xs: 12 }}>
//                     <FieldArray name="valueAddedCourseCards">
//                       {({ push, remove }) => (
//                         <>
//                           {values.valueAddedCourseCards.map((card, index) => (
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
//                                   Value Added Course {index + 1}
//                                 </Typography>
//                               </Grid>

//                               <Grid item size={{ xs: 12 }}>
//                                 <CustomInputLogin
//                                   label="Title"
//                                   name={`valueAddedCourseCards.${index}.title`}
//                                   inputType="text"
//                                   custPlaceholder="Enter Title"
//                                 />
//                               </Grid>

//                               <Grid item size={{ xs: 12 }}>
//                                 <CustomInputLogin
//                                   form={form}
//                                   label="Description"
//                                   name={`valueAddedCourseCards.${index}.decription`}
//                                   inputType="textarea"
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
//                           {values?.valueAddedCourseCards?.length < 4 && (
//                             <Grid
//                               item
//                               size={{ xs: 12 }}
//                               sx={{ display: "flex", justifyContent: "end" }}
//                             >
//                               <Button
//                                 variant="outlined"
//                                 onClick={() =>
//                                   push({
//                                     events: "",
//                                     resource_person: [""],
//                                   })
//                                 }
//                                 sx={{
//                                   textTransform: "none",
//                                   color: "#6B3C58",
//                                   borderColor: "#6B3C58",
//                                   "&:hover": {
//                                     backgroundColor: "#6B3C58",
//                                     color: "white",
//                                   },
//                                 }}
//                                 type="button"
//                               >
//                                 Add Card
//                               </Button>
//                             </Grid>
//                           )}
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
//                       Future Career Paths
//                     </Typography>
//                   </Grid>

//                   <Grid item size={{ xs: 12 }}>
//                     <FieldArray name="futureCareerPathsCards">
//                       {({ push, remove }) => (
//                         <>
//                           {values.futureCareerPathsCards.map((card, index) => (
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
//                                   Future Career Path {index + 1}
//                                 </Typography>
//                               </Grid>

//                               <Grid item size={{ xs: 12 }}>
//                                 <CustomInputLogin
//                                   label="Title"
//                                   name={`futureCareerPathsCards.${index}.title`}
//                                   inputType="text"
//                                   custPlaceholder="Enter Title"
//                                 />
//                               </Grid>

//                               <Grid item size={{ xs: 12 }}>
//                                 <CustomInputLogin
//                                   form={form}
//                                   label="Career paths"
//                                   name={`futureCareerPathsCards.${index}.career paths`}
//                                   inputType="textarea"
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
//                           {values?.futureCareerPathsCards?.length < 4 && (
//                             <Grid
//                               item
//                               size={{ xs: 12 }}
//                               sx={{ display: "flex", justifyContent: "end" }}
//                             >
//                               <Button
//                                 variant="outlined"
//                                 onClick={() =>
//                                   push({
//                                     events: "",
//                                     resource_person: [""],
//                                   })
//                                 }
//                                 sx={{
//                                   textTransform: "none",
//                                   color: "#6B3C58",
//                                   borderColor: "#6B3C58",
//                                   "&:hover": {
//                                     backgroundColor: "#6B3C58",
//                                     color: "white",
//                                   },
//                                 }}
//                                 type="button"
//                               >
//                                 Add Card
//                               </Button>
//                             </Grid>
//                           )}
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
//                       Our Student Placed at
//                     </Typography>
//                   </Grid>

//                   <Grid item size={{ xs: 12, md: 6 }}>
//                     <MultiFileUploadComponent
//                       name="placed_company_logos"
//                       uploadedFile={multipleUploadedFile}
//                       setUploadedFile={(files) =>
//                         setMultipleUploadedFile(files)
//                       }
//                       onFileUpload={(urls) =>
//                         setFieldValue("placed_company_logos", urls)
//                       }
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
//                       Beyond the Classroom
//                     </Typography>
//                   </Grid>
//                   <Grid item size={{ xs: 12 }}>
//                     <CustomInputLogin
//                       label="Description"
//                       name="beyond_classroom_description"
//                       custPlaceholder="Enter Description"
//                     />
//                   </Grid>
//                   <Grid item size={{ xs: 12 }}>
//                     <CustomInputLogin
//                       label="Student Association"
//                       name="student_association_description"
//                       custPlaceholder="Enter Student Association Descrition"
//                     />
//                   </Grid>
//                   <Grid item size={{ xs: 12 }}>
//                     <CustomInputLogin
//                       label="Entrepreneurship Cell"
//                       name="entrepreneurship_cell_description"
//                       custPlaceholder="Enter Entrepreneurship Cell Description"
//                     />
//                   </Grid>
//                   <Grid item size={{ xs: 12 }}>
//                     <CustomInputLogin
//                       label="Description"
//                       name="seminars_Workshops_Conferences_description"
//                       custPlaceholder="Enter Description"
//                     />
//                   </Grid>
//                   <Grid item size={{ xs: 12, md: 6 }}>
//                     <FileUploadComponent
//                       name="beyond_classroom_img_url"
//                       uploadedFile={pdfUploadFile}
//                       setUploadedFile={(fileObj) => {
//                         setPdfUploadFile(fileObj);
//                       }}
//                       onFileUpload={(url) => {
//                         setFieldValue("beyond_classroom_img_url", url);
//                       }}
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
//                       Faculty
//                     </Typography>
//                   </Grid>

//                   <Grid item size={{ xs: 12 }}>
//                     <FieldArray name="facultyCards">
//                       {({ push, remove }) => (
//                         <>
//                           {values.facultyCards.map((card, index) => (
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
//                                   Faculty {index + 1}
//                                 </Typography>
//                               </Grid>
//                               <Grid item size={{ xs: 12, md: 6 }}>
//                                 <FileUploadComponent
//                                   name="faculty_img_url"
//                                   uploadedFile={pdfUploadFile}
//                                   setUploadedFile={(fileObj) => {
//                                     setPdfUploadFile(fileObj);
//                                   }}
//                                   onFileUpload={(url) => {
//                                     setFieldValue("faculty_img_url", url);
//                                   }}
//                                 />
//                               </Grid>

//                               <Grid item size={{ xs: 12 }}>
//                                 <CustomInputLogin
//                                   label="Name"
//                                   name={`facultyCards.${index}.Nmae`}
//                                   inputType="text"
//                                   custPlaceholder="Enter Name"
//                                 />
//                               </Grid>

//                               <Grid item size={{ xs: 12 }}>
//                                 <CustomInputLogin
//                                   form={form}
//                                   label="Position"
//                                   name={`facultyCards.${index}.position`}
//                                   custPlaceholder="Enter Position"
//                                 />
//                               </Grid>

//                               <Grid item size={{ xs: 12 }}>
//                                 <CustomInputLogin
//                                   form={form}
//                                   label="Qualification"
//                                   name={`facultyCards.${index}.qualification`}
//                                   textareaHeight={90}
//                                   custPlaceholder="Enter Qualification"
//                                 />
//                               </Grid>
//                               <Grid item size={{ xs: 12 }}>
//                                 <CustomInputLogin
//                                   form={form}
//                                   label="Area of specialization"
//                                   name={`facultyCards.${index}.areaofspecilization`}
//                                   textareaHeight={90}
//                                   maxItems={MAX_RESOURCE_PERSONS}
//                                   custPlaceholder="Enter Area of specialization"
//                                 />
//                               </Grid>

//                               <Grid item size={{ xs: 12 }}>
//                                 <CustomInputLogin
//                                   form={form}
//                                   label="Profile Line"
//                                   name={`facultyCards.${index}.profilelink`}
//                                   textareaHeight={90}
//                                   maxItems={MAX_RESOURCE_PERSONS}
//                                   custPlaceholder="Enter  Profile Link"
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
//                       Admission & Eligibility
//                     </Typography>
//                   </Grid>
//                   <Grid item size={{ xs: 12 }}>
//                     <CustomInputLogin
//                       label="Eligibility Criteria"
//                       name="elgibility_criteria"
//                       custPlaceholder="Enter Eligibility Criteria"
//                       inputType="textarea"
//                     />
//                   </Grid>

//                   <Grid item size={{ xs: 12 }}>
//                     <CustomInputLogin
//                       label="Subject Requirements"
//                       name="subject_requirements"
//                       custPlaceholder="Enter Subject Requirements"
//                       inputType="textarea"
//                     />
//                   </Grid>
//                   <Grid item size={{ xs: 12 }}>
//                     <CustomInputLogin
//                       label="And/or any two subjects from the list below:"
//                       name="any_two_subjects_list"
//                       custPlaceholder="Enter And/or any two subjects from the list below:"
//                       inputType="textarea"
//                     />
//                   </Grid>
//                   <Grid item size={{ xs: 12, md: 6 }}>
//                     <FileUploadComponent
//                       name="administration_img_url"
//                       uploadedFile={pdfUploadFile}
//                       setUploadedFile={(fileObj) => {
//                         setPdfUploadFile(fileObj);
//                       }}
//                       onFileUpload={(url) => {
//                         setFieldValue("administration_img_url", url);
//                       }}
//                     />
//                   </Grid>
//                   {/*
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

//                           <Grid
//                             item
//                             size={{ xs: 12 }}
//                             sx={{ display: "flex", justifyContent: "end" }}
//                           >
//                             <Button
//                               variant="outlined"
//                               onClick={() =>
//                                 push({
//                                   acheivement: "",
//                                   student_details: "",
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
//                     <FileUploadComponent
//                       name="pdf_url"
//                       uploadedFile={pdfUploadFile}
//                       setUploadedFile={(fileObj) => {
//                         setPdfUploadFile(fileObj);
//                       }}
//                       onFileUpload={(url) => {
//                         setFieldValue("pdf_url", url);
//                       }}
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
//                                   inputType="textarea"
//                                   textareaHeight={90}
//                                 />
//                               </Grid>
//                               <Grid item size={{ xs: 12, md: 6 }}>
//                                 <CustomInputLogin
//                                   label="Date"
//                                   name={`researchCards.${index}.Date`}
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

//                           <Grid
//                             item
//                             size={{ xs: 12 }}
//                             sx={{ display: "flex", justifyContent: "end" }}
//                           >
//                             <Button
//                               variant="outlined"
//                               onClick={() =>
//                                 push({
//                                   title: "",
//                                   description: "",
//                                   Date: "",
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

//                                 <FileUploadComponent
//                                   name={`studentcards.${index}.studentImage_url`}
//                                   uploadedFile={studentUploadFiles[index]}
//                                   setUploadedFile={(fileObj) => {
//                                     setStudentUploadFiles((prev) => {
//                                       const updated = [...prev];
//                                       updated[index] = fileObj;
//                                       return updated;
//                                     });
//                                   }}
//                                   onFileUpload={(url) => {
//                                     setFieldValue(
//                                       `studentcards.${index}.studentImage_url`,
//                                       url
//                                     );
//                                   }}
//                                   existingUrl={
//                                     values.studentcards[index].studentImage_url
//                                   }
//                                 />
//                               </Grid>

//                               <Grid item size={{ xs: 12 }}>
//                                 <CustomInputLogin
//                                   label="Decription"
//                                   name={`studentcards.${index}.description`}
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

//                           <Grid
//                             item
//                             size={{ xs: 12 }}
//                             sx={{ display: "flex", justifyContent: "end" }}
//                           >
//                             <Button
//                               variant="outlined"
//                               onClick={() =>
//                                 push({
//                                   student_name: "",
//                                   program: "",
//                                   year: "",
//                                   description: "",
//                                   studentImage_url: null,
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
//                         </>
//                       )}
//                     </FieldArray>
//                   </Grid>*/}

//                   <Grid
//                     item
//                     size={{ xs: 12 }}
//                     sx={{ display: "flex", justifyContent: "end", mt: 4 }}
//                   >
//                     <Box>
//                       <Button
//                         onClick={() => {
//                           handleClose();
//                           resetForm();
//                           setUploadedFile(null);
//                           setBannerUploadedFile(null);
//                           setPdfUploadFile(null);
//                           setStudentUploadFiles(null);
//                           setMultipleUploadedFile([]);
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

// export default FacultyModal;

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
import { Formik, Form, FieldArray, useFormikContext } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";

import CustomInputLogin from "../../../../Components/CustomInputLogin/CustomInputLogin";
import CustomDynamicText from "../../../../Components/CustomDynamicTextArea/CustomDynamicText";
import MultiFileUploadComponent from "../../../../Components/FileUploadComponent/MultiFileUploadComponent";
import FileUploadComponent from "../../../../Components/FileUploadComponent/FileUploadComponent";
import CustomDropdownMui from "../../../../Components/CustomDropDown/CustomDropdown";
import CustomMultipleCheckbox from "../../../../Components/CustomMultipleCheckbox/CustomMultipleCheckbox";

import "../../../../Components/ModalCss/BannerinputGetModal.css";
import actions from "../../../../ReduxStore/actions";
import { useDispatch, useSelector } from "react-redux";
import { clearCustomerId } from "../../../../ReduxStore/Slices/Operator/customerSlice";
import { clearTableGetId } from "../../../../ReduxStore/Slices/TableId/TableIdGetSlice";
import { setInitialStateOfgetAcademicById } from "../../../../ReduxStore/Slices/AcademicDivisions/getAcademicById";
import { setInitialStateOfgetDepartmentById } from "../../../../ReduxStore/Slices/Department/getDepartmentById";
import { setInitialStateOfgetProgramById } from "../../../../ReduxStore/Slices/Program/getProgramById";
import PdfFileUploadComponent from "../../../../Components/FileUploadComponent/PdfFileUploadComponent";

// ---------- Validation Schema (cleaned and consistent names) ----------
const validationSchema = Yup.object().shape({
  program_level: Yup.string().required("Program Level is required"),
  academic_name: Yup.string().required("Academic Division is required"),
  department_name: Yup.string().required("Department is required"),
  stream: Yup.string().required("Stream is required"),
  // Faculty
  facultyCards: Yup.array()
    .of(
      Yup.object().shape({
        faculty_img_url: Yup.mixed().required("Faculty image is required"),

        name: Yup.string().required("Name is required"),
        position: Yup.string().required("Position is required"),
        qualification: Yup.string().required("Qualification is required"),
        areaofspecilization: Yup.string().required(
          "Area of specialization is required"
        ),
        profilelink: Yup.string().required("Profile link is required"),
      })
    )
    .min(1, "At least one faculty card is required"),

 
});

const FacultyModal = ({ open, onClose }) => {
// const { values, setFieldValue } = useFormikContext();
  

  const [academicId,setAcademicId]=useState(null)
  console.log(academicId,"academicIDDDDDD")
  const dispatch = useDispatch();
  const { getProgramById } = useSelector(
    (state) => state?.getProgramById || {}
  );
  const { getAllAcademics } = useSelector(
    (state) => state?.getAllAcademics || {}
  );
  const { getAllDepartments } = useSelector(
    (state) => state?.getAllDepartments || {}
  );
  const { getAllProgrammeLevels } = useSelector(
    (state) => state?.getAllProgrammeLevels || {}
  );
  const { getAllFundingTypes } = useSelector(
    (state) => state?.getAllFundingTypes || {}
  );

  const academicDivisionsOptions =
    getAllAcademics?.data?.map((d) => ({
      value: d?.academic_id,
      label: d?.academic_name,
    })) || [];
  const departmentOptions =
    getAllDepartments?.data?.departments?.map((d) => ({
      value: d?.department_id,
      label: d?.department_name,
    })) || [];
  const programLevelOptions =
    getAllProgrammeLevels?.data?.map((d) => ({
      value: d?.programme_level_id,
      label: d?.level_name,
    })) || [];
  const streamTypeOptions =
    getAllFundingTypes?.data?.map((d) => ({
      value: d?.funding_type_id,
      label: d?.type_name,
    })) || [];

  // ---------- Separate states for each upload (Option A) ----------
  const [bannerFile, setBannerFile] = useState(null);
  const [syllabusPdfFile, setSyllabusPdfFile] = useState(null);
  const [beyondClassroomFile, setBeyondClassroomFile] = useState(null);
  const [administrationFile, setAdministrationFile] = useState(null);
  console.log(administrationFile, "administrationFile");

  // Multiple file arrays
  const [placedCompanyFiles, setPlacedCompanyFiles] = useState([]);
  const [facilityImagesFiles, setFacilityImagesFiles] = useState([]);

  // Arrays for repeatable items
  const [studentFiles, setStudentFiles] = useState([]); // maps to studentcards[*].studentImage_url
  const [facultyFiles, setFacultyFiles] = useState([]); // maps to facultyCards[*].faculty_img_url

  // Fetch selects
  useEffect(() => {
    if (!open) return;

    if (
      getProgramById?.data?.additional_data?.adminsistraion_and_eligibility
        ?.administration_img_url
    ) {
      setAdministrationFile({
        fileUrl:
          getProgramById.data.additional_data?.adminsistraion_and_eligibility
            ?.administration_img_url,
        type: "img",
        progress: 100,
      });
    }

    const facilityImages =
      getProgramById?.data?.additional_data?.facilityImages || [];
    setFacilityImagesFiles(
      facilityImages.map((img) => ({
        fileUrl: img,
        type: "img",
        progress: 100,
      }))
    );

    if (getProgramById?.data?.image_url) {
      setBannerFile({
        fileUrl: getProgramById.data.image_url,
        type: "img",
        progress: 100,
      });
    }

    if (getProgramById?.data?.additional_data?.syllabus_pdf_url) {
      setSyllabusPdfFile({
        fileUrl: getProgramById.data.additional_data.syllabus_pdf_url,
        type: "pdf",
        progress: 100,
      });
    }

    if (getProgramById?.data?.additional_data?.placed_company_logos) {
      setPlacedCompanyFiles(
        (getProgramById.data.additional_data.placed_company_logos || []).map(
          (url) => ({ fileUrl: url, type: "img", progress: 100 })
        )
      );
    }

    if (
      getProgramById?.data?.additional_data?.beyond_classroom_details
        ?.beyond_classroom_img_url
    ) {
      setBeyondClassroomFile({
        fileUrl:
          getProgramById.data.additional_data.beyond_classroom_details
            .beyond_classroom_img_url,
        type: "img",
        progress: 100,
      });
    }

    // Map faculty images if present
    const facultyCards =
      getProgramById?.data?.additional_data?.facultyCards || [];
    setFacultyFiles(
      facultyCards.map((f) => ({
        fileUrl: f.faculty_img_url || null,
        type: "img",
        progress: 100,
      }))
    );
  }, [open, getProgramById]);

  // Fetch reference data once
  useEffect(() => {
    if (!open) return;
    const fetchData = async () => {
      await dispatch(
        actions.GETALLACADEMICS({
          data: {},
          method: "get",
          apiName: `getAllAcademics`,
        })
      );
      await dispatch(
        actions.GETALLFUNDINGTYPES({
          data: {},
          method: "get",
          apiName: `getAllFundingTypes`,
        })
      );
      // await dispatch(
      //   actions.GETALLDEPARTMENTS({
      //     data: {},
      //     method: "get",
      //     apiName: `getAllDepartments`,
      //   })
      // );
      await dispatch(
        actions.GETALLPROGRAMMELEVELS({
          data: {},
          method: "get",
          apiName: `getAllProgrammeLevels`,
        })
      );
    };

    fetchData();
  }, [open,dispatch]);

  useEffect(() => {
  if (!academicId) return;

  dispatch(
    actions.GETALLDEPARTMENTS({
      data: { }, // or academic_code
      method: "get",
      apiName:`getAcademicById/${academicId}`,
    })
  );

  // Reset department when academic changes
  // setFieldValue("department_name", "");
}, [dispatch,academicId]);


  const handleClose = () => {
    dispatch(setInitialStateOfgetProgramById());
    setBannerFile(null);
    setSyllabusPdfFile(null);
    setBeyondClassroomFile(null);
    setAdministrationFile(null);
    setStudentFiles([]);
    setFacultyFiles([]);
    setPlacedCompanyFiles([]);
    setFacilityImagesFiles([]);
    onClose();
    dispatch(clearCustomerId(null));
    dispatch(clearTableGetId(null));
  };

  const handleSubmit = async (values, { resetForm }) => {
    // Log values & file states to console (as requested)
    console.log("values", values);
    console.log("bannerFile:", bannerFile);
    console.log("syllabusPdfFile:", syllabusPdfFile);
    console.log("beyondClassroomFile:", beyondClassroomFile);
    console.log("administrationFile:", administrationFile);
    console.log("placedCompanyFiles:", placedCompanyFiles);
    console.log("studentFiles:", studentFiles);
    console.log("facultyFiles:", facultyFiles);

    // Build payload for API
    const payload = {
      academic_id: values?.academic_name,
      image_url: values?.img_url || (bannerFile?.fileUrl ?? null),
      description: values?.description,
      department_id: values?.department_name || "",
      program_name: values?.program_name,
      funding_type_id: values?.stream || "",
      programme_level_id: values?.program_level,
      additional_data: {
        degree: {
          degree_name: values?.degree_name,
          degree_semesters: values?.degree_semesters,
          degree_years: values?.degree_years,
        },
        // stream: values?.stream,
        credits: values?.credits,
        programOutcomeCards: values?.programOutcomeCards,
        programOutcomeDecription: values?.programOutcomeDecription,
        syllabus_description: values?.syllabus_description,
        syllabus_pdf_url:
          values?.syllabus_pdf_url ?? syllabusPdfFile?.fileUrl ?? null,
        // valueAddedCourseCards: values?.valueAddedCourseCards || [],
        valueAddedCourseCards:
          Array.isArray(values?.valueAddedCourseCards) &&
          values?.valueAddedCourseCards.some((c) => c?.title || c?.description)
            ? values?.valueAddedCourseCards
            : [],
        futureCareerPathsCards: values?.futureCareerPathsCards,
        placed_company_logos:
          values?.placed_company_logos ??
          placedCompanyFiles.map((f) => f.fileUrl),
        beyond_classroom_details: {
          beyond_classroom_description: values?.beyond_classroom_description,
          beyond_classroom_subdescription_cards:
            Array.isArray(values?.beyond_classroom_subdescription_cards) &&
            values?.beyond_classroom_subdescription_cards.some(
              (c) => c?.title || c?.description
            )
              ? values?.beyond_classroom_subdescription_cards
              : [],

          beyond_classroom_img_url: values?.beyond_classroom_img_url,
          // beyondClassroomFile?.fileUrl ??
          // null,
        },
        facultyCards: values?.facultyCards,
        adminsistraion_and_eligibility: {
          elgibility_criteria: values?.elgibility_criteria,
          subject_requirements: values?.subject_requirements,
          any_two_subjects_list: values?.any_two_subjects_list,
          administration_img_url:
            values?.administration_img_url ??
            administrationFile?.fileUrl ??
            null,
        },
      },
    };

    console.log("---- Payload to send ----", payload);

    const apiData = {
      data: payload,
      method: getProgramById?.data?.program_id ? "put" : "Post",
      apiName: getProgramById?.data?.program_id
        ? `updateProgram/${getProgramById?.data?.program_id}`
        : `addProgram`,
    };

    try {
      const responseData = await dispatch(
        getProgramById?.data?.program_id
          ? actions.UPDATEPROGRAM(apiData)
          : actions.ADDPROGRAM(apiData)
      );

      const message = responseData?.payload?.message;
      if (message) {
        toast.success(message);
        setTimeout(() => {
          handleClose();
          resetForm();
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
      // onClose={onClose}
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
            <MdCancel style={{ color: "white" }} />
          </IconButton>
          <DialogTitle className="custom-dialog-title">
            <Box>
              <Typography
                className="custom-title-text"
                fontSize="16px"
                color="white"
              >
                Program
              </Typography>
            </Box>
          </DialogTitle>
        </Box>

        <Formik
          enableReinitialize
          validationSchema={validationSchema}
          initialValues={{
            program_level: getProgramById?.data?.programme_level_id || "",
            stream: getProgramById?.data?.funding_type_id || "",
            academic_name: getProgramById?.data?.academic_id || "",
            department_name: getProgramById?.data?.department_id || "",
            program_name: getProgramById?.data?.program_name || "",
            description: getProgramById?.data?.description || "",

            // Degree
            degree_name:
              getProgramById?.data?.additional_data?.degree?.degree_name || "",
            degree_years:
              getProgramById?.data?.additional_data?.degree?.degree_years || "",
            degree_semesters:
              getProgramById?.data?.additional_data?.degree?.degree_semesters ||
              "",

            // Stream
            // stream_name: getProgramById?.data?.additional_data?.stream || [],

            // Credits
            credits: getProgramById?.data?.additional_data?.credits || [""],

            // Banner Image
            img_url: getProgramById?.data?.image_url || null,

            // Program Outcomes
            programOutcomeCards:
              getProgramById?.data?.additional_data?.programOutcomeCards
                ?.length > 0
                ? getProgramById?.data?.additional_data?.programOutcomeCards
                : [{ title: "", description: "" }],
            programOutcomeDecription:
              getProgramById?.data?.additional_data?.programOutcomeDecription ||
              "",

            // Syllabus
            syllabus_description:
              getProgramById?.data?.additional_data?.syllabus_description || "",
            syllabus_pdf_url:
              getProgramById?.data?.additional_data?.syllabus_pdf_url || null,

            // Value Added Course
            valueAddedCourseCards:
              getProgramById?.data?.additional_data?.valueAddedCourseCards
                ?.length > 0
                ? getProgramById?.data?.additional_data?.valueAddedCourseCards
                : [{ title: "", description: "" }],

            // Future Career Path
            futureCareerPathsCards:
              getProgramById?.data?.additional_data?.futureCareerPathsCards
                ?.length > 0
                ? getProgramById?.data?.additional_data?.futureCareerPathsCards
                : [{ title: "", career_paths: "" }],

            // Student Placed
            placed_company_logos:
              getProgramById?.data?.additional_data?.placed_company_logos || [],

            // Beyond the Classroom
            beyond_classroom_description:
              getProgramById?.data?.additional_data?.beyond_classroom_details
                ?.beyond_classroom_description || "",

            beyond_classroom_img_url:
              getProgramById?.data?.additional_data?.beyond_classroom_details
                ?.beyond_classroom_img_url || null,

            beyond_classroom_subdescription_cards:
              getProgramById?.data?.additional_data?.beyond_classroom_details
                ?.beyond_classroom_subdescription_cards?.length > 0
                ? getProgramById?.data?.additional_data
                    ?.beyond_classroom_details
                    ?.beyond_classroom_subdescription_cards
                : [
                    {
                      title: "",
                      description: "",
                    },
                  ],

            // Faculty
            facultyCards:
              getProgramById?.data?.additional_data?.facultyCards?.length > 0
                ? getProgramById?.data?.additional_data?.facultyCards
                : [
                    {
                      name: "",
                      position: "",
                      qualification: "",
                      areaofspecilization: "",
                      profilelink: "",
                      faculty_img_url: null,
                    },
                  ],

            // Admission & Eligibility
            elgibility_criteria:
              getProgramById?.data?.additional_data
                ?.adminsistraion_and_eligibility?.elgibility_criteria || "",
            subject_requirements:
              getProgramById?.data?.additional_data
                ?.adminsistraion_and_eligibility?.subject_requirements || "",
            any_two_subjects_list:
              getProgramById?.data?.additional_data
                ?.adminsistraion_and_eligibility?.any_two_subjects_list || "",
            administration_img_url:
              getProgramById?.data?.additional_data
                ?.adminsistraion_and_eligibility?.administration_img_url ||
              null,
          }}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, setFieldValue, resetForm, values, form }) => (
            <Form onSubmit={handleSubmit}>
              <DialogContent dividers>
                <Grid container spacing={2}>
                  <Grid item size={{ xs: 12 }}>
                    <CustomDropdownMui
                      label="Program Level"
                      name="program_level"
                      options={programLevelOptions}
                      custPlaceholder="Select Program Level"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomDropdownMui
                      label="Academic Division"
                      name="academic_name"
                      setAcademicId={setAcademicId}
                      resetDepartmentName="department_name"
                      options={academicDivisionsOptions}
                      custPlaceholder="Select Academic Division"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomDropdownMui
                      label="Department"
                      name="department_name"
                      options={departmentOptions}
                      custPlaceholder="Select Department Name"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomDropdownMui
                      label="Stream"
                      name="stream"
                      options={streamTypeOptions}
                      custPlaceholder="Select Stream Name"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Program"
                      name="program_name"
                      inputType="text"
                      custPlaceholder="Enter Program"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Description"
                      name="description"
                      inputType="textarea"
                      custPlaceholder="Enter Description"
                    />
                  </Grid>

                  {/* Degree */}
                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Degree
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Degree Name"
                      name="degree_name"
                      inputType="text"
                      custPlaceholder="Enter Degree Name"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Years"
                      name="degree_years"
                      inputType="text"
                      custPlaceholder="Enter Degree Years"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Semesters"
                      name="degree_semesters"
                      inputType="text"
                      custPlaceholder="Enter Degree Semesters"
                    />
                  </Grid>

                  {/* Stream */}
                  {/* <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Stream
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomMultipleCheckbox
                      name="stream_name"
                      label="Stream"
                      options={[
                        { value: "Aided", label: "Aided" },
                        { value: "Self-Supporting", label: "Self-Supporting" },
                      ]}
                      maxSelections={3}
                      allowSelectAll={true}
                      showChips={true}
                    />
                  </Grid> */}

                  {/* Credits */}
                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Credits
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomDynamicText
                      form={form}
                      label="Credits"
                      name="credits"
                    />
                  </Grid>

                  {/* Banner */}
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
                      uploadedFile={bannerFile}
                      setUploadedFile={(fileObj) => setBannerFile(fileObj)}
                      onFileUpload={(url) => setFieldValue("img_url", url)}
                      existingUrl={getProgramById?.data?.image_url}
                    />
                  </Grid>

                  {/* Program Outcomes */}
                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Program Outcomes
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <FieldArray name="programOutcomeCards">
                      {({ push, remove }) => (
                        <>
                          {values.programOutcomeCards.map((card, index) => (
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
                                  Program Outcome {index + 1}
                                </Typography>
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  label="Title"
                                  name={`programOutcomeCards.${index}.title`}
                                  inputType="text"
                                  custPlaceholder="Enter Title"
                                />
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  form={form}
                                  label="Description"
                                  name={`programOutcomeCards.${index}.description`}
                                  inputType="textarea"
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

                          {values?.programOutcomeCards?.length < 4 && (
                            <Grid
                              item
                              size={{ xs: 12 }}
                              sx={{ display: "flex", justifyContent: "end" }}
                            >
                              <Button
                                variant="outlined"
                                onClick={() =>
                                  push({ title: "", description: "" })
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
                          )}
                        </>
                      )}
                    </FieldArray>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      form={form}
                      label="Program Outcome Description"
                      name={`programOutcomeDecription`}
                      inputType="textarea"
                    />
                  </Grid>

                  {/* Syllabus */}
                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Syllabus
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      form={form}
                      label="Description"
                      name="syllabus_description"
                      inputType="textarea"
                      textareaHeight={90}
                    />
                  </Grid>

                  <Grid item size={{ xs: 12, md: 6 }}>
                    <PdfFileUploadComponent
                      name="syllabus_pdf_url"
                      uploadedFile={syllabusPdfFile}
                      setUploadedFile={(fileObj) => setSyllabusPdfFile(fileObj)}
                      onFileUpload={(url) =>
                        setFieldValue("syllabus_pdf_url", url)
                      }
                    />
                  </Grid>

                  {/* Value Added Courses */}
                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Values added Courses
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <FieldArray name="valueAddedCourseCards">
                      {({ push, remove }) => (
                        <>
                          {values.valueAddedCourseCards.map((card, index) => (
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
                                  Value Added Course {index + 1}
                                </Typography>
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  label="Title"
                                  name={`valueAddedCourseCards.${index}.title`}
                                  inputType="text"
                                  custPlaceholder="Enter Title"
                                />
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  form={form}
                                  label="Description"
                                  name={`valueAddedCourseCards.${index}.description`}
                                  inputType="textarea"
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
                                push({ title: "", description: "" })
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

                  {/* Future Career Paths */}
                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Future Career Paths
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <FieldArray name="futureCareerPathsCards">
                      {({ push, remove }) => (
                        <>
                          {values.futureCareerPathsCards.map((card, index) => (
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
                                  Future Career Path {index + 1}
                                </Typography>
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  label="Title"
                                  name={`futureCareerPathsCards.${index}.title`}
                                  inputType="text"
                                  custPlaceholder="Enter Title"
                                />
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  form={form}
                                  label="Career paths"
                                  name={`futureCareerPathsCards.${index}.career_paths`}
                                  inputType="textarea"
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
                                push({ title: "", career_paths: "" })
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

                  {/* Our Student Placed at */}
                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Our Student Placed at
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12, md: 6 }}>
                    <MultiFileUploadComponent
                      name="placed_company_logos"
                      uploadedFile={placedCompanyFiles}
                      setUploadedFile={(files) => setPlacedCompanyFiles(files)}
                      onFileUpload={(urls) =>
                        setFieldValue("placed_company_logos", urls)
                      }
                    />
                  </Grid>

                  {/* Beyond the Classroom */}
                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Beyond the Classroom
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Description"
                      name="beyond_classroom_description"
                      custPlaceholder="Enter Description"
                      inputType="textarea"
                    />
                  </Grid>
                  <Grid item size={{ xs: 12 }}>
                    <FieldArray name="beyond_classroom_subdescription_cards">
                      {({ push, remove }) => (
                        <>
                          {values?.beyond_classroom_subdescription_cards?.map(
                            (card, index) => (
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
                                    Beyond Classroom Sub Description Cards{" "}
                                    {index + 1}
                                  </Typography>
                                </Grid>

                                <Grid item size={{ xs: 12 }}>
                                  <CustomInputLogin
                                    label="Title"
                                    name={`beyond_classroom_subdescription_cards.${index}.title`}
                                    inputType="text"
                                    custPlaceholder="Enter Title"
                                  />
                                </Grid>

                                <Grid item size={{ xs: 12 }}>
                                  <CustomInputLogin
                                    // form={form}
                                    label="Description"
                                    name={`beyond_classroom_subdescription_cards.${index}.description`}
                                    custPlaceholder="Enter Description"
                                    inputType="textarea"
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
                                        "&:hover": {
                                          backgroundColor: "#3B4056",
                                        },
                                      }}
                                      type="button"
                                    >
                                      Remove Card
                                    </Button>
                                  </Grid>
                                )}
                              </Grid>
                            )
                          )}

                          <Grid
                            item
                            size={{ xs: 12 }}
                            sx={{ display: "flex", justifyContent: "end" }}
                          >
                            <Button
                              variant="outlined"
                              onClick={() =>
                                push({
                                  name: "",
                                  position: "",
                                  qualification: "",
                                  areaofspecilization: "",
                                  profilelink: "",
                                  faculty_img_url: null,
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

                  <Grid item size={{ xs: 12, md: 6 }}>
                    <FileUploadComponent
                      name="beyond_classroom_img_url"
                      uploadedFile={beyondClassroomFile}
                      setUploadedFile={(fileObj) =>
                        setBeyondClassroomFile(fileObj)
                      }
                      onFileUpload={(url) =>
                        setFieldValue("beyond_classroom_img_url", url)
                      }
                    />
                  </Grid>

                  {/* Faculty */}
                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Faculty
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <FieldArray name="facultyCards">
                      {({ push, remove }) => (
                        <>
                          {values.facultyCards.map((card, index) => (
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
                                  Faculty {index + 1}
                                </Typography>
                              </Grid>

                              <Grid item size={{ xs: 12, md: 6 }}>
                                <FileUploadComponent
                                  name={`facultyCards.${index}.faculty_img_url`}
                                  uploadedFile={facultyFiles[index]}
                                  setUploadedFile={(fileObj) => {
                                    setFacultyFiles((prev) => {
                                      const updated = [...prev];
                                      updated[index] = fileObj;
                                      return updated;
                                    });
                                  }}
                                  onFileUpload={(url) =>
                                    setFieldValue(
                                      `facultyCards.${index}.faculty_img_url`,
                                      url
                                    )
                                  }
                                />
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  label="Name"
                                  name={`facultyCards.${index}.name`}
                                  inputType="text"
                                  custPlaceholder="Enter Name"
                                />
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  form={form}
                                  label="Position"
                                  name={`facultyCards.${index}.position`}
                                  custPlaceholder="Enter Position"
                                />
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  form={form}
                                  label="Qualification"
                                  name={`facultyCards.${index}.qualification`}
                                  textareaHeight={90}
                                  custPlaceholder="Enter Qualification"
                                />
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  form={form}
                                  label="Area of specialization"
                                  name={`facultyCards.${index}.areaofspecilization`}
                                  textareaHeight={90}
                                  maxItems={5}
                                  custPlaceholder="Enter Area of specialization"
                                />
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  form={form}
                                  label="Profile Line"
                                  name={`facultyCards.${index}.profilelink`}
                                  textareaHeight={90}
                                  maxItems={5}
                                  custPlaceholder="Enter  Profile Link"
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
                                  name: "",
                                  position: "",
                                  qualification: "",
                                  areaofspecilization: "",
                                  profilelink: "",
                                  faculty_img_url: null,
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

                  {/* Admission & Eligibility */}
                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Admission & Eligibility
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Eligibility Criteria"
                      name="elgibility_criteria"
                      custPlaceholder="Enter Eligibility Criteria"
                      inputType="textarea"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Subject Requirements"
                      name="subject_requirements"
                      custPlaceholder="Enter Subject Requirements"
                      inputType="textarea"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="And/or any two subjects from the list below:"
                      name="any_two_subjects_list"
                      custPlaceholder="Enter And/or any two subjects from the list below:"
                      inputType="textarea"
                    />
                  </Grid>

                  <Grid item size={{ xs: 12, md: 6 }}>
                    <FileUploadComponent
                      name="administration_img_url"
                      uploadedFile={administrationFile}
                      setUploadedFile={(fileObj) =>
                        setAdministrationFile(fileObj)
                      }
                      onFileUpload={(url) =>
                        setFieldValue("administration_img_url", url)
                      }
                    />
                  </Grid>

                  {/* Student cards */}
                  {/* <Grid item size={{ xs: 12 }}>
                    <FieldArray name="studentcards">
                      {({ push, remove }) => (
                        <>
                          {values.studentcards.map((card, index) => (
                            <Grid container spacing={2} key={index} sx={{ mt: index > 0 ? 1 : 0, mb: 2 }}>
                              <Grid item size={{ xs: 12 }}>
                                <Typography variant="body2" sx={{ color: "#6B3C58" }}>
                                  Student {index + 1}
                                </Typography>
                              </Grid>

                              <Grid item size={{ xs: 12, md: 6 }}>
                                <CustomInputLogin label="Student Name" name={`studentcards.${index}.student_name`} inputType="text" custPlaceholder="Enter Student Name" />
                              </Grid>

                              <Grid item size={{ xs: 12, md: 6 }}>
                                <CustomInputLogin label="Program" name={`studentcards.${index}.program`} inputType="text" custPlaceholder="Enter Program" />
                              </Grid>

                              <Grid item size={{ xs: 12, md: 6 }}>
                                <CustomInputLogin label="Year" name={`studentcards.${index}.year`} inputType="number" custPlaceholder="Enter Year" />
                              </Grid>

                              <Grid item size={{ xs: 12, md: 6 }}>
                                <FileUploadComponent
                                  name={`studentcards.${index}.studentImage_url`}
                                  uploadedFile={studentFiles[index]}
                                  setUploadedFile={(fileObj) => {
                                    setStudentFiles((prev) => {
                                      const updated = [...prev];
                                      updated[index] = fileObj;
                                      return updated;
                                    });
                                  }}
                                  onFileUpload={(url) => setFieldValue(`studentcards.${index}.studentImage_url`, url)}
                                  existingUrl={values.studentcards[index]?.studentImage_url}
                                />
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin label="Description" name={`studentcards.${index}.description`} inputType="textarea" textareaHeight={90} />
                              </Grid>

                              {index > 0 && (
                                <Grid item size={{ xs: 12 }}>
                                  <Button variant="outlined" color="error" onClick={() => remove(index)} sx={{ textTransform: "none", color: "white", fontSize: "16px", boxShadow: "none", padding: { xs: "0px 20px", md: "0px 40px" }, minHeight: "40px", borderRadius: "23px", background: "#3B4056", "&:hover": { backgroundColor: "#3B4056" } }} type="button">
                                    Remove Card
                                  </Button>
                                </Grid>
                              )}
                            </Grid>
                          ))}

                          <Grid item size={{ xs: 12 }} sx={{ display: "flex", justifyContent: "end" }}>
                            <Button variant="outlined" onClick={() => push({ student_name: "", program: "", year: "", description: "", studentImage_url: null })} sx={{ textTransform: "none", color: "#6B3C58", borderColor: "#6B3C58", "&:hover": { backgroundColor: "#6B3C58", color: "white" } }} type="button">
                              Add Card
                            </Button>
                          </Grid>
                        </>
                      )}
                    </FieldArray>
                  </Grid> */}

                  {/* Submit / Cancel buttons */}
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
                          setBannerFile(null);
                          setSyllabusPdfFile(null);
                          setBeyondClassroomFile(null);
                          setAdministrationFile(null);
                          setStudentFiles([]);
                          setFacultyFiles([]);
                          setPlacedCompanyFiles([]);
                          setFacilityImagesFiles([]);
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

export default FacultyModal;
