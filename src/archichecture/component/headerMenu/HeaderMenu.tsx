import React, { useContext } from 'react';
import style from './HeaderMenu.module.scss'
import { GameContext } from '#reducers/tic-tac-toe/context'
import { ActionType_E } from '#reducers/tic-tac-toe/actions'
import { MenuLink_E } from '#constants/tic-tac-toe-base/constNames'

type PropsT = {

}
const HeaderMenu: React.FC<PropsT> = () => {
  const { state, dispatch } = useContext(GameContext)
  const first = MenuLink_E.GAMEMODE === state.menuLink
  const second = MenuLink_E.INTERACTIVEGAME === state.menuLink

  function onclick(str:MenuLink_E) {
    dispatch({
      type: ActionType_E.ChangeMenuLink,
      payload: str
    })
  }

  return (
    <div
      className={style.wrapper}
    >
      <div
        className={first ? [style.link, style.activeLink].join(' ') : style.link}
        onClick={() => onclick(MenuLink_E.GAMEMODE)}
      >Game mode</div>
      <div
        className={second ? [style.link, style.activeLink].join(' ') : style.link}
        onClick={() => onclick(MenuLink_E.INTERACTIVEGAME)}
      >Opponent</div>
    </div>
  );
}
export default HeaderMenu;