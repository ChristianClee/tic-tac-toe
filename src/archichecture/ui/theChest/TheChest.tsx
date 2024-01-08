import React from 'react';
import style from './TheChest.module.scss'
import {ReactComponent as Cross} from '#assets/svg/cross-of-bones.svg'

type PropsT = {
  moving: boolean
}
const TheChest: React.FC<PropsT> = ({moving}) => {
  


  return (
    <Cross className={moving?  [style.wrapper, style.activeWrapp].join(' ') : style.wrapper}>
    </Cross>
  );
}
export default TheChest;