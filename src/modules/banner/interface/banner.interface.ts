export interface IBannerResponse {
  err: number;
  total: string;
  response: IBanner[];
  msg: string;
}

export interface IBanner {
  id: number;
  image_url: string;
  is_active: number;
  createdAt: Date;
  updatedAt: Date;
}