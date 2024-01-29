import React from 'react';
import style from './ButtonFour.module.scss'
import {ResetFunc_T} from '#commonUtilits/resetFunctions'
import { Game_I } from "#reducers/tic-tac-toe/state"
import { GameActions_T } from "#reducers/tic-tac-toe/actions";



type PropsT = {
  text: string;
  func: ResetFunc_T;
  state: Game_I;
  dispatch: React.Dispatch<GameActions_T>;
}
const ButtonFour: React.FC<PropsT> = ({ text, func, state, dispatch }) => {
  function onclick() {
    func(state,dispatch)
  }
  return (
    <button
      onClick={onclick}
      className={style.wrapper}
    >
      {text}
    </button>
  );
}
export default ButtonFour;