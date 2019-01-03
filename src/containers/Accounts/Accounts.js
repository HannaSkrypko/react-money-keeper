import React, { Component } from 'react';

import './Accounts.css';

import Modal from "../../components/Modal/Modal"

class Accounts extends Component {
    render () {
        return (
            <>
                <button> Add new account </button>
                <Modal />
            </>
        )
    }
}

export default Accounts;