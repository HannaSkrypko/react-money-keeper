import React, { Component } from "react"

import PeriodSlider from "../../components/PeriodSlider/PeriodSlider";
import TransfersNav from "../../components/TransfersNav/TransfersNav";
import TransfersList from "../../components/TransfersList/TransfersList";
import TransfersSummaryList from "../../components/TransfersSummaryList/TransfersSummaryList";

class Transfers extends Component {
    constructor(props) {
        super();
        this.state = {
            isDaily: true,
            isWeekly: false,
            isMontly: false
        }
    }

    render() {
        return (
            <div>
                <PeriodSlider />
    
                <TransfersNav />

                { this.state.isDaily ? <TransfersList /> : null}
                { this.state.isWeekly ? <TransfersSummaryList /> : null } 
                { this.state.isMontly ? <TransfersSummaryList /> : null } 
                
            </div>
        )
    }
}


export default Transfers;