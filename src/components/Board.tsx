import BoardPiece from "@/components/BoardPiece";
import type { Board as BoardType } from "@/types/Board";
import { Box, HStack } from "@kuma-ui/core";

type Props = {
  board: BoardType;
};

export default function Board({ board }: Props) {
  return (
    <Box>
      {board.pieces.map((row, y) => (
        <HStack key={y}>
          {row.map((piece, x) => (
            <BoardPiece key={x} piece={piece} isCut={x === 3} />
          ))}
        </HStack>
      ))}
    </Box>
  );
}
