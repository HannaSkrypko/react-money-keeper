import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './Layout.scss';

import Transfers from "../Transfers/Transfers";
import Accounts from "../Accounts/Accounts";

import * as actions from '../../store/actions/allActions';

class Layout extends Component {

    componentDidMount() {
        this.props.onInitAccounts();
        this.props.onInitGroups();
        this.props.onInitCategories();
        this.props.onInitTransfers();
    }

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

                    <Route path="/accounts" component={Accounts} />

                </main>

            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        transfers: state.transfer.transfers,
        categories: state.transfer.categories,
        accounts: state.account.accounts,
        groups: state.account.groups,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitTransfers: () => dispatch(actions.initTrasfers()),
        onInitGroups: () => dispatch(actions.initGroups()),
        onInitCategories: () => dispatch(actions.initCategories()),
        onInitAccounts: () => dispatch(actions.initAccounts()),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));