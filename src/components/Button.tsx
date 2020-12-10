import React from "react";
import { GameStatus } from "../utils/constants";
import { IStatus } from "../utils/types";

type Props = {
  status: IStatus;
  onRestart: () => void;
  onStart: () => void;
  onStop: () => void;
};

export const Button: React.FC<Props> = ({
  status,
  onRestart,
  onStart,
  onStop,
}) => {
  return (
    <div className="button">
      {status === GameStatus.gameover && (
        <button className="btn btn-gameover" onClick={onRestart}>
          gameover
        </button>
      )}
      {status === GameStatus.init && (
        <button className="btn btn-init" onClick={onStart}>
          start
        </button>
      )}
      {status === GameStatus.suspended && (
        <button className="btn btn-suspended" onClick={onStart}>
          start
        </button>
      )}
      {status === GameStatus.playing && (
        <button className="btn btn-playing" onClick={onStop}>
          stop
        </button>
      )}
    </div>
  );
};
