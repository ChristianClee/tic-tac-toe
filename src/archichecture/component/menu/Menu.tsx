import React, {useContext} from 'react';
import style from './Menu.module.scss'
import {CommonContext} from '#reducers/common/context'
import Burger from '../burger/Burger';


type PropsT = {

}
const Menu: React.FC<PropsT> = () => {
  const { state, dispatch } = useContext(CommonContext)
  
  return (
    <div
      className={state.burgerState? [style.wrapper, style.activeWrap].join(' ') : style.wrapper}
    >
      <div className={style.burgerPosition}>
        <Burger isBurger={!state.burgerState} color={'black'} />
      </div>

    </div>
  );
}
export default Menu;