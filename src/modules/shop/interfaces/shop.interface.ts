import { IPostBase } from '../../post/interfaces'

export interface IItemsShopResponse {
	err: number
	msg: string
	total: number
	response: IPostBase[]
}

export interface IShopIdResponse {
	err: number
	msg: string
	response: IShop
}

export interface IShop {
	id: number;
	userid: number;
	item_count: number;
	name: string;
	cover: string;
	follower_count: number;
	rating_star: number;
	rating_bad: number;
	rating_good: number;
	rating_normal: number;
	status: number;
	shop_location: string;
	username: string;
	portrait: string;
	response_rate: number;
	country: string;
	response_time: number;
	description: string;
	followed: number;
	last_active_time: string;
	is_official_shop: number;
	is_active: number;
	createdAt: string;
	updatedAt: string;
	deleteAt?: null;
}