import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IBatchListResponse } from '../interfaces';

export const BatchListApi = createApi({
  reducerPath: 'BatchList',
  baseQuery: fetchBaseQuery({ baseUrl: `${(import.meta as any).env.VITE_REACT_APP_API_HOST}/` }),
  endpoints: (build) => ({
    getBatchList: build.query<IBatchListResponse, void>({
      query: () => 'batchList',
    }),
  }),
});
export const { useGetBatchListQuery } = BatchListApi;
