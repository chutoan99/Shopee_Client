export interface IShopMallResponse {
	err: number
	total: string
	response: IShopMall[][]
	msg: string
}
export interface IShopMall {
	id: number
	image: string
	url: string
	promo_text: string
	createdAt: string
	updatedAt: string
}
