import React from "react"

import "./AccountsHeader.css";

const accountsHeader = ( props ) => {
    return (
        <div className="accountsHeader-container">
            <div>
                Accounts <br />
                <span  style={{color:"#008e97"}}> count+ </span>
            </div>
            <div>
                Expenses <br />
                <span  style={{color:"#dc143c"}}> count- </span>
            </div>
            <div>
                Total <br />
                count 
            </div>
        </div>
    )
}

export default accountsHeader;