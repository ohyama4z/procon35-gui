import CuttingDieCell from "@/components/CuttingDieCell";
import type { CuttingDie as CuttingDieType } from "@/types/CuttingDie";
import { Box, HStack } from "@kuma-ui/core";

type Props = {
  cuttingDie: CuttingDieType;
  selectCuttingDie: () => void;
  isSelected: boolean;
};

export default function CuttingDie({
  cuttingDie,
  selectCuttingDie,
  isSelected,
}: Props) {
  return (
    <Box
      onClick={selectCuttingDie}
      cursor="pointer"
      borderStyle={isSelected ? "solid" : "unset"}
      borderColor="#1e3a8a"
    >
      {cuttingDie.cells.map((row, y) => (
        <HStack key={y}>
          {row.map((cell, x) => (
            <CuttingDieCell
              key={x}
              cell={cell}
              isBottomEdge={y === cuttingDie.height - 1}
              isRightEdge={x === cuttingDie.width - 1}
            />
          ))}
        </HStack>
      ))}
    </Box>
  );
}
