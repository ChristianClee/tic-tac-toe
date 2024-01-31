import React, { useReducer, useEffect } from 'react';
import style from './Table_page.module.scss'
// import TicTacToe from '#archichecture/module/table-tic-tac-toe/TicTacToe';
import TicTacToeAll from '#archichecture/module/table-tic-tac-toe-all/TicTacToeAll';
import DashBoard from '#archichecture/module/tic-tac-toy-dashboard/DashBoard';
import { GameContext } from "#reducers/tic-tac-toe/context"
import { TicTacReducer } from '#reducers/tic-tac-toe/reduser'
import { Player_E, initialGameState } from '#reducers/tic-tac-toe/state'
import { ActionType_E } from '#reducers/tic-tac-toe/actions'
import Menu from '#archichecture/module/menu/Menu';
import ModalGameHuman from '#archichecture/module/modal-game-human/ModalGameHuman';
import { socket } from '#App'
import { Session_st_E, Tic_tac_opponent_E } from "#constants/tic-tac-toe-base/constNames";
import Questions from '#archichecture/component/questions/Questions';




const Table_page: React.FC = () => {
  const [state, dispatch] = useReducer(TicTacReducer, initialGameState)


  return (
    <GameContext.Provider value={{ state, dispatch }}>
      <div className={style.wrapper}>
        <div className={style.body}>
          <div className={style.flexCont}>
            <TicTacToeAll />
            
            <DashBoard />
            <Menu />
            <ModalGameHuman />
            
          </div>
        </div>
        <Questions/>
      </div>
      
      
    </GameContext.Provider>
  );
}
export default Table_page;