import React from 'react';
import style from './TheNull.module.scss'
import {ReactComponent as Zerro} from '#assets/svg/null-pumkin.svg'

type PropsT = {
  moving:boolean
}
const TheNull: React.FC<PropsT> = ({ moving }) => {
  return (
    <Zerro
      className={moving?  [style.wrapper, style.activeWrapp].join(' ') : style.wrapper}
    >
    </Zerro>
  );
}
export default TheNull;