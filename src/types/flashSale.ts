export interface FlashSale {
  id:                    number;
  shopid:                number;
  catid:                 null;
  name:                  string;
  image:                 string;
  price:                 number;
  price_before_discount: number;
  stock:                 number;
  historical_sold:       null;
  discount:              string;
  shop_rating:           null;
  filename:              null;
  liked:                 number;
  is_official_shop:      null;
  is_service_by_shopee:  null;
  show_free_shipping:    null;
  start_time:            null;
  end_time:              null;
  is_active:             number;
  createdAt:             Date;
  updatedAt:             Date;
  deleteAt:              null;
}
