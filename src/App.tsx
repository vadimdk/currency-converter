import React from "react";
import { ErrorBoundary } from "react-error-boundary";

import "./App.css";
import CurrencyCalc from "./components/CurrencyCalc";
import CurrencyTable from "./components/CurrencyTable";
import FallbackComponent from "./components/FalllbackComponent";
import MainLayout from "./MainLayout";

function App() {
  const handleCounterReset = (counter: string | number, func: (c: any) => void) => {
    func(counter)
  };
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
          <CurrencyTable handleCounterReset={handleCounterReset} />
        </ErrorBoundary>
        <CurrencyCalc />
      </MainLayout>
    </div>
  );
}

export default App;
