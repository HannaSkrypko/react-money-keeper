import React, { Component } from 'react';

import './Transfers.css';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

class Transfers extends Component {
    render () {
        return (
            <div className="transfer-container">
               <header>
                   <nav>
                       <ul>
                           <li>
                               <NavLink to="/" exact> Transfers </NavLink>
                           </li>
                           <li>
                               <NavLink to="/accounts"> Accounts </NavLink>
                           </li>
                           <li>
                               <NavLink to="/budjetplanning"> Budjet Planning </NavLink>
                           </li>
                           <li>
                               <NavLink to="/settings"> Settings </NavLink>
                           </li>
                       </ul>
                   </nav>
               </header>
            </div>
        )
    }
}

export default Transfers;