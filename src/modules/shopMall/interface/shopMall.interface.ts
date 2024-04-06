
export interface ShopMallResponse {
  err: number;
  total: string;
  response: [ShopMall[]];
  msg: string;
}
export interface ShopMall {
  id:         number;
  image:      string;
  url:        string;
  promo_text: string;
  createdAt:  Date;
  updatedAt:  Date;
  is_active?: number;
  deleteAt?:  null;
}
