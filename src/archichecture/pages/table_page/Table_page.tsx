import React, { useState, useReducer } from 'react';
import style from './Table_page.module.scss'
import TicTacToe from '#archichecture/module/table-tic-tac-toe/TicTacToe';
import DashBoard from '#archichecture/module/tic-tac-toy-dashboard/DashBoard';
import { GameContext } from "#reducers/tic-tac-toe/context"
import { TicTacReducer } from '#reducers/tic-tac-toe/reduser'
import { initialGameState } from '#reducers/tic-tac-toe/state'
import Menu from '#archichecture/component/menu/Menu';

const Table_page: React.FC = () => {
  const [state, dispatch] = useReducer(TicTacReducer, initialGameState)

  return (
    <GameContext.Provider value={{state, dispatch}}>
      <div className={style.wrapper}>
        <div className={style.flexCont}>
          <DashBoard />
          <TicTacToe />
          <Menu/>
        </div>
      </div>
    </GameContext.Provider>
  );
}
export default Table_page;