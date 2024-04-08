export interface IPostSimpleResponse {
  err:         number;
  msg:         string;
  offset:      number;
  limit:       number;
  total:       number;
  totalPage:   number;
  currentPage: number;
  response:    IPostSimple[];
}

export interface IPostIdResponse {
  err: number;
  msg: string;
  response: IProductDetail;
}

export interface IPostSimple {
  id:                        number;
  shopid:                    number;
  catid:                     number;
  name:                      string;
  image:                     string;
  historical_sold:           number;
  discount:                  null | string;
  show_free_shipping:        number;
  is_official_shop:          number;
  is_service_by_shopee:      number;
  shop_rating:               number;
  filename:                  null;
  shop_name:                 string;
  liked:                     number;
  stock:                     number;
  price_before_discount:     number;
  price_min_before_discount: number;
  price_min:                 number;
  price:                     number;
  price_max:                 number;
  price_max_before_discount: number;
  total:                     number;
}
export interface IProductDetail {
  id?: number;
  itemid?: number;
  shopid?: number;
  currency?: string;
  stock?: number;
  sold?: number;
  liked_count?: number;
  catid?: number;
  cmt_count?: number;
  discount?: string;
  raw_discount?: number;
  size_chart?: string;
  shop_name?: string;
  images?: string;
  transparent_background_image?: string;
  createdAt?: Date;
  updatedAt?: Date;
  name?: string;
  image?: string[];
  historical_sold?: number;
  price?: number;
  price_min?: number;
  price_max?: number;
  price_before_discount?: number;
  price_min_before_discount?: number;
  price_max_before_discount?: number;
  shop_rating?: number;
  filename?: string;
  liked?: number;
  ctime?: Date;
  show_free_shipping?: number;
  is_official_shop?: number;
  is_service_by_shopee?: number;
  is_deep_discount_skin?: number;
  is_video?: number;
  is_voucher?: number;
  is_attributes?: number;
  description?: string;
  categories?:
    | {
        catid?: number | null;
        parent_catid?: number | null;
        level?: number | null;
        category_name?: string | null;
        images?: string | null;
      }
    | {};
  video:
    | {
        video_id: string | null;
        thumb_url: string | null;
        duration: number | null;
        version: number | null;
        width: number | null;
        height: number | null;
        defn: string | null;
        profile: string | null;
        url: string | null;
      }
    | {};
  attributes:
    | {
        attributeid: number | null;
        name: string | null;
        value: string | null;
      }
    | {};
  shop_info:
    | {
        userid: number;
        is_official_shop: number;
        item_count: number;
        rating_star: number;
        name: string;
        cover: string;
        follower_count: number;
        rating_bad: number;
        rating_good: number;
        rating_normal: number;
        status: number;
        shop_location: string;
        username: string;
        portrait: string;
        response_time: number;
        description: string;
        followed: number;
        ctime: Date;
        mtime: Date;
        response_rate: number;
        country: string;
      }
    | {};

  deep_discount_skin:
    | {
        itemid: number | null;
        promotion_price: string | null;
        hidden_promotion_price: string | null;
        text: string | null;
        start_time: string | null;
        end_time: string | null;
      }
    | {};

  voucher:
    | {
        promotion_id: number | null;
        voucher_code: string | null;
        label: string | null;
      }
    | {};
  tier_variations:
    | {
        name: string | null;
        options: string[] | null;
        images: string[] | null;
      }
    | {};
}
