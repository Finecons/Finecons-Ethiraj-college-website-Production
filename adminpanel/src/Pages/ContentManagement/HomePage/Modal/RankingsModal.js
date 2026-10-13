
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
import { setInitialStateOfgetHomeSectionById } from "../../../../ReduxStore/Slices/ContentManagement/HomeSection/getHomeSectionById";


const RankingsModal = ({
    open,
    onClose,
    setSubmittedValues,
    submittedValues,
}) => {
    const [uploadedFile, setUploadedFile] = useState(null);
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

        if (getHomeSectionById?.data?.additional_data?.[0]?.banner) {
            setUploadedFile({
                fileUrl: getHomeSectionById?.data?.additional_data?.[0]?.banner,
                type: "img",
                progress: 100,
            });
        }
    }, [open, getHomeSectionById]);

    const handleClose = () => {
        dispatch(setInitialStateOfgetHomeSectionById());
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
                section_name: "Rankings section",
                heading: values?.heading_title,
                sub_heading: null,
                content: values?.heading_sub_text,
                additional_data: {
                    card_design: values?.cards?.map((data) => ({
                        logo: data?.image?.fileUrl,
                        title: data?.card_title,
                        content: data?.card_content,
                    })),
                    "card_count": [
                        {
                            "count": values?.Students_Enrolled_count,
                            "content": values?.Students_Enrolled_text
                        },
                        {
                            "count": values?.Programmes_Offered_count,
                            "content": values?.Programmes_Offered_text
                        },
                        {
                            "count": values?.Faculty_Members_count,
                            "content": values?.Faculty_Members_text
                        }
                    ]
                },
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


            console.log("hiiiiiiii");

            setTimeout(() => {
                setLoading(false);
                // onClose();
                handleClose();

                // handlePreviewCloseModal();
            }, 2000);

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
                                Banner
                            </Typography>
                        </Box>
                    </DialogTitle>
                </Box>

                <Formik
                    enableReinitialize
                    initialValues={{
                        // img_url: getAboutUsSectionById?.data?.image_url || null,
                        heading_title: getHomeSectionById?.data?.heading || '',
                        // heading_second_text: editResponseData?.sub_heading || '',
                        heading_sub_text: getHomeSectionById?.data?.content || '',

                        Students_Enrolled_count: getHomeSectionById?.data?.additional_data?.card_count[0]?.count || "",
                        Students_Enrolled_text: getHomeSectionById?.data?.additional_data?.card_count[0]?.content || '',

                        Programmes_Offered_count: getHomeSectionById?.data?.additional_data?.card_count[1]?.count || "",
                        Programmes_Offered_text: getHomeSectionById?.data?.additional_data?.card_count[1]?.content || '',

                        Faculty_Members_count: getHomeSectionById?.data?.additional_data?.card_count[2]?.count || "",
                        Faculty_Members_text: getHomeSectionById?.data?.additional_data?.card_count[2]?.content || '',

                        cards: getHomeSectionById?.data?.additional_data?.card_design?.map((data) => ({
                            image: {
                                fileUrl: data?.logo,
                                progress: 100,
                                type: "image"
                            },
                            card_title: data?.title,
                            card_content: data?.content,
                        }))
                            || [{ card_title: '', card_content: '', image: null }]
                    }}
                    validationSchema={Yup.object().shape({
                        heading_title: Yup.string()
                            .required("Heading title is required"),

                        heading_sub_text: Yup.string()
                            .required("Heading sub text is required"),

                        Students_Enrolled_count: Yup.number()
                            .typeError("Students Enrolled count must be a number")
                            .min(0, "Count cannot be negative")
                            .required("Students Enrolled count is required"),

                        Students_Enrolled_text: Yup.string()
                            .required("Students Enrolled text is required"),

                        Programmes_Offered_count: Yup.number()
                            .typeError("Programmes Offered count must be a number")
                            .min(0, "Count cannot be negative")
                            .required("Programmes Offered count is required"),

                        Programmes_Offered_text: Yup.string()
                            .required("Programmes Offered text is required"),

                        Faculty_Members_count: Yup.number()
                            .typeError("Faculty Members count must be a number")
                            .min(0, "Count cannot be negative")
                            .required("Faculty Members count is required"),

                        Faculty_Members_text: Yup.string()
                            .required("Faculty Members text is required"),

                        /** ✅ Cards validation */
                        cards: Yup.array()
                            .of(
                                Yup.object().shape({
                                    card_title: Yup.string()
                                        .required("Card title is required"),

                                    card_content: Yup.string()
                                        .required("Card content is required"),

                                    image: Yup.object()
                                        .nullable()
                                        .required("Card image is required")
                                        .shape({
                                            fileUrl: Yup.string().required("Image file is required"),
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
                    {({ handleSubmit, setFieldValue, resetForm, values, errors, isSubmitting }) => (
                        <Form onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                            console.log("Formik Validation Errors 👉", errors);
                        }}>
                            <DialogContent dividers>
                                <Grid container spacing={2}>
                                    {/* <Grid size={{ xs: 12, md: 12 }}> */}
                                        {/* Heading Section */}
                                        <Grid item size={{ xs: 12 }}>
                                            <Typography variant='body2' sx={{ color: "#6B3C58" }}>Heading</Typography>
                                        </Grid>
                                        <Grid item size={{ xs: 12}}>
                                            <CustomInputLogin
                                                label="Title"
                                                name="heading_title"
                                                inputType="text"
                                                custPlaceholder="Enter Title"
                                            />
                                        </Grid>

                                        <Grid item size={{ xs: 12 }}>
                                            <CustomInputLogin
                                                label="Subtext"
                                                name="heading_sub_text"
                                                inputType="textarea"
                                                custPlaceholder="Enter Subtext"
                                            />
                                        </Grid>


                                        {/* Heading Section */}
                                        <Grid item size={{ xs: 12 }}>
                                            <Typography variant='body2' sx={{ color: "#6B3C58" }}>Count</Typography>
                                        </Grid>

                                        <Grid item size={{ xs: 12}}>
                                            <CustomInputLogin
                                                label="Students Enrolled count"
                                                name="Students_Enrolled_count"
                                                inputType="text"
                                                custPlaceholder="Enter Students Enrolled count"
                                            />
                                        </Grid>
                                        <Grid item size={{ xs: 12 }}>
                                            <CustomInputLogin
                                                label="Students Enrolled text"
                                                name="Students_Enrolled_text"
                                                inputType="textarea"
                                                custPlaceholder="Enter Students Enrolled text"
                                            />
                                        </Grid>
                                        <Grid item size={{ xs: 12}}>
                                            <CustomInputLogin
                                                label="Programmes Offered count"
                                                name="Programmes_Offered_count"
                                                inputType="text"
                                                custPlaceholder="Enter Programmes Offered count"
                                            />
                                        </Grid>
                                        <Grid item size={{ xs: 12 }}>
                                            <CustomInputLogin
                                                label="Programmes Offered text"
                                                name="Programmes_Offered_text"
                                                inputType="textarea"
                                                custPlaceholder="Enter Programmes Offered text"
                                            />
                                        </Grid>
                                        <Grid item size={{ xs: 12}}>
                                            <CustomInputLogin
                                                label="Faculty Members count"
                                                name="Faculty_Members_count"
                                                inputType="text"
                                                custPlaceholder="Enter Faculty Members count"
                                            />
                                        </Grid>

                                        <Grid item size={{ xs: 12 }}>
                                            <CustomInputLogin
                                                label="Faculty Members text"
                                                name="Faculty_Members_text"
                                                inputType="textarea"
                                                custPlaceholder="Enter Faculty Members text"
                                            />
                                        </Grid>
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
                                                                <Grid item size={{ xs: 12}}>
                                                                    <CustomInputLogin
                                                                        label="Card Title"
                                                                        name={`cards.${index}.card_title`}
                                                                        inputType="text"
                                                                        custPlaceholder="Enter Card Title"
                                                                    />
                                                                </Grid>

                                                                <Grid item size={{ xs: 12}}>
                                                                    <FileUploadComponent
                                                                        name={`cards.${index}.image`}
                                                                        uploadedFile={values.cards[index].image} // Use individual card image
                                                                        setUploadedFile={(file) => {
                                                                            setFieldValue(`cards.${index}.image`, file);
                                                                            console.log(file, "filelelelellele")

                                                                        }}
                                                                        onFileUpload={(file) => setFieldValue(`cards.${index}.image`, file)}
                                                                    />

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
                                                                </Grid>
                                                                <Grid item size={{ xs: 12 }}>
                                                                    <CustomInputLogin
                                                                        label="Content"
                                                                        name={`cards.${index}.card_content`}
                                                                        inputType="textarea"
                                                                        custPlaceholder="Enter Content"
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
                                                                    onClick={() => push({ card_title: '', card_content: '', image: null })}
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
                                    {/* </Grid> */}

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
                                                disabled={isSubmitting}
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

export default RankingsModal;
