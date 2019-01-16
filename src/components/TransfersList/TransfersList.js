import React, { Component } from "react";
import Moment from "react-moment";
import { connect } from 'react-redux';

import "./TransfersList.css";

import Transfer from "./Transfer/Transfer";
import * as actions from '../../store/actions/allActions';

class TransfersList extends Component {
    state = {
        date: "",
        day: "",
        month: "",
        year: "",
    }

    getFullDate = () => {
        const dateToStore = new Date();
        let date = dateToStore.getDate();
        let day = dateToStore.getDay();
        let year = dateToStore.getFullYear();
        let month = dateToStore.getMonth();

        this.setState({
            date: date,
            day: day,
            month: month,
            year: year,
        })
    }

    getNameOfTheDay = (day) => {
        switch (day) {
            case 0:
                day = "Sunday"
                break;
            case 1:
                day = "Monday"
                break;
            case 2:
                day = "Tuesday"
                break;
            case 3:
                day = "Wednesday"
                break;
            case 4:
                day = "Thursday"
                break;
            case 5:
                day = "Friday"
                break;
            case 6:
                day = "Saturday"
                break;
        
            default:
                day = "404"
                break;
        }
        return day;
    }


    componentDidMount() {
        this.getFullDate();
    }

    render() {
        let totalIncomes = 0;
        let totalExpenses = 0;
        

        {this.props.transfers.map(transfer => {
                                    totalIncomes+=transfer.income;
                                    totalExpenses+=transfer.expence;
                                })
        }

        let day = this.getNameOfTheDay(this.state.day)
 

        return (
            <div className="transfersList-container">
                <div className="transfers-caption">
                    <div className="transfers-caption__day"> 
                        <b> <span style={{fontSize:"2em"}}>{this.state.date}</span> <span style={{fontSize:"1em"}}>{day}</span> </b>
                    </div>  
                    <div style={{color:"#008e97"}}> BR {totalIncomes} </div>
                    <div style={{color:"#dc143c"}}> BR {totalExpenses} </div>
                </div>
                {this.props.transfers.map(transfer => (
                    <Transfer 
                        key={transfer.id}
                        accountName={transfer.accountName}
                        categoryName={transfer.categoryName} 
                        income={transfer.income}
                        expence={transfer.expence} />
                ))}

                
            </div>
        )
    }
}

export default TransfersList;