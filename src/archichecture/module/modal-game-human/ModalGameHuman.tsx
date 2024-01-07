import React, { useContext, useEffect, useRef, useState } from 'react';
import style from './ModalGameHuman.module.scss'
import { GameContext } from '#reducers/tic-tac-toe/context'
import { ActionType_E } from '#reducers/tic-tac-toe/actions'
import { Tic_tac_opponent_E } from '#constants/tic-tac-toe-base/constNames'
import {useCustomHook } from './customHooks'


type PropsT = {

}
const ModalGameHuman: React.FC<PropsT> = () => {
  const { state, dispatch } = useContext(GameContext)
  // const styleStatus = state.modalWindow === Tic_tac_opponent_E.HUMAN
  const wrapRef = useRef<HTMLDivElement>(null)
  

  useCustomHook( wrapRef)



  return (
    <div
      className={style.wrapper}
      ref={wrapRef}
      onClick={() => {
        // dispatch({
        //   type: ActionType_E.ChengeMode
        // })
      }}
    >
      <div className={state.modalWindow? [style.message, style.activeMess].join(" ") : style.message}>
         hello
      </div>

    </div>
  );
}
export default ModalGameHuman;