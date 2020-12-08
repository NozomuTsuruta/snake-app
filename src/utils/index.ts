import { IPosition } from "./types";
export const initFields = (fieldSize: number, initialPosition: IPosition) => {
  const fields: string[][] = [];
  for (let i = 0; i < fieldSize; i++) {
    const cols = new Array(fieldSize).fill("");
    fields.push(cols);
  }
  fields[initialPosition.y][initialPosition.x] = "snake";

  return fields;
};
