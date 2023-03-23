
export const useConcatDataHandler = (dataPrivat: any, btcData: any) => {
  const ratesData = dataPrivat ? [...JSON.parse(dataPrivat?.contents)] : [];
  
  const concatedRates = btcData 
    ? [
        ...ratesData,
        {
          ccy: "BTC",
          base_ccy: "USD",
          buy: btcData.buy,
          sale: btcData.sell
        }
      ]
    : [...ratesData];

  return concatedRates;
};
