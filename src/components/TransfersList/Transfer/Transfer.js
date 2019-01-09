import React from "react";

import "./Transfer.css";

const transfer = ( props ) => {
    return (
        <div className="transfer-container">
            <div> {props.accountName} </div>
            <div> {props.categoryName} </div>
            <div> BR {props.income} </div>
            <div> BR {props.expence} </div>
        </div>
    )
};

export default transfer;