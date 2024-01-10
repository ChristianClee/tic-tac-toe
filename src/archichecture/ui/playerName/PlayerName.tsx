import React from 'react';
import style from './PlayerName.module.scss'


type PropsT = {
  text: string,
  status: boolean,
}
const PlayerName:React.FC<PropsT> = ({text, status}) => {
  return (
    <div
      className={status? style.wrapper1 : [style.wrapper2, style.wrapper1].join(" ")}
    >
      {text}
      <div className={status? style.one : [style.one, style.two].join(" ")}></div>
    </div>

  );
}
export default PlayerName;