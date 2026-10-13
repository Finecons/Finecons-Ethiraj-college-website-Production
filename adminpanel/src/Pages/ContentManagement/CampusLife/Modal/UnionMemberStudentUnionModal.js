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

const validationSchema = Yup.object().shape({
  members: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Name is required"),
      position: Yup.string().required("Position is required"),
      member_image: Yup.string()
        .nullable()
        .required("Member image is required"),
    }),
  ),
});
const UnionMemberStudentUnionModal = ({ open, onClose }) => {
  const [uploadedFiles, setUploadedFiles] = useState({});
  const dispatch = useDispatch();

  const { getCampuslifeSectionById } = useSelector(
    (state) => state?.getCampuslifeSectionById,
  );

  useEffect(() => {
    if (!open) return;

    if (getCampuslifeSectionById?.data?.additional_data) {
      const newUploadedFiles = {};
      getCampuslifeSectionById?.data?.additional_data?.members?.forEach(
        (member, idx) => {
          if (member?.member_image) {
            newUploadedFiles[idx] = {
              fileUrl: member?.member_image,
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
        section_name: "union member section",
        heading: "",

        sub_heading: "",
        content: "",
        additional_data: {
          year: values?.year,
          description: values?.content,

          members: values.members.map((member) => ({
            name: member.name,
            position: member.position,
            member_image:
              member.member_image ||
              uploadedFiles[values.members.indexOf(member)]?.fileUrl ||
              null,
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
      getCampuslifeSectionById?.data?.section_id
        ? "Campus Life section updated successfully."
        : "Campus Life section added successfully."
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
                Union Members
              </Typography>
            </Box>
          </DialogTitle>
        </Box>

        <Formik
          enableReinitialize
          initialValues={{
            year: getCampuslifeSectionById?.data?.additional_data?.year || "",
            content: getCampuslifeSectionById?.data?.additional_data?.description || "",
            members: getCampuslifeSectionById?.data?.additional_data?.members || [
              { name: "", position: "", member_image: "" },
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
                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Year"
                      name="year"
                      inputType="text"
                      custPlaceholder="Ex: 2024-2025"
                    />
                  </Grid>
                  <Grid item size={{ xs: 12 }}>
                    <CustomInputLogin
                      label="Desscription"
                      name="content"
                      inputType="textarea"
                      custPlaceholder="Entet Description"
                    />
                  </Grid>

                  <FieldArray name="members">
                    {(fieldArrayProps) => {
                      const { push, remove } = fieldArrayProps;

                      return (
                        <Box sx={{ width: "100%" }}>
                          {values.members.map((member, index) => (
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
                                  Member {index + 1}
                                </Typography>
                                {values.members.length > 1 && (
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
                                <Grid size={{ xs: 12, md: 6 }}>
                                  <CustomInputLogin
                                    label="Member Name"
                                    name={`members.${index}.name`}
                                    inputType="text"
                                    custPlaceholder="Enter member name"
                                    error={
                                      touched.members?.[index]?.name &&
                                      !!errors.members?.[index]?.name
                                    }
                                    helperText={
                                      touched.members?.[index]?.name &&
                                      errors.members?.[index]?.name
                                    }
                                  />
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                  <CustomInputLogin
                                    label="Position"
                                    name={`members.${index}.position`}
                                    inputType="text"
                                    custPlaceholder="e.g., President, Vice President"
                                    error={
                                      touched.members?.[index]?.position &&
                                      !!errors.members?.[index]?.position
                                    }
                                    helperText={
                                      touched.members?.[index]?.position &&
                                      errors.members?.[index]?.position
                                    }
                                  />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                  <FileUploadComponent
                                    name={`members.${index}.member_image`}
                                    uploadedFile={uploadedFiles[index] || null}
                                    setUploadedFile={(fileObj) => {
                                      setUploadedFiles({
                                        ...uploadedFiles,
                                        [index]: fileObj,
                                      });
                                    }}
                                    onFileUpload={(url) => {
                                      setFieldValue(
                                        `members.${index}.member_image`,
                                        url,
                                      );
                                    }}
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
                                  name: "",
                                  position: "",
                                  member_image: "",
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
                              Add Member
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

export default UnionMemberStudentUnionModal;
