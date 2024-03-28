export interface SearchSuggestion {
  id:        number;
  text:      string;
  count:     number;
  is_active: number;
  createdAt: Date;
  updatedAt: Date;
  deleteAt:  null;
}
