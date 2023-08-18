import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FlashSaleResponse } from './index.response';

export const FlashSaleApi = createApi({
  reducerPath: 'FlashSale',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_REACT_APP_API_HOST}/` }),
  endpoints: (build) => ({
    getFlashSale: build.query<FlashSaleResponse, void>({
      query: () => 'flashSale',
    }),
  }),
});
export const { useGetFlashSaleQuery } = FlashSaleApi;
