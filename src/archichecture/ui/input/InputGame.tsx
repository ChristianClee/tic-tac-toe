import React from 'react';
import style from './InputGame.module.scss'


type PropsT = {
  placeholder: string;
  dispatch: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  id: string;
}
const InputGame: React.FC<PropsT> = ({ placeholder, dispatch, text, id }) => {
  function onchange(e:React.ChangeEvent<HTMLTextAreaElement>) {
    dispatch(e.target.value)
  }


  return (
      <div className={style.wrapper}>
        <textarea
          required={true}
          className={style.nameGame}
          id={id}
          maxLength={20}
          onChange={(e)=>onchange(e)}
          value={text}
        ></textarea>
        <label htmlFor={id} className={style.label}>{placeholder}</label>
      </div>
  );
}
export default InputGame;