import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { INotifyResponse } from '../interface';

export const NotifyApi = createApi({
  reducerPath: 'Notify',
  baseQuery: fetchBaseQuery({ baseUrl: `${(import.meta as any).env.VITE_REACT_APP_API_HOST}/` }),
  endpoints: (build) => ({
    getNotify: build.query<INotifyResponse, void>({
      query: () => 'notify',
    }),
  }),
});
export const { useGetNotifyQuery } = NotifyApi;
