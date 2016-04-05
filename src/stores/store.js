import {createStore} from "redux";
import ContactReducers from "../reducers/InstagramReducers.js";

module.exports = createStore(ContactReducers);
