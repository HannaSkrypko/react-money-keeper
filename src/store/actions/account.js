import * as actionType from './actionTypes';
import axios from '../../../axios-transfers'

export const setAccounts = (accounts) => {
    return {
        type: actionType.SET_ACCOUNTS,
        accounts: accounts
    };
};

export const initAccounts = () => {
    return dispatch => {
        axios.get("/account.json")
            .then(
                response => {
                    const fetchArray = [];
                    for (let key in response.data) {
                        fetchArray.push({
                            ...response.data[key],
                            id: key
                        });
                    }
                    dispatch(setAccounts(fetchArray))
                }
            );
    };
};

export const setGroups = (groups) => {
    return {
        type: actionType.SET_GROUPS,
        groups: groups
    };
};

export const initGroups = () => {
    return dispatch => {
        axios.get("/group.json")
            .then(
                response => {
                    const fetchArray = [];
                    for (let key in response.data) {
                        fetchArray.push({
                            ...response.data[key],
                            id: key
                        });
                    }
                    dispatch(setGroups(fetchArray))
                }
            );
    };
};

export const toggleAccountsEditMode = () => {
    return {
        type: actionType.TOOGLE_ACCOUNTS_EDIT_MODE
    };
}

