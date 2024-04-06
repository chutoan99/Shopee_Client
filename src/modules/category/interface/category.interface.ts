export interface CategoryTreeResponse {
  err: number;
  msg: string;
  response: [CategoryTree[]];
}

export interface CategoryTreeResponseParent {
  err: number;
  msg: string;
  total: number;
  response: CategoryTree[];
}

export interface CategoryTree {
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
