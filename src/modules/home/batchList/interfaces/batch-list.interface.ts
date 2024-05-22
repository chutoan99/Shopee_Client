export interface IBatchListResponse {
	err: number
	total: string
	response: IBatchList[]
	msg: string
}

export interface IBatchList {
	banner_image: string
	title: string
	end: Date
	start: Date
}
