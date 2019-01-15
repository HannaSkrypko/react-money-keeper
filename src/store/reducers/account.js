import * as actionType from '../actions/actionTypes';

const initialState = {
    accounts: [],
    groups: [],
    isEditMode: false,
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionType.SET_ACCOUNTS:
            return {
                ...state,
                accounts: action.accounts
            }
        case actionType.SET_GROUPS:
            return {
                ...state,
                groups: action.groups
            }
        case actionType.TOOGLE_ACCOUNTS_EDIT_MODE:
            return {
                ...state,
                isEditMode: !state.isEditMode
            }
        default:
            return state;
    };
    return state;
};

export default reducer;