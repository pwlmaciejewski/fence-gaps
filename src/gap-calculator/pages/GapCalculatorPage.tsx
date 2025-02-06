import { useState } from "react";
import { NumberInput } from "../../core/components/NumberInput/NumberInput";
import { FormField } from "../../core/components/FormField/FormField";
import { calcFenceGaps } from "../utils/fenceGaps";

export const DEFAULT_BOARD_WIDTH = 100;
export const DEFAULT_MIN_GAP_SIZE = 25;
export const DEFAULT_MAX_GAP_SIZE = 35;
export const DEFAULT_FENCE_WIDTH = 180;

export default function GapCalculatorPage() {
  const [boardWidth, setBoardWidth] = useState(DEFAULT_BOARD_WIDTH);
  const [minGapSize, setMinGapSize] = useState(DEFAULT_MIN_GAP_SIZE);
  const [fenceWidth, setFenceWidth] = useState(DEFAULT_FENCE_WIDTH);

  const { numOfBoards, gapSize } = calcFenceGaps({
    boardWidth,
    minGapSize,
    fenceWidth: fenceWidth * 10,
  });

  return (
    <div className="m-auto max-w-80 mt-4">
      <div className="mb-8 flex flex-col gap-3">
        <FormField label="Board width [mm]">
          <NumberInput
            value={boardWidth}
            onChange={(event) => setBoardWidth(parseFloat(event.target.value))}
          />
        </FormField>
        <FormField label="Min. gap size [mm]">
          <NumberInput
            value={minGapSize}
            onChange={(event) => setMinGapSize(parseFloat(event.target.value))}
          />
        </FormField>
        <FormField label="Fence width [cm]">
          <NumberInput
            value={fenceWidth}
            onChange={(event) => setFenceWidth(parseFloat(event.target.value))}
          />
        </FormField>
      </div>

      <div className="bg-gray-100 py-3 px-4 rounded-lg">
        <div>
          Number of boards: <strong>{numOfBoards}</strong>
        </div>
        <div>
          Gap size: <strong>{gapSize.toFixed(2)} mm</strong>
        </div>
      </div>
    </div>
  );
}
