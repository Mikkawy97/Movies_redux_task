import { combineReducers } from "redux";
import movies from "./movies/Movies.reducer";


const rootReducer = combineReducers({
  movies,

});

export default rootReducer;
