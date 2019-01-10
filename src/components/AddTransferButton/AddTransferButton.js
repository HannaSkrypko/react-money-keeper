import React from "react";

import "./AddTransferButton.scss";

const addTransferButton = ( props ) => (
    <button onClick={props.clicked} className="AddTransferButton"> + </button>
)

export default addTransferButton;