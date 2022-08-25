import { combineReducers } from "redux"
import navbarReducer from "./navbarReducer"
import cardReducer from "./cardReducer"

const rootReducer = combineReducers({
  cardReducer,
  navbarReducer,
})

export default rootReducer
