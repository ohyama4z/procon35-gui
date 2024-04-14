import { fetcher } from "@/hooks/util";
import type { CuttingDie } from "@/types/CuttingDie";
import useSWR from "swr";

type CuttingDiesHookResponse = {
  cuttingDies: CuttingDie[] | undefined;
  error: unknown;
  isLoading: boolean;
};

export const useCuttingDies = (): CuttingDiesHookResponse => {
  const { data, error, isLoading } = useSWR<CuttingDie[]>(
    "/api/board",
    fetcher,
  );

  return {
    cuttingDies: data,
    error,
    isLoading,
  };
};

export const useCuttingDiesMock = (): CuttingDiesHookResponse => {
  const cuttingDies: CuttingDie[] = [
    {
      id: 1,
      width: 3,
      height: 3,
      cells: [
        [1, 1, 1],
        [0, 0, 0],
        [1, 1, 1],
      ],
    },
    {
      id: 2,
      width: 3,
      height: 3,
      cells: [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ],
    },
  ];

  return {
    cuttingDies,
    error: undefined,
    isLoading: false,
  };
};
