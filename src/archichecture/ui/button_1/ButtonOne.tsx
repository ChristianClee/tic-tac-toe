import React from 'react';
import style from './ButtonOne.module.scss'
import {ResetFunc_T} from '#commonUtilits/resetFunctions'
import { Game_I } from "#reducers/tic-tac-toe/state"
import { GameActions_T } from "#reducers/tic-tac-toe/actions";

type PropsT = {
  text: string;
  func: ResetFunc_T;
  state: Game_I;
  dispatch: React.Dispatch<GameActions_T>;
}
const ButtonOne:React.FC<PropsT> = ({text, func, state, dispatch}) => {
  return (
    <button
      className={style.wrapper}
      onClick={() => func(state, dispatch)}
    >
      {text}
    </button>
  );
}
export default ButtonOne;