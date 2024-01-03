import React from 'react';
import style from './TheChest.module.scss'
import {ReactComponent as Cross} from '#assets/svg/cross-of-bones.svg'

type PropsT = {
  
}
const TheChest: React.FC<PropsT> = () => {
  
  return (
    <Cross className={style.wrapper}>
    </Cross>
  );
}
export default TheChest;