import React, { useState } from 'react';
import style from './TheSell.module.scss';
import { GameContext } from '#reducers/context';
import { ActionType_E } from '#reducers/actions' 
import { useContext } from 'react';
import TheChest from '#archichecture/ui/theChest/TheChest';
import TheNull from '#archichecture/ui/theNull/TheNull';
import { Sell_I } from '#reducers/state'
import { Utilits } from './utilits'

type PropsT = {
  item: Sell_I
}
const TheSell: React.FC<PropsT> = ({ item }) => {
  const { state, dispatch } = useContext(GameContext)

  return (
    <div
      className={style.wrapper}
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
          <TheChest />
          :
          item.type === false ?
            <TheNull />
            :
            null
      }
    </div>
  );
}
export default TheSell;