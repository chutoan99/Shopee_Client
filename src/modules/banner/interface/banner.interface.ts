export interface BannerResponse {
  err: number;
  total: string;
  response: Banner[];
  msg: string;
}

export interface Banner {
  id: number;
  image_url: string;
  is_active: number;
  createdAt: Date;
  updatedAt: Date;
}