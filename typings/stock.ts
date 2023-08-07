export interface Icategory {
  id: number;
  name: string;
}
export interface Istock {
  id: number;
  name: string;
  current_price: string;
  previous_close: string;
  diff_percent: string;
  title: string;
  desc: string;
  reason: string;
  createdAt: Date;
  stock_code: string;
  diff_price: string;
  Category: Icategory;
  issue: string;
  news: string;
  isInterest: boolean;
}

export interface ISearch {
  name: string;
  register_date: string;
}
