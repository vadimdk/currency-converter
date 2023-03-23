import  { useEffect } from "react";
import { Grid, Paper } from "@mui/material";
import TableCell from "./components/TableCell";
import { useGetExchangeRateQuery } from "../../services/GetRates";
import { TData } from "../../common/types";



const CurrencyTable = ({ btcData }: TData) => {
  const { data, error, isLoading } = useGetExchangeRateQuery("");

  const dataToRender = data ? [...JSON.parse(data?.contents)] : [];

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

  return (
    <Paper sx={{ width: "95%", borderRadius: 5 }}>
      <Grid container>
        <TableCell>Currency / Current</TableCell>
        <TableCell>Buy</TableCell>
        <TableCell noRightBorder={true}>Sell</TableCell>

        <TableCell>USD/UAH</TableCell>
        <TableCell>
          {!isLoading ? dataToRender[1].buy.slice(0, 4) : 0}
        </TableCell>

        <TableCell noRightBorder={true}>
          {!isLoading ? dataToRender[1].sale.slice(0, 4) : 0}
        </TableCell>

        <TableCell>EUR/UAH</TableCell>
        <TableCell>
          {!isLoading ? dataToRender[0].buy.slice(0, 4) : 0}
        </TableCell>

        <TableCell noRightBorder={true}>
          {!isLoading ? dataToRender[0].sale.slice(0, 4) : 0}
        </TableCell>

        <TableCell noBorder={true}>BTC/USD</TableCell>
        <TableCell noBorder={true}>
          {btcData ? btcData?.buy.slice(0, 9) : 0}
        </TableCell>

        <TableCell noBorder={true} noRightBorder={true}>
          {btcData ? btcData?.sell.slice(0, 9) : 0}
        </TableCell>
      </Grid>
    </Paper>
  );
};

export default CurrencyTable;
