import React, {useContext} from 'react';
import style from './Menu.module.scss'
import {CommonContext} from '#reducers/common/context'
import { GameContext } from '#reducers/tic-tac-toe/context'
import Burger from '../../ui/burger_button/Burger';
import ChoiceMode from '#archichecture/component/choice_mode/ChoiceMode';
import HeaderMenu from '#archichecture/component/headerMenu/HeaderMenu';
import RadioInput from '#archichecture/component/radioInput/RadioInput';
import { Tic_tac_modes_E, MenuLink_E, Tic_tac_opponent_E } from '#constants/tic-tac-toe-base/constNames';

type PropsT = {

}
const Menu: React.FC<PropsT> = () => {
  const { state, dispatch } = useContext(CommonContext)
  const {state: state_game, dispatch:dispatch_game} = useContext(GameContext)

  return (
    <div
      className={state.burgerState? [style.wrapper, style.activeWrap].join(' ') : style.wrapper}
    >
      <HeaderMenu/>

      {/* <ChoiceMode>
      </ChoiceMode> */}
      {
        state_game.menuLink === MenuLink_E.GAMEMODE ?
          <div className={style.choise}>
            <RadioInput text={"3 to 3"} index={Tic_tac_modes_E.ONE} modeGame={state_game.currentGame} />
            <RadioInput text={"5 to 5"} index={Tic_tac_modes_E.TWO} modeGame={state_game.currentGame} />
          </div>
          
          :
          state_game.menuLink === MenuLink_E.INTERACTIVEGAME ?
            <>
              <div className={style.choise}>
                <RadioInput text={"computer"} index={Tic_tac_opponent_E.COMPUTER} modeGame={state_game.modeGame}/> 
                <RadioInput text={"friend"} index={Tic_tac_opponent_E.HUMAN} modeGame={state_game.modeGame} /> 
                <div className={style.connectBlock}>
                  <button className={style.ss}>
                    create game
                  </button>
                  <button className={style.ss}>
                    add to game
                  </button>
                </div>
                
              </div>
    
  
            </>
            
            :
            null
      }
      


      <div className={style.burgerPosition}>
        <Burger isBurger={!state.burgerState} color={'black'} />
      </div>

    </div>
  );
}
export default Menu;