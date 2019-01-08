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
        group: [],
    };

    componentDidMount() {
        axios.get("https://money-keeper-a936a.firebaseio.com/Group.json")
            .then(response => {
                this.setState({group: response.data.groupName})
            })
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
        console.log(this.state.group);
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