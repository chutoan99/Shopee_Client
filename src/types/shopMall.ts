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
