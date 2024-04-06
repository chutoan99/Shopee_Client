import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ShopMallResponse } from '../interface';

export const ShopMallApi = createApi({
  reducerPath: 'ShopMall',
  baseQuery: fetchBaseQuery({ baseUrl: `${(import.meta as any).env.VITE_REACT_APP_API_HOST}/` }),
  endpoints: (build) => ({
    getShopMall: build.query<ShopMallResponse, void>({
      query: () => 'shopMall',
    }),
  }),
});
export const { useGetShopMallQuery } = ShopMallApi;
