import { IPostBase } from "../../post/interfaces"
import { IUser } from "../../user/interfaces"

export type ITabs = {
	is_all: number
	is_returns: number
	is_success: number
	is_cancelled: number
	is_transport: number
	is_delivering: number
	is_wait_for_pay: number
	is_wait_for_confirm: number
}

export type IOrderData = {
	item_groups_id: string
	amount: string
	item_option: string
	final_total: number
	total_num_items: number
	note: string
	shopid: number
	shop_name: string
}

export interface IOrdersResponse {
	err: number
	msg: string
	response: IOrder[]
	tabs: ITabs
}

export interface IOrderResponse {
	err: number
	msg: string
	response: IOrder
}

export interface ICreateOrdersResponse {
	err: number
	msg: string
	response: any
}

export interface IOrder {
	id: number
	shop_name: string
	type: number
	state: string
	total_num_items: number
	note: string
	amount: number
	item_option: string
	item_groups_id: string
	final_total: number
	userid: number
	shopid: number
	createdAt: string
	user: IUser,
	posts: IPostBase[]
}
