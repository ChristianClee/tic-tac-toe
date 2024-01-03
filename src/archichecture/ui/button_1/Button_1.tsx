import React from 'react';
import style from './Button_1.module.scss'



type PropsT = {
  text: string;  
}
const Button_1:React.FC<PropsT> = ({text}) => {
  return (
    <button className={style.wrapper}>
      {text}
    </button>
  );
}
export default Button_1;