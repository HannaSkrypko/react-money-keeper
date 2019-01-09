import React from "react";
import Moment from "react-moment";


import "./PeriodSlider.scss";

const periodSlider = ( props ) => {
    return (
        <div className="periodSlider-container">
            <button className="left-arrow" /> 
            <div> <Moment format="MMMM YYYY" /> </div>
            <button className="right-arrow" />
        </div>
    )
}

export default periodSlider;