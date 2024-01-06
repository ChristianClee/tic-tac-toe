import React from 'react';
import style from './DashBoard.module.scss'
import Player from '#archichecture/component/player/Player';
import { useContext } from 'react';
import { GameContext } from '#reducers/tic-tac-toe/context'
import { CommonContext } from '#reducers/common/context'
import Button_1 from '#archichecture/ui/button_1/Button_1';
import ChoiceMode from '#archichecture/component/choice_mode/ChoiceMode';
import Burger from '#archichecture/component/burger/Burger';


type Props = {

}

const DashBoard: React.FC<Props> = () => {
  const {state} = useContext(GameContext)
  const {state: commonState} = useContext(CommonContext)

  return (
    <div className={style.wrapper}>

      <div className={style.burgerPosition}>
        <Burger isBurger={commonState.burgerState} color={'rgb(0, 255, 255)'} />
      </div>
      
      
      {/* <ChoiceMode/> */}
      
      {/* <div className={style.scope}>
        <Player name={'Cross'} scope={state.scope.cross} />
        <Player name={'Zerro'} scope={state.scope.zerro}/>
      </div> */}

      {/* <div className={style.buttons}>
        <Button_1 text={'reset'} />
      </div> */}
      
    </div>
  );
}
export default DashBoard;