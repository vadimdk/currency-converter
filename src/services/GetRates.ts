import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL =
  "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

const storedConter = parseInt(JSON.parse(localStorage.getItem('counter') as any))
const num = storedConter % 5 ? "" : ""

const BASE_URL = `https://api.allorigins.win${num}`;


const options = {
  url: 'https://currencyapi-net.p.rapidapi.com/rates',
  method: 'GET',
  params: {output: 'JSON', base: 'USD'},
headers: {
  "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
  "X-RapidAPI-Host": "currencyapi-net.p.rapidapi.com"
}
};


export const getExchangeRateApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  reducerPath: "getExRateApi",
  endpoints: (build) => ({
    getExchangeRate: build.query({
      query: () => `/get?url=${encodeURIComponent(API_URL)}`
    })
  })
});

export const getBtcRateApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://currencyapi-net.p.rapidapi.com/rates' }),
  reducerPath: "getBtcRateApi",
  endpoints: (build) => ({
    getBtcRateApi: build.query({
      query: () => options
    })
  })
});

export const { useGetBtcRateApiQuery } = getBtcRateApi;
export const { useGetExchangeRateQuery } = getExchangeRateApi;
