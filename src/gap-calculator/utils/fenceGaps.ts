// All sizes in mm
export type FenceGapsParams = {
  boardWidth: number;
  minGapSize: number;
  fenceWidth: number;
};

export function calcFenceGaps({
  boardWidth,
  minGapSize,
  fenceWidth,
}: FenceGapsParams) {
  const effectiveArea = fenceWidth - minGapSize;
  const numOfBoards = Math.floor(effectiveArea / (boardWidth + minGapSize));
  return {
    numOfBoards,
    gapSize: (fenceWidth - numOfBoards * boardWidth) / (numOfBoards + 1),
  };
}
