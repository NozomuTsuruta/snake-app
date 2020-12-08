export const initFields = (fieldSize: number) => {
  const fields: string[][] = [];
  for (let i = 0; i < fieldSize; i++) {
    const cols = new Array(fieldSize).fill("");
    fields.push(cols);
  }

  return fields;
};
