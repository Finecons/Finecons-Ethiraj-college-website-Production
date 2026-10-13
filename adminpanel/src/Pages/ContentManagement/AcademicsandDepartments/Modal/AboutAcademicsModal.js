// import React from 'react';
// import {
//     Dialog,
//     DialogTitle,
//     DialogContent,
//     DialogActions,
//     IconButton,
//     Button,
//     Box,
//     Typography,
//     Grid,
// } from '@mui/material';
// import { Close as CloseIcon } from '@mui/icons-material';
// import { Formik, Form } from 'formik';

// import { FaPlus } from "react-icons/fa6";
// import { MdPayment } from 'react-icons/md';

// import CustomInputLogin from '../../../../Components/CustomInputLogin/CustomInputLogin';
// import "../../../../Components/ModalCss/BannerinputGetModal.css"

// // import '../BannerinputGetModal.css'; // Import external CSS
// import { MdCancel } from "react-icons/md";
// import * as Yup from 'yup';
// import { FiUpload } from 'react-icons/fi';
// import ActiveInactiveRadio from '../../../../Components/ActiveInactiveRadio/ActiveInactiveRadio';
// // import FileUploadComponent from '../../../../../Components/FileUploadComponent/FileUploadComponent';

// const AboutUsCardDesignModal = ({ open, onClose, setSubmittedValues, submittedValues }) => {
//             // const [uploadedFile, setUploadedFile] = useState(null);

//     return (
//         <Dialog
//             open={open}
//             onClose={onClose}
//             fullWidth
//             maxWidth="md"
//             className="custom-dialog"
//             style={{ borderRadius: "50px" }}
//             sx={{
//                 maxWidth: "600px",
//                 margin: "auto",
//                 "& .MuiPaper-root": {
//                     borderRadius: "14px", // Target the Paper component
//                 },
//             }}
//         // sx={{maxWidth:"600px",margin:"auto",borderRadius:"50px",".& MuiPaper-root-MuiDialog-paper":{borderRadius:"50px"}}}
//         >
//             <Box sx={{ position: 'relative' }}>
//                 <Box className="dialog-heading">
//                     <IconButton
//                         aria-label="Close"
//                         onClick={onClose}
//                         sx={{ position: 'absolute', top: 8, right: 8, color: 'text.secondary' }}
//                     >
//                         <MdCancel />
//                     </IconButton>
//                     <DialogTitle className="custom-dialog-title">

//                         <Box>
//                             <Typography className="custom-title-text" color="white" fontSize="16px">
//                                 Heading
//                             </Typography>
//                         </Box>
//                     </DialogTitle>
//                 </Box>

//                 <Formik
//                     initialValues={{
//                         title: '',
//                         content: '',

//                         status:"active"

//                     }}
//                     validationSchema={Yup.object({
//                         title: Yup.string().required('Title is required'),
//                         content: Yup.string().required('Content is required'),
//                         status: Yup.string().required('Subtext is required'),
//                     })}
//                     onSubmit={(values, { resetForm }) => {
//                         // setSubmittedValues([...submittedValues, values]);
//                         console.log(values, "values")
//                         resetForm();

//                     }}
//                 >
//                     {({ handleSubmit, setFieldValue,resetForm,values}) => (
//                         <Form onSubmit={handleSubmit}>
//                             <DialogContent dividers>
//                                 <Grid container spacing={2}>
//                                     {/* Title and Subtitle on the left, Content on the right */}

//                                     <Grid item xs={12} md={6}>
//                                         <CustomInputLogin
//                                             label="Title"
//                                             name="title"
//                                             inputType="text"
//                                             custPlaceholder="Enter Title"
//                                         />
//                                     </Grid>
//                                     <Grid item xs={12} md={6}>
//                                                 <ActiveInactiveRadio name="status"
//                                                     value={values.status} // Ensure this is correctly passed from Formik
//                                                     onChange={(value) => setFieldValue('status', value)}// Update the Formik state when the radio button changes
//                                                 />
//                                             </Grid>

//                                     <Grid item xs={12}>
//                                         <CustomInputLogin
//                                             label="Content"
//                                             name="content"
//                                             inputType="textarea"
//                                             custPlaceholder="Enter Subtext"
//                                         />
//                                     </Grid>

//                                 </Grid>

//                                 <Grid sx={{ display: "flex", justifyContent: 'end', mt: 4 }}>
//                                     <Grid>
//                                         <Button
//                                             onClick={() => {
//                                                 resetForm()

//                                             }}
//                                             variant="text"
//                                             // className="custom-clear-button"
//                                             sx={{
//                                                 // backgroundColor: "#C38F51",
//                                                 textTransform: "none",
//                                                 color: "white",
//                                                 fontSize: "16px",
//                                                 mr: "10px",
//                                                 // padding: "0px 40px",
//                                                 padding: { xs: "0px 20px", md: "0px 40px" },

//                                                 minHeight: "40px",
//                                                 borderRadius: "23px",
//                                                 background: "white",
//                                                 boxShadow: "none",
//                                                 color: "black",
//                                                 border: "1px solid black",
//                                                 "&:hover": {
//                                                     backgroundColor: "#3B4056",
//                                                     color: "white"
//                                                 },
//                                             }}
//                                         >
//                                             Cancel
//                                         </Button>
//                                         <Button
//                                             type="submit"
//                                             variant="contained"
//                                             // className="custom-ok-button"
//                                             sx={{
//                                                 // backgroundColor: "#C38F51",
//                                                 textTransform: "none",
//                                                 color: "white",
//                                                 fontSize: "16px",
//                                                 boxShadow: "none",

//                                                 // padding: "0px 40px",
//                                                 padding: { xs: "0px 20px", md: "0px 40px" },

//                                                 minHeight: "40px",
//                                                 borderRadius: "23px",
//                                                 background: "#C38F51 0% 0% no-repeat padding-box",
//                                                 "&:hover": {
//                                                     backgroundColor: "#3B4056",
//                                                     boxShadow: "none",

//                                                 },
//                                             }}
//                                         >
//                                             Submit
//                                         </Button>
//                                     </Grid>
//                                 </Grid>

//                             </DialogContent>

//                             {/* </DialogActions> */}
//                         </Form>
//                     )}
//                 </Formik>

//             </Box>
//         </Dialog >
//     );
// };

// export default AboutUsCardDesignModal;

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import { Close as CloseIcon, Description } from "@mui/icons-material";
import { Formik, Form } from "formik";

import { FaPlus } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";

import CustomInputLogin from "../../../../Components/CustomInputLogin/CustomInputLogin";
// import '../BannerinputGetModal.css'; // Import external CSS
import "../../../../Components/ModalCss/BannerinputGetModal.css";

import { MdCancel } from "react-icons/md";
import * as Yup from "yup";
import { FiUpload } from "react-icons/fi";
import FileUploadComponent from "../../../../Components/FileUploadComponent/FileUploadComponent";
import ActiveInactiveRadio from "../../../../Components/ActiveInactiveRadio/ActiveInactiveRadio";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import actions from "../../../../ReduxStore/actions";
import { clearCustomerId } from "../../../../ReduxStore/Slices/Operator/customerSlice";
import { clearTableGetId } from "../../../../ReduxStore/Slices/TableId/TableIdGetSlice";
import { setInitialStateOfgetAcademicsSectionById } from "../../../../ReduxStore/Slices/ContentManagement/AcademicsAndDepartments/getAcademicsSectionById";
import CustomDynamicTextArea from "../../../../Components/CustomDynamicTextArea/CustomDynamicTextArea";
// import { setInitialStateOfgetAcademicsSectionById } from "../../../../ReduxStore/Slices/ContentManagement/AboutUsSection/getAcademicsSectionById";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.array()
    .of(Yup.string().required("Description cannot be empty"))
    .min(1, "At least one description is required"),
  under_graduate_description: Yup.string().required(
    "Description is required"
  ),
  post_graduate_description: Yup.string().required(
    "Description is required"
  ),
  research_program_description: Yup.string().required(
    "Description is required"
  ),
  
  
});
const AboutAcademicsModal = ({
  open,
  onClose,
  setSubmittedValues,
  submittedValues,
}) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const dispatch = useDispatch();

  const [editResponseData, setEditResponseData] = useState();
  const TableId = useSelector((state) => state.Table.TableId);

  const { getAcademicsSectionById } = useSelector(
    (state) => state?.getAcademicsSectionById
  );

  console.log(getAcademicsSectionById, "getAcademicsSectionById");

  console.log(TableId, "TebleIddddd");

  // useEffect(() => {
  //   console.log(TableId, "TebleIddddd111");

  //   if (TableId) {
  //     console.log(TableId, "TebleIddddd222");

  //     const fetchData = async () => {
  //       const data1 = {
  //         data: {},
  //         method: "get",
  //         apiName: `getAcademicsSectionById/${TableId}`,
  //       };
  //       const response = await dispatch(actions.GETABOUTUSSECTIONBYID(data1));

  //       console.log(response, "responseresponse");

  //       if (
  //         response?.payload?.message ===
  //         "About Us section retrieved successfully."
  //       ) {
  //         console.log("hiiii");

  //         setEditResponseData(response?.payload?.data);
  //         setUploadedFile({
  //           fileUrl: response?.payload?.data.additional_data?.[0][0]?.banner,
  //           type: "img",
  //           progress: 100,
  //         });
  //         // console.log(response?.payload?.data.additional_data?.[0]?.banner,"yhfuwrfrkjrw")
  //       }
  //     };
  //     fetchData();
  //   }
  // }, [open]);

  const handleClose = () => {
    dispatch(setInitialStateOfgetAcademicsSectionById());
    dispatch(clearCustomerId(null));
    dispatch(clearTableGetId(null));
    setUploadedFile(null);
    onClose();
  };

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);

    const data1 = {
      data: {
        section_name: "aboutAcademics section",
        heading: " ",
        sub_heading: null,
        content: " ",
        additional_data: [
          {
            // banner: values?.img_url || uploadedFile?.fileUrl || null,
            title: values.title,
            description: values.description,
            under_graduate_description: values.under_graduate_description,
            post_graduate_description: values.post_graduate_description,
            research_program_description: values.research_program_description,
          },
        ],
      },
      method: getAcademicsSectionById?.data?.section_id ? "put" : "Post",
      apiName: getAcademicsSectionById?.data?.section_id
        ? `updateAcademicsSection/${getAcademicsSectionById?.data?.section_id}`
        : `addAcademicsSection`,
    };
    const responseData = await dispatch(
      getAcademicsSectionById?.data?.section_id
        ? actions.UPDATEACADEMICSSECTION(data1)
        : actions.ADDACADEMICSSECTION(data1)
    );
    console.log(responseData?.payload?.message, "1111111");

    if (
      responseData?.payload?.message ===
      getAcademicsSectionById?.data?.section_id
        ? "About Us section updated successfully."
        : "About Us section added successfully."
    ) {
      // handlePreviewCloseModal()

      // setTimeout(() => {
      //     setLoading(false)
      //     onClose()

      //     handlePreviewCloseModal()

      //     resetForm()

      //     setUploadedFile(null)

      // }, 2500)
      console.log("hiiiiiiii");
      // toast.success("Programme level updated successfully.");

      setTimeout(() => {
        setLoading(false);
        // onClose();
        handleClose();

        // handlePreviewCloseModal();
      }, 2000);

      // setTimeout(() => {
      // setLoading(false)
      toast.success(responseData?.payload?.message);

      dispatch(clearCustomerId(null));
      dispatch(clearTableGetId(null));

      resetForm();

      setUploadedFile(null);
      // }, 1500);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 2500);

      toast.error(responseData?.payload?.message);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      className="custom-dialog"
      sx={{
        maxWidth: "600px",
        margin: "auto",
        "& .MuiPaper-root": {
          borderRadius: "14px", // Target the Paper component
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
                About Academics
              </Typography>
            </Box>
          </DialogTitle>
        </Box>

        <Formik
          enableReinitialize
          initialValues={{
            title: getAcademicsSectionById?.data?.additional_data?.[0]?.title || "",
            description: getAcademicsSectionById?.data?.additional_data?.[0]
              ?.description || [""],
            under_graduate_description:
              getAcademicsSectionById?.data?.additional_data?.[0]
                ?.under_graduate_description || "",
            post_graduate_description:
              getAcademicsSectionById?.data?.additional_data?.[0]
                ?.post_graduate_description || "",
            research_program_description:
              getAcademicsSectionById?.data?.additional_data?.[0]
                ?.research_program_description || "",
          }}
        validationSchema={validationSchema}
          // validationSchema={Yup.object({
          //   levelOfStudy: Yup.string().required("Level Of Study is required"),
          //   description: Yup.string().required("Description Text is required"),
          // })}
          onSubmit={
            handleSubmit

            // resetForm();
          }
        >
          {({ handleSubmit, setFieldValue, resetForm, values }) => (
            <Form onSubmit={handleSubmit}>
              <DialogContent dividers>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 12 }}>
                    <CustomInputLogin
                      label="Title"
                      name="title"
                      inputType="text"
                      custPlaceholder="Enter Academic Division"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 12 }}>
                    <CustomDynamicTextArea
                      label="Description"
                      name="description"
                      inputType="text"
                      custPlaceholder="Enter Academic Division"
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
                      Start your exploration here
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 12 }}>
                    <CustomInputLogin
                      label="Under Graduate Description"
                      name="under_graduate_description"
                      inputType="textarea"
                      custPlaceholder="Enter Under Graduate Description"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 12 }}>
                    <CustomInputLogin
                      label="Post Graduate Description"
                      name="post_graduate_description"
                      inputType="textarea"
                      custPlaceholder="Enter Post Graduate Description"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 12 }}>
                    <CustomInputLogin
                      label="Research Program Description"
                      name="research_program_description"
                      inputType="textarea"
                      custPlaceholder="Enter Research Program Description"
                    />
                  </Grid>

                  <Grid
                    size={{ xs: 12 }}
                    sx={{ display: "flex", justifyContent: "end", mt: 4 }}
                  >
                    <Grid>
                      <Button
                        onClick={() => {
                          resetForm();
                          setUploadedFile(null);
                          handleClose();
                        }}
                        variant="text"
                        // className="custom-clear-button"
                        sx={{
                          // backgroundColor: "#C38F51",
                          textTransform: "none",
                          color: "white",
                          fontSize: "16px",
                          mr: "10px",
                          // padding: "0px 40px",
                          padding: { xs: "0px 20px", md: "0px 40px" },

                          minHeight: "40px",
                          borderRadius: "23px",
                          background: "white",
                          boxShadow: "none",
                          color: "black",
                          border: "1px solid black",
                          "&:hover": {
                            backgroundColor: "#3B4056",
                            color: "white",
                          },
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        variant="contained"
                        // className="custom-ok-button"
                        sx={{
                          // backgroundColor: "#C38F51",
                          textTransform: "none",
                          color: "white",
                          fontSize: "16px",
                          boxShadow: "none",

                          // padding: "0px 40px",
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
                    </Grid>
                  </Grid>
                </Grid>
              </DialogContent>

              {/* </DialogActions> */}
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

export default AboutAcademicsModal;
