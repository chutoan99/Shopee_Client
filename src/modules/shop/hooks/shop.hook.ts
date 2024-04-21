//? LIBRARY
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//? TYPE & SERVICES
import { IItemsShopResponse, IShopIdResponse } from '../interfaces'

export const ShopApi = createApi({
	reducerPath: 'Shop',
	baseQuery: fetchBaseQuery({ baseUrl: `${(import.meta as any).env.VITE_REACT_APP_API_HOST}/` }),
	endpoints: (build) => ({
		getShopId: build.query<IShopIdResponse, any>({
			query: (params: any) => `/shop/${params.shopid}`
		}),

		getItemsShop: build.query<IItemsShopResponse, any>({
			query: (params: any) => `/shop/items/${params.shopid}`
		})
	})
})
export const { useGetShopIdQuery, useGetItemsShopQuery } = ShopApi
