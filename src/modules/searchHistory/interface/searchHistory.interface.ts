export interface SearchHistoryResponse {
  err: number;
  msg: string;
  response: SearchHistory[];
}
export interface CreateSearchHistoryResponse {
  err: number;
  msg: string;
  response: any;
}

export interface SearchHistory {
  userid: number;
  text: string;
}
