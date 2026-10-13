// import React, { useState, useEffect } from "react";
// import { AppBar, Toolbar, Typography, Box, TextField, IconButton, Button } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import { styled } from "@mui/material/styles";


// const MapContainer = styled(Box)({
//     height: "400px", // Set your desired height for the map
//     width: "100%",
// });



// const CustomMap = () => {
//     const [location, setLocation] = useState({ lat: 0, lng: 0 });

//     useEffect(() => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const { latitude, longitude } = position.coords;
//                     setLocation({ lat: latitude, lng: longitude });
//                 },
//                 (error) => {
//                     console.error("Error fetching location:", error);
//                 }
//             );
//         } else {
//             console.error("Geolocation is not supported by this browser.");
//         }
//     }, []);

//     const googleMapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434508004!2d144.9630579153164!3d-37.813627979751654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e4f07b5a4f7!2sMelbourne!5e0!3m2!1sen!2sau!4v1675004888208!5m2!1sen!2sau"

//     // 

//     return (
//         <Box p={4}>

//             {/* Map Section */}
//             <MapContainer>
//                 <iframe
//                     title="Google Map - Current Location"
//                     src={googleMapSrc}
//                     width="100%"
//                     height="100%"
//                     style={{ border: "0" }}
//                     allowFullScreen
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//             </MapContainer>
//         </Box>
//     );
// };

// export default CustomMap;



import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const MapContainer = styled(Box)({
    height: "400px", // Set your desired height for the map
    width: "100%",
});

const CustomMap = () => {
    const [location, setLocation] = useState({ lat: 0, lng: 0 });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ lat: latitude, lng: longitude });
                },
                (error) => {
                    console.error("Error fetching location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    // Dynamically construct the Google Map URL based on the current location
    const googleMapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434508004!2d${location.lng}!3d${location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e4f07b5a4f7!2sYour%20Location!5e0!3m2!1sen!2sau!4v1675004888208!5m2!1sen!2sau`;

    return (
        <Box p="0 24px 24px 24px">
            {/* Map Section */}
            <MapContainer>
                <iframe
                    title="Google Map - Current Location"
                    src={googleMapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </MapContainer>
        </Box>
    );
};

export default CustomMap;
