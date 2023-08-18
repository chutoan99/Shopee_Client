import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BatchListResponse } from './index.response';

export const BatchListApi = createApi({
  reducerPath: 'BatchList',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_REACT_APP_API_HOST}/` }),
  endpoints: (build) => ({
    getBatchList: build.query<BatchListResponse, void>({
      query: () => 'batchList',
    }),
  }),
});
export const { useGetBatchListQuery } = BatchListApi;
