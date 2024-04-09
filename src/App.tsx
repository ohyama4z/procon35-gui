import Board from "@/components/Board";
import type { Board as BoardType } from "@/types/Board";

const board: BoardType = {
  width: 10,
  height: 10,
  pieces: Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => ({
      value: 0,
    })),
  ),
};

export default function App() {
  return <Board board={board} />;
}
