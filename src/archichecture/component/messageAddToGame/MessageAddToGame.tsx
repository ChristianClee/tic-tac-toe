import React, { useEffect, useState, useContext } from 'react';
import style from './MessageAddToGame.module.scss'
import ListGames from '../listGames/ListGames';
import {GameContext} from '#reducers/tic-tac-toe/context';
import ButtonFetchig from '#archichecture/ui/button_fetch/ButtonFetchig';
import MovingButtons from '../movingButtons/MovingButtons';
import { getPathServer } from '#commonUtilits/getPathServer'
import { ServerData_I } from '#reducers/tic-tac-toe/state'
import { ListElem_I } from '#archichecture/component/messageAddToGame/types'
import {Modal_message_types_E} from '#constants/tic-tac-toe-base/constNames'

type PropsT = {

}
const MessageAddToGame: React.FC<PropsT> = () => {
  const [stileBtn, setStileBtn] = useState<boolean>(false)
  const [gamesServer, setGamesServer] = useState<ListElem_I[]>([])
  const {state} = useContext(GameContext)
  console.log(gamesServer)

  useEffect(() => {
    const domain = getPathServer()
    const addPath = process.env.REACT_APP_PATH_GET_ALL_GAME
    const utl: string = domain + addPath
    
    if (state.modalWindow === Modal_message_types_E.ADDTOGAME) {
      fetch(utl)
      .then(res => res.json())
      .then(res => setGamesServer(res))
    }
    
  }, [state.modalWindow])
  
  // console.log("hello")
  function btnFuncFalse() {
    setStileBtn(false)
  }
  function btnFuncTrue() {
    setStileBtn(true)
  }



  return (
    <div
      className={style.wrapper}
    >
      <h3 className={style.title}>join to the game</h3>
      <ListGames list={gamesServer} func={btnFuncTrue } />
      <MovingButtons myIn={stileBtn}>
        <ButtonFetchig fetchFunc={()=>{}}  func={btnFuncFalse}/>
      </MovingButtons>
    </div>
  );
}
export default MessageAddToGame;