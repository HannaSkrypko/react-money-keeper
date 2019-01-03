import React, {Component} from "react"

import "./TransfersSummary.css";

class TransfersSummary extends Component {
    render() {
        return (
            <div className="transfers-summary-container">
                <div className="period"> <span> period </span> </div>
                <div> Count+ </div>
                <div> Count- </div>
            </div>
        )
    }
}

export default TransfersSummary;