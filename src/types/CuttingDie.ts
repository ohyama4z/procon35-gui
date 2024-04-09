export type CellValue = 0 | 1;

export type Cell = {
  value: CellValue;
};

// CuttingDie: 抜き型
export type CuttingDie = {
  width: number;
  height: number;
  cells: Cell[][];
};
