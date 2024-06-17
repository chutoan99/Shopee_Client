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
		getProduct: build.query<IPostIdResponse, number>({
			query: (postId: number) => `/post/${postId}`
		}),

		searchProduct: build.query<IPostResponse, IPostQuery>({
			query: (args: IPostQuery) => {
				return {
					url: `post/search`,
					method: 'get',
					params: {
						limit: args.limit,
						page: args.page,
						name: args.name
					}
				}
			}
		})
	})
})

export const { useGetProductQuery, useSearchProductQuery } = ProductApi
