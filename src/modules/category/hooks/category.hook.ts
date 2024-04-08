import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICategoryTreeResponse, ICategoryTreeResponseParent } from '../interfaces';

export const CategoryTreeApi = createApi({
  reducerPath: 'CategoryTree',
  baseQuery: fetchBaseQuery({ baseUrl: `${(import.meta as any).env.VITE_REACT_APP_API_HOST}/` }),
  endpoints: (build) => ({
    getCategoryTree: build.query<ICategoryTreeResponse, void>({
      query: () => 'categoryTree/1',
    }),
    getCategoryTreeParent: build.query<ICategoryTreeResponseParent, any>({
      query: (params: any) => `/categoryTree/parent/${+params.catid}`,
    }),
  }),
});
export const { useGetCategoryTreeQuery, useGetCategoryTreeParentQuery } = CategoryTreeApi;
