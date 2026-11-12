import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import { MdClose } from "react-icons/md";

const NewsletterYearModal = ({ open, onClose, onSubmit, initialData }) => {
  const [year, setYear] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialData && initialData.year) {
      setYear(initialData.year);
    } else {
      setYear("");
    }
    setError("");
  }, [open, initialData]);

  const handleSave = () => {
    const trimmed = year.trim();
    if (!trimmed) {
      setError("Academic Year is required (e.g. 2026 – 2027)");
      return;
    }
    onSubmit({
      id: initialData?.id || `year-${Date.now()}`,
      year: trimmed,
      issues: initialData?.issues || [],
    });
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "12px",
          p: 1,
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "18px",
          pb: 1,
          borderBottom: "1px solid #ECECEC",
        }}
      >
        <span>{initialData ? "Edit Academic Year" : "Add Academic Year"}</span>
        <IconButton onClick={onClose} size="small">
          <MdClose size={20} />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ pt: 3 }}>
        <Typography
          variant="body2"
          sx={{ mb: 1, color: "#666", fontWeight: 500 }}
        >
          Enter the Academic Year range (e.g., <strong>2026 – 2027</strong>):
        </Typography>
        <TextField
          autoFocus
          fullWidth
          size="small"
          placeholder="e.g. 2026 – 2027"
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
            if (error) setError("");
          }}
          error={!!error}
          helperText={error}
          sx={{
            mt: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              "&.Mui-focused fieldset": {
                borderColor: "#6B3C58",
              },
            },
          }}
        />
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2, pt: 1 }}>
        <Button
          onClick={onClose}
          sx={{
            textTransform: "none",
            borderRadius: "20px",
            px: 3,
            color: "#555",
            border: "1px solid #CCC",
            "&:hover": { backgroundColor: "#F5F5F5" },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          variant="contained"
          sx={{
            textTransform: "none",
            borderRadius: "20px",
            px: 3,
            backgroundColor: "#6B3C58",
            "&:hover": { backgroundColor: "#4A154B" },
          }}
        >
          {initialData ? "Update Year" : "Add Year"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewsletterYearModal;

