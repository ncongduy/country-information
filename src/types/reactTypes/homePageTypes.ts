// type for index.tsx and TbHead.tsx folder Home
export type ColumnItem = {
  id: string;
  label: string;
  minWidth: number;
  format?: (value: number) => string;
};

export type ColumnsTbHead = ColumnItem[];

// type for TbBody.tsx folder Home
export type RowTbBody = {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  [key: string]: string | number;
};

export type RowListTbBody = RowTbBody[];
