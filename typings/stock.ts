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
  createdAt: Date;
  stock_code: string;
  diff_price: string;
  Category: Icategory;
  issue: string;
  news: string;
  isInterest: boolean;
  register_date: string;
  category_name: string;
}

export interface ISearch {
  name: string;
  register_date: string;
}

export interface IrequestSearch {
  params: {
    word: string;
  };
}
