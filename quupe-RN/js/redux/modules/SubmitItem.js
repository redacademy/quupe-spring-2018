const SET_TITLE = 'SET_TITLE';
const SET_ORIGINAL_PRICE = 'SET_ORIGINAL_PRICE';
const SET_IMAGE = 'SET_IMAGE';
const SET_CONDITION = 'SET_CONDITION';
const SET_YEAR = 'SET_YEAR';
const SET_CATEGORY = 'SET_CATEGORY';
const SET_PRICE = 'SET_PRICE';
const SET_DESCRIPTION = 'SET_DESCRIPTION';
const SET_PRICE_ONE_WEEK = 'SET_PRICE_ONE_WEEK';
const SET_PRICE_ONE_MONTH = 'SET_PRICE_ONE_MONTH';
const SET_LATITUDE = 'SET_LATITUDE';
const SET_LONGITUDE = 'SET_LONGITUDE';
const SET_LOCATION = 'SET_LOCATION';
const SET_FOCUS = 'SET_FOCUS';
const SET_BLUR = 'SET_BLUR';
const RESET_FORM = 'RESET_FORM';
const SET_ERROR = 'SET_ERROR';

export const setFocus = () => ({
    type: SET_FOCUS,
    payload: true
});

export const setBlur = () => ({
    type: SET_BLUR,
    payload: false
});

export const setTitle = title => ({
    type: SET_TITLE,
    payload: title
});

export const setOriginalPrice = price => ({
    type: SET_ORIGINAL_PRICE,
    payload: price
});
export const setImage = image => ({
    type: SET_IMAGE,
    payload: image
});

export const setCondition = condition => ({
    type: SET_CONDITION,
    payload: condition
});

export const setYear = year => ({
    type: SET_YEAR,
    payload: year
});

export const setCategory = category => ({
    type: SET_CATEGORY,
    payload: category
});

export const setDescription = description => ({
    type: SET_DESCRIPTION,
    payload: description
});

export const setPrice = price => ({
    type: SET_PRICE,
    payload: price
});

export const setPriceOneWeek = price => ({
    type: SET_PRICE_ONE_WEEK,
    payload: price
});

export const setPriceOneMonth = price => ({
    type: SET_PRICE_ONE_MONTH,
    payload: price
});

export const setLatitude = latitude => ({
    type: SET_LATITUDE,
    payload: latitude
});

export const setLongitude = longitude => ({
    type: SET_LONGITUDE,
    payload: longitude
});

export const setLocation = location => ({
    type: SET_LOCATION,
    payload: location
});

export const resetForm = () => ({
    type: RESET_FORM,
    payload: ''
});

export const setError = error => ({
    type: SET_ERROR,
    payload: error
});

const initialState = {
    title: '',
    originalPrice: '',
    image: '',
    condition: '',
    year: '',
    category: '',
    price: '',
    priceOneWeek: '',
    priceOneMonth: '',
    description: '',
    latitude: '',
    longitude: '',
    location: '',
    focus: false
};

export default (state = initialState, action) => {
    switch (action.type) {
    case SET_BLUR:
        return {
            ...state,
            focus: action.payload
        };
    case SET_FOCUS:
        return {
            ...state,
            focus: action.payload
        };
    case SET_TITLE:
        return {
            ...state,
            title: action.payload
        };
    case SET_ORIGINAL_PRICE:
        return {
            ...state,
            originalPrice: action.payload
        };
    case SET_IMAGE:
        return {
            ...state,
            image: action.payload
        };
    case SET_CONDITION:
        return {
            ...state,
            condition: action.payload
        };
    case SET_YEAR:
        return {
            ...state,
            year: action.payload
        };
    case SET_CATEGORY:
        return {
            ...state,
            category: action.payload
        };
    case SET_PRICE:
        return {
            ...state,
            price: action.payload
        };
    case SET_PRICE_ONE_WEEK:
        return {
            ...state,
            priceOneWeek: action.payload
        };
    case SET_PRICE_ONE_MONTH:
        return {
            ...state,
            priceOneMonth: action.payload
        };
    case SET_DESCRIPTION:
        return {
            ...state,
            description: action.payload
        };
    case SET_LATITUDE:
        return {
            ...state,
            latitude: action.payload
        };
    case SET_LONGITUDE:
        return {
            ...state,
            longitude: action.payload
        };
    case SET_LOCATION:
        return {
            ...state,
            location: action.payload
        };
    case RESET_FORM:
        return {
            ...state,
            title: action.payload,
            originalPrice: action.payload,
            image: action.payload,
            condition: action.payload,
            year: action.payload,
            category: action.payload,
            price: action.payload,
            priceOneWeek: action.payload,
            priceOneMonth: action.payload,
            description: action.payload,
            latitude: action.payload,
            longitude: action.payload,
            location: action.payload
        };
    case SET_ERROR: {
        return { ...state, error: action.payload };
    }
    default:
        return state;
    }
};
