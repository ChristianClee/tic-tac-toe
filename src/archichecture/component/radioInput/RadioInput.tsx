import React from 'react';
import style from './RadioInput.module.scss'
import { GameContext } from '#reducers/context'
import { useContext } from 'react';
import { ActionType_E } from '#reducers/actions'
import { Utilits } from './utilits'
import { Tic_tac_modes_E } from '#constants/tic-tac-toe-base-answer/constNames'

type PropsT = {
  text: string;
  index: Tic_tac_modes_E;
  modeGame: Tic_tac_modes_E;
}

const RadioInput: React.FC<PropsT> = ({ text, index, modeGame }) => {
  const { dispatch } = useContext(GameContext)
  const result:boolean = index === modeGame
  

  return (
    <div className={style.wrapper}>

      <div className={result? [style.label, style.labelActive].join(" ") : style.label}>{text}</div>
      <div
        className={style.window}
        onClick={() => {
          dispatch({
            type: ActionType_E.ChengeGame,
            payload: { currentGame:index, sells: Utilits.getCount(index)}
          }) }}
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