import { combineReducers } from 'redux';
import FavesReducer from './modules/Faves';
import TokenReducer from './modules/Token';
import SubmitLendItemReducer from './modules/SubmitItem';
<<<<<<< HEAD
import LocationReducer from './modules/Location';
=======
>>>>>>> message text input is now reset after submit, form values for lend form is also reset after submit

export default combineReducers({
    Faves: FavesReducer,
    Token: TokenReducer,
<<<<<<< HEAD
    Location: LocationReducer,
=======
>>>>>>> message text input is now reset after submit, form values for lend form is also reset after submit
    SubmitItem: SubmitLendItemReducer
});
