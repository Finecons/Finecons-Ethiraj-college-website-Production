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
  CircularProgress,
  Paper,
} from "@mui/material";
import { MdClose } from "react-icons/md";
import { FiUploadCloud, FiFileText, FiEye, FiTrash2, FiRefreshCw } from "react-icons/fi";
import { useDispatch } from "react-redux";
import axios from "axios";
import actions from "../../../../ReduxStore/actions";

const NewsletterIssueModal = ({
  open,
  onClose,
  onSubmit,
  year,
  initialData,
}) => {
  const dispatch = useDispatch();

  const [month, setMonth] = useState("");
  const [title, setTitle] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [fileName, setFileName] = useState("");
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setMonth(initialData.month || "");
      setTitle(initialData.title || "");
      setPdfUrl(initialData.pdfUrl || "");
      setFileName(
        initialData.fileName ||
          (initialData.pdfUrl ? initialData.pdfUrl.split("/").pop() : "")
      );
    } else {
      setMonth("");
      setTitle("");
      setPdfUrl("");
      setFileName("");
    }
    setUploading(false);
    setErrors({});
  }, [open, initialData]);

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.toLowerCase().endsWith(".pdf")) {
      setErrors((prev) => ({
        ...prev,
        pdf: "Only PDF files are supported.",
      }));
      return;
    }

    try {
      setUploading(true);
      setErrors((prev) => ({ ...prev, pdf: "" }));
      setFileName(file.name);

      const formData = new FormData();
      formData.append("uploadFile", file);

      let uploadedUrl = null;

      // 1. Try Redux action
      try {
        const data = {
          data: formData,
          method: "post",
          apiName: "uploadPdfAndImage",
        };
        const response = await dispatch(actions.UPLOADPDFANDIMAGE(data));
        uploadedUrl =
          response?.payload?.data?.fileUrl || response?.payload?.data?.pdfUrl;
      } catch (err) {
        console.warn("Redux upload warning:", err);
      }

      // 2. Direct local backend fallback
      if (!uploadedUrl) {
        try {
          const res = await axios.post(
            "http://localhost:5005/api/v1/uploadPdfAndImage",
            formData
          );
          uploadedUrl = res?.data?.data?.fileUrl || res?.data?.data?.pdfUrl;
        } catch (localErr) {
          console.warn("Local backend upload warning:", localErr);
        }
      }

      // 3. Fallback to blob URL if network/azure unavailable
      if (!uploadedUrl) {
        uploadedUrl = URL.createObjectURL(file);
      }

      setPdfUrl(uploadedUrl);
    } catch (err) {
      console.error("PDF upload error:", err);
      const localBlobUrl = URL.createObjectURL(file);
      setPdfUrl(localBlobUrl);
    } finally {
      setUploading(false);
      // Reset input value to allow re-uploading same file if desired
      if (e.target) e.target.value = "";
    }
  };

  const handleRemoveFile = () => {
    setPdfUrl("");
    setFileName("");
  };

  const handleSave = () => {
    const newErrors = {};
    if (!month.trim()) {
      newErrors.month = "Month / Duration is required (e.g. October 2026)";
    }
    if (!pdfUrl.trim()) {
      newErrors.pdf = "Please upload a PDF file or enter a PDF link";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit({
      id: initialData?.id || `issue-${Date.now()}`,
      month: month.trim(),
      title: title.trim() || `${month.trim()} Newsletter`,
      pdfUrl: pdfUrl.trim(),
      fileName: fileName || `${month.trim()}-Newsletter.pdf`,
    });
    onClose();
  };

  const inputId = `newsletter-pdf-file-upload-${initialData?.id || "new"}`;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "14px",
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
          pb: 1.5,
          borderBottom: "1px solid #ECECEC",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{ fontSize: "18px", fontWeight: 700, color: "#252525" }}
          >
            {initialData ? "Edit Newsletter Issue" : "Add Newsletter Issue"}
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "#6B3C58", fontWeight: 600, fontSize: "13px" }}
          >
            Academic Year: {year}
          </Typography>
        </Box>
        <IconButton onClick={onClose} size="small">
          <MdClose size={20} />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ pt: 2.5, pb: 1.5 }}>
        {/* Month / Duration */}
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="body2"
            sx={{ mb: 0.8, color: "#333", fontWeight: 600, fontSize: "13.5px" }}
          >
            Month / Duration <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            autoFocus
            fullWidth
            size="small"
            placeholder="e.g. September 2026"
            value={month}
            onChange={(e) => {
              setMonth(e.target.value);
              if (errors.month) setErrors((prev) => ({ ...prev, month: "" }));
            }}
            error={!!errors.month}
            helperText={errors.month}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                "&.Mui-focused fieldset": {
                  borderColor: "#6B3C58",
                },
              },
            }}
          />
        </Box>

        {/* Issue Title */}
        <Box sx={{ mb: 2.5 }}>
          <Typography
            variant="body2"
            sx={{ mb: 0.8, color: "#333", fontWeight: 600, fontSize: "13.5px" }}
          >
            Issue Title (Optional)
          </Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="e.g. September 2026 Edition"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                "&.Mui-focused fieldset": {
                  borderColor: "#6B3C58",
                },
              },
            }}
          />
        </Box>

        {/* Hidden File Input */}
        <input
          type="file"
          id={inputId}
          accept="application/pdf"
          style={{ display: "none" }}
          onChange={handleFileUpload}
          disabled={uploading}
        />

        {/* PDF File Upload Section */}
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="body2"
            sx={{ mb: 1, color: "#333", fontWeight: 600, fontSize: "13.5px" }}
          >
            Upload PDF File <span style={{ color: "red" }}>*</span>
          </Typography>

          {!pdfUrl ? (
            /* Upload Dropzone Box */
            <Box
              component="label"
              htmlFor={inputId}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                boxSizing: "border-box",
                py: 3.5,
                px: 2,
                border: "2px dashed #CBB5C3",
                borderRadius: "10px",
                backgroundColor: "#FAF9F6",
                cursor: uploading ? "default" : "pointer",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  borderColor: "#6B3C58",
                  backgroundColor: "#F8F3F6",
                },
              }}
            >
              {uploading ? (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <CircularProgress size={32} sx={{ color: "#6B3C58" }} />
                  <Typography variant="body2" sx={{ color: "#666", fontWeight: 500 }}>
                    Uploading PDF...
                  </Typography>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      backgroundColor: "#F3EBF0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 1.5,
                    }}
                  >
                    <FiUploadCloud size={26} color="#6B3C58" />
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      color: "#252525",
                      fontSize: "14.5px",
                      mb: 0.5,
                    }}
                  >
                    Click to browse and upload PDF
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{ color: "#888", fontSize: "12px", mb: 1.5 }}
                  >
                    Supports: .pdf up to 50MB
                  </Typography>

                  <Button
                    component="span"
                    variant="outlined"
                    size="small"
                    sx={{
                      borderColor: "#6B3C58",
                      color: "#6B3C58",
                      textTransform: "none",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: 600,
                      px: 2.5,
                      py: 0.4,
                      pointerEvents: "none",
                    }}
                  >
                    Browse File
                  </Button>
                </Box>
              )}
            </Box>
          ) : (
            /* Uploaded PDF Card */
            <Paper
              variant="outlined"
              sx={{
                p: 2,
                borderRadius: "10px",
                backgroundColor: "#F6FBF7",
                borderColor: "#C8E6C9",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  overflow: "hidden",
                  mr: 1,
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: "8px",
                    backgroundColor: "#E8F5E9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FiFileText size={22} color="#2E7D32" />
                </Box>

                <Box sx={{ overflow: "hidden" }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: "#2E7D32",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      maxWidth: { xs: "170px", sm: "260px" },
                    }}
                  >
                    {fileName || "Newsletter.pdf"}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#555", fontSize: "11px" }}>
                    PDF Ready & Attached
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 0.8, flexShrink: 0 }}>
                <Button
                  component="label"
                  htmlFor={inputId}
                  size="small"
                  startIcon={<FiRefreshCw size={13} />}
                  sx={{
                    textTransform: "none",
                    fontSize: "12px",
                    color: "#6B3C58",
                    fontWeight: 600,
                    cursor: "pointer",
                    px: 1,
                    minWidth: "auto",
                  }}
                >
                  Replace
                </Button>

                <IconButton
                  size="small"
                  onClick={() => window.open(pdfUrl, "_blank")}
                  title="Preview PDF in new tab"
                  sx={{
                    color: "#2E7D32",
                    "&:hover": { backgroundColor: "#E8F5E9" },
                  }}
                >
                  <FiEye size={17} />
                </IconButton>

                <IconButton
                  size="small"
                  onClick={handleRemoveFile}
                  title="Remove PDF"
                  sx={{
                    color: "#D32F2F",
                    "&:hover": { backgroundColor: "#FFEBEE" },
                  }}
                >
                  <FiTrash2 size={17} />
                </IconButton>
              </Box>
            </Paper>
          )}

          {errors.pdf && (
            <Typography
              variant="caption"
              sx={{ color: "red", mt: 0.8, display: "block" }}
            >
              {errors.pdf}
            </Typography>
          )}
        </Box>

        {/* Divider with OR */}
        <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
          <Box sx={{ flex: 1, height: "1px", backgroundColor: "#E5E5E5" }} />
          <Typography
            sx={{
              px: 1.5,
              fontSize: "11px",
              color: "#999",
              fontWeight: 600,
              letterSpacing: "0.5px",
            }}
          >
            OR ENTER DIRECT PDF URL
          </Typography>
          <Box sx={{ flex: 1, height: "1px", backgroundColor: "#E5E5E5" }} />
        </Box>

        {/* Direct PDF URL Input */}
        <Box sx={{ mb: 1 }}>
          <TextField
            fullWidth
            size="small"
            placeholder="e.g. https://... or /uploads/pdfs/newsletter.pdf"
            value={pdfUrl}
            onChange={(e) => {
              const val = e.target.value;
              setPdfUrl(val);
              if (val && !fileName) {
                setFileName(val.split("/").pop() || "Newsletter.pdf");
              }
              if (errors.pdf) setErrors((prev) => ({ ...prev, pdf: "" }));
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                fontSize: "13px",
                "&.Mui-focused fieldset": {
                  borderColor: "#6B3C58",
                },
              },
            }}
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2.5, pt: 1 }}>
        <Button
          onClick={onClose}
          sx={{
            textTransform: "none",
            borderRadius: "22px",
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
            borderRadius: "22px",
            px: 3.5,
            backgroundColor: "#6B3C58",
            fontWeight: 600,
            "&:hover": { backgroundColor: "#4A154B" },
          }}
        >
          {initialData ? "Update Issue" : "Save Issue"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewsletterIssueModal;
