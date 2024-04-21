export interface ITopProDuctsResponse {
	err: number
	msg: string
	response: ITopProDucts[]
}

export interface ITopProDucts {
	id: number
	data_type: string
	count: number
	name: string
	images: string
	sort_type: number
	best_price: number
	display_text: string
	is_active: number
	createdAt: Date
	updatedAt: Date
	deleteAt: null
}
