import React from 'react';
import style from './Button_2.module.scss'


type PropsT = {
  text: string;
  func: ()=> void
}

const Button_2:React.FC<PropsT> = ({text, func}) => {
  return (
    <button
      className={style.wrapper}
      onClick={func}
    >
      {text}
    </button>
  );
}
export default Button_2;