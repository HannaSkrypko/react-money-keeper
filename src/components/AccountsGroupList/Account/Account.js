import React from 'react';

import './Account.css';

const account = ( props ) => {
    return (
        <div className="account-container">
           <span> {props.editMode && <button className="delete-account-button">x</button>}  {props.name} </span> 
           <span className="total"> BR  {props.balance} </span>
        </div>
    )
}

export default account;