import type { Cell } from "@/types/CuttingDie";
import { css } from "@styled-system/css";

type Props = {
  cell: Cell;
};

export default function CuttingDieCell({ cell }: Props) {
  return (
    <div
      className={css({
        display: "flex",
        width: "8",
        height: "8",
        backgroundColor: cell === 1 ? "red.400" : "neutral.50",
        borderWidth: "0.5",
        borderStyle: "solid",
        borderColor: "neutral.800",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      {cell}
    </div>
  );
}
