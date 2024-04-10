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
        width: "8",
        height: "8",
        backgroundColor: isCut ? "red.200" : "neutral.50",
        borderWidth: isCut ? "2" : "0.5",
        borderStyle: "solid",
        borderColor: isCut ? "red.700" : "neutral.800",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      {piece}
    </div>
  );
}
