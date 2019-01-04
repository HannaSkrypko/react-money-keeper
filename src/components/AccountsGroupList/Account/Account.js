import React from 'react';

import './Account.css';

const account = ( props ) => {
    return (
        <div className="account-container">
           <span> {props.editMode && <button className="delete-account-button">x</button>}  Name </span>
           <span className="total"> count </span>
        </div>
    )
}

export default account;