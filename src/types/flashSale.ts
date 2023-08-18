export interface FlashSale {
  id: number;
  itemid: number;
  shopid: number;
  catid: number | null;
  name: string;
  image: string;
  historical_sold: number | null;
  price: number;
  price_min: number;
  stock: number;
  price_max: number;
  price_min_before_discount: number;
  price_max_before_discount: number;
  discount: string;
  shop_rating: number | null;
  filename: string | null;
  liked: boolean;
  show_free_shipping: boolean | null;
  is_official_shop: boolean | null;
  is_service_by_shopee: boolean | null;
  start_time: Date;
  end_time: Date;
  createdAt: Date;
  updatedAt: Date;
}
