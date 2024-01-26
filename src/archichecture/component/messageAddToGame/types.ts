import { Game_status_E } from "#reducers/tic-tac-toe/state";

export interface ListElem_I {
  gameName: string;
  gameStatus: Game_status_E;
  time: string;
  _id: string;
}