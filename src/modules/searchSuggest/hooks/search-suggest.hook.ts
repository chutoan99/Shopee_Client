import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ISearchSuggestResponse } from '../interfaces/search-suggest.interface';

export const SearchSuggestApi = createApi({
  reducerPath: 'SearchSuggest',
  baseQuery: fetchBaseQuery({ baseUrl: `${(import.meta as any).env.VITE_REACT_APP_API_HOST}/` }),
  endpoints: (build) => ({
    getSearchSuggest: build.query<ISearchSuggestResponse, void>({
      query: () => 'SearchSuggest',
    }),
  }),
});
export const { useGetSearchSuggestQuery } = SearchSuggestApi;
