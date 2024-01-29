import React from 'react';
import style from './Loader.module.scss'


type PropsT = {

}
const Loader:React.FC<PropsT> = () => {
  return (
    <div
      className={style.wrapper}
    >
      <div className={style.body}>
        <div className={style.colomn}>
          <span className={[style.element, style.one].join(" ")}></span>
        </div>
        <div className={style.colomn}>
          <span className={[style.element, style.two].join(" ")}></span>
        </div>
        <div className={style.colomn}>
          <span className={[style.element, style.three].join(" ")}></span>
        </div>
        <div className={style.colomn}>
          <span className={[style.element, style.four].join(" ")}></span>
        </div>
        <div className={style.colomn}>
          <span className={[style.element, style.five].join(" ")}></span>
        </div>
        <div className={style.colomn}>
          <span className={[style.element, style.six].join(" ")}></span>
        </div>
        <div className={style.colomn}>
          <span className={[style.element, style.seven].join(" ")}></span>
        </div>
        <div className={style.colomn}>
          <span className={[style.element, style.eight].join(" ")}></span>
        </div>
        <div className={style.colomn}>
          <span className={[style.element, style.nine].join(" ")}></span>
        </div>
      </div>
    </div>
  );
}
export default Loader;