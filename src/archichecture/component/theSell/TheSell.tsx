import React,{ useEffect }  from 'react';
import style from './TheSell.module.scss';
import { GameContext } from '#reducers/tic-tac-toe/context';
import { ActionType_E } from '#reducers/tic-tac-toe/actions' 
import { useContext } from 'react';
import TheChest from '#archichecture/ui/theChest/TheChest';
import TheNull from '#archichecture/ui/theNull/TheNull';
import { Player_E, Sell_I } from '#reducers/tic-tac-toe/state';
import { Utilits } from './utilits';
import { Tic_tac_opponent_E } from '#constants/tic-tac-toe-base/constNames';
import { socket } from '#App'


type PropsT = {
  item: Sell_I
}
const TheSell: React.FC<PropsT> = ({ item }) => {
  const { state, dispatch } = useContext(GameContext)

  const isNoWinner: boolean = !Boolean(state.lastWinner)
  const isComputer: boolean = state.modeGame === Tic_tac_opponent_E.COMPUTER
  
  let isMyMove: boolean = true
  if (isComputer) {
    isMyMove = state.typeMarker
  }


  const isWinSell = Utilits.isWinnerSell(state.winnerCombination, item.index)

  function isHumanMode(): boolean{
    return state.modeGame === Tic_tac_opponent_E.HUMAN
  }

  function _humanMode(): boolean {
    if(!isHumanMode()) return false
    let result = !((state.playerNumber === Player_E.PLAYERONE) && state.typeMarker)
      &&
      !((state.playerNumber === Player_E.PLAYERTWO) && !state.typeMarker)
    // console.log('_humanMode should be false', result)
    // console.log('playerNumber = ', state.playerNumber)
    // console.log('typeMarker = ', state.typeMarker)
    return result
  }

  function oneAndComputerMode() {
    const result = !(
      item.type === null
      && isNoWinner
      && isMyMove)
    
    // console.log("oneAndComp should be false", result)
    return result
  }

  function sendSocket(sells: Sell_I[]) {
    socket.sendSells({ sells, typeMarker: !state.typeMarker })
  }

  



  return (
    <div
      className={isWinSell? [style.wrapper, style.active].join(" ") :style.wrapper}
      onClick={(e) => {
        const sells = Utilits
          .getNewSells(state.sells, item.key, state.typeMarker)

        if ( _humanMode() ) return
        if (oneAndComputerMode()) return
        if (isHumanMode()) sendSocket(sells)
        console.log("finish")
          dispatch({
            type: ActionType_E.SetMarkerItem,
            payload: sells
          })
          dispatch({
            type: ActionType_E.TuggleMarker
          })
      }}
    >
      {
       item.type === true ?
          <TheChest moving={true} />
          :
          item.type === false ?
            <TheNull moving={true}/>
            :
            null
            // <p style={{color:"white", fontSize: "2rem"}}>{item.index}</p> // !!! it is for development
      }
    </div>
  );
}
export default TheSell;