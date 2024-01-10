import React, { useContext,useRef, } from 'react';
import style from './ModalGameHuman.module.scss'
import { GameContext } from '#reducers/tic-tac-toe/context'
import { ActionType_E } from '#reducers/tic-tac-toe/actions'
import { useCustomHook } from './customHooks'
import { CSSTransition } from 'react-transition-group'

import MessageModal from '#archichecture/component/messageModal/MessageModal';
// import MessageNoWinner from '#archichecture/component/messageNoWinner/MessageNoWinner';
import './transition.scss'


type PropsT = {

}
const ModalGameHuman: React.FC<PropsT> = () => {
  //state.modalWindow is the trigger for calling modal message
  
  const { state, dispatch } = useContext(GameContext)
  
  const wrapRef = useRef<HTMLDivElement>(null)
  useCustomHook(wrapRef)


  const myIN = Boolean(state.modalWindow)

  return (
    <div
      className={style.wrapper}
      ref={wrapRef}
      onClick={(e) => {
        dispatch({
          type: ActionType_E.TuggleModalWindow,
          payload: null
        })
      }}
    >

      <CSSTransition
        in={myIN}
        timeout={2000}
        classNames={"style"}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <MessageModal />
      </CSSTransition>
      

    </div>
  );
}
export default ModalGameHuman;