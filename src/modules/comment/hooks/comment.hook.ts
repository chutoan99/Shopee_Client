import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICommentsResponse } from '../interfaces'

export const CommentApi = createApi({
	reducerPath: 'Comment',
	baseQuery: fetchBaseQuery({ baseUrl: `${(import.meta as any).env.VITE_REACT_APP_API_HOST}/` }),
	endpoints: (build) => ({
		getComments: build.query<ICommentsResponse, any>({
			query: (params: any) => `comment?shopid=${params.shopid}&itemid=${params.itemid}`
		})
	})
})
export const { useGetCommentsQuery } = CommentApi
