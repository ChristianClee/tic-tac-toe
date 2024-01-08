import React  from 'react';
import style from './TheSell.module.scss';
import { GameContext } from '#reducers/tic-tac-toe/context';
import { ActionType_E } from '#reducers/tic-tac-toe/actions' 
import { useContext } from 'react';
import TheChest from '#archichecture/ui/theChest/TheChest';
import TheNull from '#archichecture/ui/theNull/TheNull';
import { Sell_I } from '#reducers/tic-tac-toe/state'
import { Utilits } from './utilits'

type PropsT = {
  item: Sell_I
}
const TheSell: React.FC<PropsT> = ({ item }) => {
  const { state, dispatch } = useContext(GameContext)
  const isWinSell = Utilits.isWinnerSell(state.winnerCombination, item.index)

  return (
    <div
      className={isWinSell? [style.wrapper, style.active].join(" ") :style.wrapper}
      onClick={(e) => {
        if (item.type === null) {
          dispatch({
            type: ActionType_E.SetMarkerItem,
            payload: Utilits
              .getNewSells(state.sells, item.key, state.typeMarker)
          })
          dispatch({
            type: ActionType_E.SetMarker
          })
        }
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