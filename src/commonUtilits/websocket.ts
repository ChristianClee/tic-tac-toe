import { serverPath } from '#commonUtilits/getPathServer'
import { Session_st_E } from "#constants/tic-tac-toe-base/constNames";
import { Game_status_E, Options_I } from '#reducers/tic-tac-toe/state';
import { time } from 'console';

// import WebSocket from "ws";


enum MessageSocket_E {
  CREATE = 'creategame',
  JOIN = 'joingame',
  DELETE = 'deletegame',
}


enum GiveMessage_E {
  TOSTORAGE = "tostorage",
  TOCONNECT = "toconnect",
}


export interface Client_I {
  playerKey: string;
  gameKey: string;
}

export type CreateGame_T = {
  gameName: string;
  playerOneName: string;
  options: Options_I;
};

export interface GameData_I extends CreateGame_T {
  _id: string;
  playerOne: string | null;
  playerTwo: string | null;
  playerTwoName: string | null;
  gameStatus: Game_status_E;
}












export class WebSocketInit {
  private domain: string;
  private socket: WebSocket;
  private PLAYERKEY: Session_st_E.PLAYERKEY;
  private GAMEKEY: Session_st_E.GAMEKEY;
  public isConnect: boolean;
  // public gameStatus: GameStatus_E | null;
  public gameData: GameData_I | null;

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
  public joinGame(_id: string) {
    const isStorage = this.isStorage();
    if (!isStorage) {
      const data = JSON.stringify([MessageSocket_E.JOIN, { _id }]);
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
        | [GiveMessage_E.TOCONNECT, GameData_I] = JSON.parse(event.data);
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
  private takeMesStatusConnect(obj: GameData_I) {
    this.gameData = obj;
  }
}


