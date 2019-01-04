import React from 'react';

import './AccountsGroup.css';

import Account from "../Account/Account"

const accountsGroup = ( props ) => {
    return (
        <div className="accountsGroup-container">
            <div className="accountsGroup-header">
                <span className="group"> Group </span>
                <span className="total"> count </span>
            </div>

            <Account editMode={props.editMode}/>
            <Account editMode={props.editMode}/>
            <Account editMode={props.editMode}/>
            
        </div>
    )
}

export default accountsGroup;