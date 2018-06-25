import { combineReducers } from 'redux';
import FavesReducer from './modules/Faves';
import TokenReducer from './modules/Token';
import SubmitLendItemReducer from './modules/SubmitItem';
import LocationReducer from './modules/Location';
import BorrowItemReducer from './modules/BorrowItem';

export default combineReducers({
    Faves: FavesReducer,
    Token: TokenReducer,
    Location: LocationReducer,
    SubmitItem: SubmitLendItemReducer,
    BorrowItem: BorrowItemReducer
});
