import React, { Component } from "react"

import PeriodSlider from "../../components/PeriodSlider/PeriodSlider";
import TransfersNav from "../../components/TransfersNav/TransfersNav";
import TransfersList from "../../components/TransfersList/TransfersList";
import TransfersSummaryList from "../../components/TransfersSummaryList/TransfersSummaryList";
import AddTransferButton from "../../components/AddTransferButton/AddTransferButton";
import AddTransferModal from "../../components/AddTransferModal/AddTransferModal";
import axios from '../../../axios-transfers';

class Transfers extends Component {
    state = {
        period: 1,  // 1 - daily, 2 - monthly
        isShowed: false, // for add transfer modal 
        term: 2, // 1 - income, 2 - expense
    }

    showAddTransferModalHandler = () => {
        this.setState( {
            isShowed: true,
        } )
    };

    closeAddTransferModalHandler = () => {
        this.setState( {
            isShowed: false,
        } )
    };

    setTransferTerm = (term) => {
        this.setState({
            term: term,
        })
    }

    //   sendPOSTHandler = () => {
    //       const data = this.state.transfer;
    //       axios.post('/transfer.json', data)
    //           .then(response => console.log(response))
    //           .catch(error => console.log(error));
    //   }

    setPeriod = (period) => {
        this.setState({
            period: period,
        })
    }

    render() {
        let addTransferModal = null;
        
        if (this.state.isShowed) {
            addTransferModal = <AddTransferModal closed={this.closeAddTransferModalHandler} setTerm={this.setTransferTerm} term={this.state.term}/>
        } 

        return (
            <div>
                {/* <button onClick={this.sendPOSTHandler}>send</button>  */}
                <PeriodSlider  />
    
                <TransfersNav  setPeriod = {this.setPeriod} />

                { this.state.period === 1 && <TransfersList />}
                { this.state.period === 2 && <TransfersSummaryList />} 

                <AddTransferButton clicked={this.showAddTransferModalHandler}/> 
                {addTransferModal}
            </div>
        )
    }
}


export default Transfers;