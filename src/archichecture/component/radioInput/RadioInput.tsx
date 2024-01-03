import React from 'react';
import style from './RadioInput.module.scss'
import { GameContext } from '#reducers/context'
import { useContext } from 'react';
import { ActionType_E } from '#reducers/actions'
import { Utilits } from './utilits'


type PropsT = {
  text: string;
  index: number;
  modeGame: number;
}
const RadioInput: React.FC<PropsT> = ({ text, index,  modeGame }) => {
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
            payload: { currentGame:index, countSells: Utilits.getCount(index)}
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