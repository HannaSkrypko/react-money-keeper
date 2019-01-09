import React, { Component }  from 'react';


import AccountsGroup from "./AccountsGroup/AccountsGroup";
import axios from '../../../axios-transfers';

class AccountsGroupList extends Component {
    state = {
        groups: [],
    }

    componentDidMount() {
        axios.get("/group.json")
            .then(
                response => {
                    const fetchArray = [];
                    for (let key in response.data) {
                        fetchArray.push({
                            ...response.data[key],
                            id: key
                        });
                    }
                    this.setState({
                        groups: fetchArray,
                    })
                }
            );
    }

    render() {
        return (
            <div>
                 {this.state.groups.map(group => (
                    <AccountsGroup 
                        editMode={this.props.editMode}
                        groupName={group.groupName} />
                 ))}
                
            </div>
        )
    }
}


export default AccountsGroupList;