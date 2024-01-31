import React,{ useContext, useState } from 'react';
import style from './DashBoard.module.scss'
import Player from '#archichecture/component/player/Player';
import { GameContext } from '#reducers/tic-tac-toe/context'
import { CommonContext } from '#reducers/common/context'
import Button_1 from '#archichecture/ui/button_1/ButtonOne';
import ChoiceMode from '#archichecture/component/choice_mode/ChoiceMode';
import Burger from '#archichecture/ui/burger_button/Burger';
import {
  Tic_tac_opponent_names_E
} from '#constants/tic-tac-toe-base/constNames';
import {useCustomHook} from './useCustomHook'
import TheNull from '#archichecture/ui/theNull/TheNull';
import TheChest from '#archichecture/ui/theChest/TheChest';
import {ReactComponent as Scull} from '#assets/svg/halloween-skull.svg'

type Props = {

}

const DashBoard: React.FC<Props> = () => {
  const {state} = useContext(GameContext)
  const {state: commonState} = useContext(CommonContext)
  const [names, setNames] = useState<string[]>([])

  useCustomHook(setNames)





  return (
    <div className={style.wrapper}>

      <div className={style.burgerPosition}>
        <Burger isBurger={commonState.burgerState} color={'dashboard'} />
      </div>
      
    
      {
        (!!names[0] && !!names[1])?
        <>
          <div className={style.scope}>
            <Player name={names[0]} scope={state.scope.cross} />
            <Player name={names[1]} scope={state.scope.zerro}/>
          </div>
          <div className={style.scope}>
            {
              state.typeMarker
                ? 
                <TheChest moving={false} />
                :
                <TheNull moving={false}/>
            }
          </div>
        </>
          :
        <>
          <div className={style.scope}>
            <Scull className={style.scull} />
          </div>
          <div className={style.scope}>
            <Scull className={style.scull}/>
          </div>
        </>

      }
      
      
      
      
    </div>
  );
}
export default DashBoard;