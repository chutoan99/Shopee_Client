import { IPostSimple } from "../../post/interfaces";


export interface IItemsShopResponse {
  err: number;
  msg: string;
  response: IPostSimple[];
  total: number;
}

export interface IShopIdResponse {
  err: number;
  msg: string;
  response: IShopInterface;
}

export interface IShopInterface {
  id: number;
  shopid: number;
  userid: number;
  is_official_shop: boolean;
  item_count: number;
  rating_star: number;
  name: string;
  cover: string;
  follower_count: number;
  rating_bad: number;
  rating_good: number;
  rating_normal: number;
  status: number;
  shop_location: string;
  username: string;
  portrait: string;
  response_time: number;
  description: string;
  followed: boolean;
  ctime: Date;
  mtime: Date;
  response_rate: number;
  country: string;
  createdAt: Date;
  updatedAt: Date;
}
