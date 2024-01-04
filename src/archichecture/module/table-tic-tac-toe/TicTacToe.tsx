import React, {useEffect, useState} from 'react';
import style from './TicTacToe.module.scss';
import { GameContext } from '#reducers/context';
import { useContext } from 'react';
import TheSell from '#archichecture/component/theSell/TheSell';
import { Utilits } from './utilits';



type Props = {
}

const TicTacToe: React.FC<Props> = () => {
  const { state } = useContext(GameContext)
  const rows = Math.sqrt(state.sells.length)
  useEffect(() => {

    if (state.currentGame === 0) {
      const win = Utilits.getWinner(state.sells)
      // console.log(win)


      
    } else if (state.currentGame === 1) {
      
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