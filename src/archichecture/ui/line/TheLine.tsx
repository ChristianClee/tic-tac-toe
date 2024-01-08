import React from 'react';
import style from './TheLine.module.scss'
import './transition.scss'
import {CSSTransition} from 'react-transition-group'


type PropsT = {
  styleLine: string,
  inState: boolean,
  color:'dashboard' | 'menu',
}
const TheLine: React.FC<PropsT> = ({styleLine, inState, color}) => {
  const lineStatus = color === 'menu'
  const lineBaseStyle = [style.line, style[styleLine]].join(' ')


  return (
    <CSSTransition
      in={!inState}
      timeout={750}
      classNames={`line-${styleLine}`}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      <span
        className={lineStatus? [lineBaseStyle, style.menuLine].join(' ') : lineBaseStyle}
        // style={ {background: color}}
      ></span>
    </CSSTransition>
    
  );
}
export default TheLine;