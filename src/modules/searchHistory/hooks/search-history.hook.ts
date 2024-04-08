import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICreateSearchHistoryResponse, ISearchHistoryResponse } from '../interfaces/search-history.interface';

export const SearchHistoryApi = createApi({
  reducerPath: 'SearchHistory',
  baseQuery: fetchBaseQuery({
    baseUrl: `${(import.meta as any).env.VITE_REACT_APP_API_HOST}/`,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set('Authorization', `Bearer ${localStorage.getItem('token-shopee')}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    getHistorySearch: build.query<ISearchHistoryResponse, void>({
      query: () => 'searchHistory',
    }),
    createHistorySearch: build.mutation<ICreateSearchHistoryResponse, any>({
      query: (body) => {
        return {
          url: 'searchHistory',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});
export const { useGetHistorySearchQuery, useCreateHistorySearchMutation } = SearchHistoryApi;
