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
import { Formik, Form, FieldArray } from "formik";

import CustomInputLogin from "../../../../Components/CustomInputLogin/CustomInputLogin";
import "../../../../Components/ModalCss/BannerinputGetModal.css";

import { MdCancel } from "react-icons/md";
import { FaPlus, FaTrash } from "react-icons/fa";
import * as Yup from "yup";
import FileUploadComponent from "../../../../Components/FileUploadComponent/FileUploadComponent";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import actions from "../../../../ReduxStore/actions";
import { clearCustomerId } from "../../../../ReduxStore/Slices/Operator/customerSlice";
import { clearTableGetId } from "../../../../ReduxStore/Slices/TableId/TableIdGetSlice";
import { setInitialStateOfgetCampuslifeSectionById } from "../../../../ReduxStore/Slices/ContentManagement/CampusLife/getCampuslifeSectionById";
import CustomDropdownMui from "../../../../Components/CustomDropDown/CustomDropdown";

const imageTypeOptions = [
  { label: "Long Rectangle", value: "longrectangle" },
  { label: "Landscape", value: "landscape" },
  { label: "Portrait", value: "portrait" },
  { label: "Small Portrait", value: "smallportrait" },

];

const validationSchema = Yup.object().shape({
  heading: Yup.string().required("Heading is required"),
  content: Yup.string().required("Content is required"),
  images: Yup.array().of(
    Yup.object().shape({
      image_type: Yup.string().required("Image type is required"),
      image_url: Yup.string()
        .nullable()
        .required("Image is required"),
      image_description: Yup.string().required("Image description is required"),
    }),
  ),
});

const EventsAndAnnualActivitiesModal = ({ open, onClose }) => {
  const [uploadedFiles, setUploadedFiles] = useState({});
  const dispatch = useDispatch();

  const { getCampuslifeSectionById } = useSelector(
    (state) => state?.getCampuslifeSectionById,
  );

  useEffect(() => {
    if (!open) return;

    if (getCampuslifeSectionById?.data?.additional_data) {
      const newUploadedFiles = {};
      getCampuslifeSectionById?.data?.additional_data?.images?.forEach(
        (img, idx) => {
          if (img?.image_url) {
            newUploadedFiles[idx] = {
              fileUrl: img?.image_url,
              type: "img",
              progress: 100,
            };
          }
        },
      );
      setUploadedFiles(newUploadedFiles);
    }
  }, [open, getCampuslifeSectionById]);

  const handleClose = () => {
    dispatch(setInitialStateOfgetCampuslifeSectionById());
    dispatch(clearCustomerId(null));
    dispatch(clearTableGetId(null));
    setUploadedFiles({});
    onClose();
  };

  const handleSubmit = async (values, { resetForm }) => {
    const data1 = {
      data: {
        page_name: "student unions",
        section_name: "events and annual activities section",
        heading: values.heading,
        sub_heading: "",
        content: values.content,
        additional_data: {
          images: values.images.map((img) => ({
            image_type: img.image_type,
            image_url:
              img.image_url ||
              uploadedFiles[values.images.indexOf(img)]?.fileUrl ||
              null,
            image_description: img.image_description,
          })),
        },
      },
      method: getCampuslifeSectionById?.data?.section_id ? "put" : "Post",
      apiName: getCampuslifeSectionById?.data?.section_id
        ? `updateCampusLifeSection/${getCampuslifeSectionById?.data?.section_id}`
        : `addCampusLifeSection`,
    };
    const responseData = await dispatch(
      getCampuslifeSectionById?.data?.section_id
        ? actions.UPDATECAMPUSLIFESECTION(data1)
        : actions.ADDCAMPUSLIFESECTION(data1),
    );
    console.log(responseData?.payload?.message, "response from API");

    if (
      responseData?.payload?.message ===
      (getCampuslifeSectionById?.data?.section_id
        ? "Campus Life section updated successfully."
        : "Campus Life section added successfully.")
    ) {
      setTimeout(() => {
        handleClose();
      }, 2000);

      toast.success(responseData?.payload?.message);

      dispatch(clearCustomerId(null));
      dispatch(clearTableGetId(null));

      resetForm();

      setUploadedFiles({});
    } else {
      setTimeout(() => {}, 2500);

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
                Events & Annual Activities
              </Typography>
            </Box>
          </DialogTitle>
        </Box>

        <Formik
          enableReinitialize
          initialValues={{
            heading: getCampuslifeSectionById?.data?.heading || "",
            content: getCampuslifeSectionById?.data?.content || "",
            images: getCampuslifeSectionById?.data?.additional_data?.images || [
              { image_type: "", image_url: "", image_description: "" },
            ],
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            handleSubmit,
            setFieldValue,
            resetForm,
            values,
            errors,
            touched,
          }) => (
            <Form onSubmit={handleSubmit}>
              <DialogContent dividers>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Heading"
                      name="heading"
                      type="text"
                      placeholder="Enter heading"
                      error={!!errors.heading && touched.heading}
                      helperText={touched.heading && errors.heading}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Content"
                      name="content"
                      type="textarea"
                      placeholder="Enter content"
                      multiline
                      rows={4}
                      error={!!errors.content && touched.content}
                      helperText={touched.content && errors.content}
                    />
                  </Grid>
                  <FieldArray name="images">
                    {(fieldArrayProps) => {
                      const { push, remove } = fieldArrayProps;

                      return (
                        <Box sx={{ width: "100%" }}>
                          {values.images.map((img, index) => (
                            <Box
                              key={index}
                              sx={{
                                mb: 3,
                                pb: 3,
                                border: "1px solid #e0e0e0",
                                borderRadius: "8px",
                                p: 2,
                                backgroundColor: "#f9f9f9",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  mb: 2,
                                }}
                              >
                                <Typography
                                  variant="subtitle1"
                                  sx={{ fontWeight: "600" }}
                                >
                                  Image {index + 1}
                                </Typography>
                                {values.images.length > 1 && (
                                  <Button
                                    type="button"
                                    onClick={() => remove(index)}
                                    sx={{
                                      color: "red",
                                      minWidth: "40px",
                                      p: "8px",
                                    }}
                                    startIcon={<FaTrash />}
                                  >
                                    Remove
                                  </Button>
                                )}
                              </Box>

                              <Grid container spacing={2}>
                                <Grid size={{ xs: 12 }}>
                                  <CustomDropdownMui
                                    label="Image Type"
                                    name={`images.${index}.image_type`}
                                    options={imageTypeOptions}
                                    custPlaceholder="Select Image Type"
                                    error={
                                      touched.images?.[index]?.image_type &&
                                      !!errors.images?.[index]?.image_type
                                    }
                                    helperText={
                                      touched.images?.[index]?.image_type &&
                                      errors.images?.[index]?.image_type
                                    }
                                  />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                  <FileUploadComponent
                                    name={`images.${index}.image_url`}
                                    uploadedFile={uploadedFiles[index] || null}
                                    setUploadedFile={(fileObj) => {
                                      setUploadedFiles({
                                        ...uploadedFiles,
                                        [index]: fileObj,
                                      });
                                    }}
                                    onFileUpload={(url) => {
                                      setFieldValue(
                                        `images.${index}.image_url`,
                                        url,
                                      );
                                    }}
                                  />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                  <CustomInputLogin
                                    label="Image Description"
                                    name={`images.${index}.image_description`}
                                    type="text"
                                    placeholder="Enter image description"
                                    multiline
                                    rows={2}
                                    error={
                                      touched.images?.[index]?.image_description &&
                                      !!errors.images?.[index]?.image_description
                                    }
                                    helperText={
                                      touched.images?.[index]?.image_description &&
                                      errors.images?.[index]?.image_description
                                    }
                                  />
                                </Grid>
                              </Grid>
                            </Box>
                          ))}

                          <Grid size={{ xs: 12 }} sx={{ mt: 2, mb: 3 }}>
                            <Button
                              type="button"
                              onClick={() =>
                                push({
                                  image_type: "",
                                  image_url: "",
                                  image_description: "",
                                })
                              }
                              variant="outlined"
                              startIcon={<FaPlus />}
                              sx={{
                                textTransform: "none",
                                color: "var(--main-color)",
                                borderColor: "var(--main-color)",
                                "&:hover": {
                                  backgroundColor: "rgba(195, 143, 81, 0.1)",
                                  borderColor: "var(--main-color)",
                                },
                              }}
                            >
                              Add Image
                            </Button>
                          </Grid>
                        </Box>
                      );
                    }}
                  </FieldArray>
                  <Grid
                    size={{ xs: 12 }}
                    sx={{ display: "flex", justifyContent: "end", mt: 4 }}
                  >
                    <Grid>
                      <Button
                        onClick={() => {
                          resetForm();
                          setUploadedFiles({});
                          handleClose();
                        }}
                        variant="text"
                        sx={{
                          textTransform: "none",
                          fontSize: "16px",
                          mr: "10px",
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
                    </Grid>
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

export default EventsAndAnnualActivitiesModal;
