import { v4 as uuidv4 } from "uuid";

let initialState = {
  users: [
    { name: "Terry", email: "terry@gmail.com", gen: 22, id: uuidv4() },
    { name: "Ash", email: "ash@gmail.com", gen: 25, id: uuidv4() },
  ],
};

let UsersReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_USER":
      return { ...state, users: [...state.users, action.payload] };

    default:
      return state;
  }
};

export default UsersReducers;
