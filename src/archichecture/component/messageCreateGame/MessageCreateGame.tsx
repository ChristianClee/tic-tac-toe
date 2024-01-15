import React, { useState, useContext } from 'react';
import style from './MessageCreateGame.module.scss'
import InputGame from '#archichecture/ui/input/InputGame';
import MovingButtons from '../movingButtons/MovingButtons';
import ButtonFetchig from '#archichecture/ui/button_fetch/ButtonFetchig';
import { fetchCreateGame } from './utilits';
import { GameContext } from '#reducers/tic-tac-toe/context';



type PropsT = {

}
const MessageCreateGame: React.FC<PropsT> = () => {
  const { state } = useContext(GameContext)
  const [gameName, setGameName] = useState<string>("")
  const [playerName, setYourName] = useState<string>("")
  const btnAvialble = Boolean(gameName) && Boolean(playerName)



  const {
    currentGame,
    sells,
    typeMarker,
    scope,
    noWinner,
    winnerCombination,
    modeGame
  } = state
  // const options = {currentGame, sells, typeMarker, scope, noWinner, winnerCombination, modeGame}
    // console.log(options)
  const uniqKey = sessionStorage.getItem('myGameKey')
  const dateToServer = JSON.stringify({
    gameName,
    playerName,
    uniqKey,
    options: {
      currentGame,
      sells,
      typeMarker,
      scope,
      noWinner,
      winnerCombination,
      modeGame,
    },
  })
  const addPath: string = process.env.REACT_APP_PATH_CREATE_GAME || ""
  
  return (
    <div
      className={style.wrapper}
    >
      <h3 className={style.title}>Create new game</h3>
      <InputGame placeholder={'Game name'} dispatch={setGameName} text={gameName} id={'gameName'} />
      <InputGame placeholder={'Player name'} dispatch={setYourName} text={playerName} id={'yourName'} />
      <MovingButtons myIn={ btnAvialble }>
        <ButtonFetchig
          dispatches={[setGameName, setYourName]}
          fetchFunc={ fetchCreateGame(addPath, dateToServer) }
        />
      </MovingButtons>
    </div>
  );
}
export default MessageCreateGame;