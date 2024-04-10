import type { CuttingDie as CuttingDieType } from "@/types/CuttingDie";
import { css } from "@styled-system/css";
import CuttingDieCell from "./CuttingDieCell";

type Props = {
  cuttingDie: CuttingDieType;
};

export default function CuttingDie({ cuttingDie }: Props) {
  return (
    <div>
      {cuttingDie.cells.map((row, y) => (
        <div
          key={y}
          className={css({
            display: "flex",
          })}
        >
          {row.map((cell, x) => (
            <CuttingDieCell key={x} cell={cell} />
          ))}
        </div>
      ))}
    </div>
  );
}
