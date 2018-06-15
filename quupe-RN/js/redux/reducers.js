import { combineReducers } from 'redux';
import FavesReducer from './modules/Faves';
import TokenReducer from './modules/Token';

export default combineReducers({
  Faves: FavesReducer,
  Token: TokenReducer
});
