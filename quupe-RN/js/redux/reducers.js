import { combineReducers } from 'redux';
import FavesReducer from './modules/Faves';
import TokenReducer from './modules/Token';
import SubmitLendItemReducer from './modules/SubmitItem';
import LocationReducer from './modules/Location';
import BorrowItemReducer from './modules/BorrowItem';
import TransactionHistoryToggleReducer from './modules/TransactionHistoryToggle';

export default combineReducers({
    Faves: FavesReducer,
    Token: TokenReducer,
    Location: LocationReducer,
    SubmitItem: SubmitLendItemReducer,
    BorrowItem: BorrowItemReducer,
    TransactionHistory: TransactionHistoryToggleReducer
});
