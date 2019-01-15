import React, { Component } from 'react';

import './Accounts.css';

import AddAccountModal from "../../components/AddAcountModal/AddAccountModal";
import AccountsHeader from "../../components/AccountsHeader/AccountsHeader";
import AccountsGroupList from "../../components/AccountsGroupList/AccountsGroupList"
import axios from '../../../axios-transfers';
import { connect } from 'react-redux';
import * as accountActions from '../../store/actions/account';

class Accounts extends Component {
    state ={
        isShowed: false, //for add new account modal
    };

    componentDidMount() {
        this.props.onInitAccounts();
        this.props.onInitGroups();
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

    render () {
        console.log(this.props.isEditMode);
        let addAccountModal = null;
        
        if (this.state.isShowed) {
            addAccountModal = <AddAccountModal groups={this.props.groups} closed={this.closeAddAccountModalHandler}/>
        }        

        return (
            <div className="accounts-container">
                <div className="crud-buttons">
                    <button className="crud-button" onClick={this.props.toggleEditMode}> Edit </button>
                    <button className="crud-button" onClick={this.showAddAccountModalHandler}> Add new account </button>
                </div>

                {addAccountModal}

                <AccountsHeader />

                <AccountsGroupList 
                    groups={this.props.groups}
                    accounts={this.props.accounts}
                    editMode={this.props.isEditMode} />

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts,
        groups: state.groups,
        isEditMode: state.isEditMode,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitAccounts: () => dispatch(accountActions.initAccounts()),
        onInitGroups: () => dispatch(accountActions.initGroups()),
        toggleEditMode: () => dispatch(accountActions.toggleAccountsEditMode()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);