import type { Cell } from "@/types/CuttingDie";
import { HStack } from "@kuma-ui/core";

type Props = {
  cell: Cell;
};

export default function CuttingDieCell({ cell }: Props) {
  return (
    <HStack
      width="2rem"
      height="2rem"
      backgroundColor={cell === 1 ? "#bfdbfe" : "#f5f5f4"}
      borderWidth="1px"
      borderStyle="solid"
      borderColor="#292524"
      alignItems="center"
      justifyContent="center"
    >
      {cell}
    </HStack>
  );
}
