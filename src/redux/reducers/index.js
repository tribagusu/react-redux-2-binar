import { combineReducers } from "redux"
import navbarReducer from "./navbarReducer"
import cardReducer from "./cardReducer"
import authReducer from "./authReducer"

const rootReducer = combineReducers({
  cardReducer,
  navbarReducer,
  authReducer,
})

export default rootReducer
