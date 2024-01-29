//this workin belong to Ilya Mishkov, I make english comments for training my writing skills it is reason why do I do this
import {
  Tic_tac_modes_E,
  Tic_tac_opponent_E,
  Winner_E,
  MenuLink_E,
  Modal_message_types_E
} from "#constants/tic-tac-toe-base/constNames";
import { Utilits } from "#commonUtilits/utilits";
import { Interface } from "readline";



export interface Sell_I {
  key: string; // it is unique value that was generated via Math.random module
  index: number; // it shows current possition that counting from left to right and top to down
  type: boolean | null; // it shows who will be owner of the this sell, true it will be <cross> false it'll be <zerro>, the null means that till no one is owner
}

export interface Mode_I {
  currentGame: Tic_tac_modes_E; // it shows current mode of game, at this moment the aviable modes are 3 to 3 sells, 5 to 5               <duplicate in server>
  sells: Sell_I[]; // it shows all sells                                                                                                  <duplicate in server>
}

interface TypeMarker_I {
  typeMarker: boolean; // it shows who must to make move, true means <cross> false means <zerro>                                          <duplicate in server>
}

interface Scope_I {
  // it shows scope between two players                                                                                                 <duplicate in server>
  scope: {
    [Winner_E.CROSS]: number;
    [Winner_E.ZERRO]: number;
  };
}

interface NoWinner_I {
  noWinner: boolean; // it shows is winner in game or not                                                                                 <duplicate in server>
}

interface LastWinner_I {
  lastWinner: null | Winner_E; //                                                                                                         <duplicate in server>
}

interface WinnerCombination_I {
  winnerCombination: number[]; // it shows winner combinations                                                                            <duplicate in server>
}

export enum Game_status_E {
  WAITING = 'waiting',
  CLOSING = 'closing',
  PLAYING = 'playing'
}

export enum Player_E {
  PLAYERONE = 'playerOne',
  PLAYERTWO = 'playerTwo'
}


export interface ServerData_I
  extends Mode_I,
    TypeMarker_I,
    Scope_I,
    NoWinner_I,
    LastWinner_I,
    WinnerCombination_I {
  game: Game_status_E;
  gameName: string;
  _id: string;
  uniqKeyPlayer_1: string | null;
  uniqKeyPlayer_2: string | null;
}

export interface Options_I
  extends Mode_I,
    TypeMarker_I,
    Scope_I,
    NoWinner_I,
    WinnerCombination_I,
    LastWinner_I {}


export interface Game_I
  extends Mode_I,
    TypeMarker_I,
    Scope_I,
    NoWinner_I,
    LastWinner_I,
    WinnerCombination_I {
  modeGame: Tic_tac_opponent_E; // it shows who will be opponent,
  modalWindow: null | Modal_message_types_E; // it shows modal window
  menuLink: MenuLink_E; // it shows currunt page in memu, !!! it should change to Lint react router v6 at the future
  playerNumber: null | Player_E; // it shows who should to move in human to human mode game
  optionsOneToOne: {
    gameStatus: Game_status_E | null;
    playerOneName: string;
    playerTwoName: string;
    gameName: string;
  };
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
  modeGame: Tic_tac_opponent_E.NOLINK, //* initial
  // modeGame: Tic_tac_opponent_E.HUMAN,
  modalWindow: null, //* initial
  // modalWindow: Modal_message_types_E.ADDTOGAME,
  menuLink: MenuLink_E.GAMEMODE,
  playerNumber: null, // *initial
  // playerNumber: Player_E.PLAYERONE,
  optionsOneToOne: {
    gameStatus: null,
    playerOneName: "",
    playerTwoName: "",
    gameName: "",
  },
};
