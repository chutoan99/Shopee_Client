export interface ISearchSuggestResponse {
	err: number
	msg: string
	response: ISearchSuggest[]
}

export interface ISearchSuggest {
	id: number
	text: string
	count: number
	createdAt: String
	updatedAt: String
}
