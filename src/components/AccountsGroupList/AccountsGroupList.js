import React, { Component }  from 'react';


import AccountsGroup from "./AccountsGroup/AccountsGroup";
import axios from '../../../axios-transfers';

class AccountsGroupList extends Component {

    sortByGroupName = (groupName) => {
        const accounts = this.props.accounts;
        let accountsInGroup = accounts.map(acc => { return (acc.group == groupName) ? acc : null} );
        return accountsInGroup
    }

    deleteAccountHandler = (id) => {             //DON'T WORK
        axios.delete('./accout/' + id + '.json')
             .then(response => {console.log(response)});
    }
    

    render() {
        const groups = this.props.groups;
        
        return (
            <div>
                 {groups.map(group => {
                     let accounts = this.sortByGroupName(group.groupName);
                     return(
                        <AccountsGroup 
                            clicked={this.deleteAccountHandler}     
                            key={group.id}
                            groupName={group.groupName} 
                            accounts={accounts}/>
                        
                     )
                 } )}
                
            </div>
        )
    }
}


export default AccountsGroupList;