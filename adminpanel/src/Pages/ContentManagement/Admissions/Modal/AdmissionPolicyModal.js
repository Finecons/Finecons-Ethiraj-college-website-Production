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

const AdmissionPolicyModal = ({ open, onClose, editData, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const isEdit = useMemo(
    () => Boolean(editData?.admission_policy_id),
    [editData]
  );

  const handleSubmit = async (values) => {
    setLoading(true);

    const parsedAdditionalData = parseAdditionalData(values?.additional_data);
    if (parsedAdditionalData === null) {
      toast.error("Additional Data must be valid JSON.");
      setLoading(false);
      return;
    }

    const payload = {
      section_name: values?.section_name,
      heading: values?.heading,
      sub_heading: values?.sub_heading,
      content: values?.content,
    };

    if (parsedAdditionalData !== undefined) {
      payload.additional_data = parsedAdditionalData;
    }

    const response = await fetchData(
      payload,
      isEdit ? "put" : "post",
      isEdit
        ? `updateAdmissionPolicySection/${editData?.admission_policy_id}`
        : "addAdmissionPolicySection"
    );

    if (response?.data?.Success) {
      toast.success(
        response?.data?.Message || "Admission policy section saved successfully."
      );
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
              {isEdit ? "Edit Admission Policy Section" : "Add Admission Policy Section"}
            </Typography>
          </DialogTitle>
        </Box>

        <Formik
          enableReinitialize
          initialValues={{
            section_name: editData?.section_name || "",
            heading: editData?.heading || "",
            sub_heading: editData?.sub_heading || "",
            content: editData?.content || "",
            additional_data: editData?.additional_data
              ? JSON.stringify(editData.additional_data, null, 2)
              : "",
          }}
          validationSchema={Yup.object({
            section_name: Yup.string().required("Section name is required"),
            heading: Yup.string().required("Heading is required"),
            content: Yup.string().required("Content is required"),
          })}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <DialogContent dividers>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <CustomInputLogin
                      name="section_name"
                      label="Section Name"
                      custPlaceholder="Enter section name"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <CustomInputLogin
                      name="heading"
                      label="Heading"
                      custPlaceholder="Enter heading"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <CustomInputLogin
                      name="sub_heading"
                      label="Sub Heading"
                      custPlaceholder="Enter sub heading"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <CustomInputLogin
                      name="content"
                      label="Content"
                      inputType="textarea"
                      custPlaceholder="Enter content"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <CustomInputLogin
                      name="additional_data"
                      label="Additional Data (JSON)"
                      inputType="textarea"
                      custPlaceholder='Example: {"items":[{"title":"Sample"}]}'
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

export default AdmissionPolicyModal;
