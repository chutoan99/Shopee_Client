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
	createdAt: string
	updatedAt: string
}
