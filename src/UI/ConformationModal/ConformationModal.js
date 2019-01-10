import React from 'react';

import Modal from '../Modal/Modal';

const conformationModal = () => (
    <Modal closed={props.closed}>
        <div className="conformationModal-container">
            <h3>Are you sure?</h3>
            <div className="modal-buttons">
                <button onClick={props.closed} className="Danger">Yes</button>
                <button className="Success">No</button>
            </div>
        </div>
    </Modal>
)

export default conformationModal;