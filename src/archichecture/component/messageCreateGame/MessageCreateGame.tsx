import React, { useState,useContext, useEffect } from 'react';
import style from './MessageCreateGame.module.scss';
import InputGame from '#archichecture/ui/input/InputGame';
import MovingButtons from '../movingButtons/MovingButtons';
import ButtonFetchig from '#archichecture/ui/button_fetch/ButtonFetchig';
import { fetchCreateGame } from './utilits';
import { GameContext } from '#reducers/tic-tac-toe/context';
import { ActionType_E } from '#reducers/tic-tac-toe/actions';
import { socket } from '#App'
import { useCustomHook } from './customHook';
import { Game_status_E } from '#reducers/tic-tac-toe/state';
import Loader from '#archichecture/ui/loader/Loader';
import CrossClose from '../crossClose/CrossClose';


type PropsT = {
}




const MessageCreateGame: React.FC<PropsT> = () => {
  const { state, dispatch } = useContext(GameContext)
  const [gameName, setGameName] = useState<string>("")
  const [playerOneName, setYourName] = useState<string>("")
  const [isloader1, setIsloader1] = useState<boolean>(false)
  const [isloader2, setIsloader2] =useState<boolean>(false)

  const btnAvialble = !!gameName && !!playerOneName
  const options = useCustomHook()
  const dateToServer = { ...options, gameName, playerOneName  }


  useEffect(() => {
    if (state.optionsOneToOne.gameStatus === Game_status_E.WAITING) {
      setTimeout(() => { setIsloader1(true) }, 1000)
      setIsloader2(true)
    } else {
      setIsloader1(false)
      setIsloader2(false)
    }

  },[state.optionsOneToOne.gameStatus])
  console.log('gameStatus',state.optionsOneToOne.gameStatus)
  function isLoader() {
    if (state.optionsOneToOne.gameStatus === Game_status_E.WAITING) {
      return true
    } else {
      return false
    }
  }

  function dispatchInputs() {
    setGameName("")
    setYourName("")
  }
  function dispatchLoader() {
    dispatch({
      type: ActionType_E.StatusGameInteractive,
      payload: null,
    })
  }


  return (
    <div className={style.wrapper}>
      <CrossClose/>
      <div
        className={style.body}
        onClick={(e) => {
          e.stopPropagation()
        }}
      > 
        <h3 className={style.title}>
          {
            isloader2? "Waiting opponent" : "Create new game"
          }
        </h3>
        <MovingButtons myIn={!isLoader()} >
          <div className={style.inputs}>
            <InputGame
                placeholder={'Game name'}
                dispatch={setGameName}
                text={gameName}
                id={'gameName'}
              />
            <InputGame
              placeholder={'Player name'}
              dispatch={setYourName}
              text={playerOneName}
              id={'yourName'}
            />
          </div>
        </MovingButtons>

        {
          isloader1 && 
          <div className={style.containerLoader}>
            <Loader/> 
          </div>
        }
        <div className={style.btnContainer} >
          <MovingButtons myIn={btnAvialble} >
            <ButtonFetchig
              func={dispatchInputs}
              webFunc={fetchCreateGame(dateToServer, socket.createGame)}
              text={'Create'}
            />
          </MovingButtons>
          <MovingButtons myIn={isLoader()} delayOn={1000} >
            <ButtonFetchig
              func={dispatchLoader}
              webFunc={socket.deleteGame}
              text={'Leave'}
            />
          </MovingButtons>

        </div>

        
        
      </div>
    </div>
    
  );
}
export default MessageCreateGame;