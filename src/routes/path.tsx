import { lazy } from 'react';
//? lAYOUTS
import DefaultLayout from '../layouts/default/index.layout';
import AuthLayout from '../layouts/auth/index.layout';
import UserLayout from '../layouts/user/index.layout';
import SearchLayout from '../layouts/search/index.layout';
import CartLayout from '../layouts/cart/index.layout';
import OrderLayout from '../layouts/order/index.layout';
//? pages
// import Categories from '../pages/categories';
// import Oder from '../pages/oder';
// import OrderDetail from '../pages/orderDetail';
// import DetailProduct from '../pages/productDetail';
// import Home from '../pages/home';
// import Cart from '../pages/cart';
// import Search from '../pages/search';
// import Shop from '../pages/shop';
// import Daily from '../pages/daily';
// import TopProducts from '../pages/topProducts';
// import Mall from '../pages/mall';
// import FlashSales from '../pages/flashSale';
// import Purchase from '../pages/purchase';
// import Profile from '../pages/profile';
// import Notification from '../pages/notification';
// import Voucher from '../pages/voucher';
// import PageNotFound from '../pages/pageNotFound';
// import ForgotPasswordPage from '../pages/forgotPassword';
// import ResetPage from '../pages/resetPassword/index';
// import RegisterPage from '../pages/register';
// import LoginPage from '../pages/login';

const Home = lazy(() => import('../pages/home'));
const Daily = lazy(() => import('../pages/daily'));
const FlashSales = lazy(() => import('../pages/flashSale'));
const Categories = lazy(() => import('../pages/categories'));
const Oder = lazy(() => import('../pages/oder'));
const OrderDetail = lazy(() => import('../pages/orderDetail'));
const DetailProduct = lazy(() => import('../pages/productDetail'));
const Cart = lazy(() => import('../pages/cart'));
const Search = lazy(() => import('../pages/search'));
const Shop = lazy(() => import('../pages/shop'));
const Purchase = lazy(() => import('../pages/purchase'));
const TopProducts = lazy(() => import('../pages/topProducts'));
const Mall = lazy(() => import('../pages/mall'));
const Profile = lazy(() => import('../pages/profile'));
const Notification = lazy(() => import('../pages/notification'));
const Voucher = lazy(() => import('../pages/voucher'));
const PageNotFound = lazy(() => import('../pages/pageNotFound'));
const ForgotPasswordPage = lazy(() => import('../pages/forgotPassword'));
const ResetPage = lazy(() => import('../pages/resetPassword/index'));
const RegisterPage = lazy(() => import('../pages/register'));
const LoginPage = lazy(() => import('../pages/login'));
const routes = [
  {
    path: '/',
    component: Home,
    layout: DefaultLayout,
  },

  {
    path: '/daily_discover',
    component: Daily,
    layout: DefaultLayout,
  },
  {
    path: '/flash_sale',
    component: FlashSales,
    layout: DefaultLayout,
  },
  {
    path: '/mall',
    component: Mall,
    layout: DefaultLayout,
  },
  {
    path: '/top_products',
    component: TopProducts,
    layout: DefaultLayout,
  },
  {
    path: '/order',
    component: Oder,
    layout: OrderLayout,
  },

  {
    path: '/shop/:shopid',
    component: Shop,
    layout: DefaultLayout,
  },
  {
    path: '/cart',
    component: Cart,
    layout: CartLayout,
  },
  {
    path: '/login',
    component: LoginPage,
    layout: AuthLayout,
  },
  {
    path: '/register',
    component: RegisterPage,
    layout: AuthLayout,
  },
  {
    path: '/forgotPassword',
    component: ForgotPasswordPage,
    layout: AuthLayout,
  },
  {
    path: '/resetPassword/:email/:token',
    component: ResetPage,
    layout: AuthLayout,
  },
  {
    path: '/search/:search',
    component: Search,
    layout: SearchLayout,
  },
  {
    path: '/categories/:display_name/:catid',
    component: Categories,
    layout: SearchLayout,
  },
  {
    path: 'user/purchase/',
    component: Purchase,
    layout: UserLayout,
  },
  {
    path: 'user/purchase/order/:orderid',
    component: OrderDetail,
    layout: UserLayout,
  },
  {
    path: 'user/profile',
    component: Profile,
    layout: UserLayout,
  },
  {
    path: 'user/notification',
    component: Notification,
    layout: UserLayout,
  },
  {
    path: 'user/voucher',
    component: Voucher,
    layout: UserLayout,
  },

  {
    path: '/*',
    component: PageNotFound,
    layout: DefaultLayout,
  },
  {
    path: '/detailProduct/:itemid/:shopid',
    component: DetailProduct,
    layout: DefaultLayout,
  },
];

export default routes;
