import { combineReducers } from "redux";
import posts from "./posts";

const appReducers = combineReducers({
  posts,
});

export default appReducers;
