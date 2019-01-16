import * as actionType from './actionTypes';
import axios from '../../../axios-transfers';

export const setTransfers = ( transfers ) => {
    return {
        type: actionType.SET_TRANSFERS,
        transfers: transfers
    };
};

export const initTrasfers = () => {
    return dispatch => {
        axios.get("/transfer.json")
            .then(
                response => {
                    const fetchArray = [];
                    for (let key in response.data) {
                        fetchArray.push({
                            ...response.data[key],
                            id: key
                        });
                    };
                    dispatch(setTransfers(fetchArray));
                }
            );
    };
};

export const setCategories = ( categories ) => {
    return {
        type: actionType.SET_CATEGORIES,
        categories: categories
    }
};

export const initCategories = () => {
    return dispatch => {
        axios.get("/category.json")
            .then(
                response => {
                    const fetchArray = [];
                    for (let key in response.data) {
                        fetchArray.push({
                            ...response.data[key],
                            id: key
                        });
                    };
                    dispatch(setCategories(fetchArray));

                }
            );
    };
};

