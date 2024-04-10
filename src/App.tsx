import Board from "@/components/Board";
import CuttingDie from "@/components/CuttingDie";
import type { Board as BoardType } from "@/types/Board";
import type { CuttingDie as CuttingDieType } from "@/types/CuttingDie";
import { css } from "@styled-system/css";

const board: BoardType = {
  width: 10,
  height: 10,
  pieces: Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => 0)),
};

const cuttingDies: CuttingDieType[] = [
  {
    width: 3,
    height: 3,
    cells: [
      [1, 1, 1],
      [0, 0, 0],
      [1, 1, 1],
    ],
  },
  {
    width: 3,
    height: 3,
    cells: [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
  },
];

export default function App() {
  return (
    <>
      <div className={css({ display: "flex", justifyContent: "center" })}>
        <div className={css({ flexGrow: "1" })}>
          <div className={css({ padding: "4" })} />
          <div
            className={css({
              display: "flex",
              justifyContent: "center",
              gap: "8",
            })}
          >
            {cuttingDies.map((cuttingDie, index) => (
              <CuttingDie key={index} cuttingDie={cuttingDie} />
            ))}
          </div>
          <div className={css({ padding: "4" })} />
          <div className={css({ display: "flex", justifyContent: "center" })}>
            <Board board={board} />
          </div>
        </div>
      </div>
    </>
  );
}
