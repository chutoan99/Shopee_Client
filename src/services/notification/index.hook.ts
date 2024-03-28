import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NotificationResponse } from './index.response';

export const NotificationApi = createApi({
  reducerPath: 'Notify',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_REACT_APP_API_HOST}/` }),
  endpoints: (build) => ({
    getNotification: build.query<NotificationResponse, void>({
      query: () => 'notify',
    }),
  }),
});
export const { useGetNotificationQuery } = NotificationApi;
