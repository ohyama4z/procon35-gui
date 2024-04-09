import BoardPiece from "@/components/BoardPiece";
import type { Board as BoardType } from "@/types/Board";
import { css } from "@styled-system/css";

type Props = {
  board: BoardType;
};

export default function Board({ board }: Props) {
  return (
    <div>
      {board.pieces.map((row, y) => (
        <div
          key={y}
          className={css({
            display: "flex",
          })}
        >
          {row.map((piece, x) => (
            <BoardPiece key={x} piece={piece} isCut={x === 3} />
          ))}
        </div>
      ))}
    </div>
  );
}
