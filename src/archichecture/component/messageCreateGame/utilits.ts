import { headersGet } from "#constants/fetching/headers/headers";
import { GameActions_T, ActionType_E } from "#reducers/tic-tac-toe/actions";
import { Session_st_E } from "#constants/tic-tac-toe-base/constNames";
// import {WebSocketInit} from '#commonUtilits/webSocket'
import { CreateGame_T, WebSocketInit } from "#commonUtilits/websocket";

// import { socket } from "#archichecture/component/messageCreateGame/webSocket"

// const domain = serverPath.Http()

type fetchCreateGame_T = (dateToServer: CreateGame_T,
  func:(obj:CreateGame_T)=>void) => () => void;


export const fetchCreateGame:fetchCreateGame_T= (dateToServer, func) => {
  return () => {
    func(dateToServer);
  };
}
