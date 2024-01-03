import React from 'react';
import style from './TheNull.module.scss'
import {ReactComponent as Zerro} from '#assets/svg/null-pumkin.svg'

type PropsT = {

}
const TheNull:React.FC<PropsT> = () => {
  return (
    <Zerro
      className={style.wrapper}
    >
    </Zerro>
  );
}
export default TheNull;