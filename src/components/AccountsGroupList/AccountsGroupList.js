import React, { Component }  from 'react';


import AccountsGroup from "./AccountsGroup/AccountsGroup";
import axios from '../../../axios-transfers';

class AccountsGroupList extends Component {
    // state = {
    //     groups: this.props.groups,
    // }

    sortByGroupName = (groupName) => {
        const accounts = this.props.accounts;
        let accountsInGroup = accounts.map(acc => { return (acc.group == groupName) ? acc : null} );
        return accountsInGroup
    }
    

    render() {
        const groups = this.props.groups;
        
        return (
            <div>
                 {groups.map(group => {
                     let accounts = this.sortByGroupName(group.groupName);
                     return(
                        <AccountsGroup 
                            key={group.id}
                            editMode={this.props.editMode}
                            groupName={group.groupName} 
                            accounts={accounts}/>
                     )
                 } )}
                
            </div>
        )
    }
}


export default AccountsGroupList;