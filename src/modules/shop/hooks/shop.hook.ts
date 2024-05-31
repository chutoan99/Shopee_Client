//? LIBRARY
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//? TYPE & SERVICES
import { IItemsShopResponse, IShopIdResponse } from '../interfaces'

export const ShopApi = createApi({
	reducerPath: 'Shop',
	baseQuery: fetchBaseQuery({
		baseUrl: `${(import.meta as any).env.VITE_REACT_APP_API_HOST}/`,
		prepareHeaders: (headers) => {
			headers.set('Content-Type', 'application/json')
			headers.set('Authorization', `Bearer ${localStorage.getItem('token-shopee')}`)
			return headers
		}
	}),
	endpoints: (build) => ({
		getShopId: build.query<IShopIdResponse, number>({
			query: (shopId: number) => `/shop/${shopId}`
		}),

		getItemsShop: build.query<IItemsShopResponse, number>({
			query: (shopId: number) => `/shop/items/${shopId}`
		})
	})
})
export const { useGetShopIdQuery, useGetItemsShopQuery } = ShopApi
