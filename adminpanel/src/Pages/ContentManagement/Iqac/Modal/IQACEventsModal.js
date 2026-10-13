
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
import { Formik, Form, FieldArray } from "formik";

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
import { setInitialStateOfgetIQACSectionById } from "../../../../ReduxStore/Slices/ContentManagement/IqacSection/getIQACSectionById";
import PositionRadio from "../../../../Components/ActiveInactiveRadio/PositionRadio";
import ViewRadio from "../../../../Components/ActiveInactiveRadio/ViewRadio";
import PdfFileUploadComponent from "../../../../Components/FileUploadComponent/PdfFileUploadComponent";

const IQACEventsModal = ({
    open,
    onClose,
    setSubmittedValues,
    submittedValues,
}) => {
    const [uploadedFile, setUploadedFile] = useState(null);
    const dispatch = useDispatch();

    const [editResponseData, setEditResponseData] = useState();
    const TableId = useSelector((state) => state.Table.TableId);

    const { getIQACSectionById } = useSelector(
        (state) => state?.getIQACSectionById
    );

    console.log(getIQACSectionById, "getIQACSectionById");

    console.log(TableId, "TebleIddddd");


    useEffect(() => {
        if (!open) return;

        if (getIQACSectionById?.data?.additional_data?.[0]?.pdf) {
            setUploadedFile({
                fileUrl: getIQACSectionById?.data?.additional_data?.[0]?.pdf,
                type: "pdf",
                progress: 100,
            });
        }
    }, [open, getIQACSectionById]);

    const handleClose = () => {
        dispatch(setInitialStateOfgetIQACSectionById());
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
                section_name: "IQACEvents section",
                heading: "IQAC Events",
                sub_heading: null,
                content: " ",
                additional_data: {
                    card_design: values?.cards?.map((data) => ({
                        // logo: data?.image?.fileUrl,
                        name: data?.card_name,
                        description: data?.card_description,
                        pdf: data?.pdf?.fileUrl,

                    })),
                },
            },
            method: getIQACSectionById?.data?.section_id ? "put" : "Post",
            apiName: getIQACSectionById?.data?.section_id
                ? `updateIQACSection/${getIQACSectionById?.data?.section_id}`
                : `addIQACSection`,
        };
        const responseData = await dispatch(
            getIQACSectionById?.data?.section_id
                ? actions.UPDATEIQACSECTION(data1)
                : actions.ADDIQACSECTION(data1)
        );
        console.log(responseData?.payload?.message, "1111111");

        if (
            responseData?.payload?.message === getIQACSectionById?.data?.section_id
                ? "IQAC Us section updated successfully."
                : "IQAC Us section added successfully."
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
                                IQACEvents
                            </Typography>
                        </Box>
                    </DialogTitle>
                </Box>

                <Formik
                    enableReinitialize
                    initialValues={{
                        // img_url: getIQACSectionById?.data?.image_url || null,
                        img_url: null,
                        cards: getIQACSectionById?.data?.additional_data?.card_design?.map((data) => ({
                            pdf: {
                                fileUrl: data?.pdf,
                                progress: 100,
                                type: "pdf"
                            },
                            card_name: data?.name,
                         

                        }))
                            || [{ card_name: '', pdf: '' }]
                    }}
                    validationSchema={Yup.object().shape({
                        cards: Yup.array()
                            .of(
                                Yup.object().shape({
                                    card_name: Yup.string()
                                        .required("Text is required"),
                                    pdf: Yup.object()
                                        .nullable()
                                        .required("Pdf is required")
                                        .shape({
                                            fileUrl: Yup.string().required("pdf file is required"),
                                            type: Yup.string().required(),
                                            progress: Yup.number().required(),
                                        }),
                                })
                            )
                            .min(1, "At least one card is required")
                            .required("Cards are required"),
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

                                        {/* Card Section */}
                                        <Grid item size={{ xs: 12 }}>

                                            <FieldArray name="cards">
                                                {({ push, remove }) => (
                                                    <>
                                                        {/* <Grid item xs={12}>
                                                        <Typography variant='body2' sx={{ color: "#6B3C58" }}>Card Design</Typography>
                                                    </Grid> */}
                                                        {values?.cards?.map((card, index) => (
                                                            <Grid container spacing={2} key={index} sx={{ mt: index > 0 ? 1 : 0 }}>
                                                                <Grid item size={{ xs: 12 }}>
                                                                    <Typography variant='body2' sx={{ color: "#6B3C58" }}>Card Design {index + 1}</Typography>
                                                                </Grid>
                                                                <Grid item size={{ xs: 12, md: 6 }}>
                                                                    <CustomInputLogin
                                                                        label="Name"
                                                                        name={`cards.${index}.card_name`}
                                                                        inputType="text"
                                                                        custPlaceholder="Enter Name"
                                                                    />
                                                                </Grid>
                                                                <Grid item size={{ xs: 12, md: 6 }}>
                                                                    <PdfFileUploadComponent
                                                                        name={`cards.${index}.pdf`}
                                                                        uploadedFile={values.cards[index].pdf} // Use individual card pdf
                                                                        setUploadedFile={(file) => {
                                                                            setFieldValue(`cards.${index}.pdf`, file);
                                                                            console.log(file, "filelelelellele")
                                                                        }}
                                                                        onFileUpload={(file) => setFieldValue(`cards.${index}.pdf`, file)}
                                                                    />
                                                                </Grid>

                                                                {index > 0 && (
                                                                    <Grid item size={{ xs: 12 }}>
                                                                        <Button
                                                                            variant="outlined"
                                                                            color="error"
                                                                            onClick={() => remove(index)}
                                                                            sx={{
                                                                                textTransform: "none",
                                                                                color: "white",
                                                                                fontSize: "16px",
                                                                                boxShadow: "none",
                                                                                padding: { xs: "0px 20px", md: "0px 40px" },
                                                                                minHeight: "40px",
                                                                                borderRadius: "23px",
                                                                                background: "#3B4056",
                                                                                "&:hover": { backgroundColor: "#3B4056" },
                                                                            }}
                                                                        >
                                                                            Remove Card
                                                                        </Button>

                                                                    </Grid>)}
                                                            </Grid>
                                                        ))}

                                                        {/* Add Card Button */}
                                                        {values.cards.length < 100 && (
                                                            <Grid item size={{ xs: 12 }} sx={{ display: "flex", justifyContent: "end" }}>
                                                                <Button
                                                                    variant="outlined"
                                                                    onClick={() => push({ card_name: '', pdf: '' })}
                                                                    sx={{
                                                                        textTransform: "none",
                                                                        color: "#6B3C58",
                                                                        borderColor: "#6B3C58",
                                                                        "&:hover": { backgroundColor: "#6B3C58", color: "white" },
                                                                    }}
                                                                >
                                                                    Add Card
                                                                </Button>
                                                            </Grid>
                                                        )}
                                                    </>
                                                )}
                                            </FieldArray>
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

export default IQACEventsModal;
