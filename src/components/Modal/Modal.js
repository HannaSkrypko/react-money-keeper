import React from "react";

import "./Modal.css";

const modal = ( props ) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                {props.children}
                <button type="submit"> X </button>
            </div>
        </div>
    )
}

export default modal;