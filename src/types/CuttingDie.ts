export type Cell = 0 | 1;

export type CuttingDieId = number;
// CuttingDie: 抜き型
export type CuttingDie = {
  id: CuttingDieId;
  width: number;
  height: number;
  cells: Cell[][];
};
