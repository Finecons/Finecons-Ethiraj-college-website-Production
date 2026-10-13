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
import { setInitialStateOfgetAboutUsSectionById } from "../../../../ReduxStore/Slices/ContentManagement/AboutUsSection/getAboutUsSectionById";
import CustomDynamicTextArea from "../../../../Components/CustomDynamicTextArea/CustomDynamicTextArea";

const AboutFounderModal = ({
  open,
  onClose,
  setSubmittedValues,
  submittedValues,
}) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const dispatch = useDispatch();

  const [editResponseData, setEditResponseData] = useState();
  const TableId = useSelector((state) => state.Table.TableId);

  const { getAboutUsSectionById } = useSelector(
    (state) => state?.getAboutUsSectionById
  );

  console.log(getAboutUsSectionById, "getAboutUsSectionById");

  console.log(TableId, "TebleIddddd");

  // useEffect(() => {
  //   console.log(TableId, "TebleIddddd111");

  //   if (TableId) {
  //     console.log(TableId, "TebleIddddd222");

  //     const fetchData = async () => {
  //       const data1 = {
  //         data: {},
  //         method: "get",
  //         apiName: `getAboutUsSectionById/${TableId}`,
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
  //           fileUrl: response?.payload?.data.additional_data[0]?.banner,
  //           type: "img",
  //           progress: 100,
  //         });
  //         // console.log(response?.payload?.data.additional_data[0]?.banner,"yhfuwrfrkjrw")
  //       }
  //     };
  //     fetchData();
  //   }
  // }, [open]);

  const handleClose = () => {
    dispatch(setInitialStateOfgetAboutUsSectionById());
    setUploadedFile(null);
    onClose();
    dispatch(clearCustomerId(null));
    dispatch(clearTableGetId(null));
  };

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);

    const data1 = {
      data: {
        section_name: "aboutFounder section",
        heading: " ",
        sub_heading: null,
        content: " ",
        additional_data: {
          subtext: values?.subtext,
          description: values?.description,
        },
      },
      method: getAboutUsSectionById?.data?.section_id ? "put" : "Post",
      apiName: getAboutUsSectionById?.data?.section_id
        ? `updateAboutUsSection/${getAboutUsSectionById?.data?.section_id}`
        : `addAboutUsSection`,
    };
    const responseData = await dispatch(
      getAboutUsSectionById?.data?.section_id
        ? actions.UPDATEABOUTUSSECTION(data1)
        : actions.ADDABOUTUSSECTION(data1)
    );
    console.log(responseData?.payload?.message, "1111111");

    if (
      responseData?.payload?.message === getAboutUsSectionById?.data?.section_id
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
        dispatch(clearCustomerId(null));
        dispatch(clearTableGetId(null));

        // handlePreviewCloseModal();
      }, 2000);

      // setTimeout(() => {
      // setLoading(false)
      toast.success(responseData?.payload?.message);

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
                About Founder
              </Typography>
            </Box>
          </DialogTitle>
        </Box>

        <Formik
          enableReinitialize
          initialValues={{
            // img_url: getAboutUsSectionById?.data?.image_url || null,
            // img_url: null,
            subtext: getAboutUsSectionById?.data?.additional_data?.subtext || [
              "",
            ],
            description: getAboutUsSectionById?.data?.additional_data
              ?.description || [""],

            // getDepartmentById?.data?.additional_data
            //               ?.about_department || [""],
          }}
          validationSchema={Yup.object({
            subtext: Yup.array()
              .of(
                Yup.string()
                  .trim()
                  .required("Text is required")
              )
              .min(1, "At least one text is required")
              .required("Text is required"),
            description: Yup.array()
              .of(
                Yup.string()
                  .trim()
                  .required("Text is required")
              )
              .min(1, "At least one text is required")
              .required("Text is required"),
          })}
          onSubmit={
            handleSubmit

            // resetForm();
          }
        >
          {({ handleSubmit, setFieldValue, resetForm, values, form }) => (
            <Form onSubmit={handleSubmit}>
              <DialogContent dividers>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 12 }}>
                    <CustomDynamicTextArea
                      form={form}
                      label="Sub Title"
                      name="subtext"
                      maxItems={5}
                      textareaHeight={90}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 12 }}>
                    <CustomDynamicTextArea
                      form={form}
                      label="Description"
                      name="description"
                      maxItems={5}
                      textareaHeight={90}
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

export default AboutFounderModal;
