import { createStore, combineReducers } from "redux";
import UsersReducer from "../reducers/UsersReducer";
import AuthReducer from "../reducers/AuthReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

let reducers = combineReducers({ UsersReducer, AuthReducer });

const persistedReducer = persistReducer(persistConfig, reducers);

let store = createStore(persistedReducer);

let persistor = persistStore(store);

export { store, persistor };
