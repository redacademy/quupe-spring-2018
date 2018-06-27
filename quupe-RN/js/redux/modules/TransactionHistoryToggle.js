const GET_BORROWED = 'GET_BORROWED';
const GET_LENT = 'GET_LENT';
const GET_ERROR = 'GET_ERROR';

export const getBorrowed = () => ({
    type: GET_BORROWED
});

export const getLent = () => ({
    type: GET_LENT
});

export const getError = () => ({
    type: GET_ERROR
});

const initialState = {
    borrowed: true,
    lent: false
};

export const getBorrowedTransactions = event => dispatch => {
    try {
        dispatch(getBorrowed());
    } catch (error) {
        dispatch(GET_ERROR(error));
    }
};

export const getLentTransactions = event => dispatch => {
    try {
        dispatch(getLent());
    } catch (error) {
        dispatch(GET_ERROR(error));
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
    case GET_BORROWED: {
        return { ...state, borrowed: true, lent: false };
    }
    case GET_LENT: {
        return { ...state, lent: true, borrowed: false };
    }

    case GET_ERROR: {
        return { ...state, error: action.payload };
    }
    default:
        return state;
    }
};
