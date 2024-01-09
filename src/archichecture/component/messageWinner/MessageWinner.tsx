import React from 'react';
import style from './MessageWinner.module.scss'


type PropsT = {

}
const MessageWinner:React.FC<PropsT> = () => {
  return (
    <div
      className={style.wrapper}
      onClick={(e) => {
        console.log('inner')
        
      }}
    >
      winner
    </div>
  );
}
export default MessageWinner;