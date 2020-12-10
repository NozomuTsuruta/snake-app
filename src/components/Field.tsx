import React from "react";

type Props = {
  fields: string[][];
};

export const Field: React.FC<Props> = ({ fields }) => (
  <div className="field">
    {fields.map((row) =>
      row.map((column) => <div className={`dots ${column}`}></div>)
    )}
  </div>
);
