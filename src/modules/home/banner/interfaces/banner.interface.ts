export interface IBannerResponse {
	err: number
	total: string
	response: IBanner[]
	msg: string
}
export interface IBanner {
	id: number
	image_url: string
	createdAt: String
	updatedAt: String
}
