export type Cell = 0 | 1;

// CuttingDie: 抜き型
export type CuttingDie = {
  width: number;
  height: number;
  cells: Cell[][];
};
