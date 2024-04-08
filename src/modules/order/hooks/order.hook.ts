//? LIBRARY
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICreateOrdersResponse, IOrderResponse, IOrdersResponse } from '../interfaces';
//? TYPE & SERVICES

export const OrderApi = createApi({
  reducerPath: 'Order',
  baseQuery: fetchBaseQuery({
    baseUrl: `${(import.meta as any).env.VITE_REACT_APP_API_HOST}/`,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set('Authorization', `Bearer ${localStorage.getItem('token-shopee')}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    getOrders: build.query<IOrdersResponse, void>({
      query: () => 'order',
    }),

    createOrder: build.mutation<ICreateOrdersResponse, any>({
      query: (body) => {
        return {
          url: 'order',
          method: 'POST',
          body,
        };
      },
    }),

    getOrder: build.query<IOrderResponse, any>({
      query: (payload: any) => `order/${payload.orderid}`,
    }),

    searchOrders: build.query<IOrdersResponse, any>({
      query: (args: any) => {
        return {
          url: `/order/search?shop_name=${args}`,
          method: 'get',
        };
      },
    }),

    searchTypeOrders: build.query<IOrdersResponse, any>({
      query: (args: any) => {
        return {
          url: `/order/search?type=${args}`,
          method: 'get',
        };
      },
    }),
  }),
});
export const { useCreateOrderMutation, useGetOrderQuery, useGetOrdersQuery, useSearchOrdersQuery, useSearchTypeOrdersQuery } = OrderApi;
