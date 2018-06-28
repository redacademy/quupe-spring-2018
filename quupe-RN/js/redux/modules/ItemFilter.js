const GET_USER_INPUT = 'GET_USER_INPUT';
const GET_ERROR = 'GET_ERROR';
const DISPLAY_ITEM_LIST = 'DISPLAY_ITEM_LIST';
const HIDE_ITEM_LIST = 'HIDE_ITEM_LIST';

export const getInputValue = input => ({
    type: GET_USER_INPUT,
    payload: input
});

export const showItemList = () => ({
    type: DISPLAY_ITEM_LIST
});

export const hideItemList = () => ({
    type: HIDE_ITEM_LIST
});

export const getError = error => ({
    type: GET_ERROR,
    payload: error
});

const initialState = {
    input: '',
    error: '',
    itemList: false
};

export default (state = initialState, action) => {
    switch (action.type) {
    case GET_USER_INPUT: {
        return { ...state, input: action.payload };
    }
    case DISPLAY_ITEM_LIST: {
        return { ...state, itemList: false };
    }
    case HIDE_ITEM_LIST: {
        return { ...state, itemList: true };
    }
    case GET_ERROR: {
        return { ...state, error: action.payload };
    }
    default:
        return state;
    }
};
