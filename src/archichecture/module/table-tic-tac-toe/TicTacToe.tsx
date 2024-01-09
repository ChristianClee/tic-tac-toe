import React, { useContext } from 'react';
import style from './TicTacToe.module.scss';
import { GameContext } from '#reducers/tic-tac-toe/context';
import TheSell from '#archichecture/component/theSell/TheSell';
import { useCustomHook } from "./useCustomHooks"


type Props = {
}


const TicTacToe: React.FC<Props> = () => {
  const { state, dispatch } = useContext(GameContext)
  const rows = Math.sqrt(state.sells.length)
  
  useCustomHook()

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