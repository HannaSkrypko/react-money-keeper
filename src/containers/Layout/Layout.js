import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Layout.css';

import Transfers from "../Transfers/Transfers";
import Accounts from "../Accounts/Accounts";

class Layout extends Component {
    render () {
        return (
            <div className="layout-container">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/Transfers" > Transfers </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" exact> Accounts </NavLink>  {/*to="/accounts"> */}
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

                    <Route path="/" exact component={Accounts} />
                    {/*<Route path="/" exact component={Transfers} />

                    <Route path="/accounts" component={Accounts} />*/}

                </main>

            </div>
        )
    }
}

export default Layout;