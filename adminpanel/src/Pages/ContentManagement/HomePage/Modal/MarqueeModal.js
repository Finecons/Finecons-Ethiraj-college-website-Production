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
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { Formik, Form } from "formik";
import { MdCancel } from "react-icons/md";
import * as Yup from "yup";
import CustomInputLogin from "../../../../Components/CustomInputLogin/CustomInputLogin";
import "../../../../Components/ModalCss/BannerinputGetModal.css";
import FileUploadComponent from "../../../../Components/FileUploadComponent/FileUploadComponent";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import actions from "../../../../ReduxStore/actions";
import { clearTableGetId } from "../../../../ReduxStore/Slices/TableId/TableIdGetSlice";
import { setInitialStateOfgetMarqueeById } from "../../../../ReduxStore/Slices/ContentManagement/Marquee/getMarqueeById";

const MarqueeModal = ({
    open,
    onClose,
    setSubmittedValues,
    submittedValues,
}) => {
    const [uploadedFile, setUploadedFile] = useState(null);
    const dispatch = useDispatch();

    const [editResponseData, setEditResponseData] = useState();
    const TableId = useSelector((state) => state.Table.TableId);

    const { getMarqueeById } = useSelector(
        (state) => state?.getMarqueeById
    );

    console.log(getMarqueeById, "getMarqueeById");
    console.log(TableId, "TableIddddd");

    useEffect(() => {
        if (!open) return;

        if (getMarqueeById?.data?.icon) {
            setUploadedFile({
                fileUrl: getMarqueeById?.data?.icon,
                type: "img",
                progress: 100,
            });
        }
    }, [open, getMarqueeById]);

    const handleClose = () => {
        dispatch(setInitialStateOfgetMarqueeById());
        dispatch(clearTableGetId(null));
        setUploadedFile(null);
        onClose();
    };

    const [loading, setLoading] = useState(false);
    const handleSubmit = async (values, { resetForm }) => {
        setLoading(true);

        const data1 = {
            data: {
                text: values.title,
                // icon: values.icon || null,
                link: values.link || values.icon,
                // page_name: values.page_name || "home page",
            },
            method: getMarqueeById?.data?.marquee_id ? "put" : "post",
            apiName: getMarqueeById?.data?.marquee_id
                ? `updateMarquee/${getMarqueeById?.data?.marquee_id}`
                : `addMarquee`,
        };

        const responseData = await dispatch(
            getMarqueeById?.data?.marquee_id
                ? actions.UPDATEMARQUEE(data1)
                : actions.ADDMARQUEE(data1)
        );

        if (responseData?.payload?.message) {
            const successMessages = [
                "Marquee updated successfully.",
                "Marquee added successfully."
            ];

            if (successMessages.includes(responseData?.payload?.message)) {
                setTimeout(() => {
                    setLoading(false);
                    handleClose();
                }, 2000);

                toast.success(responseData?.payload?.message);
                resetForm();
                setUploadedFile(null);
            } else {
                setTimeout(() => {
                    setLoading(false);
                }, 2500);
                toast.error(responseData?.payload?.message);
            }
        } else {
            setTimeout(() => {
                setLoading(false);
            }, 2500);
            toast.error("An error occurred while saving the marquee.");
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
                    borderRadius: "14px",
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
                                {getMarqueeById?.data?.marquee_id ? "Edit Marquee" : "Add Marquee"}
                            </Typography>
                        </Box>
                    </DialogTitle>
                </Box>

                <Formik
                    enableReinitialize
                    initialValues={{
                        title: getMarqueeById?.data?.text || "",
                        icon: getMarqueeById?.data?.icon || null,
                        link: getMarqueeById?.data?.link || "",
                        // page_name: getMarqueeById?.data?.page_name || "home page",
                    }}
                    validationSchema={Yup.object({
                        title: Yup.string().required("Title is required"),
                        icon: Yup.string().nullable(),
                        link: Yup.string().url("Must be a valid URL").nullable(),
                        // page_name: Yup.string(),
                    })}
                    onSubmit={handleSubmit}
                >
                    {({ handleSubmit, setFieldValue, resetForm, values, errors, touched }) => (
                        <Form onSubmit={handleSubmit}>
                            <DialogContent dividers>
                                <Grid container spacing={2}>
                                    <Grid item size={{ xs: 12 }}>
                                        <CustomInputLogin
                                            label="Title"
                                            name="title"
                                            inputType="text"
                                            custPlaceholder="Enter marquee title"
                                        />
                                    </Grid>

                                    {/* <Grid item size={{ xs: 12 }}>
                                        <CustomInputLogin
                                            label="Page Name"
                                            name="page_name"
                                            inputType="text"
                                            custPlaceholder="e.g., home page"
                                        />
                                    </Grid> */}

                                    <Grid item size={{ xs: 12 }}>
                                        <CustomInputLogin
                                            label="Link (Optional)"
                                            name="link"
                                            inputType="text"
                                            custPlaceholder="Enter URL"
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 12 }}>
                                        <FileUploadComponent
                                            name="icon"
                                            uploadedFile={uploadedFile}
                                            setUploadedFile={(file) =>
                                                setUploadedFile(file)
                                            }
                                            onFileUpload={(url) =>
                                                setFieldValue("icon", url)
                                            }
                                            label="Icon (Optional)"
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
                                                    handleClose();
                                                }}
                                                variant="text"
                                                sx={{
                                                    textTransform: "none",
                                                    color: "white",
                                                    fontSize: "16px",
                                                    mr: "10px",
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
                                                disabled={loading}
                                                sx={{
                                                    textTransform: "none",
                                                    color: "white",
                                                    fontSize: "16px",
                                                    boxShadow: "none",
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
                                                {loading ? "Saving..." : "Submit"}
                                            </Button>
                                        </Grid>
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

export default MarqueeModal;
