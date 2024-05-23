export interface ISearchHistoryResponse {
	err: number
	msg: string
	response: ISearchHistory[]
}

export interface ISearchHistory {
	id: number
	userid: number
	text: string
	createdAt: string
	updatedAt: string
}
