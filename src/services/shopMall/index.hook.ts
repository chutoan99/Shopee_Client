import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ShopMallResponse } from './index.response';

export const ShopMallApi = createApi({
  reducerPath: 'ShopMall',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_REACT_APP_API_HOST}/` }),
  endpoints: (build) => ({
    getShopMall: build.query<ShopMallResponse, void>({
      query: () => 'shopMall',
    }),
  }),
});
export const { useGetShopMallQuery } = ShopMallApi;
