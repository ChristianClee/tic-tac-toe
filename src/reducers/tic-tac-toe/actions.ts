import { Mode_I, Sell_I } from "./state";
import { Winner_E } from "#constants/tic-tac-toe-base/constNames";

export enum ActionType_E {
  ChengeGame,
  SetMarker,
  SetMarkerItem,
  SetWinnerCombinatios,
  ChangeScope
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

export interface SetWinnerCombinatios_I {
  type: ActionType_E.SetWinnerCombinatios;
  payload: number[];
}

export interface ChangeScope_I {
  type: ActionType_E.ChangeScope;
  payload: {
    [Winner_E.CROSS]: number;
    [Winner_E.ZERRO]: number;
  };
}





export type GameActions_T =
  | ChengeGame_I
  | SetMarker_I
  | SetMarkerItem_I
  | SetWinnerCombinatios_I
  | ChangeScope_I;