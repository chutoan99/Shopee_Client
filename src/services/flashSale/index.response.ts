import { FlashSale } from '../../types/flashSale';

export interface FlashSaleResponse {
  err: number;
  total: string;
  response: FlashSale[];
  msg: string;
}
