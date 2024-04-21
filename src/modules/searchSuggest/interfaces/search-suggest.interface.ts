export interface ISearchSuggestResponse {
	err: number
	msg: string
	response: ISearchSuggest[]
}

export interface ISearchSuggest {
	id: number
	text: string
	count: number
	is_active: number
	createdAt: Date
	updatedAt: Date
	deleteAt: null
}
