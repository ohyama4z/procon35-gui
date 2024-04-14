import type { Piece } from "@/types/Board";
import { HStack } from "@kuma-ui/core";

type Props = {
  piece: Piece;
  isCut: boolean;
  isRightEdge: boolean;
  isBottomEdge: boolean;
  handleMouseOver: () => void;
};

export default function BoardPiece({
  piece,
  isCut,
  isRightEdge,
  isBottomEdge,
  handleMouseOver,
}: Props) {
  const background = (p: Piece) => {
    if (isCut) {
      return "#bfdbfe";
    }
    switch (p) {
      case 0:
        return "#f5f5f4";
      case 1:
        return "#d4d4d4";
      case 2:
        return "#a8a29e";
      case 3:
        return "#78716c";
      default:
        throw new Error(p satisfies never);
    }
  };

  return (
    <HStack
      width="0.75rem"
      height="0.75rem"
      fontSize="0.5rem"
      backgroundColor={background(piece)}
      borderStyle="solid"
      borderLeftWidth={0.1}
      borderTopWidth={0.1}
      borderRightWidth={isRightEdge ? 0.1 : 0}
      borderBottomWidth={isBottomEdge ? 0.1 : 0}
      borderColor="#292524"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      onMouseOver={handleMouseOver}
    >
      {piece}
    </HStack>
  );
}
