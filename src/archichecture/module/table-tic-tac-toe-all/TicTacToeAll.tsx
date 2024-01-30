import React,{ useContext } from 'react';
import style from './TicTacToeAll.module.scss'
import TicTacToe from '#archichecture/module/table-tic-tac-toe/TicTacToe';
import { GameContext } from '#reducers/tic-tac-toe/context';
import {nextGame, resetGame} from '#commonUtilits/resetFunctions';
import MovingButtons from '#archichecture/component/movingButtons/MovingButtons';
import ButtonOne from '#archichecture/ui/button_1/ButtonOne';
import ButtonFour from '#archichecture/ui/button_4/ButtonFour';
import {
  Tic_tac_opponent_names_E,
  Tic_tac_opponent_E,
  Tic_tac_modes_E
} from '#constants/tic-tac-toe-base/constNames';
import PlayerName from '#archichecture/ui/playerName/PlayerName';
import { useCustomHook } from './customHooks';
import { socket } from '#App';
import { Utilits } from '#commonUtilits/utilits'
import {ReactComponent as Lock} from '#assets/svg/cloud-lock.svg'
import {ReactComponent as Link} from '#assets/svg/no-link.svg'
import { Game_status_E } from '#reducers/tic-tac-toe/state';
import ConnectWallpapar from '#archichecture/component/connectWallpapar/ConnectWallpapar';


type PropsT = {

}
const TicTacToeAll: React.FC<PropsT> = () => {
  const { state, dispatch } = useContext(GameContext)
  const trigger = Boolean(state.lastWinner || state.noWinner)

  const accessGame = state.modeGame === Tic_tac_opponent_E.HUMAN
    && 
      state.optionsOneToOne.gameStatus === null


  const disconectGame = state.modeGame === Tic_tac_opponent_E.HUMAN
      &&
      state.optionsOneToOne.gameStatus === Game_status_E.CLOSING
    

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
      const playerOne = state.optionsOneToOne.playerOneName
      const playerTwo = state.optionsOneToOne.playerTwoName
      names = [
        playerOne,
        playerTwo,
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


  useCustomHook()


  function sendPlayer() {
    if (state.modeGame !== Tic_tac_opponent_E.HUMAN) return
    socket.sendSells({
    lastWinner: null,
    noWinner: false,
    winnerCombination: [],
    sells: Utilits.getCleanSells(state.sells)
  })
  }


  
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
          <ButtonOne
            text='next'
            func={nextGame}
            func2={sendPlayer}
            state={state}
            dispatch={dispatch}
          />
          {
            state.modeGame === Tic_tac_opponent_E.HUMAN ||
            <ButtonFour
              text='reset'
              func={resetGame}
              state={state}
              dispatch={dispatch}
            />
          }
        </div>
      </MovingButtons>
   
      <MovingButtons myIn={accessGame} appear={true}>
        <ConnectWallpapar text={'You need create game or join to aviable on this mode game'}>
          <Lock className={style.lock} />
        </ConnectWallpapar>
      </MovingButtons>
      
      <MovingButtons myIn={disconectGame} >
        <ConnectWallpapar text={'Your opponent leave this game, create new one'}>
          <Link className={style.lock} />
        </ConnectWallpapar>
      </MovingButtons>
      
    </div>
  );
}
export default TicTacToeAll;