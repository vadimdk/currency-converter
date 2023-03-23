import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { getBtcRateApi, getExchangeRateApi } from "../services/GetRates";
import  currencyReducer  from "./reducers/CurrencySlice";


const rootReducer = combineReducers({
  currencyReducer,
  [getExchangeRateApi.reducerPath]: getExchangeRateApi.reducer,
  [getBtcRateApi.reducerPath]: getBtcRateApi.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(getExchangeRateApi.middleware, getBtcRateApi.middleware)
    
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];