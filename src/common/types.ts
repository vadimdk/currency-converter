export interface ICurrData {
    ccy: string;
    base_ccy: string;
    buy: string;
    sale: string;
  }

export type CurrInputObj = {
    [key: string]: string;
  };


  export type TData = {
    btcData?: {
      buy: string;
      sell: string;
    };
  };
