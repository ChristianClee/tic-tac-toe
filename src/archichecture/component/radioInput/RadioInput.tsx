import React from 'react';
import style from './RadioInput.module.scss'
import { GameContext } from '#reducers/tic-tac-toe/context'
import { useContext } from 'react';
import { ActionType_E } from '#reducers/tic-tac-toe/actions'
import { Utilits } from './utilits'
import { Tic_tac_modes_E, Tic_tac_opponent_E } from '#constants/tic-tac-toe-base/constNames'

type PropsT = {
  text: string;
  index: Tic_tac_modes_E | Tic_tac_opponent_E;
  modeGame: Tic_tac_modes_E | Tic_tac_opponent_E;
  modalWindow?: true
}

const RadioInput: React.FC<PropsT> = ({ text, index, modeGame }) => {
  const { dispatch, state } = useContext(GameContext)
  const result:boolean = index === modeGame
 

  function onclick() {
    if (index.toUpperCase() in Tic_tac_modes_E ) {
      dispatch({
        type: ActionType_E.ChengeGame,
        //@ts-ignore
        payload: { currentGame:index, sells: Utilits.getCount(index)}
      })

    } else if(index.toUpperCase() in Tic_tac_opponent_E) {
      dispatch({
        type: ActionType_E.ChengeMode,
        //@ts-ignore
        payload: index,
      })
    
    }
  }



  return (
    <div className={style.wrapper}>

      {/* <div className={result? [style.label, style.labelActive].join(" ") : style.label}>{text}</div> */}
      <div className={style.label}>{text}</div>
      <div
        className={style.window}
        onClick={onclick}
      >
        {
          result
            &&
          <span className={style.marker}></span>  
        }
      </div>
    </div>
  );
}
export default RadioInput;