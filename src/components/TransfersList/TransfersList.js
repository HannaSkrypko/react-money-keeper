import React, { Component } from "react";
import Moment from "react-moment";

import "./TransfersList.css"

import Transfer from "./Transfer/Transfer";
import axios from "../../../axios-transfers";

class TransfersList extends Component {
    state = {
        trasfers: [],
    }

    componentDidMount() {
        axios.get("/transfer.json")
            .then(
                response => {
                    const fetchArray = [];
                    for (let key in response.data) {
                        fetchArray.push({
                            ...response.data[key],
                            id: key
                        });
                    }
                    this.setState({
                        trasfers: fetchArray,
                    })
                }
            );
    }

    getTotalExpenses = () => {
        
    }

    render() {
        let totalIncomes = 0;
        let totalExpenses = 0;

        {this.state.trasfers.map(transfer => {
                                    totalIncomes+=transfer.income;
                                    totalExpenses+=transfer.expence;
                                })
        }
        
        

        return (
            <div className="transfersList-container">
                <div className="transfers-caption">
                    <div className="transfers-caption__day"> <b> <Moment format="DD" style={{fontSize:"2em"}}/> <Moment format="dddd" style={{fontSize:"1em"}}/>  </b> </div>  
                    <div style={{color:"#008e97"}}> BR {totalIncomes} </div>
                    <div style={{color:"#dc143c"}}> BR {totalExpenses} </div>
                </div>
                {this.state.trasfers.map(transfer => (
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