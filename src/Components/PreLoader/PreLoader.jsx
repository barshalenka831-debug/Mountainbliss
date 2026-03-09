import React from "react";
import "../PreLoader/Preloader.css";

const Preloader = () => {
    return (
        <div className="preloader">
            <div className="loader">
            </div>
            <h6>Loading...</h6>
        </div>
    );
};

export default Preloader;