import React from 'react';
import style from './Button_2.module.scss'


type PropsT = {
  text: string;
}

const Button_2:React.FC<PropsT> = ({text}) => {
  return (
    <button
      className={style.wrapper}
    >
      {text}
    </button>
  );
}
export default Button_2;