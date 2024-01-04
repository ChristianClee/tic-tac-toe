import { Mode_I, Sell_I } from "./state";

export enum ActionType_E {
  ChengeGame,
  SetMarker,
  SetMarkerItem,
}

export interface ChengeGame_I {
  type: ActionType_E.ChengeGame;
  payload: Mode_I;
}

export interface SetMarker_I {
  type: ActionType_E.SetMarker;
}

export interface SetMarkerItem_I {
  type: ActionType_E.SetMarkerItem;
  payload: Sell_I[];
}



export type GameActions_T = ChengeGame_I | SetMarker_I | SetMarkerItem_I;