import React from 'react';
import style from './MovingButtons.module.scss'
import { CSSTransition } from 'react-transition-group';
import './transition.scss'

type PropsT = {
  myIn: boolean,
  children: React.ReactNode
}
const MovingButtons:React.FC<PropsT> = ({myIn, children}) => {
  return (
    <CSSTransition
    in={myIn}
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