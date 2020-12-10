import { initFields } from ".";

export const fieldSize = 35;

export const initialPosition = { x: 17, y: 17 };

export const initialValues = initFields(fieldSize, initialPosition);
initialValues[9][9] = "food";

export const defaultDifficulty = 3;

export const defaultInterval = 100;

export const Difficulty = [1000, 500, 100, 50, 10] as const;

export const GameStatus = {
  init: "init",
  playing: "playing",
  suspended: "suspended",
  gameover: "gameover",
} as const;

export const Direction = {
  up: "up",
  right: "right",
  left: "left",
  down: "down",
} as const;

export const OppositeDirection = {
  up: "down",
  right: "left",
  left: "right",
  down: "up",
} as const;

export const Delta = {
  up: { x: 0, y: -1 },
  right: { x: 1, y: 0 },
  left: { x: -1, y: 0 },
  down: { x: 0, y: 1 },
} as const;

export const DirectionKeyCodeMap = {
  37: Direction.left,
  38: Direction.up,
  39: Direction.right,
  40: Direction.down,
} as const;
