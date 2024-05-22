export type ICategoryQuery = {
	page: number
	limit: number
	category_name?: string
}
export interface ICategoryTreeResponse {
	err: number
	msg: string
	response: ICategoryTree[][]
}

export interface ICategoryTreeResponseParent {
	err: number
	msg: string
	total: number
	response: ICategoryTree[]
}

export interface ICategoryTree {
	id: number
	parent_catid: number
	name: string
	display_name: string
	image: string
	unselected_image: string
	selected_image: string
	level: number
	is_active?: number | null
	createdAt?: string | null
	updatedAt?: string | null
	deleteAt?: null
}
