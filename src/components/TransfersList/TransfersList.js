import React from "react";
import Moment from "react-moment";

import "./TransfersList.css"

import Transfer from "./Transfer/Transfer"

const transfersList = ( props ) => {
    return (
        <div className="transfersList-container">
            <div className="transfers-caption">
                <div className="transfers-caption__day"> <b> <Moment format="DD" style={{fontSize:"2em"}}/> <Moment format="dddd" style={{fontSize:"1em"}}/>  </b> </div>  
                <div style={{color:"#008e97"}}> summary+ </div>
                <div style={{color:"#dc143c"}}> summary- </div>
            </div>
            <Transfer />
            <Transfer />
            <Transfer />
        </div>
    )
};

export default transfersList;