import { CurrInputObj, ICurrData } from "../common/types";

export const convertFunc = (
  firstObj: CurrInputObj,
  secondObj: CurrInputObj,
  dataArr: ICurrData[],
) => {
  let result;
  if (firstObj.currVal === "BTC") {
    const currData = dataArr.find((item) => item.ccy === firstObj.currVal);
    result = currData && parseFloat(firstObj.val) * parseFloat(currData.buy);
  } else if (secondObj.currVal === "BTC") {
    const currData = dataArr.find((item) => item.ccy === secondObj.currVal);
    result = currData && parseFloat(firstObj.val) / parseFloat(currData.sale);
  } else if (firstObj.currVal === "UAH") {
    const currData = dataArr.find((item) => item.ccy === secondObj.currVal);
    result = currData && parseFloat(firstObj.val) / parseFloat(currData.sale);
  } else {
    const currData = dataArr.find((item) => item.ccy === firstObj.currVal);
    result = currData && parseFloat(firstObj.val) * parseFloat(currData.buy);
  }

  return result && result.toFixed(4).toString();
};

export const createBtcObj = (data: number | boolean | null) => {
  if (data && data > 0) {
    const btcObj = {
      buy: (1 / +data).toString(),
      sell: (1 / +data + 100).toString()
    };

    return btcObj;
  }
};
