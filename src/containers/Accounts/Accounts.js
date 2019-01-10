import React, { Component } from 'react';

import './Accounts.css';

import AddAccountModal from "../../components/AddAcountModal/AddAccountModal";
import AccountsHeader from "../../components/AccountsHeader/AccountsHeader";
import AccountsGroupList from "../../components/AccountsGroupList/AccountsGroupList"
import axios from '../../../axios-transfers';

class Accounts extends Component {
    state ={
        isShowed: false, //for add new account modal
        isEditMode: false,
        groups: [],
        accounts: [],
    };

    componentDidMount() {
        axios.get("/group.json")
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
                        groups: fetchArray,
                    })
                }
            );
        axios.get("/account.json")
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
                        accounts: fetchArray,
                    })
                }
            );
    }



    showAddAccountModalHandler = () => {
        this.setState( {
            isShowed: true,
        } )
    };

    closeAddAccountModalHandler = () => {
        this.setState( {
            isShowed: false,
        } )
    };

    toggleEditModeHandler = () => {
        this.setState( state => ({
            isEditMode: !state.isEditMode,
        }) );
    };

    render () {
        let addAccountModal = null;
        
        if (this.state.isShowed) {
            addAccountModal = <AddAccountModal closed={this.closeAddAccountModalHandler}/>
        }        

        return (
            <div className="accounts-container">
                <div className="crud-buttons">
                    <button className="crud-button" onClick={this.toggleEditModeHandler}> Edit </button>
                    <button className="crud-button" onClick={this.showAddAccountModalHandler}> Add new account </button>
                </div>

                {addAccountModal}

                <AccountsHeader />

                <AccountsGroupList 
                groups={this.state.groups}
                accounts={this.state.accounts}
                editMode={this.state.isEditMode} />

                {/*<Modal />*/}
            </div>
        )
    }
}

export default Accounts;