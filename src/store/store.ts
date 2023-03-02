import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { getExchangeRateApi } from "../services/GetRates";
import  currencyReducer  from "./reducers/CurrencySlice";
// import { rtkQueryErrorLogger } from "./reducers/ErrorMiddleware";

const rootReducer = combineReducers({
  currencyReducer,
  [getExchangeRateApi.reducerPath]: getExchangeRateApi.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(getExchangeRateApi.middleware)
    
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];