import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SearchSuggestionResponse } from '../interface';

export const SearchSuggestionApi = createApi({
  reducerPath: 'SearchSuggest',
  baseQuery: fetchBaseQuery({ baseUrl: `${(import.meta as any).env.VITE_REACT_APP_API_HOST}/` }),
  endpoints: (build) => ({
    getSearchSuggestion: build.query<SearchSuggestionResponse, void>({
      query: () => 'SearchSuggest',
    }),
  }),
});
export const { useGetSearchSuggestionQuery } = SearchSuggestionApi;
