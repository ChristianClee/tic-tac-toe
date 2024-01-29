import React from 'react';
import style from './ButtonFetchig.module.scss'




type PropsT = {
  func: ()=>void;
  webFunc?: () => void;
  text: string;
}




const ButtonFetchig: React.FC<PropsT> = ({ func, webFunc, text }) => {

  function onclick() {
    if (webFunc) {
      webFunc()
    }
    func()
  }


  return (
    <button
      className={style.wrapper}
      onClick={(e) => {
        e.preventDefault()
        onclick()
      }}
    >
      {text}
    </button>
  );
}
export default ButtonFetchig;