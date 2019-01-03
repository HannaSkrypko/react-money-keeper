import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Layout.css';

import Transfers from "../Transfers/Transfers"

class Layout extends Component {
    render () {
        return (
            <div className="layout-container">
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

                <main>

                    <Route path="/" exact component={Transfers} />

                </main>

            </div>
        )
    }
}

export default Layout;