export interface ICategoryTreeResponse {
  err: number;
  msg: string;
  response: [ICategoryTree[]];
}

export interface ICategoryTreeResponseParent {
  err: number;
  msg: string;
  total: number;
  response: ICategoryTree[];
}

export interface ICategoryTree {
  catid: number;
  parent_catid: number;
  name: string;
  display_name: string;
  image: string;
  unselected_image: string;
  selected_image: string;
  level: number;
  createdAt: Date;
  updatedAt: Date;
}
