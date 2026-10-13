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
import { Formik, Form } from "formik";
import CustomInputLogin from "../../../../Components/CustomInputLogin/CustomInputLogin";
import "../../../../Components/ModalCss/BannerinputGetModal.css";
import { MdCancel } from "react-icons/md";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import actions from "../../../../ReduxStore/actions";
import { clearCustomerId } from "../../../../ReduxStore/Slices/Operator/customerSlice";
import { clearTableGetId } from "../../../../ReduxStore/Slices/TableId/TableIdGetSlice";
import { setInitialStateOfgetResearchSectionById } from "../../../../ReduxStore/Slices/ContentManagement/ResearchSection/getResearchSectionById";
import PdfFileUploadComponent from "../../../../Components/FileUploadComponent/PdfFileUploadComponent";

const ECRICPhDFellowshipsModal = ({
  open,
  onClose,
  setSubmittedValues,
  submittedValues,
}) => {
  const dispatch = useDispatch();

  const TableId = useSelector((state) => state.Table.TableId);

  const { getResearchSectionById } = useSelector(
    (state) => state?.getResearchSectionById
  );

  console.log(getResearchSectionById, "getResearchSectionById");
  console.log(TableId, "TebleIddddd");

  const handleClose = () => {
    dispatch(setInitialStateOfgetResearchSectionById());
    dispatch(clearCustomerId(null));
    dispatch(clearTableGetId(null));
    onClose();
  };

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);

    const data1 = {
      data: {
        page_name: "FellowshipsAndProjects Page",
        section_name: "ECRICPhDFellowships section",
        heading: " ",
        sub_heading: null,
        content: " ",
        additional_data: {
          guidelines: values?.guidelines?.fileUrl,
          apply_here: values?.apply_here?.fileUrl,
        },
      },
      method: getResearchSectionById?.data?.section_id ? "put" : "Post",
      apiName: getResearchSectionById?.data?.section_id
        ? `updateResearchSection/${getResearchSectionById?.data?.section_id}`
        : `addResearchSection`,
    };
    const responseData = await dispatch(
      getResearchSectionById?.data?.section_id
        ? actions.UPDATERESEARCHSECTION(data1)
        : actions.ADDRESEARCHSECTION(data1)
    );
    console.log(responseData?.payload?.message, "1111111");

    if (
      responseData?.payload?.message === getResearchSectionById?.data?.section_id
        ? "Research section updated successfully."
        : "Research section added successfully."
    ) {
      console.log("hiiiiiiii");

      setTimeout(() => {
        setLoading(false);
        handleClose();
      }, 2000);

      toast.success(responseData?.payload?.message);

      resetForm();
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
                ECRIC PhD Fellowships
              </Typography>
            </Box>
          </DialogTitle>
        </Box>

        <Formik
          enableReinitialize
          initialValues={{
            guidelines: getResearchSectionById?.data?.additional_data?.guidelines
              ? {
                fileUrl: getResearchSectionById?.data?.additional_data?.guidelines,
                progress: 100,
                type: "pdf",
              }
              : null,
            apply_here: getResearchSectionById?.data?.additional_data?.apply_here
              ? {
                fileUrl: getResearchSectionById?.data?.additional_data?.apply_here,
                progress: 100,
                type: "pdf",
              }
              : null,
          }}
          // validationSchema={Yup.object().shape({
          //   guidelines: Yup.object()
          //     .nullable()
          //     .required("Guidelines PDF is required")
          //     .shape({
          //       fileUrl: Yup.string().required("pdf file is required"),
          //       type: Yup.string().required(),
          //       progress: Yup.number().required(),
          //     }),
          //   apply_here: Yup.object()
          //     .nullable()
          //     .required("Apply here PDF is required")
          //     .shape({
          //       fileUrl: Yup.string().required("pdf file is required"),
          //       type: Yup.string().required(),
          //       progress: Yup.number().required(),
          //     }),
          // })}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, setFieldValue, resetForm, values }) => (
            <Form onSubmit={handleSubmit}>
              <DialogContent dividers>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 12 }}>
                    {/* Guidelines Section */}
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                      <Grid item size={{ xs: 12 }}>
                        <Typography
                          variant="body2"
                          sx={{ color: "#6B3C58", fontWeight: 600 }}
                        >
                          Guidelines
                        </Typography>
                      </Grid>
                      <Grid item size={{ xs: 12 }}>
                        <PdfFileUploadComponent
                          name="guidelines"
                          uploadedFile={values.guidelines}
                          setUploadedFile={(file) => {
                            setFieldValue("guidelines", file);
                            console.log(file, "guidelines file");
                          }}
                          onFileUpload={(file) =>
                            setFieldValue("guidelines", file)
                          }
                        />
                      </Grid>
                    </Grid>

                    {/* Apply here Section */}
                    <Grid container spacing={2}>
                      <Grid item size={{ xs: 12 }}>
                        <Typography
                          variant="body2"
                          sx={{ color: "#6B3C58", fontWeight: 600 }}
                        >
                          Apply here
                        </Typography>
                      </Grid>
                      <Grid item size={{ xs: 12 }}>
                        <PdfFileUploadComponent
                          name="apply_here"
                          uploadedFile={values.apply_here}
                          setUploadedFile={(file) => {
                            setFieldValue("apply_here", file);
                            console.log(file, "apply here file");
                          }}
                          onFileUpload={(file) =>
                            setFieldValue("apply_here", file)
                          }
                        />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid
                    size={{ xs: 12 }}
                    sx={{ display: "flex", justifyContent: "end", mt: 4 }}
                  >
                    <Grid>
                      <Button
                        onClick={() => {
                          resetForm();
                          handleClose();
                        }}
                        variant="text"
                        sx={{
                          textTransform: "none",
                          color: "white",
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

export default ECRICPhDFellowshipsModal;
