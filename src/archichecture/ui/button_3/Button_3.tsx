import React, {useContext} from 'react';
import style from './Button_3.module.scss'
import { GameContext } from '#reducers/tic-tac-toe/context'
import { ActionType_E } from '#reducers/tic-tac-toe/actions'

type PropsT = {
  text: string;
  status: boolean;
}

const Button_3: React.FC<PropsT> = ({ text, status }) => {
  const {state, dispatch} = useContext(GameContext)


  return (
    <button
      className={status ? [style.wrapper, style.activeWrap].join(' ') : style.wrapper}
      onClick={() => {
        dispatch({
          type:ActionType_E.TuggleModalWindow,
        })
      }}
    >
      {text}
    </button>
  );
}
export default Button_3;