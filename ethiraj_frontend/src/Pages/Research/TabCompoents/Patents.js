
// // // OurPrograms.js
// // import { Box, Typography, Grid, Stack, SvgIcon, Divider, IconButton } from "@mui/material";
// // import CustomSectionAccordion from "../../../Components/CustomSectionAccordion/CustomSectionAccordion";


// // import Patent1 from "../../../Assets/ResearchAtEthirajImg1.png";
// // import Patent2 from "../../../Assets/ResearchAtEthirajImg2.png";

// // import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// // import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// // import { useState } from "react";

// // function PatentThumb({ src, caption }) {
// //     return (
// //         <Box>
// //             <Box
// //                 component="img"
// //                 src={src}
// //                 alt={caption}
// //                 sx={{
// //                     // width: { xs: 160, sm: "100%", md: "300px", lg: "361px" },
// //                     width: "100%",

// //                     height: { xs: 160, sm: "320px", md: "300px", lg: "361px" },
// //                     objectFit: "cover",
// //                     borderRadius: 1,
// //                     border: (t) => `1px solid ${t.palette.divider}`,
// //                 }}
// //             />
// //             <Typography
// //                 variant="typographyBodyInterNormalSmall"
// //                 // color="text.secondary"
// //                 sx={{
// //                     mt: 1,
// //                     display: "block",
// //                     color: "var(--brand-palatte-text-color)",
// //                 }}
// //             >
// //                 {caption}
// //             </Typography>
// //         </Box>
// //     );
// // }


// // function Patents() {

// //     const [currentIndex, setCurrentIndex] = useState(0);

// //     /* Handlers */
// //     const handlePrev = () => {
// //         setCurrentIndex((prev) => prev - 1);
// //     };

// //     const handleNext = () => {
// //         setCurrentIndex((prev) => prev + 1);
// //     };


// //     const patentItems = [
// //         {
// //             src: Patent1,
// //             caption: "Patent for coagulant/ dye synthesis (sheet)",
// //         },
// //         {
// //             src: Patent2,
// //             caption: "Patent for fortified spices (sheet)",
// //         },
// //     ];
// //     return (
// //         <Box
// //             sx={{
// //                 // px: { xs: 2, sm: 3, md: "30px", lg: "36px" },
// //                 px: { xs: 2, sm: 3, md: "74px", lg: "94px" },

// //                 py: { lg: "41px", md: "30px", sm: "30px", xs: "40px" },

// //                 my: { xs: "85px", md: "20px" },
// //             }}
// //         >
// //             <Grid container spacing={{ xs: 4, md: 6 }} alignItems="stretch">
// //                 {/* LEFT: heading + intro + 3 underlined rows */}

// //                 <Grid size={{ xs: 12, sm: 12, md: 12 }}>
// //                     <Typography
// //                         variant="headingTextNewsreaderMedium"
// //                         sx={{
// //                             color: "var(--heading-text-primary)",
// //                             // fontFamily: "Newsreader, serif",
// //                             // fontStyle: "normal",
// //                             // fontWeight: 500,
// //                             // lineHeight: "52px",
// //                             // fontSize: { xs: "26px", sm: "32px", md: "36px", lg: "45px" },
// //                             mb: { xs: 2, sm: 2, md: "10px", lg: "28px" },
// //                         }}
// //                     >
// //                         Patents
// //                     </Typography>
// //                 </Grid>




// //             </Grid>

// //             <Grid
// //                 size={{ xs: 12 }}
// //                 sx={{ display: { xs: "block", md: "none" } }}
// //             >
// //                 {/* Title */}
// //                 <Typography
// //                     variant="subHeadingTextInterMedium"
// //                     sx={{ p: "10px", pb: "16px" }}
// //                 >
// //                     Patents
// //                 </Typography>

// //                 {/* Image */}
// //                 <Box display="flex" justifyContent="center">
// //                     <PatentThumb
// //                         src={patentItems[currentIndex].src}
// //                         caption={patentItems[currentIndex].caption}
// //                     />
// //                 </Box>

// //                 {/* Navigation */}
// //                 <Stack
// //                     direction="row"
// //                     justifyContent="end"
// //                     alignItems="center"
// //                     sx={{ mt: 2, px: 4 }}
// //                     spacing={1}
// //                 >
// //                     <IconButton
// //                         onClick={handlePrev}
// //                         disabled={currentIndex === 0}
// //                         sx={{ border: "1px solid #ccc" }}
// //                     >
// //                         <ArrowBackIosNewIcon fontSize="small" />
// //                     </IconButton>

// //                     <IconButton
// //                         onClick={handleNext}
// //                         disabled={currentIndex === patentItems.length - 1}
// //                         sx={{ border: "1px solid #ccc" }}
// //                     >
// //                         <ArrowForwardIosIcon fontSize="small" />
// //                     </IconButton>
// //                 </Stack>
// //             </Grid>
// //         </Box>
// //     );
// // }
// // export default Patents;


// // import { useState } from "react";
// // import {
// //     Box,
// //     Typography,
// //     Grid,
// //     Stack,
// //     IconButton,
// // } from "@mui/material";

// // import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// // import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// // import Patent1 from "../../../Assets/ResearchAtEthirajImg1.png";
// // import Patent2 from "../../../Assets/ResearchAtEthirajImg2.png";

// // // import Patent3 from "../../../Assets/ResearchAtEthirajImg3.png";

// // /* Patent Card */
// // function PatentCard({ src, caption }) {
// //     return (
// //         <Box
// //             sx={{
// //                 minWidth: {
// //                     xs: "100%",
// //                     sm: "48%",
// //                     md: "32%",
// //                 },
// //             }}
// //         >
// //             <Box
// //                 component="img"
// //                 src={src}
// //                 alt={caption}
// //                 sx={{
// //                     width: "100%",
// //                     height: 220,
// //                     objectFit: "cover",
// //                     borderRadius: 1,
// //                     border: "1px solid #ddd",
// //                 }}
// //             />

// //             <Typography
// //                 variant="typographyBodyInterNormalSmall"
// //                 sx={{
// //                     mt: 1,
// //                     color: "var(--brand-palatte-text-color)",
// //                 }}
// //             >
// //                 {caption}
// //             </Typography>
// //         </Box>
// //     );
// // }

// // /* Main Component */
// // export default function Patents() {
// //     const [index, setIndex] = useState(0);

// //     const patentItems = [
// //         {
// //             src: Patent1,
// //             caption: "Patent for co-polyester and synthesis thereof",
// //         },
// //         {
// //             src: Patent2,
// //             caption:
// //                 "Patent for fortified spices cake premix composition and process",
// //         },
// //         {
// //             src: Patent2,
// //             caption: "Carbon Based Smart Nano Material",
// //         },
// //         {
// //             src: Patent1,
// //             caption: "Another Patent Sample synthesis thereof",
// //         },
// //         ,
// //         {
// //             src: Patent2,
// //             caption: "Another Patent Sample  Nano Material",
// //         },
// //     ];

// //     /* Cards per view */
// //     const itemsPerView = {
// //         xs: 1,
// //         sm: 2,
// //         md: 3,
// //     };

// //     /* Max index */
// //     const maxIndex =
// //         patentItems.length - itemsPerView.md;

// //     /* Handlers */
// //     const handleNext = () => {
// //         if (index < maxIndex) {
// //             setIndex(index + 1);
// //         }
// //     };

// //     const handlePrev = () => {
// //         if (index > 0) {
// //             setIndex(index - 1);
// //         }
// //     };

// //     return (
// //         <Box
// //             sx={{
// //                 px: { xs: 2, md: "74px", lg: "94px" },
// //                 py: { xs: 4, md: 5 },
// //             }}
// //         >
// //             {/* Heading */}
// //             <Typography
// //                 variant="headingTextNewsreaderMedium"
// //                 sx={{ mb: 3 }}
// //             >
// //                 Patents
// //             </Typography>

// //             {/* Slider */}
// //             <Box
// //                 sx={{
// //                     position: "relative",
// //                     overflow:"hidden", // ✅ Allow buttons
// //                     pb: "50px", // Space for buttons
// //                 }}
// //             >
// //                 {/* Track */}
// //                 <Box
// //                     sx={{
// //                         display: "flex",
// //                         gap: 2,
// //                         transition: "0.4s ease",
// //                         transform: `translateX(-${index * 34}%)`,
// //                     }}
// //                 >
// //                     {patentItems.map((item, i) => (
// //                         <PatentCard
// //                             key={i}
// //                             src={item.src}
// //                             caption={item.caption}
// //                         />
// //                     ))}
// //                 </Box>

// //                 {/* Arrows */}
// //                 <Stack
// //                     direction="row"
// //                     spacing={1}
// //                     sx={{
// //                         position: "absolute",
// //                         right: 0,
// //                         bottom: 0,
// //                     }}
// //                 >
// //                     <IconButton
// //                         onClick={handlePrev}
// //                         disabled={index === 0}
// //                         sx={{ border: "1px dashed #343A40" }}
// //                     >
// //                         <ArrowBackIosNewIcon fontSize="small" />
// //                     </IconButton>

// //                     <IconButton
// //                         onClick={handleNext}
// //                         disabled={index >= maxIndex}
// //                         sx={{ border: "1px dashed #343A40" }}
// //                     >
// //                         <ArrowForwardIosIcon fontSize="small" />
// //                     </IconButton>
// //                 </Stack>
// //             </Box>
// //         </Box>
// //     );
// // }


// import { useState } from "react";
// import {
//     Box,
//     Typography,
//     Stack,
//     IconButton,
//     useTheme,
//     useMediaQuery,
// } from "@mui/material";

// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// import Patent1 from "../../../Assets/ResearchAtEthirajImg1.png";
// import Patent2 from "../../../Assets/ResearchAtEthirajImg2.png";
// import Patent3 from "../../../Assets/Patent3.png";


// /* Patent Card */
// function PatentCard({ src, caption }) {
//     return (
//         <Box
//             sx={{
//                 flex: "0 0 auto",
//                 // width: {
//                 //   xs: "100%",
//                 //   sm: "50%",
//                 //   md: "33.333%",
//                 // },
//                 width: {
//                     xs: "calc(100% - 16px)",
//                     sm: "calc(50% - 16px)",
//                     md: "calc(33.333% - 16px)",
//                 },

//             }}
//         >
//             <Box
//                 component="img"
//                 src={src}
//                 alt={caption}
//                 sx={{
//                     width: "100%",
//                     // height: 220,
//                     aspectRatio: "1 / 1",

//                     objectFit: "cover",
//                     borderRadius: 1,
//                     border: "1px solid #ddd",
//                 }}
//             />

//             <Typography
//                 variant="typographyBodyInterNormalSmall"
//                 sx={{ mt: 1, color: "var(--brand-palatte-text-color)" }}
//             >
//                 {caption}
//             </Typography>
//         </Box>
//     );
// }

// /* Main Component */
// export default function Patents() {
//     const [index, setIndex] = useState(0);

//     const theme = useTheme();

//     /* Detect Screen Size */
//     const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//     const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

//     /* Items Per View */
//     const itemsPerView = isMobile ? 1 : isTablet ? 2 : 3;

//     const patentItems = [
//         {
//             src: Patent1,
//             caption: "Patent for co-polyester and synthesis thereof",
//         },
//         {
//             src: Patent2,
//             caption:
//                 "Patent for a fortified eggless cake premix composition and a process for preparation thereof",
//         },
//         {
//             src: Patent1,
//             caption: "Carbon Based Smart Nano Material",
//         },
//         {
//             src: Patent2,
//             caption: "Another Patent Sample synthesis thereof",
//         },
//         {
//             src: Patent1,
//             caption: "Another Patent Sample Nano Material",
//         },
//     ];

//     /* Max Slide Index */
//     const maxIndex = patentItems.length - itemsPerView;

//     /* Slide Percentage */
//     const slideWidth = 100 / itemsPerView;

//     /* Handlers */
//     const handleNext = () => {
//         if (index < maxIndex) {
//             setIndex((prev) => prev + 1);
//         }
//     };

//     const handlePrev = () => {
//         if (index > 0) {
//             setIndex((prev) => prev - 1);
//         }
//     };

//     return (
//         <Box
//             sx={{
//                 px: { xs: 2, md: "74px", lg: "94px" },
//                 py: { xs: 4, md: 5 },
//             }}
//         >
//             {/* Heading */}
//             <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 3 }}>
//                 Patents
//             </Typography>

//             {/* Slider */}
//             <Box
//                 sx={{
//                     position: "relative",
//                     overflow: "hidden",
//                     pb: "50px",
//                 }}
//             >
//                 {/* Track */}
//                 <Box
//                     sx={{
//                         display: "flex",
//                         gap: "16px", // ✅ SPACE BETWEEN IMAGES
//                         transition: "0.4s ease",
//                         transform: `translateX(-${index * slideWidth}%)`,
//                     }}
//                 >
//                     {patentItems.map((item, i) => (
//                         <PatentCard
//                             key={i}
//                             src={item.src}
//                             caption={item.caption}
//                         />
//                     ))}
//                 </Box>

//                 {/* Arrows */}
//                 <Stack
//                     direction="row"
//                     spacing={1}
//                     sx={{
//                         position: "absolute",
//                         right: 0,
//                         bottom: 0,
//                     }}
//                 >
//                     <IconButton
//                         onClick={handlePrev}
//                         disabled={index === 0}
//                         sx={{ border: "1px dashed #343A40" }}
//                     >
//                         <ArrowBackIosNewIcon fontSize="small" />
//                     </IconButton>

//                     <IconButton
//                         onClick={handleNext}
//                         disabled={index >= maxIndex}
//                         sx={{ border: "1px dashed #343A40" }}
//                     >
//                         <ArrowForwardIosIcon fontSize="small" />
//                     </IconButton>
//                 </Stack>
//             </Box>
//         </Box>
//     );
// }
import { useState } from "react";
import {
    Box,
    Typography,
    Stack,
    IconButton,
    useTheme,
    useMediaQuery,
    Dialog,
    DialogContent,
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";

import Patent1full from "../../../Assets/PATENT-CERTIFICATE.jpg";
import Patent2full from "../../../Assets/PATENT-CERTIFICATE-Sudha-parimala.jpg";
import Patent3full from "../../../Assets/PATENT-CERTIFICATE-3.jpg";

import Patent1crop from "../../../Assets/PATENT-CERTIFICATE-crop.jpg";
import Patent2crop from "../../../Assets/PATENT-CERTIFICATE-Sudha-parimala-crop.jpg";
import Patent3crop from "../../../Assets/PATENT-CERTIFICATE-3.jpg";




/* ---------------- Patent Card ---------------- */

function PatentCard({ src, caption, onClick }) {
    return (
        <Box
            onClick={onClick}
            sx={{
                flex: "0 0 auto",
                width: {
                    xs: "calc(100% - 16px)",
                    sm: "calc(50% - 16px)",
                    md: "calc(33.333% - 16px)",
                },
                cursor: "pointer",
            }}
        >
            <Box
                component="img"
                src={src}
                alt={caption}
                sx={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    objectFit: "cover",
                    borderRadius: 1,
                    border: "1px solid #ddd",
                }}
            />

            <Typography
                variant="typographyBodyInterNormalSmall"
                sx={{ mt: 1, color: "var(--brand-palatte-text-color)" }}
            >
                {caption}
            </Typography>
        </Box>
    );
}

/* ---------------- Main Component ---------------- */

export default function Patents({patentsDatas}) {

    console.log(patentsDatas,"patentsDatas");
    
    const [index, setIndex] = useState(0);

    // Modal state
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const theme = useTheme();

    /* Detect Screen Size */
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    /* Items Per View */
    const itemsPerView = isMobile ? 1 : isTablet ? 2 : 3;

    // Static fallback data
    const staticPatentItems = [
        {
            src: Patent1crop,
            caption: "Patent for co-polyester and synthesis thereof",
            fullimge: Patent1full
        },
        {
            src: Patent2crop,
            caption:
                "Patent for a fortified eggless cake premix composition and a process for preparation thereof",
            fullimge: Patent2full

        },
        {
            src: Patent3crop,
            caption: "Carbon Based Smart Nano Material",
            fullimge: Patent3full

        },
    ];

    // Use API data if available, otherwise use static data
    const patentItems = (patentsDatas && patentsDatas.length > 0 && patentsDatas[0]?.additional_data?.patents?.length > 0)
        ? patentsDatas[0].additional_data.patents.map((patent) => ({
            src: patent.square_image,
            caption: patent.caption,
            fullimge: patent.full_image
        }))
        : staticPatentItems;

    /* Max Slide Index */
    const maxIndex = patentItems.length - itemsPerView;

    /* Slide Percentage */
    const slideWidth = 100 / itemsPerView;

    /* Slider Handlers */
    const handleNext = () => {
        if (index < maxIndex) {
            setIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (index > 0) {
            setIndex((prev) => prev - 1);
        }
    };

    /* Modal Handlers */
    const handleOpen = (src) => {
        setSelectedImage(src);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    return (
        <Box
            sx={{
                px: { xs: 2, md: "74px", lg: "94px" },
                py: { xs: 4, md: 5 },
            }}
        id="patents"
        >
            {/* Heading */}
            <Typography variant="headingTextNewsreaderMedium" sx={{ mb: 3 }}>
                Patents
            </Typography>

            {/* Slider */}
            <Box
                sx={{
                    position: "relative",
                    overflow: "hidden",
                    pb: "50px",
                }}
            >
                {/* Track */}
                <Box
                    sx={{
                        display: "flex",
                        gap: "16px",
                        transition: "0.4s ease",
                        transform: `translateX(-${index * slideWidth}%)`,
                    }}
                >
                    {patentItems.map((item, i) => (
                        <PatentCard
                            key={i}
                            src={item.src}
                            caption={item.caption}
                            onClick={() => handleOpen(item.fullimge)}
                        />
                    ))}
                </Box>

                {/* Arrows */}
                <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                        position: "absolute",
                        right: 0,
                        bottom: 0,
                    }}
                >
                    <IconButton
                        onClick={handlePrev}
                        disabled={index === 0}
                        sx={{ border: "1px dashed #343A40" }}
                    >
                        <ArrowBackIosNewIcon fontSize="small" />
                    </IconButton>

                    <IconButton
                        onClick={handleNext}
                        disabled={index >= maxIndex}
                        sx={{ border: "1px dashed #343A40" }}
                    >
                        <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                </Stack>
            </Box>

            {/* ---------------- Modal ---------------- */}
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="xs"
                fullWidth
                PaperProps={{
                    sx: {
                        // height: 400,        // fixed height
                        maxHeight: "70vh",  // responsive max height
                    }
                }}

            >
                <DialogContent sx={{ position: "relative", p: 2 }}>
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            backgroundColor: "#fff",
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {selectedImage && (
                        <Box
                            component="img"
                            src={selectedImage}
                            alt="Patent Preview"
                            sx={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 2,
                                objectFit: "cover"
                            }}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </Box>
    );
}
