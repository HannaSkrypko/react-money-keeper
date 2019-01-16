import React from 'react';

import './Account.css';
import { connect } from 'react-redux'

const account = ( props ) => {
    return (
        <div className="account-container">
           <span> {props.isEditMode && <button onClick={() => props.deleteClick(props.accountId)} className="delete-account-button">x</button>}  {props.name} </span> 
           <span className="total"> BR  {props.balance} </span>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isEditMode: state.account.isEditMode,
    };
};

export default connect(mapStateToProps)(account);