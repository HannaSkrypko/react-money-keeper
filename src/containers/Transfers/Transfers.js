import React from "react"

import PeriodSlider from "../../components/PeriodSlider/PeriodSlider";
import TransfersNav from "../../components/TransfersNav/TransfersNav";
import TransfersList from "../../components/TransfersList/TransfersList";
import TransfersSummaryList from "../../components/TransfersSummaryList/TransfersSummaryList";


const transfers = ( props ) => {
    return (
        <div>
            <PeriodSlider />

            <TransfersNav />

            <TransfersList />
        </div>
    )
}

export default transfers;