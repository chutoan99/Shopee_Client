export interface IBatchListResponse {
	err: number
	total: string
	response: IBatchList[]
	msg: string
}

export interface IBatchList {
	id: number
	banner_image: string
	title: string
	end: String
	start: String
	createdAt: String
	updatedAt: String
}
