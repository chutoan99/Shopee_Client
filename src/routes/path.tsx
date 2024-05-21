import { lazy } from 'react'

import { UserLayout } from '../layouts/user'
import { CartLayout } from '../layouts/cart'
import { AuthLayout } from '../layouts/auth'
import { OrderLayout } from '../layouts/order'
import { SearchLayout } from '../layouts/search'
import { DefaultLayout } from '../layouts/default'
//? lAYOUTS

const routes = [
	{
		// OK
		path: '/',
		component: lazy(() => import('../pages/home/home.page')),
		layout: DefaultLayout
	},
	{
		// OK
		path: '/daily-discover',
		component: lazy(() => import('../pages/daily/daily.page')),
		layout: DefaultLayout
	},
	{
		// OK
		path: '/flash-sale',
		component: lazy(() => import('../pages/flashSale/flash-sale.page')),
		layout: DefaultLayout
	},
	{
		// OK
		path: '/mall',
		component: lazy(() => import('../pages/mall/mall.page')),
		layout: DefaultLayout
	},
	{
		// OK
		path: '/top-products',
		component: lazy(() => import('../pages/topProducts/top-product.page')),
		layout: DefaultLayout
	},
	{
		path: '/order',
		component: lazy(() => import('../pages/oder/oder.page')),
		layout: OrderLayout
	},
	{
		path: '/shop/:shopid',
		component: lazy(() => import('../pages/shop/shop.page')),
		layout: DefaultLayout
	},
	{
		path: '/cart',
		component: lazy(() => import('../pages/cart/cart.page')),
		layout: CartLayout
	},
	{
		// OK
		path: '/login',
		component: lazy(() => import('../pages/login/login.page')),
		layout: AuthLayout
	},
	{
		// OK
		path: '/register',
		component: lazy(() => import('../pages/register/register.page')),
		layout: AuthLayout
	},
	{
		path: '/forgotPassword',
		component: lazy(() => import('../pages/forgotPassword/forgot-password.page')),
		layout: AuthLayout
	},
	{
		path: '/reset-password/:email/:token',
		component: lazy(() => import('../pages/resetPassword/reset-password.page')),
		layout: AuthLayout
	},
	{
		// OK
		path: '/search/:search',
		component: lazy(() => import('../pages/search/search.page')),
		layout: SearchLayout
	},
	{
		// OK
		path: '/categories/:display_name/:catid',
		component: lazy(() => import('../pages/category/category.page')),
		layout: SearchLayout
	},
	{
		path: 'user/purchase/',
		component: lazy(() => import('../pages/purchase/purchase.page')),
		layout: UserLayout
	},
	{
		path: 'user/purchase/order/:orderid',
		component: lazy(() => import('../pages/orderDetail/order-detail.page')),
		layout: UserLayout
	},
	{
		// OK
		path: 'user/profile',
		component: lazy(() => import('../pages/profile/profile.page')),
		layout: UserLayout
	},
	{
		// OK
		path: 'user/notify',
		component: lazy(() => import('../pages/notify/notify.page')),
		layout: UserLayout
	},
	{
		// OK
		path: 'user/voucher',
		component: lazy(() => import('../pages/voucher/voucher.page')),
		layout: UserLayout
	},

	{
		// OK
		path: '/*',
		component: lazy(() => import('../pages/pageNotFound/page-not-found.page')),
		layout: DefaultLayout
	},
	{
		path: '/product/:itemid/:shopid',
		component: lazy(() => import('../pages/productDetail/product-detail.page')),
		layout: DefaultLayout
	}
]

export default routes
