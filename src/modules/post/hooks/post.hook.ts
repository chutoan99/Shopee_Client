import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPostIdResponse, IPostQuery, IPostResponse } from '../interfaces'

export const ProductApi = createApi({
	reducerPath: 'Products',
	baseQuery: fetchBaseQuery({
		baseUrl: `${(import.meta as any).env.VITE_REACT_APP_API_HOST}/`,
		prepareHeaders: (headers) => {
			headers.set('Content-Type', 'application/json')
			headers.set('Authorization', `Bearer ${localStorage.getItem('token-shopee')}`)
			return headers
		}
	}),
	endpoints: (build) => ({
		getProducts: build.query<IPostResponse, IPostQuery>({
			query: (payload: IPostQuery) => `post?limit=${payload.limit}&page=${payload.page}`
		}),

		getProduct: build.query<IPostIdResponse, number>({
			query: (postId: number) => `/post/${postId}`
		}),

		searchProduct: build.query<IPostResponse, IPostQuery>({
			query: (payload: IPostQuery) =>
				`post/search?limit=${payload.limit}&page=${payload.page}&name=${payload.name}`
		})
	})
})

export const { useGetProductsQuery, useGetProductQuery, useSearchProductQuery } = ProductApi
