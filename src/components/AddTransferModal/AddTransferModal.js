import React from "react";

import "./AddTransferModal.scss";

import Modal from "../../UI/Modal/Modal";

const addTransferModal = ( props ) => {
    return (
        <Modal closed={props.closed}>
            <div className="addTransferModal-container">

                <nav className="term">
                    <ul>
                        <li>
                            <input type='radio' value='income' name='radio' id='income' />
                            <label htmlFor='income' onClick={() => props.setTerm(1)}> Income </label>
                        </li>
                        <li>
                            <input type='radio' value='expense' name='radio' id='expense' defaultChecked/>
                            <label htmlFor='expense' onClick={() => props.setTerm(2)}> Expense </label>
                        </li>
                    </ul>
                </nav>

                

                <div >
                    <label>Account</label>
                    <select>
                        <option> Cash </option>
                        <option> Credit Card </option>
                    </select>
                </div>
                <div >
                    <label>Category</label>
                        <select>
                            <option> Cash </option>
                            <option> Credit Card </option>
                        </select>
                </div>
                <div >
                   {props.term == 2 ?  <label> Expense </label> :  <label> Income </label> }
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

export default addTransferModal;