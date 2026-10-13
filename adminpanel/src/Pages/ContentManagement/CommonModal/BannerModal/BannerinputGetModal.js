
// import React, { useState } from 'react';
// import {
//     Dialog,
//     DialogTitle,
//     DialogContent,
//     DialogActions,
//     IconButton,
//     Button,
//     Box,
//     Typography,
//     Card,
//     CardMedia,
//     CardContent,
//     CardActions,
// } from '@mui/material';
// import { Close as CloseIcon, Mic as MicIcon, Delete as DeleteIcon } from '@mui/icons-material';
// import { Formik, Form } from 'formik';

// import { FaPlus } from "react-icons/fa6";
// import { MdPayment } from 'react-icons/md';

// import CustomInputLogin from '../../../../Components/CustomInputLogin/CustomInputLogin';



// const BannerinputGetModal = ({ open, onClose, onSave, heading, setSubmittedValues, submittedValues }) => {

//     // const [submittedValues, setSubmittedValues] = useState([]); // To store submitted UTR and images



//     return (
//         <Dialog
//             open={open}
//             onClose={onClose}
//             fullWidth
//             maxWidth="md"
//             // sx={{ '& .MuiDialog-paper': { borderRadius: 2, width: '400px' } }}
//             sx={{
//                 overflowX: 'auto',
//                 '& .MuiDialog-paper': {
//                     overflowY: 'visible',
//                     // width: '500px',
//                     width: {
//                         xs: '100%',  // Small screens
//                         md: '100%',   // Medium screens (isMd)
//                         lg: '100%',   // Large screens (isLg)
//                     },
//                     // maxWidth: 'none',
//                 },
//                 '& .MuiDialog-container': {
//                     // height: 'auto'
//                 },
//             }}
//         >
//             <Box sx={{ position: 'relative' }}>
//                 <IconButton
//                     aria-label="Close"
//                     onClick={() => {
//                         onClose();

//                     }}
//                     sx={{ position: 'absolute', top: 8, right: 8, color: 'text.secondary' }}
//                 >
//                     <CloseIcon />
//                 </IconButton>
//                 <DialogTitle sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             width: 40,
//                             height: 40,
//                             borderRadius: '50%',
//                             backgroundColor: 'rgb(83 193 205 / 20%)',
//                             color: "var(--button-bgcolor)",
//                             marginRight: 1,
//                         }}
//                     >
//                         <MdPayment />
//                     </Box>
//                     <Box>
//                         <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '17px' }}>
//                             Payment Details
//                         </Typography>
//                     </Box>
//                 </DialogTitle>

//                 <Formik
//                     initialValues={{
//                         payment_utr: '',
//                         image: '',
//                     }}
//                     onSubmit={(values, { resetForm }) => {
//                         setSubmittedValues([...submittedValues, values]); // Store the submitted values
//                         resetForm(); // Reset form after submission
//                     }}
//                 >
//                     {({ values, isSubmitting, handleChange, handleSubmit, setFieldValue }) => (
//                         <Form onSubmit={handleSubmit}>
//                             <DialogContent dividers sx={{ paddingX: 4 }}>
//                                 <CustomInputLogin
//                                     label="Payment UTR Number"
//                                     name="payment_utr"
//                                     inputType="text"
//                                     custPlaceholder="Enter UTR Number"
//                                     // value={values.payment_utr}
//                                     // onChange={handleChange}
//                                 />

//                                 <Box
//                                     sx={{
//                                         marginTop: 2,
//                                         display: 'flex',
//                                         flexDirection: 'column',
//                                         alignItems: 'center',
//                                         gap: 2,
//                                     }}
//                                 >
//                                     {/* <input
//                                         type="file"
//                                         name="image"
//                                         accept="image/*"
//                                         onChange={(e) => handleImageChange(e, setFieldValue)}
//                                     /> */}


//                                 </Box>
//                                 <Button variant="contained" type="submit"
//                                     startIcon={<FaPlus />}
//                                     sx={{
//                                         width: "100%",
//                                         mt: 2,
//                                         background: "rgb(80,197,209)",
//                                         background: "linear-gradient(90deg, rgba(80,197,209,1) 13%, rgba(76,94,96,1) 57%)",
//                                         color: "white",
//                                         fontWeight: "700",
//                                     }}>
//                                     Add More
//                                 </Button>
//                             </DialogContent>

//                             <DialogActions sx={{ padding: 2, paddingRight: 4 }}>
//                                 <Button
//                                     onClick={() => {
//                                         setSubmittedValues([])
//                                     }}
//                                     variant="text"
//                                     sx={{
//                                         background: 'rgb(249 249 249)',
//                                         color: 'black',
//                                         '&:hover': {
//                                             backgroundColor: 'rgb(249 249 249)',
//                                             color: 'black',
//                                         },
//                                     }}
//                                 >
//                                     Clear
//                                 </Button>


//                                 <Button
//                                     variant="contained"
//                                     // onClick={() => {
//                                     //     console.log(submittedValues);
//                                     //     onClose()
//                                     // }}
//                                     sx={{
//                                         backgroundColor: 'var(--button-bgcolor)',
//                                         color: 'var(--button-color)',

//                                     }}
//                                 >
//                                     Ok
//                                 </Button>
//                             </DialogActions>
//                         </Form>
//                     )}
//                 </Formik>

//                 {/* Display submitted UTR and images */}





//             </Box>
//         </Dialog>
//     );
// };

// export default BannerinputGetModal;



import React, { useEffect, useState } from 'react';
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
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { Formik, Form } from 'formik';

import { FaPlus } from "react-icons/fa6";
import { MdPayment } from 'react-icons/md';

import CustomInputLogin from '../../../../Components/CustomInputLogin/CustomInputLogin';
import '../BannerinputGetModal.css'; // Import external CSS
import { MdCancel } from "react-icons/md";
import * as Yup from 'yup';
import { FiUpload } from 'react-icons/fi';
import FileUploadComponent from '../../../../Components/FileUploadComponent/FileUploadComponent';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../../ReduxStore/actions';
import PreviewComponent from '../../PreviewComponent/PreviewComponent';
import LandingPage from '../../Home/Preview/LandingPage';



const BannerinputGetModal = ({ open, onClose, setSubmittedValues, submittedValues, apiBasedName }) => {
    const [uploadedFile, setUploadedFile] = useState(null);


    //   useEffect(() => {
    //     if (!open) return;
    //     const fetchData = async () => {
    //       const data1 = { data: {}, method: "get", apiName: `getAllRoles` };
    //       await dispatch(actions.GETALLROLES(data1));
    //     };
    //     fetchData();
    //   }, [dispatch, createRoleWithPermissions]);

    const dispatch = useDispatch()

    const { addHomeSectionPost } = useSelector(
        (state) => state?.addHomeSectionPost
    );


    const {  addStakeNowSectionPost} = useSelector(
        (state) => state?.addStakeNowSectionPost
    );




    const handleSubmit = async (values) => {

        if (apiBasedName === "bannerInputModal") {

            const data1 = {
                data: values,
                method: "Post",
                apiName: `addHomeSectionPost`
            };
            await dispatch(actions.ADDHOMESECTIONPOST(data1));
        } else if (apiBasedName === "stakeNowBannerInputModal") {
            const data1 = {
                data: {
                    section_name:'banner',
                    heading:values.title,
                    sub_heading: values.subtitle,
                    content:values.content,
                    additional_data:[
                        {
                            banner:values.image,
                            primary_button_text:values.primary_button_text,
                            
                        }
                    ]
                },
                method: "Post",
                apiName: `addStakeNowSection`
            };
            await dispatch(actions.ADDSTAKENOWSECTIONPOST(data1));
        }

    }

    const [isPreviewModalOpen, setPreviewModalOpen] = useState(false)

    const handlePreviewOpenModal = () => {
        setPreviewModalOpen(true);
    };

    const handlePreviewCloseModal = () => {
        setPreviewModalOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="md"
            className="custom-dialog"
            sx={{
                // maxWidth: "600px",
                // margin: "auto",
                "& .MuiPaper-root": {
                    borderRadius: "14px", // Target the Paper component
                },
            }}
        >
            <Box sx={{ position: 'relative' }}>
                <Box className="dialog-heading">
                    <IconButton
                        aria-label="Close"
                        onClick={onClose}
                        sx={{ position: 'absolute', top: 8, right: 8, color: 'text.secondary' }}
                    >
                        <MdCancel />
                    </IconButton>
                    <DialogTitle className="custom-dialog-title">

                        <Box>
                            <Typography className="custom-title-text">
                                Heading
                            </Typography>
                        </Box>
                    </DialogTitle>
                </Box>

                <Formik
                    initialValues={{
                        title: '',
                        subtitle: '',
                        primary_button_text: '',
                        secondary_button_text: '',
                        content: '',
                        image: null,
                    }}
                    validationSchema={Yup.object({
                        title: Yup.string().required('Title is required'),
                        subtitle: Yup.string().required('Subtitle is required'),
                        content: Yup.string().required('Content is required'),
                        primary_button_text: Yup.string().required('Primary Button Text is required'),
                        secondary_button_text: Yup.string().required('Secondary Button Text is required'),
                    })}
                    onSubmit={(values, { resetForm }) => {
                        // setSubmittedValues([...submittedValues, values]);
                        console.log(values, "values")
                        handleSubmit(values)
                        handlePreviewCloseModal()


                        onClose()

                        setUploadedFile(null)

                        // handlePreviewOpenModal()
                        // resetForm();

                    }}
                >
                    {({ handleSubmit, setFieldValue, resetForm, values }) => (
                        <Form onSubmit={handleSubmit}>
                            <DialogContent dividers>
                                <Grid container spacing={2}>
                                    {/* Title and Subtitle on the left, Content on the right */}
                                    <Grid item xs={12} md={4}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <CustomInputLogin
                                                    label="Title"
                                                    name="title"
                                                    inputType="text"
                                                    custPlaceholder="Enter Title"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <CustomInputLogin
                                                    label="Subtitle"
                                                    name="subtitle"
                                                    inputType="text"
                                                    custPlaceholder="Enter Subtitle"
                                                />
                                            </Grid>
                                        </Grid>


                                    </Grid>
                                    <Grid item xs={12} md={8}>
                                        <CustomInputLogin
                                            label="Content"
                                            name="content"
                                            inputType="textarea"
                                            custPlaceholder="Enter Content"
                                        />
                                    </Grid>

                                    {/* Other fields in the next row */}
                                    <Grid item xs={12} md={4}>
                                        <CustomInputLogin
                                            label="Primary Button Text"
                                            name="primary_button_text"
                                            inputType="text"
                                            custPlaceholder="Enter Primary Button Text"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <CustomInputLogin
                                            label="Secondary Button Text"
                                            name="secondary_button_text"
                                            inputType="text"
                                            custPlaceholder="Enter Secondary Button Text"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        {/* <FileUploadComponent name="image" onFileUpload={(file) => setFieldValue('image', file)} /> */}
                                        <FileUploadComponent name="image" uploadedFile={uploadedFile} setUploadedFile={setUploadedFile} onFileUpload={(file) => setFieldValue('image', file)} />

                                    </Grid>
                                </Grid>

                                {/* Action Buttons */}
                                {/* <DialogActions> */}
                                <Grid sx={{ display: "flex", justifyContent: 'end', mt: 4 }}>
                                    <Grid>
                                        <Button
                                            onClick={() => {
                                                resetForm()
                                                setUploadedFile(null)
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
                                                    color: "white"
                                                },
                                            }}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            // type="submit"
                                            onClick={handlePreviewOpenModal}
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
                                                background: "#C38F51 0% 0% no-repeat padding-box",
                                                "&:hover": {
                                                    backgroundColor: "#3B4056",
                                                    boxShadow: "none",

                                                },
                                            }}
                                        >
                                            Preview
                                        </Button>
                                    </Grid>
                                </Grid>

                            </DialogContent>

                            <PreviewComponent
                                open={isPreviewModalOpen}
                                ModalPreviewComponent={LandingPage}
                                onClose={handlePreviewCloseModal}
                                values={values}
                                resetForm={resetForm}
                                ParentModalClose={onClose}
                                handleSubmit={handleSubmit}
                            />

                            {/* </DialogActions> */}
                        </Form>
                    )}
                </Formik>

            </Box>
        </Dialog >
    );
};

export default BannerinputGetModal;
