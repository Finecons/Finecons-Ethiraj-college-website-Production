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
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import actions from "../../../../ReduxStore/actions";
import { clearCustomerId } from "../../../../ReduxStore/Slices/Operator/customerSlice";
import { clearTableGetId } from "../../../../ReduxStore/Slices/TableId/TableIdGetSlice";
import { setInitialStateOfgetResearchSectionById } from "../../../../ReduxStore/Slices/ContentManagement/ResearchSection/getResearchSectionById";
import FileUploadComponent from "../../../../Components/FileUploadComponent/FileUploadComponent";
import PdfFileUploadComponent from "../../../../Components/FileUploadComponent/PdfFileUploadComponent";

const CatalystPublicationsModal = ({
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
        page_name: "ECRIC Page",
        section_name: "CatalystPublications section",
        heading: " ",
        sub_heading: null,
        content: " ",
        additional_data: {
          publications: values?.cards?.map((data) => ({
            title: data?.title,
            square_image: data?.square_image?.fileUrl,
            pdf: data?.pdf?.fileUrl,
          })),
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
                Catalyst Publications
              </Typography>
            </Box>
          </DialogTitle>
        </Box>

        <Formik
          enableReinitialize
          initialValues={{
            cards: getResearchSectionById?.data?.additional_data?.publications?.map(
              (data) => ({
                title: data?.title,
                square_image: {
                  fileUrl: data?.square_image,
                  progress: 100,
                  type: "image",
                },
                pdf: {
                  fileUrl: data?.pdf,
                  progress: 100,
                  type: "pdf",
                },
              })
            ) || [{ title: "", square_image: null, pdf: null }],
          }}
          // validationSchema={Yup.object().shape({
          //   cards: Yup.array()
          //     .of(
          //       Yup.object().shape({
          //         title: Yup.string().required("Title is required"),
          //         square_image: Yup.object()
          //           .nullable()
          //           .required("Square image is required")
          //           .shape({
          //             fileUrl: Yup.string().required("Square image file is required"),
          //             type: Yup.string().required(),
          //             progress: Yup.number().required(),
          //           }),
          //         pdf: Yup.object()
          //           .nullable()
          //           .required("PDF is required")
          //           .shape({
          //             fileUrl: Yup.string().required("PDF file is required"),
          //             type: Yup.string().required(),
          //             progress: Yup.number().required(),
          //           }),
          //       })
          //     )
          //     .min(1, "At least one publication is required")
          //     .required("Publications are required"),
          // })}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, setFieldValue, resetForm, values }) => (
            <Form onSubmit={handleSubmit}>
              <DialogContent dividers>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 12 }}>
                    <Grid item size={{ xs: 12 }}>
                      <FieldArray name="cards">
                        {({ push, remove }) => (
                          <>
                            {values?.cards?.map((card, index) => (
                              <Grid
                                container
                                spacing={2}
                                key={index}
                                sx={{ mt: index > 0 ? 1 : 0 }}
                              >
                                <Grid item size={{ xs: 12 }}>
                                  <Typography
                                    variant="body2"
                                    sx={{ color: "#6B3C58", fontWeight: 600 }}
                                  >
                                    Publication {index + 1}
                                  </Typography>
                                </Grid>

                                <Grid item size={{ xs: 12 }}>
                                  <CustomInputLogin
                                    label="Title"
                                    name={`cards.${index}.title`}
                                    inputType="text"
                                    custPlaceholder="Enter Title"
                                  />
                                </Grid>

                                <Grid item size={{ xs: 12, md: 6 }}>
                                  <Typography
                                    variant="body2"
                                    sx={{ color: "#6B3C58", fontWeight: 600, mb: 1 }}
                                  >
                                    Square Image
                                  </Typography>
                                  <FileUploadComponent
                                    name={`cards.${index}.square_image`}
                                    uploadedFile={values.cards[index].square_image}
                                    setUploadedFile={(file) => {
                                      setFieldValue(
                                        `cards.${index}.square_image`,
                                        file
                                      );
                                      console.log(file, "square image file");
                                    }}
                                    onFileUpload={(file) =>
                                      setFieldValue(
                                        `cards.${index}.square_image`,
                                        file
                                      )
                                    }
                                  />
                                </Grid>

                                <Grid item size={{ xs: 12, md: 6 }}>
                                  <Typography
                                    variant="body2"
                                    sx={{ color: "#6B3C58", fontWeight: 600, mb: 1 }}
                                  >
                                    PDF
                                  </Typography>
                                  <PdfFileUploadComponent
                                    name={`cards.${index}.pdf`}
                                    uploadedFile={values.cards[index].pdf}
                                    setUploadedFile={(file) => {
                                      setFieldValue(
                                        `cards.${index}.pdf`,
                                        file
                                      );
                                      console.log(file, "pdf file");
                                    }}
                                    onFileUpload={(file) =>
                                      setFieldValue(
                                        `cards.${index}.pdf`,
                                        file
                                      )
                                    }
                                  />
                                </Grid>

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
                                        "&:hover": {
                                          backgroundColor: "#3B4056",
                                        },
                                      }}
                                    >
                                      Remove Publication
                                    </Button>
                                  </Grid>
                                )}
                              </Grid>
                            ))}

                            {values.cards.length < 100 && (
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
                                      square_image: null,
                                      pdf: null,
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
                                >
                                  Add Publication
                                </Button>
                              </Grid>
                            )}
                          </>
                        )}
                      </FieldArray>
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

export default CatalystPublicationsModal;
