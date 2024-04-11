import type { Cell } from "@/types/CuttingDie";
import { HStack } from "@kuma-ui/core";

type Props = {
  cell: Cell;
  isRightEdge: boolean;
  isBottomEdge: boolean;
};

export default function CuttingDieCell({
  cell,
  isBottomEdge,
  isRightEdge,
}: Props) {
  return (
    <HStack
      width="0.75rem"
      height="0.75rem"
      fontSize="0.5rem"
      backgroundColor={cell === 1 ? "#bfdbfe" : "#f5f5f4"}
      borderStyle="solid"
      borderLeftWidth={0.1}
      borderTopWidth={0.1}
      borderRightWidth={isRightEdge ? 0.1 : 0}
      borderBottomWidth={isBottomEdge ? 0.1 : 0}
      borderColor="#292524"
      alignItems="center"
      justifyContent="center"
    >
      {cell}
    </HStack>
  );
}
