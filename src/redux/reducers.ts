import { combineReducers } from "redux";

import ColorReducer from "./background/background.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  color: ColorReducer,
});
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["color"], // only navigation will be persisted
};
export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);
