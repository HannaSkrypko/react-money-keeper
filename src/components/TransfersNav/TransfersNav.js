import React from "react"

import "./TransfersNav.css";

const transfersNav = ( props ) => {
    return (
        <nav className="transfersNav-container">
            <ul>
                <li>
                    <input type='radio' value='daily' name='radio' id='daily' defaultChecked />
                    <label htmlFor='daily'> Daily </label>
                </li>
                <li>
                    <input type='radio' value='weekly' name='radio' id='weekly'/>
                    <label htmlFor='weekly'> Weekly </label>
                </li>
                <li>
                    <input type='radio' value='monthly' name='radio' id='monthly'/>
                    <label htmlFor='monthly'> Monthly </label>
                </li>
            </ul>
        </nav>
    )
}

export default transfersNav;