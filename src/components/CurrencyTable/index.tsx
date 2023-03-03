import React, { useEffect, useState } from "react";
import { Grid, Paper } from "@mui/material";
import TableCell from "./components/TableCell";
import { useGetExchangeRateQuery } from "../../services/GetRates";



interface ITableProps {
  handleCounterReset: (counter: number | string, 
    func: (c: any) => void) => void;
}

const CurrencyTable = ({ handleCounterReset }: ITableProps) => {
  // const [counter, setCounter] = useState("")
  const { data, error, isLoading } = useGetExchangeRateQuery("");
  console.log("data", data && JSON.parse(data?.contents));

  const ratesData = data ? [...JSON.parse(data?.contents)] : [];

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
        <TableCell>{!isLoading ? ratesData[1].buy.slice(0, 4) : 0}</TableCell>

        <TableCell noRightBorder={true}>
          {!isLoading ? ratesData[1].sale.slice(0, 4) : 0}
        </TableCell>

        <TableCell>EUR/UAH</TableCell>
        <TableCell>{!isLoading ? ratesData[0].buy.slice(0, 4) : 0}</TableCell>

        <TableCell noRightBorder={true}>
          {!isLoading ? ratesData[0].sale.slice(0, 4) : 0}
        </TableCell>

        <TableCell noBorder={true}>BTC/USD</TableCell>
        <TableCell noBorder={true}>23345.60</TableCell>
        <TableCell noBorder={true} noRightBorder={true}>
          23455.05
        </TableCell>
      </Grid>
    </Paper>
  );
};

export default CurrencyTable;
