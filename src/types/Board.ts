export type Piece = 0 | 1 | 2 | 3;

export type Board = {
  width: number;
  height: number;
  pieces: Piece[][];
};
