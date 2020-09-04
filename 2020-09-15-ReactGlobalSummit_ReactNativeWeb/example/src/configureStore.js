import {createStore, combineReducers, applyMiddleware} from "redux";

import thunkMiddleware from "redux-thunk";

import {reducer as font} from "./font";
import {reducer as menu} from "./menu";
import {reducer as props} from "./props";
import {reducer as syntax} from "./syntax";
import {reducer as uri} from "./uri";

export default () => createStore(
  combineReducers({font, menu, props, syntax, uri}),
  applyMiddleware(thunkMiddleware),
);
