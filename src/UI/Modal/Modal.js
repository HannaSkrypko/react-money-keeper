import React from "react";

import "./Modal.css";

const modal = ( props ) => {
    return (
        <div>
            <div className="modal-overlay" onClick={props.closed}> </div>
            <div className="modal">
                {props.children}
                <button className="modal-close-button" type="submit" onClick={props.closed}> X </button>
            </div>
        </div>
    )
}

export default modal;