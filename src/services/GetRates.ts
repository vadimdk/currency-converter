import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL =
  "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

const storedConter = parseInt(JSON.parse(localStorage.getItem('counter') as any))
const num = storedConter % 5 ? "" : "v"

const BASE_URL = `https://api.allorigins.win${num}`;

console.log("baseUrl", num)

export const getExchangeRateApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  reducerPath: "getExRateApi",
  endpoints: (build) => ({
    getExchangeRate: build.query({
      query: () => `/get?url=${encodeURIComponent(API_URL)}`
    })
  })
});

export const { useGetExchangeRateQuery } = getExchangeRateApi;
