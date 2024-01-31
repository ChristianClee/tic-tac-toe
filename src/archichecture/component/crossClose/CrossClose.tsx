import React from 'react';
import style from './CrossClose.module.scss'
import {ReactComponent as Bone1} from '#assets/svg/bone.svg'
import {ReactComponent as Bone2} from '#assets/svg/bone.svg'

type PropsT = {

}
const CrossClose:React.FC<PropsT> = () => {
  return (
    <div className={style.wrapper}>
      <Bone1 className={style.one}/>
      <Bone2 className={style.two}/>
    </div>
  );
}
export default CrossClose;