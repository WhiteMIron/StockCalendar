export interface Icategory {
  id: number;
  name: string;
}
export interface Istock {
  id: number;
  name: string;
  current_price: string;
  // previous_close: string;
  days_range: string;
  title: string;
  desc: string;
  reason: string;
  createdAt: Date;
  stock_code: string;
  diff_price: string;
  Category: Icategory;
  issue: string;
  news: string;
  interest: boolean;
}

export interface ISearch {
  name: string;
  register_date: string;
}
