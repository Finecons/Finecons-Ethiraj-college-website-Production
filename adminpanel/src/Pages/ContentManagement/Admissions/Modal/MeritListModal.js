import React, { useMemo, useState } from "react";
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
import * as Yup from "yup";
import { MdCancel } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import CustomInputLogin from "../../../../Components/CustomInputLogin/CustomInputLogin.jsx";
import { fetchData } from "../../../../helpers";
import "../../../../Components/ModalCss/BannerinputGetModal.css";

const parseAdditionalData = (value) => {
  if (!value || !value.trim()) return undefined;
  try {
    return JSON.parse(value);
  } catch (error) {
    return null;
  }
};

const getInitialCards = (additionalData) => {
  const rawCards = Array.isArray(additionalData)
    ? additionalData
    : additionalData?.cards;

  if (!Array.isArray(rawCards) || rawCards.length === 0) {
    return [
      {
        main_title: "",
        items: [{ title: "", link: "" }],
      },
    ];
  }

  return rawCards.map((card) => ({
    main_title: card?.main_title || "",
    items: Array.isArray(card?.items)
      ? card.items.map((item) => ({
          title: item?.title || item?.next_title || "",
          link: item?.link || "",
        }))
      : [{ title: "", link: "" }],
  }));
};

const MeritListModal = ({ open, onClose, editData, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const isEdit = useMemo(() => Boolean(editData?.merit_list_id), [editData]);

  const handleSubmit = async (values) => {
    setLoading(true);

    const parsedAdditionalData = parseAdditionalData(values?.additional_data);
    if (parsedAdditionalData === null) {
      toast.error("Additional Data must be valid JSON.");
      setLoading(false);
      return;
    }

    const payload = {
      section_name: "Merit List",
      heading: " ",
      sub_heading: " ",
      content: " ",
    };

    payload.additional_data = {
      cards: (values?.cards || []).map((card) => ({
        main_title: card?.main_title || "",
        items: (card?.items || []).map((item) => ({
          title: item?.title || "",
          link: item?.link || "",
        })),
      })),
      ...(parsedAdditionalData && typeof parsedAdditionalData === "object" ? parsedAdditionalData : {}),
    };

    const response = await fetchData(
      payload,
      isEdit ? "put" : "post",
      isEdit ? `updateMeritListSection/${editData?.merit_list_id}` : "addMeritListSection"
    );

    if (response?.data?.Success) {
      toast.success(response?.data?.Message || "Merit list section saved successfully.");
      setLoading(false);
      onClose();
      onSuccess?.();
      return;
    }

    toast.error(response?.data?.Message || "Error occurred");
    setLoading(false);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
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
            onClick={onClose}
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
            <Typography className="custom-title-text" fontSize="16px" color="white">
              {isEdit ? "Edit Merit List Section" : "Add Merit List Section"}
            </Typography>
          </DialogTitle>
        </Box>

        <Formik
          enableReinitialize
          initialValues={{
            cards: getInitialCards(editData?.additional_data),
            additional_data: "",
          }}
          validationSchema={Yup.object({
            cards: Yup.array()
              .of(
                Yup.object({
                  main_title: Yup.string().required("Main title is required"),
                  items: Yup.array()
                    .of(
                      Yup.object({
                        title: Yup.string().required("Title is required"),
                        link: Yup.string().required("Link is required"),
                      })
                    )
                    .min(1, "At least one item is required"),
                })
              )
              .min(1, "At least one card is required"),
          })}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, values }) => (
            <Form onSubmit={handleSubmit}>
              <DialogContent dividers>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12 }}>
                    <FieldArray name="cards">
                      {({ push, remove, move }) => (
                        <Box>
                          {values.cards.map((card, cardIndex) => (
                            <Paper
                              variant="outlined"
                              key={`card-${cardIndex}`}
                              draggable
                              onDragStart={(e) => {
                                e.dataTransfer.setData("text/plain", String(cardIndex));
                                e.dataTransfer.effectAllowed = "move";
                              }}
                              onDragOver={(e) => {
                                e.preventDefault();
                                e.dataTransfer.dropEffect = "move";
                              }}
                              onDrop={(e) => {
                                e.preventDefault();
                                const fromIdx = parseInt(
                                  e.dataTransfer.getData("text/plain"),
                                  10
                                );
                                if (!isNaN(fromIdx) && fromIdx !== cardIndex) {
                                  move(fromIdx, cardIndex);
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
                                    title="Drag to reorder card"
                                  >
                                    <MdDragIndicator size={20} />
                                  </Box>
                                  <Typography
                                    variant="subtitle2"
                                    sx={{ fontWeight: 700, color: "#6B3C58", fontSize: "15px" }}
                                  >
                                    Merit Category {cardIndex + 1} {card.main_title ? `— ${card.main_title}` : ""}
                                  </Typography>
                                </Box>

                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                  <Button
                                    size="small"
                                    variant="outlined"
                                    disabled={cardIndex === 0}
                                    onClick={() => move(cardIndex, cardIndex - 1)}
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
                                    disabled={cardIndex === values.cards.length - 1}
                                    onClick={() => move(cardIndex, cardIndex + 1)}
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
                                      onClick={() => remove(cardIndex)}
                                      title="Remove Card"
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

                              <Grid container spacing={2} sx={{ mb: 2 }}>
                                <Grid size={{ xs: 12 }}>
                                  <CustomInputLogin
                                    name={`cards[${cardIndex}].main_title`}
                                    label="Card Main Title"
                                    custPlaceholder="Enter main title (e.g., B.Sc Psychology)"
                                  />
                                </Grid>
                              </Grid>

                              <Typography sx={{ fontWeight: 600, mb: 2, fontSize: "14px", color: "#6B3C58" }}>
                                Title & Link Items
                              </Typography>

                              <FieldArray name={`cards[${cardIndex}].items`}>
                                {({ push: pushItem, remove: removeItem, move: moveItem }) => (
                                  <Box>
                                    {card.items.map((item, itemIndex) => (
                                      <Box
                                        key={`item-${cardIndex}-${itemIndex}`}
                                        draggable
                                        onDragStart={(e) => {
                                          e.stopPropagation();
                                          e.dataTransfer.setData("text/plain", String(itemIndex));
                                          e.dataTransfer.effectAllowed = "move";
                                        }}
                                        onDragOver={(e) => {
                                          e.preventDefault();
                                          e.dataTransfer.dropEffect = "move";
                                        }}
                                        onDrop={(e) => {
                                          e.stopPropagation();
                                          e.preventDefault();
                                          const fromIdx = parseInt(
                                            e.dataTransfer.getData("text/plain"),
                                            10
                                          );
                                          if (!isNaN(fromIdx) && fromIdx !== itemIndex) {
                                            moveItem(fromIdx, itemIndex);
                                          }
                                        }}
                                        sx={{
                                          border: "1px solid #E5E5E5",
                                          borderRadius: "8px",
                                          padding: 2,
                                          mb: 2,
                                          backgroundColor: "white",
                                        }}
                                      >
                                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.5 }}>
                                          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                            <Box
                                              sx={{
                                                cursor: "grab",
                                                display: "flex",
                                                alignItems: "center",
                                                color: "#6B3C58",
                                                p: 0.4,
                                                borderRadius: "4px",
                                                backgroundColor: "#F3EBF0",
                                                "&:active": { cursor: "grabbing" },
                                              }}
                                              title="Drag to reorder link"
                                            >
                                              <MdDragIndicator size={18} />
                                            </Box>
                                            <Typography sx={{ fontSize: "13px", fontWeight: 600, color: "#555" }}>
                                              Item {itemIndex + 1}
                                            </Typography>
                                          </Box>

                                          <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                                            <Button
                                              size="small"
                                              variant="outlined"
                                              disabled={itemIndex === 0}
                                              onClick={() => moveItem(itemIndex, itemIndex - 1)}
                                              sx={{
                                                textTransform: "none",
                                                fontSize: "11px",
                                                py: 0.2,
                                                px: 0.8,
                                                minWidth: "auto",
                                                color: "#6B3C58",
                                                borderColor: "#D9C7D2",
                                              }}
                                            >
                                              ▲
                                            </Button>
                                            <Button
                                              size="small"
                                              variant="outlined"
                                              disabled={itemIndex === card.items.length - 1}
                                              onClick={() => moveItem(itemIndex, itemIndex + 1)}
                                              sx={{
                                                textTransform: "none",
                                                fontSize: "11px",
                                                py: 0.2,
                                                px: 0.8,
                                                minWidth: "auto",
                                                color: "#6B3C58",
                                                borderColor: "#D9C7D2",
                                              }}
                                            >
                                              ▼
                                            </Button>
                                            {card.items.length > 1 && (
                                              <IconButton
                                                size="small"
                                                onClick={() => removeItem(itemIndex)}
                                                sx={{ color: "#D32F2F" }}
                                              >
                                                <AiOutlineDelete size={15} />
                                              </IconButton>
                                            )}
                                          </Box>
                                        </Box>

                                        <Grid container spacing={2}>
                                          <Grid size={{ xs: 12, md: 6 }}>
                                            <CustomInputLogin
                                              name={`cards[${cardIndex}].items[${itemIndex}].title`}
                                              label="Title"
                                              custPlaceholder="Enter title (e.g., 2024 Merit List)"
                                            />
                                          </Grid>
                                          <Grid size={{ xs: 12, md: 6 }}>
                                            <CustomInputLogin
                                              name={`cards[${cardIndex}].items[${itemIndex}].link`}
                                              label="Link"
                                              custPlaceholder="Enter link URL"
                                            />
                                          </Grid>
                                        </Grid>
                                      </Box>
                                    ))}

                                    <Button
                                      type="button"
                                      variant="outlined"
                                      onClick={() => pushItem({ title: "", link: "" })}
                                      sx={{
                                        textTransform: "none",
                                        borderRadius: "8px",
                                        fontSize: "13px",
                                        color: "#6B3C58",
                                        borderColor: "#6B3C58",
                                        "&:hover": { borderColor: "#6B3C58", backgroundColor: "#FBF7F9" },
                                      }}
                                    >
                                      + Add Item to Card
                                    </Button>
                                  </Box>
                                )}
                              </FieldArray>
                            </Paper>
                          ))}

                          <Button
                            type="button"
                            variant="contained"
                            onClick={() =>
                              push({
                                main_title: "",
                                items: [{ title: "", link: "" }],
                              })
                            }
                            sx={{
                              textTransform: "none",
                              borderRadius: "8px",
                              background: "#6B3C58",
                              color: "white",
                              mb: 3,
                              "&:hover": { backgroundColor: "#532E44" },
                            }}
                          >
                            + Add Another Card
                          </Button>
                        </Box>
                      )}
                    </FieldArray>
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <CustomInputLogin
                      name="additional_data"
                      label="Additional Data (Optional JSON Merge)"
                      inputType="textarea"
                      custPlaceholder='Example: {"meta":{"year":"2026"}}'
                    />
                  </Grid>

                  <Grid
                    size={{ xs: 12 }}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      mt: 2,
                    }}
                  >
                    <Button
                      onClick={onClose}
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

export default MeritListModal;
