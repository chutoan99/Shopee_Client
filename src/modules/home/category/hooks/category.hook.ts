import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICategoryQuery, ICategoryTreeResponse, ICategoryTreeResponseParent } from '../interfaces'
import { IPostResponse } from '../../../post/interfaces'

export const CategoryTreeApi = createApi({
	reducerPath: 'CategoryTree',
	baseQuery: fetchBaseQuery({
		baseUrl: `${(import.meta as any).env.VITE_REACT_APP_API_HOST}/`,
		prepareHeaders: (headers) => {
			headers.set('Content-Type', 'application/json')
			headers.set('Authorization', `Bearer ${localStorage.getItem('token-shopee')}`)
			return headers
		}
	}),
	endpoints: (build) => ({
		getCategoryTree: build.query<ICategoryTreeResponse, void>({
			query: () => 'categoryTree/1'
		}),
		getCategoryTreeParent: build.query<ICategoryTreeResponseParent, number>({
			query: (catid: number) => `/categoryTree/parent/${catid}`
		}),
		searchCategories: build.query<IPostResponse, ICategoryQuery>({
			query: (payload: ICategoryQuery) => {
				return `/industry/category?page=${payload.page}&limit=${payload.limit}&category_name=${payload.category_name}`
			}
		})
	})
})
export const { useGetCategoryTreeQuery, useGetCategoryTreeParentQuery, useSearchCategoriesQuery } = CategoryTreeApi
