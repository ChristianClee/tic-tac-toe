import React from 'react';
import style from './ListGames.module.scss'
import {ListElem_I} from '#archichecture/component/messageAddToGame/types'
import ListElement from '#archichecture/ui/listElement/ListElement';

type PropsT = {
  list: ListElem_I[],
  func: () => void
}
const ListGames:React.FC<PropsT> = ({list, func}) => {
  return (
    <div
      className={style.wrapper}
    >
      {list.map((item, index) => (
        <ListElement
          key={index.toString()}
          func ={func}
          elem={ item }
        />
        )
      )}
    </div>
  );
}
export default ListGames;