import { serverPath } from '#commonUtilits/getPathServer'
import { Session_st_E, Tic_tac_modes_E, Winner_E } from "#constants/tic-tac-toe-base/constNames";
import { Game_status_E, Mode_I, Options_I, Sell_I } from '#reducers/tic-tac-toe/state';
import { time } from 'console';

// import WebSocket from "ws";


enum MessageSocket_E {
  CREATE = 'creategame',
  JOIN = 'joingame',
  DELETE = 'deletegame',
  SELLS = 'sells'
}


enum GiveMessage_E {
  TOSTORAGE = "tostorage",
  TOCONNECT = "toconnect",
}


export interface Client_I {
  playerKey: string;
  gameKey: string;
}

export interface CreateGame_T {
  _id: string | null;
  sells: Sell_I[];
  typeMarker: boolean;
  gameName: string;
  playerOne: string | null;
  playerTwo: string | null;
  playerOneName: string;
  playerTwoName: string;
  noWinner: boolean;
  winnerCombination: number[];
  lastWinner: null | Winner_E;

  gameStatus: Game_status_E | null;
  currentGame: Tic_tac_modes_E;
};
















export class WebSocketInit {
  private domain: string;
  private socket: WebSocket;
  private PLAYERKEY: Session_st_E.PLAYERKEY;
  private GAMEKEY: Session_st_E.GAMEKEY;
  public isConnect: boolean;
  // public gameStatus: GameStatus_E | null;
  public gameData: CreateGame_T | null;

  constructor() {
    this.domain = serverPath.Ws();
    this.socket = this._initSocketConnect();
    this.PLAYERKEY = Session_st_E.PLAYERKEY;
    this.GAMEKEY = Session_st_E.GAMEKEY;
    this._initSocketEvent();
    this.isConnect = false;
    this.gameData = null;
    // this.gameStatus = null;

    this.createGame = this.createGame.bind(this);
    this.deleteGame = this.deleteGame.bind(this);
    this.joinGame = this.joinGame.bind(this);
    this.takeMesStatusConnect = this.takeMesStatusConnect.bind(this);
    this.sendSells = this.sendSells.bind(this);
  }
  private _initSocketEvent() {
    this._openEvent();
    this._takeMessageEvent();
    this._closeEvent();
  }
  private _openEvent() {
    this.socket.onopen = () => {
      this.isConnect = true;
      console.log("WebSocket connection is opened");
    };
  }
  private _closeEvent() {
    this.socket.onclose = () => {
      sessionStorage.removeItem(this.PLAYERKEY);
      sessionStorage.removeItem(this.GAMEKEY);
      this.isConnect = false;
      console.log("webSocket connection was closed");
    };
  }
  private _initSocketConnect() {
    return new WebSocket(this.domain);
  }
  public createGame(obj: CreateGame_T) {
    const isStorage = this.isStorage();
    if (!isStorage) {
      const data = JSON.stringify([MessageSocket_E.CREATE, obj]);
      this._sentMessage(data);
    } else {
      return;
    }
  }
  public joinGame(obj: { _id: string; playerTwoName: string}) {
    const isStorage = this.isStorage();
    if (!isStorage) {
      const data = JSON.stringify([MessageSocket_E.JOIN, obj]);
      this._sentMessage(data);
    } else {
      return;
    }
  }
  public deleteGame() {
    const isStorage = this.isStorage();
    if (isStorage) {
      const _id = sessionStorage.getItem(this.GAMEKEY);
      sessionStorage.removeItem(this.PLAYERKEY);
      sessionStorage.removeItem(this.GAMEKEY);
      const data = JSON.stringify([MessageSocket_E.DELETE, { _id }]);
      this._sentMessage(data);
    }
  }
  public sendSells(obj: {}) {
    // public sendSells(obj: { sells: Sell_I[]; typeMarker: boolean }) {
    // const data = JSON.stringify([MessageSocket_E.SELLS, obj]);
    const data = JSON.stringify([MessageSocket_E.SELLS, { ...obj }]);
    this._sentMessage(data);
  }
  private isStorage() {
    const playerKey = sessionStorage.getItem(this.PLAYERKEY);
    const gameKey = sessionStorage.getItem(this.GAMEKEY);
    const result = !!playerKey && !!gameKey;
    return result;
  }
  private _takeMessageEvent() {
    this.socket.onmessage = (event) => {
      const message:
        | [GiveMessage_E.TOSTORAGE, Client_I]
        | [GiveMessage_E.TOCONNECT, CreateGame_T] = JSON.parse(event.data);
      switch (message[0]) {
        case GiveMessage_E.TOSTORAGE:
          this.takeMesSaveToStor(message[1]);
          break;
        case GiveMessage_E.TOCONNECT:
          this.takeMesStatusConnect(message[1]);
          break;
      }
    };
  }
  private _sentMessage(mes: string) {
    this.socket.send(mes);
  }
  private takeMesSaveToStor(obj: Client_I) {
    sessionStorage.setItem(this.PLAYERKEY, obj[Session_st_E.PLAYERKEY]);
    sessionStorage.setItem(this.GAMEKEY, obj[Session_st_E.GAMEKEY]);
  }
  private takeMesStatusConnect(obj: CreateGame_T) {
    this.gameData = obj;
  }
}


