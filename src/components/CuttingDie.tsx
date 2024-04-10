import CuttingDieCell from "@/components/CuttingDieCell";
import type { CuttingDie as CuttingDieType } from "@/types/CuttingDie";
import { Box, HStack } from "@kuma-ui/core";

type Props = {
  cuttingDie: CuttingDieType;
};

export default function CuttingDie({ cuttingDie }: Props) {
  return (
    <Box>
      {cuttingDie.cells.map((row, y) => (
        <HStack key={y}>
          {row.map((cell, x) => (
            <CuttingDieCell key={x} cell={cell} />
          ))}
        </HStack>
      ))}
    </Box>
  );
}
