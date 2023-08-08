export interface MyDataPoint {
  x: string;
  y: number;
}

export interface MySeries {
  name: string;
  data: MyDataPoint[];
}
