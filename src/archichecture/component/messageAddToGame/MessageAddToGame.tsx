import React, { useEffect, useState, useContext } from 'react';
import style from './MessageAddToGame.module.scss'
import ListGames from '../listGames/ListGames';
import {GameContext} from '#reducers/tic-tac-toe/context';
import ButtonFetchig from '#archichecture/ui/button_fetch/ButtonFetchig';
import MovingButtons from '../movingButtons/MovingButtons';
import { serverPath } from '#commonUtilits/getPathServer'
import { Game_status_E, ServerData_I } from '#reducers/tic-tac-toe/state'
import { ListElem_I } from '#archichecture/component/messageAddToGame/types'
import {Modal_message_types_E} from '#constants/tic-tac-toe-base/constNames'
import {joinGame} from "./utilits"
import { socket } from "#App" 
import InputGame from '#archichecture/ui/input/InputGame';
import CrossClose from '../crossClose/CrossClose';

 
type PropsT = {

}
const MessageAddToGame: React.FC<PropsT> = () => {
   const a = [
    {
      gameName: "new super game",
      gameStatus: Game_status_E.WAITING,
      time: "22:20",
      _id: "1232132134431"
    },
    {
      gameName: "new super game",
      gameStatus: Game_status_E.WAITING,
      time: "22:20",
      _id: "12d32132134aa1"
    },
  ]
  const [stileBtn, setStileBtn] = useState<boolean>(false)
  const [gamesServer, setGamesServer] = useState<ListElem_I[]>([])
  const [namePlayer, setNamePlayer] = useState<string>('')
  const [choise, setChoise] = useState<string>('')

  const { state } = useContext(GameContext)

  useEffect(() => {
    if (namePlayer && choise) {
      setStileBtn(true)
    } else {
      setStileBtn(false)
    }
  },[choise,namePlayer])

  useEffect(() => {
    const domain = serverPath.Http()
    const addPath = process.env.REACT_APP_PATH_GET_ALL_GAME
    const utl: string = domain + addPath
      
    if (state.modalWindow === Modal_message_types_E.ADDTOGAME) {
      setTimeout(() => {
        fetch(utl)
          .then(res => res.json())
          .then(res => setGamesServer(res))
      },200)
  
      }
  }, [state.modalWindow])
  


  function btnFuncFalse() {
    setStileBtn(false)
  }

  function btnFuncTrue(arg:boolean) {
    setChoise("")
  }



  return (
    <div className={style.wrapper}>
      <CrossClose/>
      <div
        className={style.body}
        onClick={(e) => {
          e.stopPropagation()
          btnFuncTrue(false)
        }}
      >
      <h3 className={style.title}>join to the game</h3>
      {
        !!gamesServer.length
        &&
        <InputGame placeholder='Your name' id='secondPlayer' text={namePlayer} dispatch={setNamePlayer} />
      }
      <ListGames list={gamesServer} func={btnFuncTrue} func2={setChoise} choise={choise} />
      <MovingButtons myIn={stileBtn}>
        <ButtonFetchig
          webFunc={joinGame({ _id: choise, playerTwoName: namePlayer }, socket.joinGame)}
          func={btnFuncFalse}
          text={"join"}
        />
      </MovingButtons>
      </div>
    </div>
    
 
    
  );
}
export default MessageAddToGame;