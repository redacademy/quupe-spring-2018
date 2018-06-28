import { combineReducers } from 'redux';
import TokenReducer from './modules/Token';
import SubmitLendItemReducer from './modules/SubmitItem';
import LocationReducer from './modules/Location';
import BorrowItemReducer from './modules/BorrowItem';
import TransactionHistoryToggleReducer from './modules/TransactionHistoryToggle';
import ItemFilterReducer from './modules/ItemFilter';
import MessagingRoomReducer from './modules/MessagingRoom';

export default combineReducers({
    Token: TokenReducer,
    Location: LocationReducer,
    SubmitItem: SubmitLendItemReducer,
    BorrowItem: BorrowItemReducer,
    TransactionHistory: TransactionHistoryToggleReducer,
    ItemFilter: ItemFilterReducer,
    MessagingRoom: MessagingRoomReducer
});
