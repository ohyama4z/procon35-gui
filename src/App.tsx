import Board from "@/components/Board";
import CuttingDie from "@/components/CuttingDie";
import type { Board as BoardType } from "@/types/Board";
import type { CuttingDie as CuttingDieType } from "@/types/CuttingDie";
import { Box, HStack, Spacer, VStack } from "@kuma-ui/core";

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
      <Spacer size="2rem" />
      <VStack alignItems="center" gap="2rem">
        <Board board={board} />
        <HStack justifyContent="center" gap="2rem">
          {cuttingDies.map((cuttingDie, index) => (
            <CuttingDie key={index} cuttingDie={cuttingDie} />
          ))}
        </HStack>
        <Board board={board} />
      </VStack>
    </>
  );
}
