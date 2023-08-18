import { SearchSuggestion } from '../../types/searchSuggestion';

export interface SearchSuggestionResponse {
  err: number;
  msg: string;
  response: SearchSuggestion[];
}
