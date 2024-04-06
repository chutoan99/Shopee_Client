import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICartResponse, ICreateCartResponse, IDeleteCartResponse, IUpdateCartResponse } from '../interface';

export const CartApi = createApi({
  reducerPath: 'CartApi',
  tagTypes: ['Cart'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${(import.meta as any).env.VITE_REACT_APP_API_HOST}/`,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set('Authorization', `Bearer ${localStorage.getItem('token-shopee')}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    getCarts: build.query<ICartResponse, void>({
      query: () => 'cart',
    }),

    createCart: build.mutation<ICreateCartResponse, any>({
      query: (body) => {
        return {
          url: 'cart',
          method: 'POST',
          body,
        };
      },
    }),

    updateCart: build.mutation<IUpdateCartResponse, any>({
      query: (args) => {
        const { cartid, body } = args;
        return {
          url: `cart/${cartid}`,
          method: 'PUT',
          body,
        };
      },
    }),

    deleteCart: build.mutation<IDeleteCartResponse, any>({
      query: (cartid: string) => {
        return {
          url: `cart/${cartid}`,
          method: 'DELETE',
        };
      },
    }),
  }),
});

export const { useGetCartsQuery, useCreateCartMutation, useDeleteCartMutation, useUpdateCartMutation } = CartApi;
