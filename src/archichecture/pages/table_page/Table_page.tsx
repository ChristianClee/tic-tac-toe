import React, { useReducer, useEffect, useLayoutEffect } from 'react';
import style from './Table_page.module.scss'
// import TicTacToe from '#archichecture/module/table-tic-tac-toe/TicTacToe';
import TicTacToeAll from '#archichecture/module/table-tic-tac-toe-all/TicTacToeAll';
import DashBoard from '#archichecture/module/tic-tac-toy-dashboard/DashBoard';
import { GameContext } from "#reducers/tic-tac-toe/context"
import { TicTacReducer } from '#reducers/tic-tac-toe/reduser'
import { initialGameState } from '#reducers/tic-tac-toe/state'
import { ActionType_E } from '#reducers/tic-tac-toe/actions'
import Menu from '#archichecture/module/menu/Menu';
import ModalGameHuman from '#archichecture/module/modal-game-human/ModalGameHuman';
import { socket } from '#App'
import { Session_st_E, Tic_tac_opponent_E } from "#constants/tic-tac-toe-base/constNames";



const Table_page: React.FC = () => {
  const [state, dispatch] = useReducer(TicTacReducer, initialGameState)
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      const PLAYERKEY = Session_st_E.PLAYERKEY
      const GAMEKEY = Session_st_E.GAMEKEY
      sessionStorage.removeItem(PLAYERKEY)
      sessionStorage.removeItem(GAMEKEY)
    })
    
  }, [])

  useEffect(() => {

    let stopInterval: NodeJS.Timer | null = null
    function clearInt(){
      if (stopInterval) {
          clearTimeout(stopInterval)
        }
    }
    function makeJson(obj:any):string {
      return JSON.stringify(obj)
    }

    let lastVal = socket.gameData
    
    switch (state.modeGame) {
      case Tic_tac_opponent_E.HUMAN:
        stopInterval = setInterval(() => {
          const res = makeJson(lastVal) !== makeJson(socket.gameData)

          if (res) {
            console.log(socket.gameData)
            lastVal = socket.gameData
          } 
        },1000)
      break
      
      default:
        clearInt()
    }
    

 
    return () => clearInt()

  },[state.modeGame])

  return (
    <GameContext.Provider value={{state, dispatch}}>
      <div className={style.wrapper}>
        <div className={style.flexCont}>
          <DashBoard />
          <TicTacToeAll />
          
          <Menu />
          <ModalGameHuman />
        </div>
      </div>
    </GameContext.Provider>
  );
}
export default Table_page;