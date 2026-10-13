
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
import { Close as CloseIcon, ConstructionOutlined } from '@mui/icons-material';
import { Formik, Form } from 'formik';

import { FaPlus } from "react-icons/fa6";
import { MdPayment } from 'react-icons/md';

// import CustomInputLogin from '../../../../Components/CustomInputLogin/CustomInputLogin';
import '../../../Components/ModalCss/BannerinputGetModal.css'; // Import external CSS
import { MdCancel } from "react-icons/md";
import * as Yup from 'yup';
import { FiUpload } from 'react-icons/fi';
// import FileUploadComponent from '../../../../Components/FileUploadComponent/FileUploadComponent';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../ReduxStore/actions';
import { clearTableGetId } from '../../../ReduxStore/Slices/TableId/TableIdGetSlice';
import { clearCustomerId } from '../../../ReduxStore/Slices/Operator/customerSlice';
import FullPageLoader from '../../../Components/FullPageLoader/FullPageLoader';
// import actions from '../../../../ReduxStore/actions';



const PreviewComponent = ({ open, onClose, setSubmittedValues, submittedValues, showSubmitButton, ModalPreviewComponent: ModalComponentName, handleSubmit, values, loading, setLoading }) => {
    const [uploadedFile, setUploadedFile] = useState(null);
    const TableId = useSelector((state) => state.Table.TableId);



    // const [loading, setLoading] = useState(false);

    // const handleFormSubmit = async () => {
    //     try {
    //         setLoading(true); // Show loading state
    //         await handleSubmit(); // Call the provided submit function
    //     } catch (error) {
    //         console.error("Submission error:", error);
    //     } finally {
    //         setLoading(false); // Ensure loading state is removed
    //     }
    // };

    console.log(loading, "loaddinffjfj")
    // const handleFormSubmit = async () => {
    //     setLoading(true); // Show the loading spinner


    //     try {
    //         await handleSubmit(); // Wait for the submission to complete
    //     } catch (error) {
    //         console.error("Submission error:", error);
    //     } finally {
    //         setLoading(false); // Ensure loading state is removed
    //     }
    // };

    // const handleFormSubmit = async () => {
    //     try {
    //         setLoading(true); 
    //         document.body.classList.add("loading"); // Apply blur effect

    //         await handleSubmit(); 

    //     } catch (error) {
    //         console.error("Submission error:", error);
    //     } finally {
    //         setLoading(false); 
    //         document.body.classList.remove("loading"); // Remove blur effect
    //     }
    // };


    console.log(TableId, "TableIdTableIdTableIdTableId")

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




    // const handleSubmit = async (values) => {

    //     const data1 = {
    //         data: {},
    //         method: "Post",
    //         apiName: `addHomeSectionPost`
    //     };
    //     await dispatch(actions.ADDHOMESECTIONPOST(data1));


    // }
    return (
        <>


            <Dialog
                open={open}
                // onClose={onClose}
                fullWidth
                maxWidth="md"
                className="custom-dialog"
                // className={loading ? "custom-dialog loading" : "custom-dialog"}
                sx={{
                    zIndex: 1600,
                    //
                     maxWidth: "1000px",
                    margin: "auto",
                    "& .MuiPaper-root": {
                        borderRadius: "14px", // Target the Paper component
                    },
                }}
            >

                {loading && <FullPageLoader />}

                <Box sx={{ position: 'relative' }}>
                    <Box className="dialog-heading">
                        <IconButton
                            aria-label="Close"
                            onClick={()=>{
                                onClose()
                                dispatch(clearCustomerId())
                                dispatch(clearTableGetId())
                            }
                            }
                            sx={{ position: 'absolute', top: 8, right: 8, color: 'text.secondary' }}
                        >
                            <MdCancel />
                        </IconButton>
                        <DialogTitle className="custom-dialog-title">

                            <Box>
                                <Typography className="custom-title-text">
                                    Preview Modal
                                </Typography>
                            </Box>
                        </DialogTitle>
                    </Box>


                    <DialogContent dividers>
                        <ModalComponentName values={values} />

                    </DialogContent>
                    {showSubmitButton && (
                        <DialogActions>
                            <Grid sx={{ display: "flex", justifyContent: 'end', mt: 4 }}>
                                <Grid>
                                    <Button
                                        onClick={() => onClose()}
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
                                        Back
                                    </Button>
                                    <Button
                                        // onClick={handlePreviouspage}
                                        onClick={() => {
                                            handleSubmit()
                                            // handleFormSubmit()

                                        }
                                        }
                                        disabled={loading}
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
                                            background: "#C38F51 0% 0% no-repeat padding-box",
                                            "&:hover": {
                                                backgroundColor: "#3B4056",
                                                boxShadow: "none",

                                            },
                                        }}
                                    >
                                        {/* {TableId ? "Update" : "Submit"} */}
                                        {loading ? "Processing..." : TableId ? "Update" : "Submit"}
                                    </Button>
                                </Grid>
                            </Grid>
                        </DialogActions>
                    )}

                    {/* </DialogActions> */}


                </Box>
            </Dialog >
        </>
    );
};

export default PreviewComponent;
