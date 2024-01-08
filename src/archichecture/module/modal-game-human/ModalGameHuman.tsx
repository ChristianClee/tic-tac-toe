import React, { useContext, useEffect, useRef, useState } from 'react';
import style from './ModalGameHuman.module.scss'
import { GameContext } from '#reducers/tic-tac-toe/context'
import { ActionType_E } from '#reducers/tic-tac-toe/actions'
import { Tic_tac_opponent_E } from '#constants/tic-tac-toe-base/constNames'
import {useCustomHook } from './customHooks'
import { CSSTransition } from 'react-transition-group'
import './transitions.scss'

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
        dispatch({
          type: ActionType_E.TuggleModalWindow
        })
      }}
    >
      <CSSTransition
        in={state.modalWindow}
        timeout={750}
        classNames={'ssss'}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <div className={style.message}>
          
          <button
            className={style.buttonOk}
          >
            ok
          </button>
        </div>
      </CSSTransition>
      

    </div>
  );
}
export default ModalGameHuman;