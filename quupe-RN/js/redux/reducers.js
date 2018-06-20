import { combineReducers } from 'redux';
import FavesReducer from './modules/Faves';
import TokenReducer from './modules/Token';
import SubmitLendItemReducer from './modules/SubmitItem';
import LocationReducer from './modules/Location';

export default combineReducers({
    Faves: FavesReducer,
    Token: TokenReducer,
    SubmitItem: SubmitLendItemReducer,
    Location: LocationReducer
});
