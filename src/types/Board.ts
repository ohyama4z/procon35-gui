export type PieceValue = 0 | 1 | 2 | 3;

export type Piece = {
  value: PieceValue;
};

export type Board = {
  width: number;
  height: number;
  pieces: Piece[][];
};
