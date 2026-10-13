import React from "react";
import "./loading.css"; // Import the CSS file
import { CoPresentOutlined } from "@mui/icons-material";

const FullPageLoader = () => {
    console.log("itsworrrrrrk")
    return (
        <div className="loading-overlay">
            <div className="loading-spinner"></div>
        </div>
    );
};

export default FullPageLoader;
