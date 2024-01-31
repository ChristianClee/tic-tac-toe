import React, { useRef } from 'react';
import style from './ListGames.module.scss'
import {ListElem_I} from '#archichecture/component/messageAddToGame/types'
import ListElement from '#archichecture/ui/listElement/ListElement';
import { Game_status_E } from '#reducers/tic-tac-toe/state';

type PropsT = {
  list: ListElem_I[];
  func: (arg:boolean) => void;
  func2: React.Dispatch<React.SetStateAction<string>>;
  choise: string;
}
const ListGames: React.FC<PropsT> = ({ list, func, func2, choise }) => {


  return (
    <>
      {
         list.length? 
        <div className={style.wrapper} >
          {list.map((item, index) => (
            <ListElement
              key={item._id}
              elem={item}
              func={func}
              func2={func2}
              choise={choise}
            />))}
        </div>
        :
        <p className={style.reject}>
            Unfortunatualy there is no aviable games, you can create the new one
        </p>
      }
    </>
  );
}
export default ListGames;