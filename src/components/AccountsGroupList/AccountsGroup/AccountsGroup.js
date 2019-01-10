import React from 'react';

import './AccountsGroup.css';

import Account from "../Account/Account"

const accountsGroup = ( props ) => {
    
    console.log(props.accounts);
    return (
        <div className="accountsGroup-container">
            <div className="accountsGroup-header">
                <span className="group"> {props.groupName} </span>
                <span className="total"> count </span>
            </div>

            {props.accounts.map(account => {
                if (account){
                    return(
                        <Account 
                        name={account.name}
                        balance={account.balance}
                        editMode={props.editMode}/>
                    )
                }
                
            })}
            
        </div>
    )
}

export default accountsGroup;