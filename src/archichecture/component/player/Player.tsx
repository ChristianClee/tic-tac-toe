import React from 'react';
import style from './Player.module.scss'


const Player:React.FC = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.inscript}> player 1</div>
      <div className={style.count}> 0 </div>
    </div>
  );
}
export default Player;