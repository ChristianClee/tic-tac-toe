import React,{ useContext, useRef } from 'react';
import style from './MessageWinner.module.scss'
import TheNull from '#archichecture/ui/theNull/TheNull';
import Crown from '#archichecture/ui/crown/Crown';
import {GameContext} from '#reducers/tic-tac-toe/context'
// import {ActionType_E} from '#reducers/tic-tac-toe/actions'
import {Winner_E} from '#constants/tic-tac-toe-base/constNames'
import TheChest from '#archichecture/ui/theChest/TheChest';



type PropsT = {

}
const MessageWinner: React.FC<PropsT> = () => {
  const { state } = useContext(GameContext)
  const iconRef = useRef<React.ReactNode>(<div></div>)

  const isCross = state.lastWinner === Winner_E.CROSS
  const isZerro = state.lastWinner === Winner_E.ZERRO
  let text:string = ''

  switch (true) {
    case isCross:
      text = 'Cross is winner'
      iconRef.current = <TheChest moving={true} />
      break
    case isZerro:
      text = 'Zerro is winner'
      iconRef.current = <TheNull moving={true} />
      break
  }
  


  return (
    <div className={style.wrapper}>
      <p className={style.title}>{text}</p>
      <div className={style.picturesContainer}>

        <div className={[style.container, style.left].join(' ') }>
          <Crown moving={true} />
        </div>
        <div className={[style.container, style.right].join(' ')}>
          {iconRef.current}
        </div>
      </div>
      <p className={style.textScope}>The Owner of game is Ilya Mishkov</p>
      {/* <p className={style.textScope}>current count is</p> */}
    </div>
  );
}
export default MessageWinner;