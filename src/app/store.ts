import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
//? REDUX TOOLKIT
import otherReducer from '../redux/otherSlice';
import cartReducer from '../redux/cart.slice';
import userReducer from '../redux/userSlice';
import postReducer from '../redux/post.slice';
import buyCartReducer from '../redux/buyCart.slice';
//? REDUX TOOLKIT RTK
import { CartApi } from '../modules/cart/hook';
import { ShopApi } from '../modules/shop/hook';
import { RoomApi } from '../modules/room/hook';
import { UserApi } from '../modules/user/hook';
import { OrderApi } from '../modules/order/hook';
import { ProductApi } from '../modules/post/hook';
import { BannerApi } from '../modules/banner/hook';
import { NotifyApi } from '../modules/notify/hook';
import { CommentApi } from '../modules/comment/hook';
import { ShopMallApi } from '../modules/shopMall/hook';
import { FlashSaleApi } from '../modules/flashSale/hook';
import { BatchListApi } from '../modules/batchList/hook';
import { CategoryTreeApi } from '../modules/category/hook';
import { TopProductApi } from '../modules/topProduct/hook';
import { SearchHistoryApi } from '../modules/searchHistory/hook';
import { SearchSuggestionApi } from '../modules/searchSuggestion/hook';
const RootReducer = {
  others: otherReducer,
  cart: cartReducer,
  user: userReducer,
  posts: postReducer,
  buyCart: buyCartReducer,
  [BannerApi.reducerPath]: BannerApi.reducer,
  [BatchListApi.reducerPath]: BatchListApi.reducer,
  [NotifyApi.reducerPath]: NotifyApi.reducer,
  [SearchSuggestionApi.reducerPath]: SearchSuggestionApi.reducer,
  [SearchHistoryApi.reducerPath]: SearchHistoryApi.reducer,
  [CategoryTreeApi.reducerPath]: CategoryTreeApi.reducer,
  [FlashSaleApi.reducerPath]: FlashSaleApi.reducer,
  [ShopMallApi.reducerPath]: ShopMallApi.reducer,
  [TopProductApi.reducerPath]: TopProductApi.reducer,
  [ProductApi.reducerPath]: ProductApi.reducer,
  [CartApi.reducerPath]: CartApi.reducer,
  [ShopApi.reducerPath]: ShopApi.reducer,
  [OrderApi.reducerPath]: OrderApi.reducer,
  [CommentApi.reducerPath]: CommentApi.reducer,
  [RoomApi.reducerPath]: RoomApi.reducer,
  [UserApi.reducerPath]: UserApi.reducer,
};
export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      BannerApi.middleware,
      BatchListApi.middleware,
      NotifyApi.middleware,
      SearchSuggestionApi.middleware,
      BatchListApi.middleware,
      CategoryTreeApi.middleware,
      FlashSaleApi.middleware,
      ShopMallApi.middleware,
      TopProductApi.middleware,
      ProductApi.middleware,
      SearchHistoryApi.middleware,
      CartApi.middleware,
      ShopApi.middleware,
      OrderApi.middleware,
      CommentApi.middleware,
      RoomApi.middleware,
      UserApi.middleware
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
