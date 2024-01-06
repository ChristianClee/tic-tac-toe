import React, {useEffect} from 'react';
import style from './TicTacToe.module.scss';
import { GameContext } from '#reducers/tic-tac-toe/context';
import { useContext } from 'react';
import TheSell from '#archichecture/component/theSell/TheSell';
import { Utilits } from './coreGame';
import { Utilits as Utl } from './utilits';

import {ActionType_E } from '#reducers/tic-tac-toe/actions'



type Props = {
}


const TicTacToe: React.FC<Props> = () => {
  const { state, dispatch } = useContext(GameContext)
  const rows = Math.sqrt(state.sells.length)

  useEffect(() => {
    const win = Utilits.getWinner(state.sells, state.currentGame)
    const res = Utilits.getWinnerResult(state.sells, win, state.currentGame)

    if (win) {
      dispatch({
        type: ActionType_E.ChangeScope,
        payload: Utl.getScopeRessult(win, state.scope)
      })
    }
    if (res) {
      dispatch({
        type: ActionType_E.SetWinnerCombinatios,
        payload: res
      })
    }
   

  },[state.sells])

  return (
     <div
        className={style.wrapper}
        style={{
          gridTemplateColumns: `repeat(${rows}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`
        }}
      >
        {
          state.sells.map((item) => {
            return <div
              className={style.elem}
              key={item.key}
            >
              <TheSell key={item.key} item={ item } />
              
            </div>
          })
        }

      </div>
  );
}
export default TicTacToe;