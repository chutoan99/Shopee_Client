import { BatchList } from '../../types/batchList';

export interface BatchListResponse {
  err: number;
  total: string;
  response: BatchList[];
  msg: string;
}
