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

const BookInstrumentModal = ({
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
        page_name: "InstrumentationCentre Page",
        section_name: "BookInstrument section",
        heading: " ",
        sub_heading: null,
        content: " ",
        additional_data: {
          faculty: values?.faculty?.fileUrl,
          students_external_researchers: values?.students_external_researchers?.fileUrl,
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
                BookInstrument
              </Typography>
            </Box>
          </DialogTitle>
        </Box>

        <Formik
          enableReinitialize
          initialValues={{
            faculty: getResearchSectionById?.data?.additional_data?.faculty
              ? {
                fileUrl: getResearchSectionById?.data?.additional_data?.faculty,
                progress: 100,
                type: "pdf",
              }
              : null,
            students_external_researchers: getResearchSectionById?.data?.additional_data?.students_external_researchers
              ? {
                fileUrl: getResearchSectionById?.data?.additional_data?.students_external_researchers,
                progress: 100,
                type: "pdf",
              }
              : null,
          }}
          // validationSchema={Yup.object().shape({
          //   faculty: Yup.object()
          //     .nullable()
          //     .required("Faculty PDF is required")
          //     .shape({
          //       fileUrl: Yup.string().required("pdf file is required"),
          //       type: Yup.string().required(),
          //       progress: Yup.number().required(),
          //     }),
          //   students_external_researchers: Yup.object()
          //     .nullable()
          //     .required("Students and External Researchers PDF is required")
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
                    {/* Faculty Section */}
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                      <Grid item size={{ xs: 12 }}>
                        <Typography
                          variant="body2"
                          sx={{ color: "#6B3C58", fontWeight: 600 }}
                        >
                          Faculty and Students
                        </Typography>
                      </Grid>
                      <Grid item size={{ xs: 12 }}>
                        <PdfFileUploadComponent
                          name="faculty"
                          uploadedFile={values.faculty}
                          setUploadedFile={(file) => {
                            setFieldValue("faculty", file);
                            console.log(file, "faculty file");
                          }}
                          onFileUpload={(file) =>
                            setFieldValue("faculty", file)
                          }
                        />
                      </Grid>
                    </Grid>

                    {/* Students and External Researchers Section */}
                    <Grid container spacing={2}>
                      <Grid item size={{ xs: 12 }}>
                        <Typography
                          variant="body2"
                          sx={{ color: "#6B3C58", fontWeight: 600 }}
                        >
                           External Researchers
                        </Typography>
                      </Grid>
                      <Grid item size={{ xs: 12 }}>
                        <PdfFileUploadComponent
                          name="students_external_researchers"
                          uploadedFile={values.students_external_researchers}
                          setUploadedFile={(file) => {
                            setFieldValue("students_external_researchers", file);
                            console.log(file, "students and external researchers file");
                          }}
                          onFileUpload={(file) =>
                            setFieldValue("students_external_researchers", file)
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

export default BookInstrumentModal;
