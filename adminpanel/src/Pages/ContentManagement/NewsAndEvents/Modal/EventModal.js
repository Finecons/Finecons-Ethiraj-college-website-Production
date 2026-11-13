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
  TextField,
  FormControlLabel,
  Checkbox,
  MenuItem,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import actions from "../../../../ReduxStore/actions";

const monthsList = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const validationSchema = Yup.object().shape({
  heading: Yup.string().required("Event title is required"),
  day: Yup.string().required("Day is required"),
  mon: Yup.string().required("Month is required"),
});

const EventModal = ({ open, onClose, editData, refreshData }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    heading: editData?.heading || editData?.title || "",
    day: editData?.day || "",
    mon: editData?.mon || "Sep",
    time: editData?.time || editData?.sub_heading || "",
    event_date: editData?.event_date ? editData.event_date.split("T")[0] : "",
    mark_as_important: Boolean(editData?.is_important),
    status: editData?.status || "active",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);

      // Synthesize event_date from day + mon if not explicitly set so chronological sorting works
      let calculatedEventDate = values.event_date;
      if (!calculatedEventDate && values.day && values.mon) {
        const monthIdx = monthsList.indexOf(values.mon);
        if (monthIdx !== -1) {
          const year = new Date().getFullYear();
          const padDay = String(values.day).padStart(2, "0");
          const padMonth = String(monthIdx + 1).padStart(2, "0");
          calculatedEventDate = `${year}-${padMonth}-${padDay}`;
        }
      }

      const payloadData = {
        type: "event",
        heading: values.heading,
        sub_heading: values.time,
        content: values.time,
        status: values.status,
        event_date: calculatedEventDate || null,
        mark_as_important: values.mark_as_important,
        additional_data: {
          day: values.day,
          mon: values.mon,
          time: values.time,
        },
      };

      if (editData?.news_event_id || editData?.id) {
        // Update existing event
        const eventId = editData?.news_event_id || editData?.id;
        const res = await dispatch(
          actions.UPDATENEWSEVENT({
            apiName: `updateNewsEvent/${eventId}`,
            method: "put",
            data: payloadData,
          })
        );
        if (res?.payload?.message || res?.meta?.requestStatus === "fulfilled") {
          toast.success("Event updated successfully!");
          resetForm();
          onClose();
          if (refreshData) refreshData();
        } else {
          toast.error("Failed to update event.");
        }
      } else {
        // Add new event
        const res = await dispatch(
          actions.ADDNEWSEVENT({
            apiName: "addNewsEvent",
            method: "post",
            data: payloadData,
          })
        );
        if (res?.payload?.message || res?.meta?.requestStatus === "fulfilled") {
          toast.success("Event added successfully!");
          resetForm();
          onClose();
          if (refreshData) refreshData();
        } else {
          toast.error("Failed to add event.");
        }
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "16px",
          p: 1,
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: "#212529" }}>
          {editData ? "Edit Event" : "Add New Event"}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ color: (theme) => theme.palette.grey[500] }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, setFieldValue }) => (
          <Form>
            <DialogContent dividers sx={{ p: 3 }}>
              <Grid container spacing={2.5}>
                {/* Event Title */}
                <Grid item xs={12}>
                  <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 500, color: "#333" }}>
                    Event Title *
                  </Typography>
                  <TextField
                    fullWidth
                    size="small"
                    name="heading"
                    placeholder="e.g. Commerce Association"
                    value={values.heading}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.heading && Boolean(errors.heading)}
                    helperText={touched.heading && errors.heading}
                  />
                </Grid>

                {/* Day */}
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 500, color: "#333" }}>
                    Day (Date Number) *
                  </Typography>
                  <TextField
                    fullWidth
                    size="small"
                    name="day"
                    placeholder="e.g. 01, 15"
                    value={values.day}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.day && Boolean(errors.day)}
                    helperText={touched.day && errors.day}
                  />
                </Grid>

                {/* Month */}
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 500, color: "#333" }}>
                    Month *
                  </Typography>
                  <TextField
                    select
                    fullWidth
                    size="small"
                    name="mon"
                    value={values.mon}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.mon && Boolean(errors.mon)}
                    helperText={touched.mon && errors.mon}
                  >
                    {monthsList.map((month) => (
                      <MenuItem key={month} value={month}>
                        {month}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* Optional Exact Date */}
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 500, color: "#333" }}>
                    Calendar Date (Optional)
                  </Typography>
                  <TextField
                    type="date"
                    fullWidth
                    size="small"
                    name="event_date"
                    value={values.event_date}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>

                {/* Time or Date Range */}
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 500, color: "#333" }}>
                    Time / Date Range (Optional)
                  </Typography>
                  <TextField
                    fullWidth
                    size="small"
                    name="time"
                    placeholder="e.g. 15, 16, 17, 18 September"
                    value={values.time}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Highlight / Mark Important */}
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="mark_as_important"
                        checked={values.mark_as_important}
                        onChange={(e) => setFieldValue("mark_as_important", e.target.checked)}
                        sx={{ color: "var(--main-color, #6B3C58)", "&.Mui-checked": { color: "var(--main-color, #6B3C58)" } }}
                      />
                    }
                    label="Highlight this event (Show prominently on Home Page)"
                  />
                </Grid>
              </Grid>
            </DialogContent>

            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, p: 2.5 }}>
              <Button
                onClick={onClose}
                variant="outlined"
                disabled={loading}
                sx={{
                  minHeight: "40px",
                  borderRadius: "23px",
                  color: "black",
                  borderColor: "black",
                  textTransform: "none",
                  px: 3,
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
                  minHeight: "40px",
                  borderRadius: "23px",
                  background: "var(--main-color, #6B3C58)",
                  color: "white",
                  textTransform: "none",
                  px: 4,
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#502B41",
                    boxShadow: "none",
                  },
                }}
              >
                {loading ? "Saving..." : editData ? "Update Event" : "Add Event"}
              </Button>
            </Box>
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
    </Dialog>
  );
};

export default EventModal;

