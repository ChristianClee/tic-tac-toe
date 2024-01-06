import React from 'react';
import style from './TheLine.module.scss'
import './transition.css'
import {CSSTransition} from 'react-transition-group'


type PropsT = {
  styleLine: string,
  inState: boolean,
  color:string,
}
const TheLine: React.FC<PropsT> = ({styleLine, inState, color}) => {

  return (
    <CSSTransition
      in={!inState}
      timeout={1000}
      classNames={`line-${styleLine}`}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      <span
        className={[style.line, style[styleLine]].join(' ')}
        style={{background: color}}
      ></span>
    </CSSTransition>
    
  );
}
export default TheLine;