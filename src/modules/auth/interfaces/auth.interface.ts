export type IRegisterData = {
	name: string
	password: string
	email: string
}

export type ILoginData = {
	password: string
	email: string
}

export type IForgotPasswordData = {
	email: string
}

export type IResetPasswordData = {
	email: string
	password: string
	token: string
}
export interface ILoginResponse {
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
