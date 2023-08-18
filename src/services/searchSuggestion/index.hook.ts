import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SearchSuggestionResponse } from './index.response';

export const SearchSuggestionApi = createApi({
  reducerPath: 'SearchSuggestion',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_REACT_APP_API_HOST}/` }),
  endpoints: (build) => ({
    getSearchSuggestion: build.query<SearchSuggestionResponse, void>({
      query: () => 'searchSuggestion',
    }),
  }),
});
export const { useGetSearchSuggestionQuery } = SearchSuggestionApi;
