import { fetcher } from "@/hooks/util";
import type { Board, Piece } from "@/types/Board";
import useSWR from "swr";

type BoardHookResponse = {
  board: Board | undefined;
  error: unknown;
  isLoading: boolean;
};

export const useBoard = (): BoardHookResponse => {
  const { data, error, isLoading } = useSWR<Board>("/api/board", fetcher);

  return {
    board: data,
    error,
    isLoading,
  };
};

export const useBoardMock = (): BoardHookResponse => {
  const board: Board = {
    width: 32,
    height: 32,
    pieces: new Array<Piece[]>(32)
      .fill(new Array<Piece>(32).fill(0))
      .map((row) => row.map<Piece>((_, i) => (i % 4) as Piece)),
  };

  return {
    board,
    error: undefined,
    isLoading: false,
  };
};
