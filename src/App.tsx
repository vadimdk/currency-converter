import React from "react";
import { ErrorBoundary } from "react-error-boundary";

import "./App.css";
import CurrencyCalc from "./components/CurrencyCalc";
import CurrencyTable from "./components/CurrencyTable";
import FallbackComponent from "./components/FalllbackComponent";
import { createBtcObj } from "./helpers/helperFunc";
import MainLayout from "./MainLayout";
import { useGetBtcRateApiQuery } from "./services/GetRates";

function App() {
  // const handleCounterReset = (counter: string | number, func: (c: any) => void) => {
  //   func(counter)
  // };

  const { data: btcRate } = useGetBtcRateApiQuery("");
  const btcToRender = createBtcObj(btcRate?.rates.BTC);

  return (
    <div className="App">
      <MainLayout>
        <ErrorBoundary
          FallbackComponent={FallbackComponent}
          //  onError={(error, errorInfo) => errorService.log({ error, errorInfo })}
          onReset={() => {
            localStorage.setItem("counter", JSON.stringify("1"));
          }}
        >
          <CurrencyTable btcData={btcToRender} />
        </ErrorBoundary>
        <CurrencyCalc btcData={btcToRender} />
      </MainLayout>
    </div>
  );
}

export default App;
