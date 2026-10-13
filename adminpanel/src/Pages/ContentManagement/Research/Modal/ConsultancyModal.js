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

const ConsultancyModal = ({
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
        section_name: "Consultancy section",
        heading: " ",
        sub_heading: null,
        content: " ",
        additional_data: {
          consultancy_policy: values?.consultancy_policy?.fileUrl,
          past_projects: values?.past_projects?.fileUrl,
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
                Consultancy
              </Typography>
            </Box>
          </DialogTitle>
        </Box>

        <Formik
          enableReinitialize
          initialValues={{
            consultancy_policy: getResearchSectionById?.data?.additional_data?.consultancy_policy
              ? {
                fileUrl: getResearchSectionById?.data?.additional_data?.consultancy_policy,
                progress: 100,
                type: "pdf",
              }
              : null,
            past_projects: getResearchSectionById?.data?.additional_data?.past_projects
              ? {
                fileUrl: getResearchSectionById?.data?.additional_data?.past_projects,
                progress: 100,
                type: "pdf",
              }
              : null,
          }}
          // validationSchema={Yup.object().shape({
          //   consultancy_policy: Yup.object()
          //     .nullable()
          //     .required("Consultancy Policy PDF is required")
          //     .shape({
          //       fileUrl: Yup.string().required("pdf file is required"),
          //       type: Yup.string().required(),
          //       progress: Yup.number().required(),
          //     }),
          //   past_projects: Yup.object()
          //     .nullable()
          //     .required("Past Projects PDF is required")
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
                    {/* Consultancy Policy Section */}
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                      <Grid item size={{ xs: 12 }}>
                        <Typography
                          variant="body2"
                          sx={{ color: "#6B3C58", fontWeight: 600 }}
                        >
                          Consultancy Policy
                        </Typography>
                      </Grid>
                      <Grid item size={{ xs: 12 }}>
                        <PdfFileUploadComponent
                          name="consultancy_policy"
                          uploadedFile={values.consultancy_policy}
                          setUploadedFile={(file) => {
                            setFieldValue("consultancy_policy", file);
                            console.log(file, "consultancy policy file");
                          }}
                          onFileUpload={(file) =>
                            setFieldValue("consultancy_policy", file)
                          }
                        />
                      </Grid>
                    </Grid>

                    {/* Past Projects Section */}
                    <Grid container spacing={2}>
                      <Grid item size={{ xs: 12 }}>
                        <Typography
                          variant="body2"
                          sx={{ color: "#6B3C58", fontWeight: 600 }}
                        >
                          Past Projects
                        </Typography>
                      </Grid>
                      <Grid item size={{ xs: 12 }}>
                        <PdfFileUploadComponent
                          name="past_projects"
                          uploadedFile={values.past_projects}
                          setUploadedFile={(file) => {
                            setFieldValue("past_projects", file);
                            console.log(file, "past projects file");
                          }}
                          onFileUpload={(file) =>
                            setFieldValue("past_projects", file)
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

export default ConsultancyModal;
