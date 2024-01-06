import React from 'react';
import style from './ChoiceMode.module.scss'
import RadioInput from '#archichecture/component/radioInput/RadioInput';
import { useContext } from 'react';
import { GameContext } from '../../../reducers/tic-tac-toe/context'
import { Tic_tac_modes_E } from '#constants/tic-tac-toe-base/constNames'

type PropsT = {

}
const ChoiceMode: React.FC<PropsT> = () => {
  const { state } = useContext(GameContext)


  return (
    <div className={style.wrapper}>
      <RadioInput text={"3 to 3"} index={Tic_tac_modes_E.ONE} modeGame={state.currentGame} />
      {/* <RadioInput text={"4 to 4"} index={1} modeGame={state.currentGame} /> */}
      <RadioInput text={"5 to 5"} index={Tic_tac_modes_E.TWO} modeGame={state.currentGame} />
    </div>
  );
}
export default ChoiceMode;