import Board from "@/components/Board";
import CuttingDie from "@/components/CuttingDie";
import type { Board as BoardType } from "@/types/Board";
import type {
  CuttingDieId,
  CuttingDie as CuttingDieType,
} from "@/types/CuttingDie";
import { HStack, Spacer, VStack } from "@kuma-ui/core";
import { useState } from "react";

const board: BoardType = {
  width: 32,
  height: 32,
  pieces: Array.from({ length: 32 }, () => Array.from({ length: 32 }, () => 0)),
};

const cuttingDies: CuttingDieType[] = [
  {
    id: 1,
    width: 3,
    height: 3,
    cells: [
      [1, 1, 1],
      [0, 0, 0],
      [1, 1, 1],
    ],
  },
  {
    id: 2,
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
  const [selectedCuttingDieId, setSelectedCuttingDieId] =
    useState<CuttingDieId>(cuttingDies[0].id);

  const selectedCuttingDie = (id: CuttingDieId) => {
    const selected = cuttingDies.find((cuttingDie) => cuttingDie.id === id);
    if (!selected) {
      throw new Error(`CuttingDie not found: ${id}`);
    }

    return selected;
  };

  const selectCuttingDie = (id: CuttingDieId) => {
    setSelectedCuttingDieId(id);
  };

  return (
    <>
      <Spacer size="2rem" />
      <VStack alignItems="center" gap="2rem">
        {/* <Board board={board} /> */}
        <HStack justifyContent="center" alignItems="center" gap="2rem">
          {cuttingDies.map((cuttingDie) => (
            <CuttingDie
              key={cuttingDie.id}
              cuttingDie={cuttingDie}
              isSelected={selectedCuttingDieId === cuttingDie.id}
              selectCuttingDie={() => selectCuttingDie(cuttingDie.id)}
            />
          ))}
        </HStack>
        <Board
          board={board}
          selectedCuttingDie={selectedCuttingDie(selectedCuttingDieId)}
        />
      </VStack>
    </>
  );
}
