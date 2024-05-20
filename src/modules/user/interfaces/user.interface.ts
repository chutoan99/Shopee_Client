export interface IUserResponse {
	err: number
	msg: string
	access_token: string
	response: IUser
}
export interface IUser {
	id: number
	shopid: number
	username: string
	email: string
	sex: number
	role: string
	name: string
	address?: string
	birthday?: string
	phone?: number
	avatar?: string
	filename?: null | string
	not_new_user: number
	createdAt: string
	updatedAt: string
}
