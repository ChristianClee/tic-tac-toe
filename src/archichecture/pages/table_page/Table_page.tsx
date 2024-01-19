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
import { getPathServer } from '#commonUtilits/getPathServer'
import { headersGet } from "#constants/fetching/headers/headers";
import { Session_st_E } from "#constants/tic-tac-toe-base/constNames";


const Table_page: React.FC = () => {
  const [state, dispatch] = useReducer(TicTacReducer, initialGameState)


  useEffect(() => {
    // console.log(state.sessionStorage)
    const domainPath = getPathServer()
    const addPath: string = process.env.REACT_APP_PATH_DELETE_GAME || ""
    const playerKey =  sessionStorage.getItem(Session_st_E.PLAYERKEY)
    const gameKey = sessionStorage.getItem(Session_st_E.GAMEKEY)
    const data = { playerKey, gameKey }
    
    // console.log('data', {...data})

    function fetching() {
      console.log('keys', playerKey && gameKey)
      console.log('path', domainPath + addPath)

      if (playerKey && gameKey) {
        fetch(domainPath + addPath, {
        method: "POST",
        headers: headersGet,
        body: JSON.stringify({...data})
      })
      sessionStorage.removeItem(Session_st_E.GAMEKEY)
      sessionStorage.removeItem(Session_st_E.PLAYERKEY)
      }
    }
    
    window.addEventListener('beforeunload', () => {
      fetching()
    })




  }, [state.sessionStorage])



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