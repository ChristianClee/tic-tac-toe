import React, { useRef, useState } from 'react';
import style from './MovingButtons.module.scss'
import { CSSTransition } from 'react-transition-group';
import './transition.scss'

type PropsT = {
  myIn: boolean,
  children: React.ReactNode,
  delayOn?: number,
  delayOff?: number,
}
const MovingButtons: React.FC<PropsT> = ({ myIn, children, delayOn = 0, delayOff = 0 }) => {

  const [aaa, setAaa] = useState<boolean>(false)
  


  switch (myIn) {
    case true:
      if (delayOn === 0) {
        setTimeout(() => {
          setAaa(true) 
        }, 0)
      } else {
        setTimeout(() => {
          setAaa(true) 
        }, delayOn)
      }
      break
    case false:
      if (delayOff === 0) {
        setTimeout(() => {
          setAaa(false) 
        }, 0)
      } else {
        setTimeout(() => {
          setAaa(false)
        }, delayOff)
      }
      break
  }
  



  return (
    <CSSTransition
      in={aaa}
      timeout={750}
        
      classNames={'abcd'}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {children}
    </CSSTransition>
  );
}
export default MovingButtons;