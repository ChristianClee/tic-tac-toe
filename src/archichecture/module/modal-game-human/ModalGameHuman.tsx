import React, { useCallback, useContext,useEffect,useRef, } from 'react';
import style from './ModalGameHuman.module.scss'
import { GameContext } from '#reducers/tic-tac-toe/context'
import { ActionType_E } from '#reducers/tic-tac-toe/actions'
import { useCustomHook } from './customHooks'
import { CSSTransition } from 'react-transition-group'
import MessageModal from '#archichecture/component/messageModal/MessageModal';
import './transition.scss'
import { Modal_message_types_E } from '#constants/tic-tac-toe-base/constNames';
import { socket } from '#App'

type PropsT = {

}
const ModalGameHuman: React.FC<PropsT> = () => {
  //state.modalWindow is the trigger for calling modal message
  
  const { state, dispatch } = useContext(GameContext)
  const clickRef = useRef<boolean>(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  useCustomHook(wrapRef)
  const isCreateGame = state.modalWindow === Modal_message_types_E.CREATEGAME
  const isMenu = state.modalWindow === Modal_message_types_E.CREATEGAME
    || state.modalWindow === Modal_message_types_E.ADDTOGAME


  const myIN = Boolean(state.modalWindow)

  useEffect(() => {
    if (!isMenu) {
      if (clickRef.current) {
        clickRef.current = false
      }
      setTimeout(() => {
        clickRef.current = true
      },2000)
    }
  },[state.modalWindow])


  const removeModal = useCallback(()=>{
    dispatch({
      type: ActionType_E.TuggleModalWindow,
      payload: null
    })
    console.log("asdsadsadsa")
  },[])
  
  function removeModealTime(e:React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (isMenu) {
      removeModal()
    } else {
      if (clickRef.current) {
        removeModal()
      } 
    }
  }
  function deleteGameServer() {
    if (isCreateGame) {
      socket.deleteGame()
      dispatch({
        type: ActionType_E.StatusGameInteractive,
        payload: null
      })
    }
  }

  

  return (
    <div
      className={style.wrapper}
      ref={wrapRef}
      onClick={(e) => {
        removeModealTime(e)
        deleteGameServer()
      }}
    >
      <CSSTransition
        in={myIN}
        timeout={(isMenu)? 750 : 2000}
        classNames={(isMenu) ? "style1" : "style2"}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <MessageModal />
      </CSSTransition>
      

    </div>
  );
}
export default ModalGameHuman;