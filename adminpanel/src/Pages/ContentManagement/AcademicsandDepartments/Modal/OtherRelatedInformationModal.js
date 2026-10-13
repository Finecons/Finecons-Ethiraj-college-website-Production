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
import { Formik, Form, FieldArray } from "formik";

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
import MultiFileUploadComponent from "../../../../Components/FileUploadComponent/MultiFileUploadComponent";
// import { setInitialStateOfgetAcademicsSectionById } from "../../../../ReduxStore/Slices/ContentManagement/AboutUsSection/getAcademicsSectionById";

const OtherRelatedInformationModal = ({
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

  useEffect(() => {
    if (!open) return;

    // -----------------------------
    // 1️⃣ Student Cards (Multiple)
    // -----------------------------
    const otherRelatedInformation =
      getAcademicsSectionById?.data?.additional_data?.cards
        ?.otherRelatedInformation || [];
    console.log(otherRelatedInformation, "fileeeeeee");
    setUploadedFile(
      otherRelatedInformation.map((c) => ({
        fileUrl: c.image_url || null,
        type: c.image_url,
        progress: 100,
      }))
    );
  }, [open, getAcademicsSectionById]);
  console.log(uploadedFile, "uploadedFile");

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
        section_name: "otherRelatedInformation section",
        heading: " ",
        sub_heading: null,
        content: " ",
        additional_data: {
          cards: {
            otherRelatedInformation: values?.otherRelatedInformation,
          },
        },
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
                Other Related Information
              </Typography>
            </Box>
          </DialogTitle>
        </Box>

        <Formik
          enableReinitialize
          initialValues={{
            otherRelatedInformation:
              getAcademicsSectionById?.data?.additional_data?.cards
                ?.otherRelatedInformation?.length > 0
                ? getAcademicsSectionById?.data?.additional_data?.cards
                    ?.otherRelatedInformation
                : [
                    {
                      title: "",
                      description: "",

                      button_text: "",
                      image_url: null,
                    },
                  ],
          }}
          validationSchema={Yup.object().shape({
            otherRelatedInformation: Yup.array().of(
              Yup.object().shape({
                title: Yup.string().required("Title is required"),
                description: Yup.string().required("Description is required"),
                button_text: Yup.string().required("Button text is required"),

                // imagggggge_url: Yup.string().required("Image is required"),
                image_url: Yup.string()
                  .nullable()
                  .required("Image is required"),
              })
            ),
          })}
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
                  <Grid item size={{ xs: 12 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        color: "var(--main-color)",
                        mt: "20px",
                      }}
                    >
                      Other Related Information
                    </Typography>
                  </Grid>

                  <Grid item size={{ xs: 12 }}>
                    <FieldArray name="otherRelatedInformation">
                      {({ push, remove }) => (
                        <>
                          {values.otherRelatedInformation.map((card, index) => (
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
                                  Other Related Information {index + 1}
                                </Typography>
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  label="Title"
                                  name={`otherRelatedInformation.${index}.title`}
                                  inputType="text"
                                  custPlaceholder="Enter Title"
                                />
                              </Grid>

                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  // form={form}
                                  label="Description"
                                  name={`otherRelatedInformation.${index}.description`}
                                  textareaHeight={90}
                                  inputType="textarea"
                                  // maxItems={MAX_RESOURCE_PERSONS}
                                />
                              </Grid>
                              <Grid item size={{ xs: 12 }}>
                                <CustomInputLogin
                                  // form={form}
                                  label="Button Text"
                                  name={`otherRelatedInformation.${index}.button_text`}
                                  textareaHeight={90}
                                  // maxItems={MAX_RESOURCE_PERSONS}
                                />
                              </Grid>
                              <FileUploadComponent
                                name={`otherRelatedInformation.${index}.image_url`}
                                uploadedFile={uploadedFile?.[index]}
                                setUploadedFile={(fileObj) => {
                                  setUploadedFile((prev) => {
                                    const updated = [...prev];
                                    updated[index] = fileObj;
                                    return updated;
                                  });
                                }}
                                onFileUpload={(url) => {
                                  setFieldValue(
                                    `otherRelatedInformation.${index}.image_url`,
                                    url
                                  );
                                }}
                              />

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
                                  button_text: "",
                                  image_url: null,
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

export default OtherRelatedInformationModal;
