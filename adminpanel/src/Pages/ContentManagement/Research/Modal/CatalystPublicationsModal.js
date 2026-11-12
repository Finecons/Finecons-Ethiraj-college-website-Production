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
  Paper,
} from "@mui/material";
import { MdDragIndicator } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
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
                        {({ push, remove, move }) => (
                          <>
                            {values?.cards?.map((card, index) => (
                              <Paper
                                variant="outlined"
                                key={index}
                                draggable
                                onDragStart={(e) => {
                                  e.dataTransfer.setData("text/plain", String(index));
                                  e.dataTransfer.effectAllowed = "move";
                                }}
                                onDragOver={(e) => {
                                  e.preventDefault();
                                  e.dataTransfer.dropEffect = "move";
                                }}
                                onDrop={(e) => {
                                  e.preventDefault();
                                  const fromIdx = parseInt(e.dataTransfer.getData("text/plain"), 10);
                                  if (!isNaN(fromIdx) && fromIdx !== index) {
                                    move(fromIdx, index);
                                  }
                                }}
                                sx={{
                                  p: 2.5,
                                  mb: 2.5,
                                  borderRadius: "10px",
                                  borderColor: "#E5E5E5",
                                  backgroundColor: "#FCFBFA",
                                  transition: "all 0.2s ease",
                                  "&:hover": {
                                    borderColor: "#6B3C58",
                                    boxShadow: "0 2px 8px rgba(107,60,88,0.08)",
                                  },
                                }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    pb: 1.5,
                                    mb: 2,
                                    borderBottom: "1px solid #ECECEC",
                                    flexWrap: "wrap",
                                    gap: 1,
                                  }}
                                >
                                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <Box
                                      sx={{
                                        cursor: "grab",
                                        display: "flex",
                                        alignItems: "center",
                                        color: "#6B3C58",
                                        p: 0.6,
                                        borderRadius: "6px",
                                        backgroundColor: "#F3EBF0",
                                        "&:active": { cursor: "grabbing" },
                                      }}
                                      title="Drag to reorder"
                                    >
                                      <MdDragIndicator size={20} />
                                    </Box>
                                    <Typography
                                      variant="subtitle2"
                                      sx={{ fontWeight: 700, color: "#6B3C58", fontSize: "15px" }}
                                    >
                                      Publication {index + 1} {card.title ? `— ${card.title}` : ""}
                                    </Typography>
                                  </Box>

                                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <Button
                                      size="small"
                                      variant="outlined"
                                      disabled={index === 0}
                                      onClick={() => move(index, index - 1)}
                                      startIcon={<IoIosArrowUp />}
                                      sx={{
                                        textTransform: "none",
                                        fontSize: "12px",
                                        py: 0.4,
                                        px: 1,
                                        color: "#6B3C58",
                                        borderColor: "#D9C7D2",
                                        "&:disabled": { borderColor: "#E5E5E5", color: "#BBB" },
                                        "&:hover": { borderColor: "#6B3C58", backgroundColor: "#FBF7F9" },
                                      }}
                                    >
                                      Move Up
                                    </Button>

                                    <Button
                                      size="small"
                                      variant="outlined"
                                      disabled={index === values.cards.length - 1}
                                      onClick={() => move(index, index + 1)}
                                      startIcon={<IoIosArrowDown />}
                                      sx={{
                                        textTransform: "none",
                                        fontSize: "12px",
                                        py: 0.4,
                                        px: 1,
                                        color: "#6B3C58",
                                        borderColor: "#D9C7D2",
                                        "&:disabled": { borderColor: "#E5E5E5", color: "#BBB" },
                                        "&:hover": { borderColor: "#6B3C58", backgroundColor: "#FBF7F9" },
                                      }}
                                    >
                                      Move Down
                                    </Button>

                                    {values.cards.length > 1 && (
                                      <IconButton
                                        size="small"
                                        onClick={() => remove(index)}
                                        title="Remove Publication"
                                        sx={{
                                          color: "#D32F2F",
                                          border: "1px solid #FFCDD2",
                                          p: 0.6,
                                          "&:hover": { backgroundColor: "#FFEBEE" },
                                        }}
                                      >
                                        <AiOutlineDelete size={17} />
                                      </IconButton>
                                    )}
                                  </Box>
                                </Box>

                                <Grid container spacing={2}>
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
                                      }}
                                      onFileUpload={(file) =>
                                        setFieldValue(
                                          `cards.${index}.pdf`,
                                          file
                                        )
                                      }
                                    />
                                  </Grid>
                                </Grid>
                              </Paper>
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
