import { combineReducers } from 'redux';
import FavesReducer from './modules/Faves';
import TokenReducer from './modules/Token';
import SubmitLendItemReducer from './modules/SubmitItem';

export default combineReducers({
    Faves: FavesReducer,
    Token: TokenReducer,
    SubmitItem: SubmitLendItemReducer
});
