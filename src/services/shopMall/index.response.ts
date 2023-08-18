import { ShopMall } from '../../types/shopMall';

export interface ShopMallResponse {
  err: number;
  total: string;
  response: [ShopMall[]];
  msg: string;
}
