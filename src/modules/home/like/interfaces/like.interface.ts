import { IPostBase } from "../../../post/interfaces"

export interface ILike {
	userid: number
	itemid: number
	shopid: number
	likeDetail: IPostBase
}
