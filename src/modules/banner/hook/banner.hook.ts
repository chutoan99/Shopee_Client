import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BannerResponse } from '../interface';

export const BannerApi = createApi({
  reducerPath: 'Banner',
  baseQuery: fetchBaseQuery({ baseUrl: `${(import.meta as any).env.VITE_REACT_APP_API_HOST}/` }),
  endpoints: (build) => ({
    getBanner: build.query<BannerResponse, void>({
      query: () => 'banner',
    }),
  }),
});
export const { useGetBannerQuery } = BannerApi;
