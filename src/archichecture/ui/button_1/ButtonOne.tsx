import React from 'react';
import style from './ButtonOne.module.scss'
import {ResetFunc_T} from '#commonUtilits/resetFunctions'
import { Game_I } from "#reducers/tic-tac-toe/state"
import { GameActions_T } from "#reducers/tic-tac-toe/actions";

type PropsT = {
  text: string;
  func: ResetFunc_T;
  func2?: () => void;
  state: Game_I;
  
  dispatch: React.Dispatch<GameActions_T>;
}
const ButtonOne: React.FC<PropsT> = ({ text, func, func2, state, dispatch }) => {
  function onclick() {
    func(state, dispatch)
    if (func2) {
      func2()
    }
    
  }
  return (
    <button
      className={style.wrapper}
      onClick={onclick}
    >
      {text}
    </button>
  );
}
export default ButtonOne;