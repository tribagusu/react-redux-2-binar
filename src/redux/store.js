import { createStore } from "redux"
import rootReducer from "./reducers"

//_ Store
const store = createStore(rootReducer)

export default store
