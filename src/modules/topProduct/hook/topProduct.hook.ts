import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TopProDuctsResponse } from '../interface';

//? fetch data RTK QUERY

export const TopProductApi = createApi({
  reducerPath: 'TopProduct',
  baseQuery: fetchBaseQuery({ baseUrl: `${(import.meta as any).env.VITE_REACT_APP_API_HOST}/` }),
  endpoints: (build) => ({
    getTopProduct: build.query<TopProDuctsResponse, void>({
      query: () => 'topProduct?page=1&limit=100',
    }),
  }),
});
export const { useGetTopProductQuery } = TopProductApi;
