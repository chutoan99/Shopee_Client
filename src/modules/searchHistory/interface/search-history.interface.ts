export interface ISearchHistoryResponse {
  err: number;
  msg: string;
  response: ISearchHistory[];
}
export interface ICreateSearchHistoryResponse {
  err: number;
  msg: string;
  response: any;
}

export interface ISearchHistory {
  userid: number;
  text: string;
}
