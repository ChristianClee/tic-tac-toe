import React, { useRef, useContext } from 'react';
import style from './Burger.module.scss'
import { CommonContext } from '#reducers/common/context'
import { ActionCommon_E } from '#reducers/common/actions'
import TheLine from '#archichecture/ui/line/TheLine';

type PropsT = {
  isBurger: boolean;
  color: 'dashboard' | 'menu';
}
const Burger: React.FC<PropsT> = ({isBurger, color}) => {
  const { dispatch } = useContext(CommonContext)


  return (
    <div
      className={style.wrapper}
      onClick={() => {
        dispatch({
          type: ActionCommon_E.TuggleBurger,
        })
      }}
    >
      <div
        className={[style.button, style.activeBtn].join(' ')}
      >
        <TheLine styleLine={'top'} inState={isBurger} color={color} />
        <TheLine styleLine={'middle'} inState={isBurger} color={color} />
        <TheLine styleLine={'bottom'} inState={isBurger} color={color } />
      </div>
    </div>
    
  );
}
export default Burger;