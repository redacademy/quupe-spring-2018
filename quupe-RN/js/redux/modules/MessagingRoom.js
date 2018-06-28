const SET_MESSAGING_USER = 'SET_MESSAGING_USER';
const SET_MESSAGE = 'SET_MESSAGE';
const SET_ROOM = 'SET_ROOM';

export const setMessagingUser = user => ({
    type: SET_MESSAGING_USER,
    payload: user
});

export const setMessage = message => ({
    type: SET_MESSAGE,
    payload: message
});

export const setRoom = room => ({
    type: SET_ROOM,
    payload: room
});

const initialState = {
    user: '',
    message: '',
    room: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
    case SET_MESSAGING_USER:
        return {
            ...state,
            user: action.payload
        };
    case SET_MESSAGE:
        return {
            ...state,
            message: action.payload
        };
    case SET_ROOM:
        return {
            ...state,
            room: action.payload
        };
    default:
        return state;
    }
};
