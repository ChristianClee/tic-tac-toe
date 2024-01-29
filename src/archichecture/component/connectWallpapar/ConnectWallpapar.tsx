import React from 'react';
import style from './ConnectWallpapar.module.scss'


type PropsT = {
  children: React.ReactNode;
  text: string
}
const ConnectWallpapar:React.FC<PropsT> = ({children, text}) => {
  return (
    <div className={style.interactiveGame}>
      <p className={style.reject}> {text} </p>
      {
        children
      }
    </div>
  );
}
export default ConnectWallpapar;