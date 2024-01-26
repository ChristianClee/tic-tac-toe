import React, { useState } from 'react';
import style from './MessageCreateGame.module.scss';
import InputGame from '#archichecture/ui/input/InputGame';
import MovingButtons from '../movingButtons/MovingButtons';
import ButtonFetchig from '#archichecture/ui/button_fetch/ButtonFetchig';
import { fetchCreateGame } from './utilits';
import { GameContext } from '#reducers/tic-tac-toe/context';
import { Session_st_E } from "#constants/tic-tac-toe-base/constNames";
import { socket } from '#App'
import { useCustomHook } from './customHook';
import { Game_status_E } from '#reducers/tic-tac-toe/state';

type PropsT = {
}




const MessageCreateGame: React.FC<PropsT> = () => {
  // const { state, dispatch } = useContext(GameContext)
  const [gameName, setGameName] = useState<string>("")
  const [playerOneName, setYourName] = useState<string>("")
  const btnAvialble = !!gameName && !!playerOneName

  const options = useCustomHook()

  const dateToServer = {
    gameName,
    playerOneName,
    options,
  }

  
  function dispatchFunc() {
    setGameName("")
    setYourName("")
  }


  return (
    <div
      className={style.wrapper}
    >
      <h3 className={style.title}>Create new game</h3>
      <InputGame placeholder={'Game name'} dispatch={setGameName} text={gameName} id={'gameName'} />
      <InputGame placeholder={'Player name'} dispatch={setYourName} text={playerOneName} id={'yourName'} />
      <MovingButtons myIn={ btnAvialble }>
        <ButtonFetchig
          func={dispatchFunc}
          webFunc={fetchCreateGame(dateToServer, socket.createGame)}
          text={'Create'}
        />
      </MovingButtons>
    </div>
  );
}
export default MessageCreateGame;