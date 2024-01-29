import { useEffect, useContext, useState } from "react";
import { GameContext } from "#reducers/tic-tac-toe/context";
import { CommonContext } from "#reducers/common/context";
import { ActionCommon_E } from "#reducers/common/actions";
import { Session_st_E, Tic_tac_opponent_E } from "#constants/tic-tac-toe-base/constNames";
import { ActionType_E } from "#reducers/tic-tac-toe/actions";
import { Game_status_E, Player_E } from "#reducers/tic-tac-toe/state";
import { socket } from "#App";
import { CreateGame_T } from "#commonUtilits/websocket";

export function useCustomHook() {
  const {state, dispatch} = useContext(GameContext)
  const { state: stateGlob, dispatch: dispatchGlob } =
    useContext(CommonContext);
 
  useEffect(() => {
    let stopInterval: NodeJS.Timer | null = null;
    let lastVal = socket.gameData;
    
    function clearInt() {
      if (stopInterval) {
        clearTimeout(stopInterval);
      }
    }
    
    function playerNumber(obj: CreateGame_T | null) {
      // console.log("obj", obj);
      if (obj) {
        dispatch({
          type: ActionType_E.SetMarkerItem,
          payload: obj.sells,
        });
        dispatch({
          type: ActionType_E.SetMarker,
          payload: obj.typeMarker,
        });
        dispatch({
          type: ActionType_E.ChengeGame,
          payload: obj.currentGame,
        });

          dispatch({
            type: ActionType_E.SetWinnerCombinatios,
            payload: [],
          });
          dispatch({
            type: ActionType_E.SetnoWinner,
            payload: false,
          });
          dispatch({
            type: ActionType_E.SetLastWinner,
            payload: null,
          });
        
          dispatch({
            type: ActionType_E.StatusGameInteractive,
            payload: obj.gameStatus
          });
          
          dispatch({
            type: ActionType_E.SetPlayerOneName,
            payload: obj.playerOneName
          })
        
          dispatch({
            type: ActionType_E.SetPlayerTwoName,
            payload: obj.playerTwoName
          })
            
      }

       

       const playerOne = obj?.playerOne;
       const playerTwo = obj?.playerTwo;

       const myNumber: string | null = sessionStorage.getItem(
         Session_st_E.PLAYERKEY
       );

       if ((playerOne && playerTwo) || myNumber) {
         switch (myNumber) {
           case playerOne:
             dispatch({
               type: ActionType_E.PlayerNumber,
               payload: Player_E.PLAYERONE,
             });
             return playerOne;
           case playerTwo:
             dispatch({
               type: ActionType_E.PlayerNumber,
               payload: Player_E.PLAYERTWO,
             });
         }
       }
     }

   

    switch (state.modeGame) {
      case Tic_tac_opponent_E.HUMAN:
        stopInterval = setInterval(() => {
          const res = makeJson(lastVal) !== makeJson(socket.gameData);
          if (res) {
            playerNumber(socket.gameData);
            lastVal = socket.gameData;
          }
        }, 500);
        break;

      default:
        clearInt();
    }

    return () => clearInt();
  }, [state.modeGame]);


  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      const PLAYERKEY = Session_st_E.PLAYERKEY;
      const GAMEKEY = Session_st_E.GAMEKEY;
      sessionStorage.removeItem(PLAYERKEY);
      sessionStorage.removeItem(GAMEKEY);
    });
  }, []);

  useEffect(() => {
    if (state.optionsOneToOne.gameStatus === Game_status_E.PLAYING) {
      dispatch({
        type: ActionType_E.TuggleModalWindow,
        payload: null,
      });
      dispatchGlob({
        type: ActionCommon_E.CloseBurger
      })
    }
  }, [state.optionsOneToOne.gameStatus]);


 
  function makeJson(obj: any): string {
    return JSON.stringify(obj);
  }
}


