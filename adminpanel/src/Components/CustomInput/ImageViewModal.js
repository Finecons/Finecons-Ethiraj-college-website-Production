import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import React from 'react'
import { RxCross1 } from 'react-icons/rx'

const ImageViewModal = (dialogOpen, fullImage, handleDialogClose) => {
    console.log(fullImage,"fullImage")
    return (
        <div>
            <Dialog
                open={dialogOpen}
                onClose={handleDialogClose}
                fullScreen
                fullWidth
                maxWidth="sm"
                sx={{
                    '& .MuiDialog-paper': {
                        padding: "50px",
                        objectFit: 'cover',
                        width: '100%',
                        maxWidth: 'none',
                        overflowX: 'auto',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    '& .MuiBackdrop-root': {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    },
                }}
            >
                <DialogTitle>
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={handleDialogClose}
                        aria-label="close"
                        sx={{ position: 'absolute', right: 10, top: 12, color: 'grey.500' }}
                    >
                        <RxCross1 />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <img
                        src={fullImage}
                        alt="Full View"
                        style={{ width: '100%', height: "100%", objectFit: 'contain' }}
                    />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ImageViewModal