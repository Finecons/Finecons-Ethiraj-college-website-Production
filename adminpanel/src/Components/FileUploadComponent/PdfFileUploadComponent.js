import React, { useState } from "react";
import {
  Grid,
  Button,
  Box,
  Typography,
  Paper,
  LinearProgress,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { FiUpload } from "react-icons/fi";
import { HiDocumentArrowUp } from "react-icons/hi2";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FaEye } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import actions from "../../ReduxStore/actions";
import { adminUrl } from "../../constants";
import { ErrorMessage } from "formik";

const PdfFileUploadComponent = ({
  name,
  onFileUpload,
  uploadedFile,
  setUploadedFile,
}) => {
  const dispatch = useDispatch();

  const [openPreview, setOpenPreview] = useState(false);
  const [fileErrorOpen, setFileErrorOpen] = useState(false);

  // =========================
  // HANDLE FILE UPLOAD
  // =========================
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // ❌ BLOCK NON-PDF FILES
    if (file.type !== "application/pdf") {
      setFileErrorOpen(true);
      event.target.value = ""; // reset input
      return;
    }

    // ✅ PDF UPLOAD
    const formData = new FormData();
    formData.append("uploadFile", file);

    const data1 = {
      data: formData,
      method: "post",
      apiName: "uploadPdfAndImage",
    };

    const uploadResponse = await dispatch(actions.UPLOADPDFANDIMAGE(data1));
    const fileUrl = uploadResponse?.payload?.data?.fileUrl;

    onFileUpload(fileUrl);

    setUploadedFile({
      fileUrl,
      type: file.type,
      progress: 100,
    });
  };

  const handleFileDelete = () => {
    setUploadedFile(null);
    onFileUpload(null);
  };

  const finalUrl = uploadedFile?.fileUrl?.startsWith("http")
    ? uploadedFile?.fileUrl
    : uploadedFile?.fileUrl;

  return (
    <Grid>
      {/* LABEL */}
      <label style={{ fontSize: "16px", paddingBottom: "10px" }}>
        Upload Document{" "}
        <span style={{ fontSize: "11px", color: "#7A7A7A" }}>
          (Only PDF allowed)
        </span>
      </label>

      {/* FILE INPUT */}
      <input
        accept=".pdf"
        style={{ display: "none" }}
        id={`file-upload-${name}`}
        type="file"
        name={name}
        onChange={handleFileUpload}
      />

      {/* BROWSE BUTTON */}
      <label htmlFor={`file-upload-${name}`}>
        <Button
          component="span"
          startIcon={<FiUpload />}
          sx={{
            width: "100%",
            mt: 1,
            color: "white",
            background: "#252525",
            borderRadius: "5px",
            fontSize: "14px",
            textTransform: "none",
            "&:hover": { background: "#000" },
          }}
        >
          Browse PDF
        </Button>
      </label>

      {/* UPLOADED FILE UI */}
      {uploadedFile && (
        <Grid item xs={12} mt={2}>
          <Paper
            sx={{
              p: 1,
              background: "#F7F7F7",
              boxShadow: "none",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <HiDocumentArrowUp style={{ fontSize: 30, color: "#C38F51" }} />

            <Box sx={{ flex: 1 }}>
              <Box display="flex" justifyContent="space-between">
                <Typography fontSize="12px">PDF Document</Typography>

                <Box>
                  <IconButton onClick={() => setOpenPreview(true)}>
                    <FaEye fontSize="14px" />
                  </IconButton>
                  <IconButton onClick={handleFileDelete}>
                    <RiDeleteBin2Line fontSize="14px" />
                  </IconButton>
                </Box>
              </Box>

              <LinearProgress
                variant="determinate"
                value={uploadedFile.progress}
                sx={{
                  height: 6,
                  borderRadius: 10,
                  mt: 0.5,
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#1FC45B",
                  },
                }}
              />

              <Typography fontSize="12px" color="green" align="right">
                Upload Successful!
              </Typography>
            </Box>
          </Paper>
        </Grid>
      )}

      {/* PDF PREVIEW */}
      <Dialog
        open={openPreview}
        onClose={() => setOpenPreview(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          PDF Preview
          <IconButton
            onClick={() => setOpenPreview(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <IoMdCloseCircleOutline />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <iframe
            src={finalUrl}
            title="PDF Preview"
            width="100%"
            height="500px"
            style={{ border: "none" }}
          />
        </DialogContent>
      </Dialog>

      {/* ❌ PDF ONLY ERROR POPUP */}
      <Dialog
        open={fileErrorOpen}
        onClose={() => setFileErrorOpen(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>
          Invalid File
          <IconButton
            onClick={() => setFileErrorOpen(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <IoMdCloseCircleOutline />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Typography color="error" fontSize="14px">
            Only PDF files are allowed. Please upload a valid PDF document.
          </Typography>

          <Box textAlign="right" mt={2}>
            <Button
              variant="contained"
              onClick={() => setFileErrorOpen(false)}
              sx={{ background: "#252525" }}
            >
              OK
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
      <ErrorMessage
        name={name}
        component="div"
        className="inputs-error-msg"
        style={{ color: "red", fontSize: "12px", fontWeight: '400' }}
      />
    </Grid>
  );
};

export default PdfFileUploadComponent;
