import Board from "@/components/Board";
import CuttingDie from "@/components/CuttingDie";
import { useBoardMock } from "@/hooks/board";
import type { CuttingDieId } from "@/types/CuttingDie";
import { HStack, Spacer, VStack } from "@kuma-ui/core";
import { useState } from "react";
import { useCuttingDiesMock } from "./hooks/cuttingDie";

export default function App() {
  const { board, isLoading: boardLoading, error: boardError } = useBoardMock();
  const {
    cuttingDies,
    isLoading: cuttingDiesLoading,
    error: cuttingDiesError,
  } = useCuttingDiesMock();

  const [selectedCuttingDieId, setSelectedCuttingDieId] = useState<
    CuttingDieId | undefined
  >(cuttingDies?.[0].id);

  const selectedCuttingDie = (id: CuttingDieId) => {
    const selected = cuttingDies?.find((cuttingDie) => cuttingDie.id === id);
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
          {!cuttingDiesLoading &&
            !cuttingDiesError &&
            cuttingDies &&
            cuttingDies.map((cuttingDie) => (
              <CuttingDie
                key={cuttingDie.id}
                cuttingDie={cuttingDie}
                isSelected={selectedCuttingDieId === cuttingDie.id}
                selectCuttingDie={() => selectCuttingDie(cuttingDie.id)}
              />
            ))}
        </HStack>
        {!boardLoading && !boardError && board && selectedCuttingDieId && (
          <Board
            board={board}
            selectedCuttingDie={selectedCuttingDie(selectedCuttingDieId)}
          />
        )}
      </VStack>
    </>
  );
}
