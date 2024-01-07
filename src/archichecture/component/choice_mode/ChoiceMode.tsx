import React from 'react';
import style from './ChoiceMode.module.scss'
import RadioInput from '#archichecture/component/radioInput/RadioInput';
import { useContext } from 'react';
import { GameContext } from '../../../reducers/tic-tac-toe/context'
import { Tic_tac_modes_E, Tic_tac_opponent_E } from '#constants/tic-tac-toe-base/constNames'

type PropsT = {
  children:React.ReactNode
}
const ChoiceMode: React.FC<PropsT> = ({children}) => {
  const { state } = useContext(GameContext)


  return (
    <div className={style.wrapper}>
      {
        children
      }
      {/* <RadioInput text={"3 to 3"} index={Tic_tac_modes_E.ONE} modeGame={state.currentGame} /> */}
      {/* <RadioInput text={"5 to 5"} index={Tic_tac_modes_E.TWO} modeGame={state.currentGame} /> */}
      {/* <RadioInput text={"computer"} index={Tic_tac_opponent_E.COMPUTER} modeGame={state.modeGame}/> */}
      {/* <RadioInput text={"friend"} index={Tic_tac_opponent_E.HUMAN} modeGame={state.modeGame} /> */}
    </div>
  );
}
export default ChoiceMode;