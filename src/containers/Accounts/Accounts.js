import React, { Component } from 'react';

import './Accounts.css';

import Modal from "../../components/Modal/Modal";
import AccountsHeader from "../../components/AccountsHeader/AccountsHeader";
import AccountsGroupList from "../../components/AccountsGroupList/AccountsGroupList"

class Accounts extends Component {
    render () {
        return (
            <div className="accounts-container">
                <div className="crud-buttons">
                    <button className="crud-button"> Edit </button>
                    <button className="crud-button"> Add new account </button>
                </div>

                <AccountsHeader />

                <AccountsGroupList />

                {/*<Modal />*/}
            </div>
        )
    }
}

export default Accounts;