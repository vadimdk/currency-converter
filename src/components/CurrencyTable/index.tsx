import React, { useEffect, useMemo } from "react";
import { Grid, Paper } from "@mui/material";
import TableCell from "./components/TableCell";
import { useGetExchangeRateQuery } from "../../services/GetRates";
import { useAxios } from "../../services/useAxios";
import { useConcatDataHandler } from "../../helpers/concatDataHandler";

interface ITableProps {
  handleCounterReset: (
    counter: number | string,
    func: (c: any) => void
  ) => void;
}

const CurrencyTable = ({ handleCounterReset }: ITableProps) => {
  // const [counter, setCounter] = useState("")
  const { data, error, isLoading } = useGetExchangeRateQuery("");
  console.log("data", data && JSON.parse(data?.contents));

  const [isLoad, btcData, axiosErr] = useAxios() 

  // const ratesData = data ? [...JSON.parse(data?.contents)] : [];

  // const concatedRates = useMemo( () =>  (btcData  ? [...ratesData, {ccy: 'BTC', base_ccy: 'USD', buy: (1 / +btcData).toString(), sale: increaseRate(1 / +btcData)}] : [...ratesData]), [btcData, data] )

  // function increaseRate(a: string | number | boolean) {
  //   let sum = typeof a === "number" && a + 0.0420
  //   return sum.toString()
  // }

  const dataToRender = useConcatDataHandler(data, btcData)

// console.log('concatedRates', concatedRates)
console.log("isLoad",isLoad)
// console.log("axiosErr",axiosErr)

  useEffect(() => {
    const savedCounter = JSON.parse(localStorage.getItem("counter") as any);
    if (savedCounter) {
      localStorage.setItem(
        "counter",
        JSON.stringify(parseInt(savedCounter) + 1)
      );
    } else {
      localStorage.setItem("counter", JSON.stringify("1"));
    }
  }, [isLoading]);

  console.log("counter", JSON.parse(localStorage.getItem("counter") as any));
  console.log("render");
  console.log("Error", error);


  return (
    <Paper sx={{ width: "95%", borderRadius: 5 }}>
      <Grid container>
        <TableCell>Currency / Current</TableCell>
        <TableCell>Buy</TableCell>
        <TableCell noRightBorder={true}>Sell</TableCell>

        <TableCell>USD/UAH</TableCell>
        <TableCell>{!isLoading ? dataToRender[1].buy.slice(0, 4) : 0}</TableCell>

        <TableCell noRightBorder={true}>
          {!isLoading ? dataToRender[1].sale.slice(0, 4) : 0}
        </TableCell>

        <TableCell>EUR/UAH</TableCell>
        <TableCell>{!isLoading ? dataToRender[0].buy.slice(0, 4) : 0}</TableCell>

        <TableCell noRightBorder={true}>
          {!isLoading ? dataToRender[0].sale.slice(0, 4) : 0}
        </TableCell>

        <TableCell noBorder={true}>BTC/USD</TableCell>
        {!axiosErr ? <TableCell noBorder={true}>{!isLoad && btcData ? dataToRender[2]?.buy : 0}</TableCell> : null} 
        {axiosErr ? <TableCell noBorder={true}>server error</TableCell> : null}
        <TableCell noBorder={true} noRightBorder={true}>
        {!isLoad ? dataToRender[2]?.sale : 0}
        </TableCell>
      </Grid>
    </Paper>
  );
};

export default CurrencyTable;
