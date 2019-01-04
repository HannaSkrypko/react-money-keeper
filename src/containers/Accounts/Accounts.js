import React, { Component } from 'react';

import './Accounts.css';

import AddAccountModal from "../../components/AddAcountModal/AddAccountModal";
import AccountsHeader from "../../components/AccountsHeader/AccountsHeader";
import AccountsGroupList from "../../components/AccountsGroupList/AccountsGroupList"

class Accounts extends Component {
    state ={
        isShowed: false, //for add new account modal
        isEditMode: false
    };

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

                <AccountsGroupList editMode={this.state.isEditMode}/>

                {/*<Modal />*/}
            </div>
        )
    }
}

export default Accounts;