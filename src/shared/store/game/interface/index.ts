import {Dispatch, SetStateAction} from "react";
import {IBoard, IPlayer} from "@/shared/interfaces";

interface IGameContext {
  board: IBoard;
  setBoard: Dispatch<SetStateAction<IBoard>>
  currentPlayer: IPlayer
  setCurrentPlayer: Dispatch<SetStateAction<IPlayer>>
  winner: IPlayer | null | 'draw'
  setWinner: Dispatch<SetStateAction<IPlayer | null | 'draw'>>
  moveCount: number
  setMoveCount: Dispatch<SetStateAction<number>>
  resetGame: () => void
}

export type {
  IGameContext
}
