import axios from "axios";
import { useEffect, useState } from "react";

const options = {
    method: 'GET',
    url: 'https://currencyapi-net.p.rapidapi.com/rates',
    params: {output: 'JSON', base: 'USD'},
  headers: {
    "X-RapidAPI-Key": "471aa56ce8mshe19066546835a27p1fb866jsnaa1d9f6d419e",
    "X-RapidAPI-Host": "currencyapi-net.p.rapidapi.com"
  }
};

export const useAxios = () => {
  const [isLoad, setIsLoading] = useState(false);
  const [btcData, setBtcData] = useState<number | null>(0);
  const [axiosErr, setAxiosErr] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
        const response = await axios.request(options);
        console.log(response.data);
        setBtcData(response.data.rates.BTC)
      } catch (error) {
        console.log("axError", error);
        setAxiosErr(axiosErr)
      } finally {
        setIsLoading(false)
      }
    })();
  }, []);

  return [isLoad, btcData, axiosErr]
};
