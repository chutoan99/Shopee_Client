export interface ICartResponse {
  err: number;
  total_cart: number;
  response: [ICart[]];
  msg: string;
}

export interface ICreateCartResponse {
  err: number;
  msg: string;
  response: any;
}

export interface IUpdateCartResponse {
  err: number;
  msg: string;
  response: any;
}

export interface IDeleteCartResponse {
  err: number;
  msg: string;
  response: any;
}

export interface ICart {
  id:              number;
  userid:          number;
  itemid:          number;
  shopid:          number;
  amount:          number;
  item_option:     string;
  is_active:       number;
  createdAt:       Date;
  updatedAt:       Date;
  deleteAt:        null;
  item: {
    name:                      string;
    catid:                     number;
    image:                     string;
    liked:                     number;
    price:                     number;
    stock:                     number;
    itemid:                    number;
    shopid:                    number;
    discount:                  string;
    filename:                  null;
    price_max:                 number;
    price_min:                 number;
    shop_name:                 string;
    shop_rating:               number;
    historical_sold:           number;
    is_official_shop:          number;
    show_free_shipping:        number;
    is_service_by_shopee:      number;
    price_before_discount:     number;
    price_max_before_discount: number;
    price_min_before_discount: number;
};
tier_variations: {
    id: number;
    itemid: number;
    name: string;
    option: string;
    images: string;
    createdAt: string;
    updatedAt: string;
  };
}
