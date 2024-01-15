import React from 'react';
import style from './ButtonFetchig.module.scss'




type PropsT = {
  dispatches: React.Dispatch<React.SetStateAction<string>>[];
  fetchFunc: () => void;

}




const ButtonFetchig: React.FC<PropsT> = ({ dispatches, fetchFunc }) => {

  function onclick() {
    fetchFunc()
    dispatches.forEach(dispatch => {
      dispatch('')
    })
  }


  return (
    <button
      className={style.wrapper}
      onClick={() => { 
        onclick()
      }}
    >Create</button>
  );
}
export default ButtonFetchig;