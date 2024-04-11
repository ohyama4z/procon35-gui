import BoardPiece from "@/components/BoardPiece";
import type { Board as BoardType } from "@/types/Board";
import type { Coordinate } from "@/types/Coordinate";
import type { CuttingDie } from "@/types/CuttingDie";
import { Box, HStack } from "@kuma-ui/core";
import { useState } from "react";

type Props = {
  board: BoardType;
  selectedCuttingDie: CuttingDie;
};

export default function Board({ board, selectedCuttingDie }: Props) {
  const [cuttingPieceCoordinates, setCuttingPieceCoordinates] = useState<
    Coordinate[]
  >([]);

  const isCut = (x: number, y: number) => {
    return cuttingPieceCoordinates.some(
      (coordinate) => coordinate.x === x && coordinate.y === y,
    );
  };

  const handleMouseOver = (x: number, y: number) => {
    const coordinates = selectedCuttingDie.cells.flatMap((row, dy) =>
      row.map((_, dx) => ({
        x: x + dx,
        y: y + dy,
      })),
    );

    // cellが1の値のみfilter
    const cuttingCoordinates: Coordinate[] = coordinates.filter(
      (coordinate) =>
        selectedCuttingDie.cells[coordinate.y - y][coordinate.x - x] === 1,
    );

    setCuttingPieceCoordinates(cuttingCoordinates);
  };

  const handleMouseOut = () => {
    setCuttingPieceCoordinates([]);
  };

  return (
    <Box onMouseOut={handleMouseOut}>
      {board.pieces.map((row, y) => (
        <HStack key={y}>
          {row.map((piece, x) => (
            <BoardPiece
              key={x}
              piece={piece}
              isCut={isCut(x, y)}
              isRightEdge={x === board.width - 1}
              isBottomEdge={y === board.height - 1}
              handleMouseOver={() => handleMouseOver(x, y)}
            />
          ))}
        </HStack>
      ))}
    </Box>
  );
}
