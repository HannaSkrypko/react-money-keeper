import React from "react";

import "./AddAccountModal.css";

import Modal from "../../UI/Modal/Modal";

const addAccountModal = ( props ) => {
    return (
        <Modal closed={props.closed}>
            <div className="addModal-container">
                <div >
                    <label>Group</label>
                    <select>
                        <option> Cash </option>
                        <option> Credit Card </option>
                    </select>
                </div>
                <div >
                    <label>Name</label>
                    <input type="text" onChange={1} value=""/>
                </div>
                <div >
                    <label>Amount</label>
                    <input type="text" onChange={2} value=""/>
                </div>

                <div className="modal-buttons">
                    <button onClick={props.closed} className="Danger">Cancel</button>
                    <button className="Success">Save</button>
                </div>
            </div>
        </Modal>
    )
}

export default addAccountModal;