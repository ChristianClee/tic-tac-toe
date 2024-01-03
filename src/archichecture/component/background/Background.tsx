import React from 'react';
import style from './Background.module.scss'
import background from '#assets/jpg/background_game.jpg'


const Background:React.FC = () => {
  return (

      <img className={style.background} src={background} alt="" />

  );
}
export default Background;