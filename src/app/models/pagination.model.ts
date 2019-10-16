export interface Pagination {
  items: Array<any>;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}
