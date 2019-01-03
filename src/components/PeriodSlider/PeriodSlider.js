import React from "react";
import Moment from "react-moment";


import "./PeriodSlider.css";

const periodSlider = ( props ) => {
    return (
        <div className="periodSlider-container">
            <button className="left-arrow"> &lt; </button>
            <div> <Moment format="MMMM YYYY" /> </div>
            <button className="right-arrow"> &gt; </button>
        </div>
    )
}

export default periodSlider;