import { applyMiddleware, createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import reducers from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import localForage from "localforage";

const persistConfig = {
    key: "root",
    storage: localForage,
    blacklist: ["form"]
};

export const store = createStore(
    persistReducer(persistConfig, reducers),
    process.env.NODE_ENV === "development"
        ? composeWithDevTools(applyMiddleware())
        : compose(applyMiddleware())
);
