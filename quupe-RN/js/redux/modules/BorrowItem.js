const DISPLAY_FROM_CALENDAR = 'DISPLAY_FROM_CALENDAR';
const DISPLAY_TO_CALENDAR = 'DISPLAY_TO_CALENDAR';
const SET_FROM_DATE = 'SET_FROM_DATE';
const SET_TO_DATE = 'SET_TO_DATE';
const DISPLAY_MESSAGE_OVERLAY = 'DISPLAY_MESSAGE_OVERLAY';

export const displayFromCalendar = () => ({
    type: DISPLAY_FROM_CALENDAR
});

export const displayToCalendar = () => ({
    type: DISPLAY_TO_CALENDAR
});

export const setFromDate = date => ({
    type: SET_FROM_DATE,
    payload: date
});

export const setToDate = date => ({
    type: SET_TO_DATE,
    payload: date
});

export const displayMessageOverlay = () => ({
    type: DISPLAY_MESSAGE_OVERLAY
});

const initialState = {
    fromDate: 'From',
    toDate: 'To',
    fromCalendar: false,
    toCalendar: false,
    messageOverlay: false
};

export default (state = initialState, action) => {
    switch (action.type) {
    case DISPLAY_FROM_CALENDAR: {
        return {
            ...state,
            fromCalendar: !initialState.fromCalendar,
            toCalendar: false
        };
    }
    case DISPLAY_TO_CALENDAR: {
        return {
            ...state,
            toCalendar: !initialState.toCalendar,
            fromCalendar: false
        };
    }
    case SET_FROM_DATE: {
        return { ...state, fromDate: action.payload };
    }
    case SET_TO_DATE: {
        return { ...state, toDate: action.payload };
    }
    case DISPLAY_MESSAGE_OVERLAY: {
        return { ...state, messageOverlay: !state.messageOverlay };
    }
    default: {
        return { ...state };
    }
    }
};
