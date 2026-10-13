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
import { setInitialStateOfgetHomeSectionById } from "../../../../ReduxStore/Slices/ContentManagement/HomeSection/getHomeSectionById";
import MultiFileUploadComponent from "../../../../Components/FileUploadComponent/MultiFileUploadComponent";
import VideoUploadComponent from "../../../../Components/FileUploadComponent/VideoUploadComponent";

const ExperiencingEthirajModal = ({
    open,
    onClose,
    setSubmittedValues,
    submittedValues,
}) => {
    const [uploadedFileVideo, setUploadedFileVideo] = useState(null);
    const [uploadedFileImage, setUploadedFileImage] = useState(null);

    const dispatch = useDispatch();

    const [editResponseData, setEditResponseData] = useState();
    const TableId = useSelector((state) => state.Table.TableId);

    const { getHomeSectionById } = useSelector(
        (state) => state?.getHomeSectionById
    );

    console.log(getHomeSectionById, "getHomeSectionById");

    console.log(TableId, "TebleIddddd");

    useEffect(() => {
        if (!open) return;

        if (getHomeSectionById?.data?.additional_data?.video) {
            const uploadfile_apidata = getHomeSectionById?.data?.additional_data?.video?.map((data) => (
                {
                    fileUrl: data,
                    type: "video",
                    progress: 100,
                }))
            setUploadedFileVideo(uploadfile_apidata);

            // setUploadedFileVideo(
            //     {
            //         fileUrl: getHomeSectionById?.data?.additional_data?.video,
            //         type: "video",
            //         progress: 100,
            //     }
            // )
        }
    }, [open, getHomeSectionById]);

    useEffect(() => {
        if (!open) return;

        if (getHomeSectionById?.data?.additional_data?.thumbnail) {
            setUploadedFileImage({
                fileUrl: getHomeSectionById?.data?.additional_data?.thumbnail,
                type: "img",
                progress: 100,
            });
        }
    }, [open, getHomeSectionById]);

    const handleClose = () => {
        dispatch(setInitialStateOfgetHomeSectionById());
        dispatch(clearCustomerId(null));
        dispatch(clearTableGetId(null));
        setUploadedFileVideo(null);
        setUploadedFileImage(null);

        onClose();

    };

    const [loading, setLoading] = useState(false);
    const handleSubmit = async (values, { resetForm }) => {
        setLoading(true);

        const data1 = {
            data: {
                section_name: "ExperiencingEthiraj section",
                heading: " ",
                sub_heading: null,
                content: values.content,
                additional_data: { video: values.video, thumbnail: values.thumbnail },
            },
            method: getHomeSectionById?.data?.section_id ? "put" : "Post",
            apiName: getHomeSectionById?.data?.section_id
                ? `updateHomeSection/${getHomeSectionById?.data?.section_id}`
                : `addHomeSection`,
        };
        const responseData = await dispatch(
            getHomeSectionById?.data?.section_id
                ? actions.UPDATEHOMESECTION(data1)
                : actions.ADDHOMESECTIONPOST(data1)
        );
        console.log(responseData?.payload?.message, "1111111");

        if (
            responseData?.payload?.message === getHomeSectionById?.data?.section_id
                ? "Home section updated successfully."
                : "Home section added successfully."
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

            setUploadedFileVideo(null);
            setUploadedFileImage(null);

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
                                ExperiencingEthiraj
                            </Typography>
                        </Box>
                    </DialogTitle>
                </Box>

                <Formik
                    enableReinitialize
                    initialValues={{
                        // img_url: getHomeSectionById?.data?.additional_data?.image_url || null,
                        // homebannerImages: getHomeSectionById?.data?.additional_data?.banner || [],
                        video: getHomeSectionById?.data?.additional_data?.video || [],
                        thumbnail: getHomeSectionById?.data?.additional_data?.thumbnail || [],
                        // title: getHomeSectionById?.data?.heading || "",
                        content: getHomeSectionById?.data?.content || "",
                        // img_url: null,
                    }}
                    validationSchema={Yup.object({
                        // title: Yup.string().required("Text is required"),
                        content: Yup.string().required("Text is required"),
                        video: Yup.array()
                            .required("video is required")
                            .min(1, "Video is required"),

                        // thumbnail: Yup.object()
                        //     .nullable()
                        //     .required("image is required"),

                    })}
                    onSubmit={
                        handleSubmit

                        // resetForm();
                    }
                >
                    {({ handleSubmit, setFieldValue, resetForm, values, errors }) => (
                        <Form onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                            console.log("Formik Validation Errors 👉", errors);
                        }}>
                            <DialogContent dividers>
                                <Grid container spacing={2}>

                                    {/* <Grid item size={{ xs: 12 }}>
                                        <CustomInputLogin
                                            label="Title"
                                            name="title"
                                            inputType="text"
                                            custPlaceholder="Enter Title"
                                        />
                                    </Grid> */}

                                    <Grid item size={{ xs: 12, md: 8 }}>
                                        <CustomInputLogin
                                            label="Content"
                                            name="content"
                                            inputType="textarea"
                                            custPlaceholder="Enter Content"
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 12 }}>
                                        {/* <FileUploadComponent
                      name="img_url"
                      uploadedFile={uploadedFile}
                      setUploadedFile={(fileObj) => {
                        setUploadedFile(fileObj);
                      }}
                      onFileUpload={(url) => {
                        setFieldValue("img_url", url);
                      }}
                    // existingUrl={getAboutUsSectionById?.data?.image_url}
                    /> */}

                                        {/* <MultiFileUploadComponent
                      name="homebannerImages"
                      uploadedFile={uploadedFile}
                      setUploadedFile={(files) =>
                        setUploadedFile(files)
                      }
                      onFileUpload={(urls) =>
                        setFieldValue("homebannerImages", urls)
                      }
                    /> */}

                                        <Grid item xs={12} md={12}>
                                            <VideoUploadComponent
                                                name="video"
                                                uploadedVideos={uploadedFileVideo} // ✅ fixed prop name
                                                setUploadedVideos={setUploadedFileVideo} // ✅ fixed prop name
                                                onVideoUpload={(videos) => setFieldValue('video', videos)} // ✅ fixed function name
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <FileUploadComponent
                                                name="thumbnail"
                                                uploadedFile={uploadedFileImage}
                                                setUploadedFile={(fileObj) => {
                                                    setUploadedFileImage(fileObj);
                                                }}
                                                onFileUpload={(url) => {
                                                    setFieldValue("thumbnail", url);
                                                }}
                                            // existingUrl={getAboutUsSectionById?.data?.image_url}
                                            />
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
                                                    setUploadedFileVideo(null);
                                                    setUploadedFileImage(null);

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

export default ExperiencingEthirajModal;
