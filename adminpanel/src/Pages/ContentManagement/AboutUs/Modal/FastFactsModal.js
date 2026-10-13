
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
import MultiFileUploadComponent from "../../../../Components/FileUploadComponent/MultiFileUploadComponent";

const FastFactsModal = ({
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

        const fastFactsImages =
            getAboutUsSectionById?.data?.additional_data?.banners || [];

        setUploadedFile(
            fastFactsImages.map((img) => ({
                fileUrl: img,
                type: "img",
                progress: 100,
            }))
        );
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
                section_name: "FastFacts section",
                heading: " ",
                sub_heading: null,
                content: " ",
                additional_data: {
                    banners: values?.fastFactsImages,
                    undergraduategraduate: values?.undergraduategraduate,
                    facultymember: values?.facultymember,
                    alumnisituatedglobally: values?.alumnisituatedglobally
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
                                Fast Facts
                            </Typography>
                        </Box>
                    </DialogTitle>
                </Box>

                <Formik
                    enableReinitialize
                    initialValues={{
                        // img_url: getAboutUsSectionById?.data?.image_url || null,
                        // img_url: null,
                        fastFactsImages: getAboutUsSectionById?.data?.additional_data?.banners || [],
                        undergraduategraduate: getAboutUsSectionById?.data?.additional_data?.undergraduategraduate || "",
                        facultymember: getAboutUsSectionById?.data?.additional_data?.facultymember || "",
                        alumnisituatedglobally: getAboutUsSectionById?.data?.additional_data?.alumnisituatedglobally || ""

                        //   getDepartmentById?.data?.additional_data?.fastFactsImages || [],
                    }}
                    validationSchema={Yup.object({
                      fastFactsImages: Yup.array()
                            .required("Image is required")
                            .min(1, "At least one image is required"),
                      undergraduategraduate: Yup.string().required("Text is required"),
                      facultymember: Yup.string().required("Text is required"),
                      alumnisituatedglobally: Yup.string().required("Text is required"),
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
                                        <MultiFileUploadComponent
                                            name="fastFactsImages"
                                            uploadedFile={uploadedFile}
                                            setUploadedFile={(files) =>
                                                setUploadedFile(files)
                                            }
                                            onFileUpload={(urls) =>
                                                setFieldValue("fastFactsImages", urls)
                                            }
                                        />






                                    </Grid>
                                    <Grid size={{ xs: 12, md: 12 }}>

                                        <CustomInputLogin
                                            label="Undergraduate & Graduate Students count"
                                            name="undergraduategraduate"
                                            inputType="text"
                                            custPlaceholder="Enter undergraduategraduate count"
                                        />
                                        <CustomInputLogin
                                            label="Faculty Member count"
                                            name="facultymember"
                                            inputType="text"
                                            custPlaceholder="Enter Faculty Member count"
                                        />
                                        <CustomInputLogin
                                            label="Research Scholars count"
                                            name="alumnisituatedglobally"
                                            inputType="text"
                                            custPlaceholder="Enter Alumni situated globally count"
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

export default FastFactsModal;
