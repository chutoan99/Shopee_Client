import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPostSimpleResponse } from '../interfaces';

export const ProductApi = createApi({
  reducerPath: 'Products',
  baseQuery: fetchBaseQuery({ baseUrl: `${(import.meta as any).env.VITE_REACT_APP_API_HOST}/` }),
  endpoints: (build) => ({
    getProducts: build.query<IPostSimpleResponse, { limit: number; page: number }>({
      query: ({ limit, page }) => `post?limit=${limit}&page=${page}`,
    }),
    getProduct: build.query<any, any>({
      query: (params) => `/post/${params.itemid}`,
    }),
    searchProduct: build.query<IPostSimpleResponse, any>({
      query: (payload: any) => `post/search?limit=${payload.limit}&page=${payload.page}&name=${payload.params?.search}`,
    }),
    searchCategories: build.query<IPostSimpleResponse, any>({
      query: (payload: any) => {
        let encodedString = encodeURIComponent(payload.params.display_name);
        return `/industry/category?page=${payload.page}&limit=${payload.limit}&category_name=${encodedString}`;
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery, useSearchProductQuery, useSearchCategoriesQuery } = ProductApi;