

import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    Button,
    Box,
    Typography,
} from '@mui/material';
import { Close as CloseIcon, Mic as MicIcon } from '@mui/icons-material';
import { Formik, Form } from 'formik';
// import CustomInput from '../../../Components/CustomInput2/CustomInput';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import TrackParcelBox1 from './TrackParcelBox1';
import { RiVideoAddFill } from 'react-icons/ri';
import { MdLocalShipping } from "react-icons/md";



const TrackingModal = ({ open, onClose,modalOrederId }) => {
    // console.log(confirmPageValues, "confirmPageValues")

    const navigate = useNavigate()

    // State to hold services and quantity values
    const [posCalculateData, setPosCalculateData] = useState('');

    console.log(posCalculateData, "services")
    // console.log(quantity,"quantity")

    // Update services whenever the heading prop changes

    const handleCloseModal12 = () => {
        toast.error("Ordered Failed")

        setTimeout(() => onClose(), 3000)


    }
    const handleOrderPageNavigate = () => {
        setTimeout(() => navigate("/customer/orders"), 3000)

        toast.success("Ordered Successfully")



        // handleOpenModal()

    }


    return (
        <>
            <Dialog
                open={open}
                onClose={onClose}
                fullWidth
                maxWidth="md"
                sx={{ '& .MuiDialog-paper': { borderRadius: 2, width: "350px" } }}
            >
                <Box sx={{ position: 'relative' }}>
                    <IconButton
                        aria-label="Close"
                        onClick={onClose}
                        sx={{ position: 'absolute', top: 8, right: 8, color: 'text.secondary' }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogTitle sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                backgroundColor: 'rgb(230 245 246)',
                                color: '#0dcaf0',
                                marginRight: 1,
                            }}
                        >
                            <MdLocalShipping />
                        </Box>
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '17px' }}>
                                Tracking Orders 
                            </Typography>
                            <Typography  sx={{  fontWeight:"700",fontSize: '12px',color:"#908888" }}>
                                Order Id: {modalOrederId}
                            </Typography>
                          
                        </Box>
                    </DialogTitle>
                    <DialogContent dividers>
                        <Box
                            sx={{
                                // border: '1px dashed',
                                // borderColor: 'divider',
                                // height: 200,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'column',
                                alignItems: 'center',
                                // backgroundColor: 'rgb(249 249 249)',
                                // position: 'relative',
                                // padding: 2,
                                mb:3,
                                mt:2
                            }}
                        >
                            <TrackParcelBox1 />
                        </Box>

                    </DialogContent>


                </Box >
                <ToastContainer
                    position="top-right" // or "top-center", "bottom-left", etc.
                    autoClose={5000} // Auto close duration in ms
                    hideProgressBar={false} // Hide or show progress bar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </Dialog >
        </>
    );
};

export default TrackingModal;
