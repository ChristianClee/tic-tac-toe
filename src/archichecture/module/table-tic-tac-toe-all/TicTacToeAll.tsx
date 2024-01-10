import React,{ useContext } from 'react';
import style from './TicTacToeAll.module.scss'
import TicTacToe from '#archichecture/module/table-tic-tac-toe/TicTacToe';
import { GameContext } from '#reducers/tic-tac-toe/context';
import {nextGame, resetGame} from '#commonUtilits/resetFunctions'
import MovingButtons from '#archichecture/component/movingButtons/MovingButtons';
import ButtonOne from '#archichecture/ui/button_1/ButtonOne';
import ButtonFour from '#archichecture/ui/button_4/ButtonFour';
import {
  Tic_tac_opponent_names_E,
  Tic_tac_opponent_E
} from '#constants/tic-tac-toe-base/constNames';
import PlayerName from '#archichecture/ui/playerName/PlayerName';

type PropsT = {

}
const TicTacToeAll: React.FC<PropsT> = () => {
  const { state, dispatch } = useContext(GameContext)
  const trigger = Boolean(state.lastWinner || state.noWinner)


  let names:string [] = ['error one', 'error two']

  let nameOne: { name: string; state: boolean, status: boolean}
  let nameTwo: { name: string; state: boolean, status: boolean}

  switch (state.modeGame) {
    case Tic_tac_opponent_E.NOLINK:
      names = [
        Tic_tac_opponent_names_E.PLAYER_1,
        Tic_tac_opponent_names_E.PLAYER_2
      ]
      break
    case Tic_tac_opponent_E.COMPUTER:
      names = [
        Tic_tac_opponent_names_E.PLAYER,
        Tic_tac_opponent_names_E.COMPUTER,
      ]
      break 
    case Tic_tac_opponent_E.HUMAN:
      names = [
        Tic_tac_opponent_names_E.LINK_1,
        Tic_tac_opponent_names_E.LINK_2,
      ]
  }
  switch (state.typeMarker) {
    case true:
      nameOne = { name: names[0], state: true , status: true}
      nameTwo = { name: names[1], state: false, status: false }
      break
    case false:
      nameOne = { name: names[0], state: false, status: true }
      nameTwo = { name: names[1], state: true, status: false }
      break
  }
  // console.log(nameOne)



  
  return (
    <div
      className={style.wrapper}
    >
      <TicTacToe />

      <div className={style.containerQueue}>
        <MovingButtons myIn={nameOne.state}>
          <div className={style.queue}>
            <PlayerName text={nameOne.name} status={true} />
          </div>
        </MovingButtons>

        <MovingButtons myIn={nameTwo.state}>
          <div className={style.queue}>
            <PlayerName text={nameTwo.name} status={false}/>
          </div>
        </MovingButtons>
      </div>
      

      <MovingButtons myIn={trigger}>
        <div className={style.buttonsBlock}>
          <ButtonOne text='next' func={nextGame} state={state} dispatch={dispatch} />
      
          <ButtonFour text='reset' func={resetGame} state={state} dispatch={dispatch}/>
        </div>
      </MovingButtons>

      
      

    </div>
  );
}
export default TicTacToeAll;