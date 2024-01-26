import React, { useState } from 'react';
import style from './ListElement.module.scss'
import {ListElem_I} from '#archichecture/component/messageAddToGame/types'

type PropsT = {
  elem: ListElem_I
  func: () => void
  func2: React.Dispatch<React.SetStateAction<string>>
  choise: string
}
const ListElement: React.FC<PropsT> = ({ elem, func, func2, choise }) => {
  const styleActive = choise === elem._id

  function onclick() {
    func()
    func2(elem._id)
  }

  return (
    <div
      className={styleActive? [style.wrapper, style.active].join(" ") : style.wrapper}
      onClick={onclick}
    >
      <p className={style.gameName}>{elem.gameName}</p>
      <p className={style.time}>{elem.time}</p>
    </div>
  );
}
export default ListElement;