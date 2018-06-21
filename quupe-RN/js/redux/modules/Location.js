const GET_CURRENT_LOCATION_NAME = 'GET_CURRENT_LOCATION_NAME ';
const GET_LATITUDE = 'GET_LATITUDE';
const GET_LONGITUDE = 'GET_LONGITUDE';
const GET_ERROR = 'GET_ERROR';

export const getCurrentLocationName = address => ({
    type: GET_CURRENT_LOCATION_NAME,
    payload: address
});
export const getError = error => ({
    type: GET_ERROR,
    payload: error
});

export const getLatitude = latitude => ({
    type: GET_LATITUDE,
    payload: latitude
});

export const getLongitude = longitude => ({
    type: GET_LONGITUDE,
    payload: longitude
});

const initialState = {
    address: null,
    latitude: null,
    longitude: null,
    error: ''
};

export const getCurrentLocation = ({ address }) => dispatch => {
    try {
        dispatch(getCurrentLocationName(address));
    } catch (error) {
        dispatch(GET_ERROR(error));
    }
};

export const changeLocation = ({ latitude, longitude }) => dispatch => {
    try {
        dispatch(getLatitude(latitude));
        dispatch(getLongitude(longitude));
    } catch (error) {
        dispatch(GET_ERROR(error));
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
    case GET_LATITUDE: {
        return { ...state, latitude: action.payload };
    }
    case GET_LONGITUDE: {
        return { ...state, longitude: action.payload };
    }
    case GET_CURRENT_LOCATION_NAME: {
        return { ...state, address: action.payload };
    }
    case GET_ERROR: {
        return { ...state, error: action.payload };
    }
    default:
        return state;
    }
};
