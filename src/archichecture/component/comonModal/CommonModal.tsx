import React, {useContext} from 'react';
import style from './CommonModal.module.scss'
import CrossClose from '../crossClose/CrossClose';
import { CommonContext } from '#reducers/common/context';
import { ActionCommon_E } from '#reducers/common/actions';
import MovingButtons from '../movingButtons/MovingButtons';
type PropsT = {

}
const CommonModal: React.FC<PropsT> = () => {
  const { state, dispatch } = useContext(CommonContext)
  const  modalWindow = state.modalWindow
  const modalState = modalWindow? [style.wrapper, style.active ].join(" ") : style.wrapper

  function onclick() {
    console.log(modalWindow)
    if (!modalWindow) return
      dispatch({
        type:ActionCommon_E.TuggleModalWindow
      })
  }

  return (
    <div className={modalState}
      onClick={onclick}
    > 
      
      <MovingButtons myIn={modalWindow} appear={true}>
        <div className={style.message}>
        <CrossClose />
          <div onClick={(e) => {
          e.stopPropagation()
        }}>
          <p className={style.title}>Настройки игры</p>
          <p className={style.par}>Игра имеет два поля</p>
          <ul className={style.list}>
            <li>3 на 3</li>
            <li>5 на 5</li>
        </ul>
          <p className={style.par}>и три реима игры</p>
          <ul className={style.list}>
            <li>- на одном устройстве</li>
            <li>- против компа </li>
            <li>- игра против человека</li>
          </ul>
          <br />
          <br />
          <br />
          <p className={style.comment}>Что бы играть в последнюю, необходимо, одному игроку создать игру, а другому найти её из списка и выбрать </p>
          <p className={style.comment}>Сервер написан таким обзаром, что в 'крестики нолики' могут играть одновременно тысячи пользователей</p>
        </div>
      </div>
      </MovingButtons>


      
    </div> 
  );
}
export default CommonModal;