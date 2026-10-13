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
} from "@mui/material";
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
                      {({ push, remove }) => (
                        <Box>
                          {values.cards.map((card, cardIndex) => (
                            <Box
                              key={`card-${cardIndex}`}
                              sx={{
                                border: "2px solid #3B4056",
                                borderRadius: "10px",
                                padding: 3,
                                mb: 3,
                                backgroundColor: "#F9F9F9",
                              }}
                            >
                              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                                <Typography sx={{ fontWeight: 700, fontSize: "16px", color: "#3B4056" }}>
                                  Card {cardIndex + 1}
                                </Typography>
                                <Button
                                  type="button"
                                  variant="text"
                                  disabled={values.cards.length === 1}
                                  onClick={() => remove(cardIndex)}
                                  sx={{
                                    textTransform: "none",
                                    color: "#D32F2F",
                                    fontSize: "14px",
                                  }}
                                >
                                  Remove Card
                                </Button>
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

                              <Typography sx={{ fontWeight: 600, mb: 2, fontSize: "14px" }}>
                                Title & Link Items
                              </Typography>

                              <FieldArray name={`cards[${cardIndex}].items`}>
                                {({ push: pushItem, remove: removeItem }) => (
                                  <Box>
                                    {card.items.map((item, itemIndex) => (
                                      <Box
                                        key={`item-${cardIndex}-${itemIndex}`}
                                        sx={{
                                          border: "1px solid #D8D8D8",
                                          borderRadius: "8px",
                                          padding: 2,
                                          mb: 2,
                                          backgroundColor: "white",
                                        }}
                                      >
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

                                          <Grid size={{ xs: 12 }} sx={{ display: "flex", justifyContent: "flex-end" }}>
                                            <Button
                                              type="button"
                                              variant="text"
                                              disabled={card.items.length === 1}
                                              onClick={() => removeItem(itemIndex)}
                                              sx={{
                                                textTransform: "none",
                                                color: "#D32F2F",
                                                fontSize: "14px",
                                              }}
                                            >
                                              Remove Item
                                            </Button>
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
                                        fontSize: "14px",
                                      }}
                                    >
                                      + Add Item to Card
                                    </Button>
                                  </Box>
                                )}
                              </FieldArray>
                            </Box>
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
                              background: "var(--main-color)",
                              color: "white",
                              mb: 3,
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
