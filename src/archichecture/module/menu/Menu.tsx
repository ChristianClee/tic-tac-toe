import React, {useCallback, useContext, useEffect, useLayoutEffect, useRef, useState} from 'react';
import style from './Menu.module.scss'
import {CommonContext} from '#reducers/common/context'
import { GameContext } from '#reducers/tic-tac-toe/context'
import Burger from '../../ui/burger_button/Burger';
import ChoiceMode from '#archichecture/component/choice_mode/ChoiceMode';
import HeaderMenu from '#archichecture/component/headerMenu/HeaderMenu';
import RadioInput from '#archichecture/component/radioInput/RadioInput';
import {
  Tic_tac_modes_E,
  MenuLink_E,
  Tic_tac_opponent_E,
  Modal_message_types_E,
} from '#constants/tic-tac-toe-base/constNames';
import Button_2 from '#archichecture/ui/button_2/Button_2';
import { CSSTransition } from 'react-transition-group';
import  './transition.scss'
import Button_3 from '#archichecture/ui/button_3/Button_3';

import ModalGameHuman from '#archichecture/module/modal-game-human/ModalGameHuman';
import MovingButtons from '#archichecture/component/movingButtons/MovingButtons';
import { socket } from "#App" 

type PropsT = {

}
const Menu: React.FC<PropsT> = () => {
  const { state, dispatch } = useContext(CommonContext)
  const { state: state_game, dispatch: dispatch_game } = useContext(GameContext)
  const humanStyle = state_game.modeGame === Tic_tac_opponent_E.HUMAN

  
  const sizeRef = useRef<boolean>(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState(false)
  

  useEffect(() => {
    getSize()
    window.addEventListener("resize", () => {
      getSize()
    })
  },[])

  const getSize = () => {
    const widthDisplay = window.innerWidth
      if (widthDisplay > 765) {
        if (sizeRef.current) return
        sizeRef.current = true 
        setSize(true)
      } else {
        if (!sizeRef.current) return
        sizeRef.current = false
        setSize(false)
        removeTransition()
    }

  }


  const removeTransition = () => {
    if (wrapRef.current) {
      wrapRef.current.style.transition = 'none'
      setTimeout(() => {
        if (wrapRef.current) {
          wrapRef.current.style.transition = ""
        }
      },50)
    }
  }



  return (
    <div
      className={state.burgerState ?
        [style.wrapper, style.activeWrap ].join(' ')
        :
        style.wrapper}
      ref = {wrapRef}
    >

      <HeaderMenu/>

      {
        (state_game.menuLink === MenuLink_E.GAMEMODE || size) &&
        <div className={style.choise}>
          <RadioInput
            text={"3 to 3"}
            index={Tic_tac_modes_E.ONE}
            modeGame={state_game.currentGame}
            func={socket.deleteGame}
          />
          <RadioInput
            text={"5 to 5"}
            index={Tic_tac_modes_E.TWO}
            modeGame={state_game.currentGame}
            func={socket.deleteGame}
          />
        </div>
      }
      {
        (state_game.menuLink === MenuLink_E.INTERACTIVEGAME || size) &&
          <>
            <div className={style.choise}>
              <RadioInput
                text={"no opponent"}
                index={Tic_tac_opponent_E.NOLINK}
                modeGame={state_game.modeGame}
                func={socket.deleteGame}
              /> 
              <RadioInput
                text={"against to computer"}
                index={Tic_tac_opponent_E.COMPUTER}
                modeGame={state_game.modeGame}
                func={socket.deleteGame}
              /> 
              <RadioInput
                text={"against to user"}
                index={Tic_tac_opponent_E.HUMAN}
                modeGame={state_game.modeGame}
              /> 
              {
                <MovingButtons myIn={humanStyle}>
                  <div className={style.connectBlock}>
                    <Button_3
                      text={'create new game'}
                      status={false}
                      typeMessage={Modal_message_types_E.CREATEGAME} />
                    <Button_3
                      text={'join to game'}
                      status={false}
                      typeMessage={Modal_message_types_E.ADDTOGAME}
                    />
                  </div>
                </MovingButtons>

              }
              
            </div>
          </>     
      }
      

      <div className={style.burgerPosition}>
        <Burger isBurger={!state.burgerState} color={'menu'} />
      </div>




    </div>
  );
}
export default Menu;