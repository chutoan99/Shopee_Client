import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
//? REDUX TOOLKIT
import otherReducer from '../redux/otherSlice'
import cartReducer from '../redux/cart.slice'
import userReducer from '../redux/userSlice'
import postReducer from '../redux/post.slice'
import buyCartReducer from '../redux/buyCart.slice'
//? REDUX TOOLKIT RTK
import { CartApi } from '../modules/cart/hooks'
import { ShopApi } from '../modules/shop/hooks'
import { RoomApi } from '../modules/room/hooks'
import { UserApi } from '../modules/user/hooks'
import { OrderApi } from '../modules/order/hooks'
import { ProductApi } from '../modules/post/hooks'
import { BannerApi } from '../modules/banner/hooks'
import { NotifyApi } from '../modules/notify/hooks'
import { CommentApi } from '../modules/comment/hooks'
import { ShopMallApi } from '../modules/shopMall/hooks'
import { FlashSaleApi } from '../modules/flashSale/hooks'
import { BatchListApi } from '../modules/batchList/hooks'
import { CategoryTreeApi } from '../modules/category/hooks'
import { TopProductApi } from '../modules/topProduct/hooks'
import { SearchHistoryApi } from '../modules/searchHistory/hooks'
import { SearchSuggestApi } from '../modules/searchSuggest/hooks'
const RootReducer = {
	others: otherReducer,
	cart: cartReducer,
	user: userReducer,
	posts: postReducer,
	buyCart: buyCartReducer,
	[CartApi.reducerPath]: CartApi.reducer,
	[ShopApi.reducerPath]: ShopApi.reducer,
	[RoomApi.reducerPath]: RoomApi.reducer,
	[UserApi.reducerPath]: UserApi.reducer,
	[OrderApi.reducerPath]: OrderApi.reducer,
	[NotifyApi.reducerPath]: NotifyApi.reducer,
	[BannerApi.reducerPath]: BannerApi.reducer,
	[CommentApi.reducerPath]: CommentApi.reducer,
	[ProductApi.reducerPath]: ProductApi.reducer,
	[ShopMallApi.reducerPath]: ShopMallApi.reducer,
	[FlashSaleApi.reducerPath]: FlashSaleApi.reducer,
	[BatchListApi.reducerPath]: BatchListApi.reducer,
	[TopProductApi.reducerPath]: TopProductApi.reducer,
	[CategoryTreeApi.reducerPath]: CategoryTreeApi.reducer,
	[SearchSuggestApi.reducerPath]: SearchSuggestApi.reducer,
	[SearchHistoryApi.reducerPath]: SearchHistoryApi.reducer
}
export const store = configureStore({
	reducer: RootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			CartApi.middleware,
			ShopApi.middleware,
			RoomApi.middleware,
			UserApi.middleware,
			OrderApi.middleware,
			NotifyApi.middleware,
			BannerApi.middleware,
			CommentApi.middleware,
			ProductApi.middleware,
			ShopMallApi.middleware,
			BatchListApi.middleware,
			BatchListApi.middleware,
			FlashSaleApi.middleware,
			TopProductApi.middleware,
			CategoryTreeApi.middleware,
			SearchHistoryApi.middleware,
			SearchSuggestApi.middleware
		)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
