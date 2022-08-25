import { createStore } from "redux"

const initState = {
  data: {
    name: "My Name",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
  },
}

const authReducer = (state = initState, action) => {
  return state
}

const store = createStore(authReducer)

export default store
