import React from 'react';
import style from './Crown.module.scss'
import {ReactComponent as Crownn} from '#assets/svg/crown.svg'

type PropsT = {
  moving: boolean
}
const Crown:React.FC<PropsT> = ({moving}) => {
  return (
    <Crownn className={moving?  [style.wrapper, style.activeWrapp].join(' ') : style.wrapper} />
  );
}
export default Crown;