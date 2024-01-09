import React from 'react';
import style from './MessageNoWinner.module.scss'
import TheChest from '#archichecture/ui/theChest/TheChest';
import TheNull from '#archichecture/ui/theNull/TheNull';


type PropsT = {
  // win:
}
const MessageNoWinner:React.FC<PropsT> = () => {
  return (
    <div className={style.wrapper}>
      <p className={style.title}>No Winner</p>
      <div className={style.picturesContainer}>
        <div className={[style.container, style.left].join(' ') }>
          <TheChest moving={true } />
        </div>
        <div className={[style.container, style.right].join(' ')}>
          <TheNull moving={true }/>
        </div>
      </div>
      <p className={style.textScope}>The Owner of game is Ilya Mishkov</p>
      {/* <p className={style.textScope}>current count is</p> */}
    </div>
  );
}
export default MessageNoWinner;