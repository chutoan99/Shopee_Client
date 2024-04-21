export interface ILoginREsponse {
	err: number
	msg: string
	response: {}
	access_token: string | null
}

export interface IRegisterResponse {
	err: number
	msg: string
	response: any
}
