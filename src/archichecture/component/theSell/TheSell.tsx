import React, { useState } from 'react';
import style from './TheSell.module.scss';
import { GameContext } from '#reducers/context';
import { ActionType_E } from '#reducers/actions' 
import { useContext } from 'react';
import TheChest from '#archichecture/ui/theChest/TheChest';
import TheNull from '#archichecture/ui/theNull/TheNull';

type PropsT = {
  index: number
}
const TheSell: React.FC<PropsT> = ({ index }) => {

  const [typeMarker, setTypeMarker] = useState<boolean | null>(null)
  const { state, dispatch } = useContext(GameContext)

  return (
    <div
      className={style.wrapper}
      style={{ color: 'white' }}
      onClick={(e) => {
        if (typeMarker === null) {
          setTypeMarker(state.typeMarker)
          dispatch({
            type: ActionType_E.SetMarker
          })
        }
      }}
    >
      {
        typeMarker === true ?
          <TheChest />
          :
          typeMarker === false ?
            <TheNull />
            :
            null
      }
    </div>
  );
}
export default TheSell;