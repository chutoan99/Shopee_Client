import { PostSimple, ProductDetail } from '../../types/post';

export interface PostSimpleResponse {
  err:         number;
  msg:         string;
  offset:      number;
  limit:       number;
  total:       number;
  totalPage:   number;
  currentPage: number;
  response:    PostSimple[];
}

export interface PostIdResponse {
  err: number;
  msg: string;
  response: ProductDetail;
}
