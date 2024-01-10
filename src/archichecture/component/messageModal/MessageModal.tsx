import React,{ useContext, useRef } from 'react';
import style from './MessageModal.module.scss'
import { GameContext } from '#reducers/tic-tac-toe/context'
import { Tic_tac_opponent_E,Modal_message_types_E } from '#constants/tic-tac-toe-base/constNames'
import MessageNoWinner from '#archichecture/component/messageNoWinner/MessageNoWinner';
// import MessageModal from '#archichecture/component/messageModal/MessageModal';
import MessageWinner from '#archichecture/component/messageWinner/MessageWinner';


type PropsT = {

}
const MessageModal: React.FC<PropsT> = () => {
  const { state } = useContext(GameContext)

  const componentRef = useRef<React.ReactNode>(<div></div>) 

  switch (true) {
    case state.modalWindow === Modal_message_types_E.ADDTOGAME: 
      // componentRef.current = <MessageNoWinner />
      break
    case state.modalWindow === Modal_message_types_E.CREATEGAME:
      break
    case state.modalWindow === Modal_message_types_E.NOWINNER:
      componentRef.current = <MessageNoWinner />
      break
    case state.modalWindow === Modal_message_types_E.WINNER:
      componentRef.current = <MessageWinner/> 
      break
  }

  return (
    <div
      className={style.wrapper}
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
     {componentRef.current} 
    </div>
  );
}
export default MessageModal;