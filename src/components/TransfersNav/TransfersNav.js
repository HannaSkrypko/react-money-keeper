import React from "react"

import "./TransfersNav.css";

const transfersNav = ( props ) => {
    return (
        <nav className="transfersNav-container">
            <ul>
                <li>
                    <input type='radio' value='daily' name='radio' id='daily' defaultChecked />
                    <label htmlFor='daily' onClick={() => props.setPeriod(1)}> Daily </label>
                </li>
                <li>
                    <input type='radio' value='monthly' name='radio' id='monthly'/>
                    <label htmlFor='monthly' onClick={() => props.setPeriod(2)}> Monthly </label>
                </li>
            </ul>
        </nav>
    )
}

export default transfersNav;