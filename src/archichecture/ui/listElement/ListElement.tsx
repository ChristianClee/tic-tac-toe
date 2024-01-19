import React, { useState } from 'react';
import style from './ListElement.module.scss'
import {ListElem_I} from '#archichecture/component/messageAddToGame/types'

type PropsT = {
  elem: ListElem_I
  func: ()=>void
}
const ListElement: React.FC<PropsT> = ({ elem, func }) => {
  // const [style, setStyle] = useState<boolean>(false)
  return (
    <div
      className={style.wrapper}
      onClick={()=>func()}
    >
      <p>{elem.gameName}</p>
      <p>{elem.time}</p>
    </div>
  );
}
export default ListElement;