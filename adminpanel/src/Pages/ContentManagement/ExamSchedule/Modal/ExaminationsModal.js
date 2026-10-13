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
import * as Yup from "yup";
import { MdCancel } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import CustomInputLogin from "../../../../Components/CustomInputLogin/CustomInputLogin";
import PdfFileUploadComponent from "../../../../Components/FileUploadComponent/PdfFileUploadComponent";
import "../../../../Components/ModalCss/BannerinputGetModal.css";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import actions from "../../../../ReduxStore/actions";
import { clearCustomerId } from "../../../../ReduxStore/Slices/Operator/customerSlice";
import { clearTableGetId } from "../../../../ReduxStore/Slices/TableId/TableIdGetSlice";
import { setInitialStateOfgetExaminationsSectionById } from "../../../../ReduxStore/Slices/ContentManagement/ExaminationsSection/getExaminationsSectionById";

const ExaminationsModal = ({
  open,
  onClose,
  setSubmittedValues,
  submittedValues,
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const { getExaminationsSectionById } = useSelector(
    (state) => state?.getExaminationsSectionById,
  );

  const handleClose = () => {
    dispatch(setInitialStateOfgetExaminationsSectionById());
    dispatch(clearCustomerId(null));
    dispatch(clearTableGetId(null));
    onClose();
  };

  const handleSubmit = async (values) => {
    setLoading(true);

    const payload = {
      section_name: " ",
      heading: " ",
      sub_heading: " ",
      content: " ",
      additional_data: {
        cards:
          values?.cards?.map((card) => ({
            title: card?.title,
            pdf: card?.pdf?.fileUrl,
          })) || [],
      },
    };

    const data1 = {
      data: payload,
      method: getExaminationsSectionById?.payload?.data?.examination_id ? "put" : "post",
      apiName: getExaminationsSectionById?.payload?.data?.examination_id
        ? `updateExaminationsSection/${getExaminationsSectionById?.payload?.data?.examination_id}`
        : `addExaminationsSection`,
    };

    const responseData = await dispatch(
      getExaminationsSectionById?.payload?.data?.examination_id
        ? actions.UPDATEEXAMINATIONSSECTION(data1)
        : actions.ADDEXAMINATIONSSECTION(data1),
    );

    if (
      responseData?.payload?.message ===
        "Examinations Section added successfully" ||
      responseData?.payload?.message ===
        "Examinations section updated successfully."
    ) {
      setTimeout(() => {
        setLoading(false);
        handleClose();
      }, 1500);

      toast.success(responseData?.payload?.message);

      dispatch(clearCustomerId(null));
      dispatch(clearTableGetId(null));
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 1500);

      toast.error(responseData?.payload?.message || "Error occurred");
    }
  };

  const validationSchema = Yup.object({
    cards: Yup.array()
      .of(
        Yup.object({
          title: Yup.string(),
          pdf: Yup.object()
            .nullable()
            .shape({
              fileUrl: Yup.string(),
              type: Yup.string(),
              progress: Yup.number(),
            }),
        }),
      )
      .required("Cards are required"),
  });

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      className="custom-dialog"
      sx={{
        maxWidth: "700px",
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
                {getExaminationsSectionById?.payload?.data?.examination_id
                  ? "Edit Examinations Section"
                  : "Add Examinations Section"}
              </Typography>
            </Box>
          </DialogTitle>
        </Box>

        <Formik
          enableReinitialize
          initialValues={{
            cards:
              getExaminationsSectionById?.payload?.data?.additional_data?.cards?.map(
                (card) => ({
                  title: card?.title || "",
                  pdf: {
                    fileUrl: card?.pdf || "",
                    progress: 100,
                    type: "pdf",
                  },
                }),
              ) || [{ title: "", pdf:"" }],
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, setFieldValue, values, errors, touched }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <DialogContent dividers>
                  <Grid container spacing={2}>
                    <FieldArray name="cards">
                      {({ push, remove }) => (
                        <>
                          {values?.cards?.map((card, index) => (
                            <Grid
                              size={{ xs: 12 }}
                              key={index}
                              sx={{
                                border: "1px solid #ddd",
                                p: 2,
                                borderRadius: "8px",
                              }}
                            >
                              <Grid container spacing={2}>
                                <Grid size={{ xs: 12 }} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                                  <Typography
                                    variant="h6"
                                    sx={{
                                      fontWeight: "600",
                                      color: "#333",
                                      fontSize: "14px",
                                    }}
                                  >
                                    Exam Schedule {index + 1}
                                  </Typography>
                                  <IconButton
                                    type="button"
                                    size="small"
                                    onClick={() => remove(index)}
                                    sx={{
                                      color: "#d32f2f",
                                      padding: "4px",
                                      "&:hover": {
                                        backgroundColor: "#ffebee",
                                      },
                                    }}
                                  >
                                    <MdDeleteOutline fontSize="20px" />
                                  </IconButton>
                                </Grid>

                                <Grid size={{ xs: 12, md: 6 }}>
                                  <CustomInputLogin
                                    name={`cards.${index}.title`}
                                    label="Title"
                                    placeholder="Enter card title"
                                  />
                                </Grid>

                                <Grid size={{ xs: 12, md: 6 }}>
                                  <PdfFileUploadComponent
                                    name={`cards.${index}.pdf`}
                                    uploadedFile={values.cards[index].pdf}
                                    setUploadedFile={(file) => {
                                      setFieldValue(`cards.${index}.pdf`, file);
                                    }}
                                    onFileUpload={(file) =>
                                      setFieldValue(`cards.${index}.pdf`, file)
                                    }
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          ))}

                          <Grid size={{ xs: 12 }}>
                            <Button
                              type="button"
                              variant="outlined"
                              onClick={() => {
                                push({
                                  title: "",
                                 pdf:"",
                                });
                              }}
                            >
                              + Add Card
                            </Button>
                          </Grid>
                        </>
                      )}
                    </FieldArray>

                    <Grid
                      size={{ xs: 12 }}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        mt: 4,
                      }}
                    >
                      <Button
                        onClick={handleClose}
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
                        disabled={loading}
                        sx={{
                          textTransform: "none",
                          color: "white",
                          fontSize: "16px",
                          padding: { xs: "0px 20px", md: "0px 40px" },
                          minHeight: "40px",
                          borderRadius: "23px",
                          background: "var(--main-color)",
                          "&:hover": {
                            backgroundColor: "#3B4056",
                          },
                        }}
                      >
                        {loading ? "Submitting..." : "Submit"}
                      </Button>
                    </Grid>
                  </Grid>
                </DialogContent>
              </Form>
            );
          }}
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

export default ExaminationsModal;
