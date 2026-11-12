
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
    Paper,
} from "@mui/material";
import { MdDragIndicator } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
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
import { setInitialStateOfgetAboutUsSectionById } from "../../../../ReduxStore/Slices/ContentManagement/AboutUsSection/getAboutUsSectionById";
import PositionRadio from "../../../../Components/ActiveInactiveRadio/PositionRadio";
import ViewRadio from "../../../../Components/ActiveInactiveRadio/ViewRadio";

const CollegeCommitteeModal = ({
    open,
    onClose,
    setSubmittedValues,
    submittedValues,
}) => {
    const [uploadedFile, setUploadedFile] = useState(null);
    const dispatch = useDispatch();

    const [editResponseData, setEditResponseData] = useState();
    const TableId = useSelector((state) => state.Table.TableId);

    const { getAboutUsSectionById } = useSelector(
        (state) => state?.getAboutUsSectionById
    );

    console.log(getAboutUsSectionById, "getAboutUsSectionById");

    console.log(TableId, "TebleIddddd");

    // useEffect(() => {
    //   console.log(TableId, "TebleIddddd111");

    //   if (TableId) {
    //     console.log(TableId, "TebleIddddd222");

    //     const fetchData = async () => {
    //       const data1 = {
    //         data: {},
    //         method: "get",
    //         apiName: `getAboutUsSectionById/${TableId}`,
    //       };
    //       const response = await dispatch(actions.GETABOUTUSSECTIONBYID(data1));

    //       console.log(response, "responseresponse");

    //       if (
    //         response?.payload?.message ===
    //         "About Us section retrieved successfully."
    //       ) {
    //         console.log("hiiii");

    //         setEditResponseData(response?.payload?.data);
    //         setUploadedFile({
    //           fileUrl: response?.payload?.data.additional_data[0]?.banner,
    //           type: "img",
    //           progress: 100,
    //         });
    //         // console.log(response?.payload?.data.additional_data[0]?.banner,"yhfuwrfrkjrw")
    //       }
    //     };
    //     fetchData();
    //   }
    // }, [open]);

    useEffect(() => {
        if (!open) return;

        if (getAboutUsSectionById?.data?.additional_data?.[0]?.banner) {
            setUploadedFile({
                fileUrl: getAboutUsSectionById?.data?.additional_data?.[0]?.banner,
                type: "img",
                progress: 100,
            });
        }
    }, [open, getAboutUsSectionById]);

    const handleClose = () => {
        dispatch(setInitialStateOfgetAboutUsSectionById());
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
                section_name: "CollegeCommittee section",
                heading: " ",
                sub_heading: null,
                content: " ",
                additional_data: {
                    card_design: values?.cards?.map((data) => ({
                        logo: data?.image?.fileUrl,
                        name: data?.card_name,
                        description: data?.card_description,
                        position: data?.card_position,

                    })),
                },
            },
            method: getAboutUsSectionById?.data?.section_id ? "put" : "Post",
            apiName: getAboutUsSectionById?.data?.section_id
                ? `updateAboutUsSection/${getAboutUsSectionById?.data?.section_id}`
                : `addAboutUsSection`,
        };
        const responseData = await dispatch(
            getAboutUsSectionById?.data?.section_id
                ? actions.UPDATEABOUTUSSECTION(data1)
                : actions.ADDABOUTUSSECTION(data1)
        );
        console.log(responseData?.payload?.message, "1111111");

        if (
            responseData?.payload?.message === getAboutUsSectionById?.data?.section_id
                ? "About Us section updated successfully."
                : "About Us section added successfully."
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
                                College Committee
                            </Typography>
                        </Box>
                    </DialogTitle>
                </Box>

                <Formik
                    enableReinitialize
                    initialValues={{
                        // img_url: getAboutUsSectionById?.data?.image_url || null,
                        img_url: null,
                        cards: getAboutUsSectionById?.data?.additional_data?.card_design?.map((data) => ({
                            image: {
                                fileUrl: data?.logo,
                                progress: 100,
                                type: "image"
                            },
                            card_name: data?.name,
                            card_description: data?.description,
                            card_position: data?.position,


                        }))
                            || [{ card_name: '', card_position: '', card_description: '', image: null }]
                    }}
                    validationSchema={Yup.object().shape({
                        cards: Yup.array()
                            .of(
                                Yup.object().shape({
                                    card_name: Yup.string()
                                        .required("Text is required"),

                                    card_position: Yup.string()
                                        .required("Text is required"),
                                    // card_description: Yup.string()
                                    //     .required("Text is required"),
                                    image: Yup.object()
                                        .nullable()
                                        .required("Image is required")
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
                    {({ handleSubmit, setFieldValue, resetForm, values }) => (
                        <Form onSubmit={handleSubmit}>
                            <DialogContent dividers>
                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12, md: 12 }}>

                                        {/* Card Section */}
                                        <Grid item size={{ xs: 12 }}>

                                            <FieldArray name="cards">
                                                {({ push, remove, move }) => (
                                                    <>
                                                        {values?.cards?.map((card, index) => (
                                                            <Paper
                                                                variant="outlined"
                                                                key={index}
                                                                draggable
                                                                onDragStart={(e) => {
                                                                    e.dataTransfer.setData("text/plain", String(index));
                                                                    e.dataTransfer.effectAllowed = "move";
                                                                }}
                                                                onDragOver={(e) => {
                                                                    e.preventDefault();
                                                                    e.dataTransfer.dropEffect = "move";
                                                                }}
                                                                onDrop={(e) => {
                                                                    e.preventDefault();
                                                                    const fromIdx = parseInt(e.dataTransfer.getData("text/plain"), 10);
                                                                    if (!isNaN(fromIdx) && fromIdx !== index) {
                                                                        move(fromIdx, index);
                                                                    }
                                                                }}
                                                                sx={{
                                                                    p: 2.5,
                                                                    mb: 2.5,
                                                                    borderRadius: "10px",
                                                                    borderColor: "#E5E5E5",
                                                                    backgroundColor: "#FCFBFA",
                                                                    transition: "all 0.2s ease",
                                                                    "&:hover": {
                                                                        borderColor: "#6B3C58",
                                                                        boxShadow: "0 2px 8px rgba(107,60,88,0.08)",
                                                                    },
                                                                }}
                                                            >
                                                                <Box
                                                                    sx={{
                                                                        display: "flex",
                                                                        justifyContent: "space-between",
                                                                        alignItems: "center",
                                                                        pb: 1.5,
                                                                        mb: 2,
                                                                        borderBottom: "1px solid #ECECEC",
                                                                        flexWrap: "wrap",
                                                                        gap: 1,
                                                                    }}
                                                                >
                                                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                                                        <Box
                                                                            sx={{
                                                                                cursor: "grab",
                                                                                display: "flex",
                                                                                alignItems: "center",
                                                                                color: "#6B3C58",
                                                                                p: 0.6,
                                                                                borderRadius: "6px",
                                                                                backgroundColor: "#F3EBF0",
                                                                                "&:active": { cursor: "grabbing" },
                                                                            }}
                                                                            title="Drag to reorder"
                                                                        >
                                                                            <MdDragIndicator size={20} />
                                                                        </Box>
                                                                        <Typography
                                                                            variant="subtitle2"
                                                                            sx={{ fontWeight: 700, color: "#6B3C58", fontSize: "15px" }}
                                                                        >
                                                                            Committee Member {index + 1} {card.card_name ? `— ${card.card_name}` : ""}
                                                                        </Typography>
                                                                    </Box>

                                                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                                                        <Button
                                                                            size="small"
                                                                            variant="outlined"
                                                                            disabled={index === 0}
                                                                            onClick={() => move(index, index - 1)}
                                                                            startIcon={<IoIosArrowUp />}
                                                                            sx={{
                                                                                textTransform: "none",
                                                                                fontSize: "12px",
                                                                                py: 0.4,
                                                                                px: 1,
                                                                                color: "#6B3C58",
                                                                                borderColor: "#D9C7D2",
                                                                                "&:disabled": { borderColor: "#E5E5E5", color: "#BBB" },
                                                                                "&:hover": { borderColor: "#6B3C58", backgroundColor: "#FBF7F9" },
                                                                            }}
                                                                        >
                                                                            Move Up
                                                                        </Button>

                                                                        <Button
                                                                            size="small"
                                                                            variant="outlined"
                                                                            disabled={index === values.cards.length - 1}
                                                                            onClick={() => move(index, index + 1)}
                                                                            startIcon={<IoIosArrowDown />}
                                                                            sx={{
                                                                                textTransform: "none",
                                                                                fontSize: "12px",
                                                                                py: 0.4,
                                                                                px: 1,
                                                                                color: "#6B3C58",
                                                                                borderColor: "#D9C7D2",
                                                                                "&:disabled": { borderColor: "#E5E5E5", color: "#BBB" },
                                                                                "&:hover": { borderColor: "#6B3C58", backgroundColor: "#FBF7F9" },
                                                                            }}
                                                                        >
                                                                            Move Down
                                                                        </Button>

                                                                        {values.cards.length > 1 && (
                                                                            <IconButton
                                                                                size="small"
                                                                                onClick={() => remove(index)}
                                                                                title="Remove Member"
                                                                                sx={{
                                                                                    color: "#D32F2F",
                                                                                    border: "1px solid #FFCDD2",
                                                                                    p: 0.6,
                                                                                    "&:hover": { backgroundColor: "#FFEBEE" },
                                                                                }}
                                                                            >
                                                                                <AiOutlineDelete size={17} />
                                                                            </IconButton>
                                                                        )}
                                                                    </Box>
                                                                </Box>

                                                                <Grid container spacing={2}>
                                                                    <Grid item size={{ xs: 12, md: 6 }}>
                                                                        <CustomInputLogin
                                                                            label="Name"
                                                                            name={`cards.${index}.card_name`}
                                                                            inputType="text"
                                                                            custPlaceholder="Enter Name"
                                                                        />
                                                                    </Grid>
                                                                    <Grid item size={{ xs: 12, md: 6 }}>
                                                                        <CustomInputLogin
                                                                            label="Administrative position"
                                                                            name={`cards.${index}.card_position`}
                                                                            inputType="text"
                                                                            custPlaceholder="Enter Administrative position"
                                                                        />
                                                                    </Grid>

                                                                    <Grid item size={{ xs: 12, md: 6 }}>
                                                                        <FileUploadComponent
                                                                            name={`cards.${index}.image`}
                                                                            uploadedFile={values.cards[index].image}
                                                                            setUploadedFile={(file) => {
                                                                                setFieldValue(`cards.${index}.image`, file);
                                                                            }}
                                                                            onFileUpload={(file) => setFieldValue(`cards.${index}.image`, file)}
                                                                        />
                                                                    </Grid>
                                                                    <Grid item size={{ xs: 12, md: 6 }}>
                                                                        <CustomInputLogin
                                                                            label="Description"
                                                                            name={`cards.${index}.card_description`}
                                                                            inputType="textarea"
                                                                            custPlaceholder="Enter Description"
                                                                        />
                                                                    </Grid>
                                                                </Grid>
                                                            </Paper>
                                                        ))}

                                                        {/* Add Card Button */}
                                                        {values.cards.length < 100 && (
                                                            <Grid item size={{ xs: 12 }} sx={{ display: "flex", justifyContent: "end" }}>
                                                                <Button
                                                                    variant="outlined"
                                                                    onClick={() => push({ card_name: '', card_position: '', card_description: '', image: null })}
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

export default CollegeCommitteeModal;
