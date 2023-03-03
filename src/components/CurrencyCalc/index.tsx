import React from "react";
import { Button, SelectChangeEvent, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import {
  changeValHandler,
  getValHandler,
  selectFirstHandler,
  toggleReverceHandler,
  selectSecondHandler,
  swapInputsHandler
} from "../../store/reducers/CurrencySlice";
import { FlexBoxWrapper, FlexContainer, SwapBtn } from "./styles";
import CurrencySelect from "./components/CurrencySelect";
import { useGetExchangeRateQuery } from "../../services/GetRates";
import { convertFunc } from "../../helpers/helperFunc";
import { ICurrData } from "../../common/types";

const CurrencyCalc = () => {
  const dispatch = useAppDispatch();

  const { firstInputObj, secondInputObj, isReverced } = useAppSelector(
    (state) => state.currencyReducer
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeValHandler(event.target.value));
  };

  const handleGetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getValHandler(event.target.value));
  };

  const toggleReverce = () => {
    dispatch(swapInputsHandler());
    dispatch(toggleReverceHandler(!isReverced));
  };

  const selectFirstOnChange = (e: SelectChangeEvent) => {
    dispatch(selectFirstHandler(e.target.value));
  };

  const selectSecondOnChange = (e: SelectChangeEvent) => {
    dispatch(selectSecondHandler(e.target.value));
  };

  const { data } = useGetExchangeRateQuery("");

  const ratesDataArr: ICurrData[] = data ? [...JSON.parse(data?.contents)] : [];

  const handleConvertFunc = () => {
    const res = convertFunc(firstInputObj, secondInputObj, ratesDataArr);
    res && dispatch(getValHandler(res));
  };

  return (
    <>
      <FlexBoxWrapper>
        <FlexContainer>
          <TextField
            placeholder={"0"}
            error={!!firstInputObj.error}
            id="outlined-controlled"
            label="Change"
            value={firstInputObj.val}
            onChange={handleChange}
            variant="standard"
            helperText={firstInputObj.error}
          />
          <CurrencySelect
            value={firstInputObj.currVal}
            selectOnChange={selectFirstOnChange}
            error={firstInputObj.selError}
          />
        </FlexContainer>
        <div>
          <SwapBtn onClick={toggleReverce}>
            <SwapHorizIcon color="info" />
          </SwapBtn>
        </div>
        <FlexContainer>
          <TextField
            placeholder={"0"}
            error={!!secondInputObj.error}
            id="outlined-controlled"
            label="Get"
            value={secondInputObj.val}
            onChange={handleGetChange}
            variant="standard"
            helperText={secondInputObj.error}
          />
          <CurrencySelect
            value={secondInputObj.currVal}
            selectOnChange={selectSecondOnChange}
            error={secondInputObj.selError}
          />
        </FlexContainer>
      </FlexBoxWrapper>
      <Button
        variant="contained"
        disabled={!!firstInputObj.error || !!secondInputObj.error || !!secondInputObj.selError || !!firstInputObj.selError}
        sx={{ marginTop: 5 }}
        onClick={handleConvertFunc}
      >
        Convert
      </Button>
    </>
  );
};

export default CurrencyCalc;
