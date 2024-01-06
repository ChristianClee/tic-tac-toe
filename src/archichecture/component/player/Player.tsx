import React from 'react';
import style from './Player.module.scss'

type PropsT = {
  name: string;
  scope: number
}

const Player:React.FC<PropsT> = ({name, scope}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.inscript}> { name } </div>
      <div className={style.count}> {scope } </div>
    </div>
  );
}
export default Player;