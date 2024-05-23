import { IShop } from '../../shop/interfaces'

export type IPostQuery = {
	page: number
	limit: number
	name?: string
}

export interface IPostResponse {
	err: number
	msg: string
	offset: number
	limit: number
	total: number
	totalPage: number
	currentPage: number
	response: IPostBase[]
}

export interface IPostIdResponse {
	err: number
	msg: string
	response: IProductDetail
}

export interface IPostBase {
	id: number
	shopid: number
	catid: number
	name: string
	image: string
	historical_sold: number
	discount: null | string
	show_free_shipping: number
	is_official_shop: number
	is_service_by_shop: number
	shop_rating: number
	filename: null
	shop_name: string
	liked: number
	stock: number
	price_before_discount: number
	price_min_before_discount: number
	price_min: number
	price: number
	price_max: number
	price_max_before_discount: number
	total: number
}
export interface IProductDetail extends IPostBase {
	discountid: number
	currency: string
	status: number
	sold: number
	liked_count: number
	cmt_count: number
	raw_discount: number
	description?: null
	view_count: number
	size_chart: string
	is_service_by_shop: number
	name_attributes?: null[] | null
	value_attributes?: string[] | null
	name_tierVariations: string
	option_tierVariations: string[]
	images_tierVariations: string[]
	images: string[]
	is_active: number
	createdAt?: null
	updatedAt?: null
	deep_discount_skin?: null
	video?: null
	shop_info: IShop | null
	voucher: {
		id: number
		label: string
		voucher_code: string
	} | null
	category?: {
		id: number
		level: number
		images: string
		parent_catid?: null
		category_name: string
	} | null
}
