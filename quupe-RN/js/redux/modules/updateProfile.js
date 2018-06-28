const SET_IMAGE = 'SET_IMAGE';
const SET_FULLNAME = 'SET_FULLNAME';
const SET_BIO = 'SET_BIO';
const SET_EMAIL = 'SET_EMAIL';
const SET_ERROR = 'SET_ERROR';

export const setFullname = fullname => ({
    type: SET_FULLNAME,
    payload: fullname
});
export const setImage = image => ({
    type: SET_IMAGE,
    payload: image
});

export const setBio = bio => ({
    type: SET_BIO,
    payload: bio
});

export const setEmail = email => ({
    type: SET_EMAIL,
    payload: email
});

export const setError = error => ({
    type: SET_ERROR,
    payload: error
});

const initialState = {
    fullname: '',
    bio: '',
    image: '',
    email: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
    case SET_FULLNAME:
        return {
            ...state,
            fullname: action.payload
        };

    case SET_IMAGE:
        return {
            ...state,
            image: action.payload
        };
    case SET_BIO:
        return {
            ...state,
            bio: action.payload
        };
    case SET_EMAIL:
        return {
            ...state,
            email: action.payload
        };
    case SET_ERROR: {
        return { ...state, error: action.payload };
    }
    default:
        return state;
    }
};
