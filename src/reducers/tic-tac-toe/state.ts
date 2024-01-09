//this workin belong to Ilya Mishkov, I make english comments for training my writing skills it is reason why do I do this
import {
  Tic_tac_modes_E,
  Tic_tac_opponent_E,
  Winner_E,
  MenuLink_E,
  Modal_message_types_E
} from "#constants/tic-tac-toe-base/constNames";
import { Utilits } from "#commonUtilits/utilits";



export interface Sell_I {
  key: string; // it is unique value that was generated via Math.random module
  index: number; // it shows current possition that counting from left to right and top to down
  type: boolean | null; // it shows who will be owner of the this sell, true it will be <cross> false it'll be <zerro>, the null means that till no one is owner
}

export interface Mode_I {
  currentGame: Tic_tac_modes_E; // it shows current mode of game, at this moment the aviable modes are 3 to 3 sells, 5 to 5
  sells: Sell_I[];
}
export interface Game_I extends Mode_I {
  typeMarker: boolean; // it shows who must to make move, true means <cross> false means <zerro>
  scope: {
    // it shows scope between two players
    [Winner_E.CROSS]: number;
    [Winner_E.ZERRO]: number;
  };
  // limitGame: number; // it shows how many games will be played
  noWinner: boolean; // it shows is winner in game or not
  lastWinner: null | Winner_E;
  winnerCombination: number[]; // it shows winner combinations
  modeGame: Tic_tac_opponent_E; // it shows who will be opponent,
  modalWindow: null | Modal_message_types_E; // it shows modal window
  menuLink: MenuLink_E; // it shows currunt page in memu, !!! it should change to Lint react router v6 at the future
}

export const initialGameState: Game_I = {
  currentGame: Tic_tac_modes_E.ONE,
  sells: Utilits.getCountSells(Tic_tac_modes_E.ONE),
  typeMarker: true,
  scope: {
    [Winner_E.CROSS]: 0,
    [Winner_E.ZERRO]: 0,
  },
  noWinner: false,
  lastWinner: null,
  winnerCombination: [],
  modeGame: Tic_tac_opponent_E.NOLINK,
  // modalWindow: null,
  //!!! the comment above here is main than bellow
  modalWindow: Modal_message_types_E.NOWINNER,
  menuLink: MenuLink_E.GAMEMODE,
};
