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
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MdCancel } from "react-icons/md";
import CustomInputLogin from "../../../../Components/CustomInputLogin/CustomInputLogin.jsx";
import "../../../../Components/ModalCss/BannerinputGetModal.css";
import { toast, ToastContainer } from "react-toastify";
import { fetchData } from "../../../../helpers";

const ButtonsModal = ({ open, onClose, editData, onSuccess, buttonType = "Pay Now" }) => {
  const [loading, setLoading] = useState(false);

  const isEdit = useMemo(() => Boolean(editData?.button_id), [editData]);

  const handleSubmit = async (values) => {
    setLoading(true);

    const payload = {
      button_name: values?.button_name,
      text: values?.text,
      link: values?.link,
    };

    const response = await fetchData(
      payload,
      isEdit ? "put" : "post",
      isEdit ? `updateButton/${editData?.button_id}` : "addButton"
    );

    if (response?.data?.Success) {
      setTimeout(() => {
        setLoading(false);
        onClose();
        onSuccess?.();
      }, 1500);

      toast.success(response?.data?.Message || "Button saved successfully.");
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 1500);

      toast.error(response?.data?.Message || "Error occurred");
    }
  };

  const validationSchema = Yup.object({
    button_name: Yup.string().required("Button name is required"),
    text: Yup.string().required("Text is required"),
    link: Yup.string().required("Link is required"),
  });

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
            <Box>
              <Typography
                className="custom-title-text"
                fontSize="16px"
                color="white"
              >
                {isEdit ? "Edit Button" : "Add Button"}
              </Typography>
            </Box>
          </DialogTitle>
        </Box>

        <Formik
          enableReinitialize
          initialValues={{
            button_name: editData?.button_name || buttonType,
            text: editData?.text || "",
            link: editData?.link || "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <DialogContent dividers>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12 }}>
                      <CustomInputLogin
                        name="button_name"
                        label="Button Name"
                        custPlaceholder="Enter button name"
                        disabled={!isEdit}
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <CustomInputLogin
                        name="text"
                        label="Text"
                        custPlaceholder="Enter text"
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <CustomInputLogin
                        name="link"
                        label="Link"
                        custPlaceholder="Enter link"
                      />
                    </Grid>

                    <Grid
                      size={{ xs: 12 }}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        mt: 4,
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

export default ButtonsModal;
