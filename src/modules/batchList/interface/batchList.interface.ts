export interface BatchListResponse {
  err: number;
  total: string;
  response: BatchList[];
  msg: string;
}


export interface BatchList {
  banner_image: string;
  title: string;
  end: Date;
  start: Date;
}
