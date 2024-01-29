import { Mode_I, Sell_I, Player_E, Game_status_E } from "./state";
import {
  Winner_E,
  Tic_tac_opponent_E,
  MenuLink_E,
  Modal_message_types_E,
  Tic_tac_modes_E
} from "#constants/tic-tac-toe-base/constNames";

export enum ActionType_E {
  ChengeGame, // it change count of table's sells, <3 to 3> or <5 to 5> for example
  TuggleMarker, // it defines the queue , whitch is move now
  SetMarker,
  SetMarkerItem, // it shows options of the sells, witch of them is CROSS and witch is ZERRO
  SetWinnerCombinatios, // it defines the combinations whitch is winning
  ChangeScope, // it chenge scope of geme
  ChengeMode, // it change who will be opponent, human or computer
  TuggleModalWindow, // it shows or hide modal Window
  ChangeMenuLink,
  SetnoWinner, // if no winner is in game, it shows it
  SetLastWinner, // it shows who was winner in last game
  PlayerNumber, //
  StatusGameInteractive, // it shows status of interactive game
  SetPlayerOneName, // it shows playerOne's  name of interactive game
  SetPlayerTwoName, // it shows playerTwo's  name of interactive game
}

// export interface ChengeGame_I {
//   type: ActionType_E.ChengeGame;
//   payload: Mode_I;
// }
export interface ChengeGame_I {
  type: ActionType_E.ChengeGame;
  payload: Tic_tac_modes_E;
}

export interface TuggleMarker_I {
  type: ActionType_E.TuggleMarker;
}

export interface SetMarker_I {
  type: ActionType_E.SetMarker;
  payload: boolean;
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

export interface ChengeMode_I {
  type: ActionType_E.ChengeMode;
  payload: Tic_tac_opponent_E
}

export interface TuggleModalWindow_I {
  type: ActionType_E.TuggleModalWindow;
  payload: null | Modal_message_types_E;
}

export interface ChangeMenuLink_I {
  type: ActionType_E.ChangeMenuLink;
  payload: MenuLink_E;
}

export interface SetnoWinner_I {
  type: ActionType_E.SetnoWinner;
  payload: boolean;
}

export interface SetLastWinner_I {
  type: ActionType_E.SetLastWinner;
  payload: null | Winner_E;
}

export interface PlayerNumber_I {
  type: ActionType_E.PlayerNumber;
  payload: null | Player_E;
}

export interface StatusGameInteractive_I {
  type: ActionType_E.StatusGameInteractive;
  payload: null | Game_status_E;
}

export interface SetPlayerOneName_I {
  type: ActionType_E.SetPlayerOneName;
  payload: string;
}

export interface SetPlayerTwoName_I {
  type: ActionType_E.SetPlayerTwoName;
  payload: string;
}







export type GameActions_T =
  | ChengeGame_I
  | TuggleMarker_I
  | SetMarker_I
  | SetMarkerItem_I
  | SetWinnerCombinatios_I
  | ChangeScope_I
  | ChengeMode_I
  | TuggleModalWindow_I
  | ChangeMenuLink_I
  | SetnoWinner_I
  | SetLastWinner_I
  | PlayerNumber_I
  | StatusGameInteractive_I
  | SetPlayerOneName_I
  | SetPlayerTwoName_I