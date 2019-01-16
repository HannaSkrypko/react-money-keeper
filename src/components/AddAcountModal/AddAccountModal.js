import React, { Component } from "react";

import "./AddAccountModal.css";

import Modal from "../../UI/Modal/Modal";

class AddAccountModal extends Component {
    state = {
        nameValue: "",
        amountValue: ""
    }

    nameChangeHandler = ( event ) => {
        this.setState({
            nameValue: event.target.value,
        })
    }

    amountChangeHandler = ( event ) => {
        this.setState({
            amountValue: event.target.value,
        })
    }

    render() {
        return (
            <Modal closed={this.props.closed}>
                <div className="addModal-container">
                    <div >
                        <label>Group</label>
                        <select>
                            {this.props.groups.map(group => (
                                <option key={group.id}> {group.groupName} </option>
                            ))}
                        </select>
                    </div>
                    <div >
                        <label>Name</label>
                        <input type="text" onChange={this.nameChangeHandler} value={this.state.nameValue}/>
                    </div>
                    <div >
                        <label>Amount</label>
                        <input type="text" onChange={this.amountChangeHandler} value={this.state.amountValue}/>
                    </div>
    
                    <div className="modal-buttons">
                        <button onClick={this.props.closed} className="Danger">Cancel</button>
                        <button className="Success">Save</button>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default AddAccountModal;