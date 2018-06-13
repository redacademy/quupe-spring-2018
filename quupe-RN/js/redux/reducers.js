import { combineReducers } from "redux";
import FavesReducer from "./modules/Faves";

export default combineReducers({
  Faves: FavesReducer
});
