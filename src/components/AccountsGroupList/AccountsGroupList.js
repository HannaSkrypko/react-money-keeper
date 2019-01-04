import React  from 'react';


import AccountsGroup from "./AccountsGroup/AccountsGroup"

const accountsGroupList = ( props ) => {
    return (
        <div>
            
            <AccountsGroup editMode={props.editMode}/>
            <AccountsGroup editMode={props.editMode}/>
            <AccountsGroup editMode={props.editMode}/>
            
        </div>
    )
}

export default accountsGroupList;