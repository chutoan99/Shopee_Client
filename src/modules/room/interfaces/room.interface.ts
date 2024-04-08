export interface IRoomsResponse {
  err: number;
  msg: string;
  total: number;
  response: IRooms[];
}

export interface IRooms {
  id:        number;
  userid:    number;
  shopid:    number;
  is_active: number;
  createdAt: Date;
  updatedAt: Date;
  deleteAt:  null;
  shop_info: {
    name:             string;
    cover:            string;
    shopid:           number;
    status:           number;
    userid:           number;
    country:          string;
    deleteAt:         null;
    followed:         number;
    portrait:         string;
    username:         string;
    createdAt:        string;
    updatedAt:        string;
    item_count:       number;
    rating_bad:       number;
    description:      string;
    rating_good:      number;
    rating_star:      number;
    rating_normal:    number;
    response_rate:    number;
    shop_location:    string;
    follower_count:   number;
    is_official_shop: number;
    last_active_time: number;
  };
}
