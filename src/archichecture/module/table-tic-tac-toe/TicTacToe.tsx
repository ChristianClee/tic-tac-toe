import React, {useEffect} from 'react';
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

    const win = Utilits.getWinner(state.sells, state.currentGame)
    console.log(win)
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