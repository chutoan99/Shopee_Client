import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IBannerResponse } from '../interfaces'

export const BannerApi = createApi({
	reducerPath: 'Banner',
	baseQuery: fetchBaseQuery({
		baseUrl: `${(import.meta as any).env.VITE_REACT_APP_API_HOST}/`
	}),
	endpoints: (build) => ({
		getBanner: build.query<IBannerResponse, void>({
			query: () => 'banner'
		})
	})
})
export const { useGetBannerQuery } = BannerApi
