import React, { useEffect, useRef, useContext } from 'react';
import style from './LightDarkController.module.scss'
import { Light_dark_themes_E } from '#constants/common-base/constNames'
import { CommonContext } from '#reducers/common/context'
import { ActionCommon_E } from '#reducers/common/actions'
import {Utilit} from './utilits'
// import '#main-styles/colorVariables.scss'


type PropsT = {

}
const LightDarkController: React.FC<PropsT> = () => {
  
  const { state, dispatch } = useContext(CommonContext)
  
  function onclick() {
    dispatch({
      type: ActionCommon_E.TuggleLightDarkThemes,
      payload: Utilit.getThemes(state.lightDarkTheme)
    })
  } 



  return (
    <div
      className={ style.wrapper }
    >
      <input type="checkbox" id="lightDarkController"
        value={state.lightDarkTheme}
        onClick={onclick}
      />
      <label htmlFor='lightDarkController'></label>


    </div>
  );
}
export default LightDarkController;