import { useMemo } from "react";

export const useConcatDataHandler = (dataPrivat: any, btcData: any, ) => {

    
    const ratesData = dataPrivat ? [...JSON.parse(dataPrivat?.contents)] : [];
    
    const concatedRates = useMemo( () =>  (btcData  ? [...ratesData, {ccy: 'BTC', base_ccy: 'USD', buy: (1 / +btcData).toString(), sale: increaseRate(1 / +btcData)}] : [...ratesData]), [btcData, dataPrivat] )
    
    function increaseRate(a: string | number | boolean) {
        let sum = typeof a === "number" && a + 0.0420
        return sum.toString()
    }

    return concatedRates
}