import React from 'react';

import './AccountsGroup.css';

import Account from "../Account/Account"

const accountsGroup = ( props ) => {
    let totalBalance = 0;
    {props.accounts.map(account => {
        if (account){
            totalBalance =+ account.balance;
        }
    })}
    
    return (
        <div className="accountsGroup-container">
            <div className="accountsGroup-header">
                <span className="group"> {props.groupName} </span>
                <span className="total"> BR {totalBalance} </span>
            </div>

            {props.accounts.map(account => {
                if (account){
                    return(
                        <Account 
                            deleteClick={props.clicked} //DON'T WORK
                            key={account.id}
                            accountId={account.id} //DON'T WORK
                            name={account.name}
                            balance={account.balance}/>
                    )
                }
                
            })}
            
        </div>
    )
}

export default accountsGroup;