import React from 'react';
import style from './RadioInput.module.scss'
import { GameContext } from '#reducers/tic-tac-toe/context'
import { useContext } from 'react';
import { ActionType_E } from '#reducers/tic-tac-toe/actions'
import { Utilits } from '#commonUtilits/utilits'
import { Tic_tac_modes_E, Tic_tac_opponent_E } from '#constants/tic-tac-toe-base/constNames'
import Button_2 from '#archichecture/ui/button_2/Button_2';
import { resetGame } from '#commonUtilits/resetFunctions'


type PropsT = {
  text: string;
  index: Tic_tac_modes_E | Tic_tac_opponent_E;
  modeGame: Tic_tac_modes_E | Tic_tac_opponent_E;
  modalWindow?: true
  func?: ()=> void
}

const RadioInput: React.FC<PropsT> = ({ text, index, modeGame, func }) => {
  const { state, dispatch } = useContext(GameContext)
  const result:boolean = index === modeGame
 

  function onclick() {
    if (index.toUpperCase() in Tic_tac_modes_E) {
      resetGame(state, dispatch)

      dispatch({
        type: ActionType_E.ChengeGame,
        //@ts-ignore
        payload: index
      })
      dispatch({
        type: ActionType_E.SetMarkerItem,
        //@ts-ignore
        payload: Utilits.getCountSells(index)
      })
    } else if (index.toUpperCase() in Tic_tac_opponent_E) {
      resetGame(state, dispatch)
      dispatch({
        type: ActionType_E.ChengeMode,
        //@ts-ignore
        payload: index,
      })
      
    
      
    }
    if (func) {
        func()
    }
    dispatch({
        type: ActionType_E.TuggleModalWindow,
        payload: null
      })
  }


  return (
    <div className={style.wrapper}>

      <div className={style.button}>
        <Button_2 text={text} func={onclick} />
      </div>
      
      <div className={style.radio}>
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
      
    </div>
  );
}
export default RadioInput;