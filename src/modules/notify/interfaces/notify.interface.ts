export interface INotifyResponse {
	err: number
	msg: string
	response: INotify[]
}

export interface INotify {
	id: number
	image: string
	title: string
	content: string
	userid: null
	seen: number
	time: string
	is_active: number
	createdAt: Date
	updatedAt: Date
	deleteAt: null
}
