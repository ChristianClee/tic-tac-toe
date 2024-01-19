import React from 'react';
import style from './ButtonFetchig.module.scss'




type PropsT = {
  func: ()=>void;
  fetchFunc: () => void;

}




const ButtonFetchig: React.FC<PropsT> = ({ func, fetchFunc }) => {

  function onclick() {
    fetchFunc()
    func()
  }


  return (
    <button
      className={style.wrapper}
      onClick={() => { 
        onclick()
      }}
    >
      Create
    </button>
  );
}
export default ButtonFetchig;