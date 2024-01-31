import React, { useContext } from 'react';
import style from './Questions.module.scss'
import {ReactComponent as Quest} from '#assets/svg/question.svg'
import { CommonContext } from '#reducers/common/context';
import { ActionCommon_E } from '#reducers/common/actions';

type PropsT = {

}
const Questions: React.FC<PropsT> = () => {
  const { state, dispatch } = useContext(CommonContext)

  function onclick() {
    dispatch({
      type:ActionCommon_E.TuggleModalWindow
    })
  }

  return (
    <div
      className={style.wrapper}
    >
      <Quest
        className={style.question}
        onClick={onclick}
      />
   

    </div>
  );
}
export default Questions;