
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import { Close as CloseIcon, Description } from "@mui/icons-material";
import { Formik, Form } from "formik";

import { FaPlus } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";

import CustomInputLogin from "../../../../Components/CustomInputLogin/CustomInputLogin";
// import '../BannerinputGetModal.css'; // Import external CSS
import "../../../../Components/ModalCss/BannerinputGetModal.css";

import { MdCancel } from "react-icons/md";
import * as Yup from "yup";
import { FiUpload } from "react-icons/fi";
import FileUploadComponent from "../../../../Components/FileUploadComponent/FileUploadComponent";
import ActiveInactiveRadio from "../../../../Components/ActiveInactiveRadio/ActiveInactiveRadio";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import actions from "../../../../ReduxStore/actions";
import { clearCustomerId } from "../../../../ReduxStore/Slices/Operator/customerSlice";
import { clearTableGetId } from "../../../../ReduxStore/Slices/TableId/TableIdGetSlice";
import { setInitialStateOfgetAboutUsSectionById } from "../../../../ReduxStore/Slices/ContentManagement/AboutUsSection/getAboutUsSectionById";
import { setInitialStateOfgetCampuslifeSectionById } from "../../../../ReduxStore/Slices/ContentManagement/CampusLife/getCampuslifeSectionById";

const BannerModal = ({
  open,
  onClose,
  setSubmittedValues,
  submittedValues,
}) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const dispatch = useDispatch();

  const [editResponseData, setEditResponseData] = useState();
  const TableId = useSelector((state) => state.Table.TableId);

  const { getCampuslifeSectionById } = useSelector(
    (state) => state?.getCampuslifeSectionById
  );

  useEffect(() => {
    if (!open) return;

    if (getCampuslifeSectionById?.data?.additional_data?.[0]?.banner) {
      setUploadedFile({
        fileUrl: getCampuslifeSectionById?.data?.additional_data?.[0]?.banner,
        type: "img",
        progress: 100,
      });
    }
  }, [open, getCampuslifeSectionById]);

  const handleClose = () => {
    dispatch(setInitialStateOfgetCampuslifeSectionById());
    dispatch(clearCustomerId(null));
    dispatch(clearTableGetId(null));
    setUploadedFile(null);
    onClose();

  };

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);

    const data1 = {
      data: {
        page_name: "student unions",
        section_name: "banner section",
        heading: " ",
        sub_heading: null,
        content: " ",
        additional_data: [
          {
            banner: values?.img_url,
          },
        ],
      },
      method: getCampuslifeSectionById?.data?.section_id ? "put" : "Post",
      apiName: getCampuslifeSectionById?.data?.section_id
        ? `updateCampusLifeSection/${getCampuslifeSectionById?.data?.section_id}`
        : `addCampusLifeSection`,
    };
    const responseData = await dispatch(
      getCampuslifeSectionById?.data?.section_id
        ? actions.UPDATECAMPUSLIFESECTION(data1)
        : actions.ADDCAMPUSLIFESECTION(data1)
    );
    console.log(responseData?.payload?.message, "1111111");

    if (
      responseData?.payload?.message === getCampuslifeSectionById?.data?.section_id
        ? "Campus Life section updated successfully."
        : "Campus Life section added successfully."
    ) {
      // handlePreviewCloseModal()

      // setTimeout(() => {
      //     setLoading(false)
      //     onClose()

      //     handlePreviewCloseModal()

      //     resetForm()

      //     setUploadedFile(null)

      // }, 2500)
      console.log("hiiiiiiii");
      // toast.success("Programme level updated successfully.");

      setTimeout(() => {
        setLoading(false);
        // onClose();
        handleClose();

        // handlePreviewCloseModal();
      }, 2000);

      // setTimeout(() => {
      // setLoading(false)
      toast.success(responseData?.payload?.message);

      dispatch(clearCustomerId(null));
      dispatch(clearTableGetId(null));

      resetForm();

      setUploadedFile(null);
      // }, 1500);
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
          borderRadius: "14px", // Target the Paper component
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
                Banner
              </Typography>
            </Box>
          </DialogTitle>
        </Box>

        <Formik
          enableReinitialize
          initialValues={{
            // img_url: getAboutUsSectionById?.data?.image_url || null,
            img_url: null,
          }}
          validationSchema={Yup.object({
            img_url: Yup.string()
              .nullable()
              .required("Image is required")
          })}
          onSubmit={
            handleSubmit

            // resetForm();
          }
        >
          {({ handleSubmit, setFieldValue, resetForm, values }) => (
            <Form onSubmit={handleSubmit}>
              <DialogContent dividers>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 12 }}>
                    <FileUploadComponent
                      name="img_url"
                      uploadedFile={uploadedFile}
                      setUploadedFile={(fileObj) => {
                        setUploadedFile(fileObj);
                      }}
                      onFileUpload={(url) => {
                        setFieldValue("img_url", url);
                      }}
                    // existingUrl={getAboutUsSectionById?.data?.image_url}
                    />
                  </Grid>

                  <Grid
                    size={{ xs: 12 }}
                    sx={{ display: "flex", justifyContent: "end", mt: 4 }}
                  >
                    <Grid>
                      <Button
                        onClick={() => {
                          resetForm();
                          setUploadedFile(null);
                          handleClose()
                        }}
                        variant="text"
                        // className="custom-clear-button"
                        sx={{
                          // backgroundColor: "#C38F51",
                          textTransform: "none",
                          color: "white",
                          fontSize: "16px",
                          mr: "10px",
                          // padding: "0px 40px",
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
                        // className="custom-ok-button"
                        sx={{
                          // backgroundColor: "#C38F51",
                          textTransform: "none",
                          color: "white",
                          fontSize: "16px",
                          boxShadow: "none",

                          // padding: "0px 40px",
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

              {/* </DialogActions> */}
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

export default BannerModal;
