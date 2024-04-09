import type { Piece } from "@/types/Board";
import { css } from "@styled-system/css";

type Props = {
  piece: Piece;
  isCut: boolean;
};

export default function BoardPiece({ piece, isCut }: Props) {
  return (
    <div
      className={css({
        display: "flex",
        width: "2rem",
        height: "2rem",
        borderWidth: isCut ? "2px" : "1px",
        borderStyle: "solid",
        borderColor: isCut ? "red.700" : "neutral.800",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      {piece.value}
    </div>
  );
}
