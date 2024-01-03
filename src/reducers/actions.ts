import { Mode_I } from "./state";

export enum ActionType_E {
  ChengeGame,
  SetMarker,
}

export interface ChengeGame_I {
  type: ActionType_E.ChengeGame;
  payload: Mode_I;
}

export interface SetMarker_I {
  type: ActionType_E.SetMarker;
}



export type GameActions_T = ChengeGame_I | SetMarker_I