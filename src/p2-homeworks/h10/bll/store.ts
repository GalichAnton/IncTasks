import { loadingReducer } from "./loadingReducer";
import { combineReducers, createStore } from "redux";
import { themeReducer } from "../../h12/bll/themeReducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const reducers = combineReducers({
  loading: loadingReducer,
  theme: themeReducer,
});

const store = createStore(reducers);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// @ts-ignore
window.store = store; // for dev
