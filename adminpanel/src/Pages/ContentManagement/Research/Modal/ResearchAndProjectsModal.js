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

const ResearchAndProjectsModal = ({
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
        section_name: "ResearchAndProjects section",
        heading: " ",
        sub_heading: null,
        content: " ",
        additional_data: {
          student_summer_research_guidelines: values?.student_summer_research_guidelines?.fileUrl,
          student_summer_research_apply_here: values?.student_summer_research_apply_here?.fileUrl,
          year1: values?.year1,
          year1_pdf: values?.year1_pdf?.fileUrl,
          year2: values?.year2,
          year2_pdf: values?.year2_pdf?.fileUrl,
          externally_funded_guidelines: values?.externally_funded_guidelines?.fileUrl,
          resource_list: values?.resource_list?.fileUrl,
          externally_funded_past_projects: values?.externally_funded_past_projects?.fileUrl,
          ecric_guidelines: values?.ecric_guidelines?.fileUrl,
          application_forms: values?.application_forms?.fileUrl,
          ecric_past_projects: values?.ecric_past_projects?.fileUrl,
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
                Research And Projects
              </Typography>
            </Box>
          </DialogTitle>
        </Box>

        <Formik
          enableReinitialize
          initialValues={{
            student_summer_research_guidelines: getResearchSectionById?.data?.additional_data?.student_summer_research_guidelines
              ? {
                fileUrl: getResearchSectionById?.data?.additional_data?.student_summer_research_guidelines,
                progress: 100,
                type: "pdf",
              }
              : null,
            student_summer_research_apply_here: getResearchSectionById?.data?.additional_data?.student_summer_research_apply_here
              ? {
                fileUrl: getResearchSectionById?.data?.additional_data?.student_summer_research_apply_here,
                progress: 100,
                type: "pdf",
              }
              : null,
            year1: getResearchSectionById?.data?.additional_data?.year1 || "",
            year1_pdf: getResearchSectionById?.data?.additional_data?.year1_pdf
              ? {
                fileUrl: getResearchSectionById?.data?.additional_data?.year1_pdf,
                progress: 100,
                type: "pdf",
              }
              : null,
            year2: getResearchSectionById?.data?.additional_data?.year2 || "",
            year2_pdf: getResearchSectionById?.data?.additional_data?.year2_pdf
              ? {
                fileUrl: getResearchSectionById?.data?.additional_data?.year2_pdf,
                progress: 100,
                type: "pdf",
              }
              : null,
            externally_funded_guidelines: getResearchSectionById?.data?.additional_data?.externally_funded_guidelines
              ? {
                fileUrl: getResearchSectionById?.data?.additional_data?.externally_funded_guidelines,
                progress: 100,
                type: "pdf",
              }
              : null,
            resource_list: getResearchSectionById?.data?.additional_data?.resource_list
              ? {
                fileUrl: getResearchSectionById?.data?.additional_data?.resource_list,
                progress: 100,
                type: "pdf",
              }
              : null,
            externally_funded_past_projects: getResearchSectionById?.data?.additional_data?.externally_funded_past_projects
              ? {
                fileUrl: getResearchSectionById?.data?.additional_data?.externally_funded_past_projects,
                progress: 100,
                type: "pdf",
              }
              : null,
            ecric_guidelines: getResearchSectionById?.data?.additional_data?.ecric_guidelines
              ? {
                fileUrl: getResearchSectionById?.data?.additional_data?.ecric_guidelines,
                progress: 100,
                type: "pdf",
              }
              : null,
            application_forms: getResearchSectionById?.data?.additional_data?.application_forms
              ? {
                fileUrl: getResearchSectionById?.data?.additional_data?.application_forms,
                progress: 100,
                type: "pdf",
              }
              : null,
            ecric_past_projects: getResearchSectionById?.data?.additional_data?.ecric_past_projects
              ? {
                fileUrl: getResearchSectionById?.data?.additional_data?.ecric_past_projects,
                progress: 100,
                type: "pdf",
              }
              : null,
          }}
          // validationSchema={Yup.object().shape({
          //   student_summer_research_guidelines: Yup.object()
          //     .nullable()
          //     .required("Guidelines PDF is required")
          //     .shape({
          //       fileUrl: Yup.string().required("pdf file is required"),
          //       type: Yup.string().required(),
          //       progress: Yup.number().required(),
          //     }),
          //   student_summer_research_apply_here: Yup.object()
          //     .nullable()
          //     .required("Apply here PDF is required")
          //     .shape({
          //       fileUrl: Yup.string().required("pdf file is required"),
          //       type: Yup.string().required(),
          //       progress: Yup.number().required(),
          //     }),
          //   year1: Yup.string().required("Year 1 is required"),
          //   year1_pdf: Yup.object()
          //     .nullable()
          //     .required("Year 1 PDF is required")
          //     .shape({
          //       fileUrl: Yup.string().required("pdf file is required"),
          //       type: Yup.string().required(),
          //       progress: Yup.number().required(),
          //     }),
          //   year2: Yup.string().required("Year 2 is required"),
          //   year2_pdf: Yup.object()
          //     .nullable()
          //     .required("Year 2 PDF is required")
          //     .shape({
          //       fileUrl: Yup.string().required("pdf file is required"),
          //       type: Yup.string().required(),
          //       progress: Yup.number().required(),
          //     }),
          //   externally_funded_guidelines: Yup.object()
          //     .nullable()
          //     .required("Guidelines PDF is required")
          //     .shape({
          //       fileUrl: Yup.string().required("pdf file is required"),
          //       type: Yup.string().required(),
          //       progress: Yup.number().required(),
          //     }),
          //   resource_list: Yup.object()
          //     .nullable()
          //     .required("Resource List for Research Grants PDF is required")
          //     .shape({
          //       fileUrl: Yup.string().required("pdf file is required"),
          //       type: Yup.string().required(),
          //       progress: Yup.number().required(),
          //     }),
          //   externally_funded_past_projects: Yup.object()
          //     .nullable()
          //     .required("Past Projects PDF is required")
          //     .shape({
          //       fileUrl: Yup.string().required("pdf file is required"),
          //       type: Yup.string().required(),
          //       progress: Yup.number().required(),
          //     }),
          //   ecric_guidelines: Yup.object()
          //     .nullable()
          //     .required("Guidelines PDF is required")
          //     .shape({
          //       fileUrl: Yup.string().required("pdf file is required"),
          //       type: Yup.string().required(),
          //       progress: Yup.number().required(),
          //     }),
          //   application_forms: Yup.object()
          //     .nullable()
          //     .required("Application & Other Submission Forms PDF is required")
          //     .shape({
          //       fileUrl: Yup.string().required("pdf file is required"),
          //       type: Yup.string().required(),
          //       progress: Yup.number().required(),
          //     }),
          //   ecric_past_projects: Yup.object()
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
                    {/* SECTION 1: Student Summer Research Fellowship */}
                    <Grid container spacing={2} sx={{ mb: 4, pb: 3, borderBottom: "1px solid #e0e0e0" }}>
                      <Grid item size={{ xs: 12 }}>
                        <Typography
                          variant="h6"
                          sx={{ color: "#6B3C58", fontWeight: 700, fontSize: "18px" }}
                        >
                          Student Summer Research Fellowship
                        </Typography>
                      </Grid>

                      {/* Guidelines */}
                      <Grid item size={{ xs: 12 }}>
                        <Typography
                          variant="body2"
                          sx={{ color: "#6B3C58", fontWeight: 600, mb: 1 }}
                        >
                          Guidelines
                        </Typography>
                        <PdfFileUploadComponent
                          name="student_summer_research_guidelines"
                          uploadedFile={values.student_summer_research_guidelines}
                          setUploadedFile={(file) => {
                            setFieldValue("student_summer_research_guidelines", file);
                          }}
                          onFileUpload={(file) =>
                            setFieldValue("student_summer_research_guidelines", file)
                          }
                        />
                      </Grid>

                      {/* Apply here */}
                      <Grid item size={{ xs: 12 }}>
                        <Typography
                          variant="body2"
                          sx={{ color: "#6B3C58", fontWeight: 600, mb: 1 }}
                        >
                          Apply here
                        </Typography>
                        <PdfFileUploadComponent
                          name="student_summer_research_apply_here"
                          uploadedFile={values.student_summer_research_apply_here}
                          setUploadedFile={(file) => {
                            setFieldValue("student_summer_research_apply_here", file);
                          }}
                          onFileUpload={(file) =>
                            setFieldValue("student_summer_research_apply_here", file)
                          }
                        />
                      </Grid>

                      {/* Year 1 */}
                      <Grid item size={{ xs: 12 }}>
                        <CustomInputLogin
                          label="Year 1"
                          name="year1"
                        />
                      </Grid>

                      {/* Year 1 PDF */}
                      <Grid item size={{ xs: 12 }}>
                        <Typography
                          variant="body2"
                          sx={{ color: "#6B3C58", fontWeight: 600, mb: 1 }}
                        >
                          Year 1 PDF
                        </Typography>
                        <PdfFileUploadComponent
                          name="year1_pdf"
                          uploadedFile={values.year1_pdf}
                          setUploadedFile={(file) => {
                            setFieldValue("year1_pdf", file);
                          }}
                          onFileUpload={(file) =>
                            setFieldValue("year1_pdf", file)
                          }
                        />
                      </Grid>

                      {/* Year 2 */}
                      <Grid item size={{ xs: 12 }}>
                        <CustomInputLogin
                          label="Year 2"
                          name="year2"
                        />
                      </Grid>

                      {/* Year 2 PDF */}
                      <Grid item size={{ xs: 12 }}>
                        <Typography
                          variant="body2"
                          sx={{ color: "#6B3C58", fontWeight: 600, mb: 1 }}
                        >
                          Year 2 PDF
                        </Typography>
                        <PdfFileUploadComponent
                          name="year2_pdf"
                          uploadedFile={values.year2_pdf}
                          setUploadedFile={(file) => {
                            setFieldValue("year2_pdf", file);
                          }}
                          onFileUpload={(file) =>
                            setFieldValue("year2_pdf", file)
                          }
                        />
                      </Grid>
                    </Grid>

                    {/* SECTION 2: Externally Funded Projects */}
                    <Grid container spacing={2} sx={{ mb: 4, pb: 3, borderBottom: "1px solid #e0e0e0" }}>
                      <Grid item size={{ xs: 12 }}>
                        <Typography
                          variant="h6"
                          sx={{ color: "#6B3C58", fontWeight: 700, fontSize: "18px" }}
                        >
                          Externally Funded Projects
                        </Typography>
                      </Grid>

                      {/* Guidelines */}
                      <Grid item size={{ xs: 12 }}>
                        <Typography
                          variant="body2"
                          sx={{ color: "#6B3C58", fontWeight: 600, mb: 1 }}
                        >
                          Guidelines
                        </Typography>
                        <PdfFileUploadComponent
                          name="externally_funded_guidelines"
                          uploadedFile={values.externally_funded_guidelines}
                          setUploadedFile={(file) => {
                            setFieldValue("externally_funded_guidelines", file);
                          }}
                          onFileUpload={(file) =>
                            setFieldValue("externally_funded_guidelines", file)
                          }
                        />
                      </Grid>

                      {/* Resource List for Research Grants */}
                      <Grid item size={{ xs: 12 }}>
                        <Typography
                          variant="body2"
                          sx={{ color: "#6B3C58", fontWeight: 600, mb: 1 }}
                        >
                          Resource List for Research Grants
                        </Typography>
                        <PdfFileUploadComponent
                          name="resource_list"
                          uploadedFile={values.resource_list}
                          setUploadedFile={(file) => {
                            setFieldValue("resource_list", file);
                          }}
                          onFileUpload={(file) =>
                            setFieldValue("resource_list", file)
                          }
                        />
                      </Grid>

                      {/* Past Projects */}
                      <Grid item size={{ xs: 12 }}>
                        <Typography
                          variant="body2"
                          sx={{ color: "#6B3C58", fontWeight: 600, mb: 1 }}
                        >
                          Past Projects
                        </Typography>
                        <PdfFileUploadComponent
                          name="externally_funded_past_projects"
                          uploadedFile={values.externally_funded_past_projects}
                          setUploadedFile={(file) => {
                            setFieldValue("externally_funded_past_projects", file);
                          }}
                          onFileUpload={(file) =>
                            setFieldValue("externally_funded_past_projects", file)
                          }
                        />
                      </Grid>
                    </Grid>

                    {/* SECTION 3: ECRIC Funded Faculty Research Projects */}
                    <Grid container spacing={2}>
                      <Grid item size={{ xs: 12 }}>
                        <Typography
                          variant="h6"
                          sx={{ color: "#6B3C58", fontWeight: 700, fontSize: "18px" }}
                        >
                          ECRIC Funded Faculty Research Projects
                        </Typography>
                      </Grid>

                      {/* Guidelines */}
                      <Grid item size={{ xs: 12 }}>
                        <Typography
                          variant="body2"
                          sx={{ color: "#6B3C58", fontWeight: 600, mb: 1 }}
                        >
                          Guidelines
                        </Typography>
                        <PdfFileUploadComponent
                          name="ecric_guidelines"
                          uploadedFile={values.ecric_guidelines}
                          setUploadedFile={(file) => {
                            setFieldValue("ecric_guidelines", file);
                          }}
                          onFileUpload={(file) =>
                            setFieldValue("ecric_guidelines", file)
                          }
                        />
                      </Grid>

                      {/* Application & Other Submission Forms */}
                      <Grid item size={{ xs: 12 }}>
                        <Typography
                          variant="body2"
                          sx={{ color: "#6B3C58", fontWeight: 600, mb: 1 }}
                        >
                          Application & Other Submission Forms
                        </Typography>
                        <PdfFileUploadComponent
                          name="application_forms"
                          uploadedFile={values.application_forms}
                          setUploadedFile={(file) => {
                            setFieldValue("application_forms", file);
                          }}
                          onFileUpload={(file) =>
                            setFieldValue("application_forms", file)
                          }
                        />
                      </Grid>

                      {/* Past Projects */}
                      <Grid item size={{ xs: 12 }}>
                        <Typography
                          variant="body2"
                          sx={{ color: "#6B3C58", fontWeight: 600, mb: 1 }}
                        >
                          Past Projects
                        </Typography>
                        <PdfFileUploadComponent
                          name="ecric_past_projects"
                          uploadedFile={values.ecric_past_projects}
                          setUploadedFile={(file) => {
                            setFieldValue("ecric_past_projects", file);
                          }}
                          onFileUpload={(file) =>
                            setFieldValue("ecric_past_projects", file)
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

export default ResearchAndProjectsModal;
