import React, {useState} from 'react';
import style from './TicTacToe.module.scss';
import { GameContext } from '#reducers/context';
import { useContext } from 'react';
import TheSell from '#archichecture/component/theSell/TheSell';
 

type Props = {
}

const TicTacToe: React.FC<Props> = () => {
  const { state } = useContext(GameContext)
  const rows = Math.sqrt(state.countSells)
  // const [typeMarker, setTypeMarker] = useState<boolean>(true)

  return (
     <div
        className={style.wrapper}
        style={{
          gridTemplateColumns: `repeat(${rows}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`
        }}
      >
        {
          Array(state.countSells).fill('').map((item, index) => {
            return <div
              className={style.elem}
              key={index}
            >
              <TheSell key={index} index={ index } />
              
            </div>
          })
        }

      </div>
  );
}
export default TicTacToe;