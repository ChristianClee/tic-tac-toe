import React from 'react';
import style from './ListGames.module.scss'
import {ListElem_I} from '#archichecture/component/messageAddToGame/types'
import ListElement from '#archichecture/ui/listElement/ListElement';
import { Game_status_E } from '#reducers/tic-tac-toe/state';

type PropsT = {
  list: ListElem_I[];
  func: () => void;
  func2: React.Dispatch<React.SetStateAction<string>>;
  choise: string;
}
const ListGames: React.FC<PropsT> = ({ list, func,func2,choise }) => {
  console.log(list)
  return (
    <div
      className={style.wrapper}
    >

      {list.map((item, index) => (
        <ListElement
          key={item._id}
          elem={item}
          func={func}
          func2={func2}
          choise={choise}
        />
        )
      )}
    </div>
  );
}
export default ListGames;