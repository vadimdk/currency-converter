import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrInputObj } from "../../common/types";

interface CurrencyToChangeState {
  isReverced: boolean;
  firstInputObj: CurrInputObj;
  secondInputObj: CurrInputObj;
  temporObj: CurrInputObj;
}

const initialState: CurrencyToChangeState = {
  isReverced: false,
  firstInputObj: {
    val: "",
    error: "",
    currVal: "USD",
    selError: ""
  },
  secondInputObj: {
    val: "",
    error: "",
    currVal: "UAH",
    selError: ""
  },
  temporObj: {
    val: "",
    error: "",
    currVal: "",
    selError: ""
  }
};

const numbers = /[+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*)(?:[eE][+-]?\d+)?/g;

const incorrectOptions = ["EUR/EUR", "USD/USD", "UAH/UAH", "BTC/BTC", "BTC/UAH", "EUR/USD", "USD/EUR", "UAH/BTC", "EUR/BTC", "BTC/EUR" ]

export const currencyToChangeSlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    changeValHandler: (state, action: PayloadAction<string>) => {
      state.firstInputObj.val = action.payload;
      state.firstInputObj.error = action.payload.match(numbers)
        ? ""
        : "Invalid value";
    },
    getValHandler: (state, action: PayloadAction<string>) => {
      state.secondInputObj.val = action.payload;
      state.secondInputObj.error = action.payload.match(numbers)
        ? ""
        : "Invalid value";
    },
    toggleReverceHandler: (state, action: PayloadAction<boolean>) => {
      state.isReverced = action.payload;
    },
    selectFirstHandler: (state, action: PayloadAction<string>) => {
      state.firstInputObj.currVal = action.payload;
      state.secondInputObj.currVal = action.payload === "BTC" ? "USD" : state.secondInputObj.currVal
      state.firstInputObj.selError = incorrectOptions.includes(`${action.payload}/${state.secondInputObj.currVal}`) ? "incorrect option!" : ""
    },
    selectSecondHandler: (state, action: PayloadAction<string>) => {
      state.secondInputObj.currVal = action.payload;
      state.secondInputObj.selError = incorrectOptions.includes(`${state.firstInputObj.currVal}/${action.payload}`) ? "incorrect option!" : ""
    },
    swapInputsHandler: (state) => {
      state.temporObj = { ...state.firstInputObj };
      state.firstInputObj = { ...state.secondInputObj };
      state.secondInputObj = { ...state.temporObj };
      state.temporObj = {};
    }
  }
});

export const {
  changeValHandler,
  getValHandler,
  toggleReverceHandler,
  selectFirstHandler,
  selectSecondHandler,
  swapInputsHandler
} = currencyToChangeSlice.actions;

export default currencyToChangeSlice.reducer;
