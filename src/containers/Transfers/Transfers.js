import React, { Component } from "react"

import PeriodSlider from "../../components/PeriodSlider/PeriodSlider";
import TransfersNav from "../../components/TransfersNav/TransfersNav";
import TransfersList from "../../components/TransfersList/TransfersList";
import TransfersSummaryList from "../../components/TransfersSummaryList/TransfersSummaryList";

class Transfers extends Component {
    constructor(props) {
        super();
        this.state = {
            period: 1,
        }
    }

    setPeriod = (period) => {
        this.setState({
            period: period,
        })
    }

    render() {
        return (
            <div>
                <PeriodSlider  />
    
                <TransfersNav  setPeriod = {this.setPeriod} />

                { this.state.period === 1 && <TransfersList />}
                { this.state.period === 2 && <TransfersSummaryList />} 
                { this.state.period === 3 && <TransfersSummaryList />} 
                
            </div>
        )
    }
}


export default Transfers;