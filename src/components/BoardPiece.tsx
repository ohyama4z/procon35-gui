import type { Piece } from "@/types/Board";
import { HStack } from "@kuma-ui/core";

type Props = {
  piece: Piece;
  isCut: boolean;
};

export default function BoardPiece({ piece, isCut }: Props) {
  return (
    <HStack
      width="2rem"
      height="2rem"
      backgroundColor={isCut ? "#bfdbfe" : "#f5f5f4"}
      borderWidth="1px"
      borderStyle="solid"
      borderColor={isCut ? "#2563eb" : "#292524"}
      alignItems="center"
      justifyContent="center"
    >
      {piece}
    </HStack>
  );
}
