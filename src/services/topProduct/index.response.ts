import { TopProDucts } from '../../types/topProduct';

export interface TopProDuctsResponse {
  err: number;
  msg: string;
  response: TopProDucts[];
}
