import React from 'react';
import style from './DashBoard.module.scss'
import Player from '#archichecture/component/player/Player';

import Button_1 from '#archichecture/ui/button_1/Button_1';
import ChoiceMode from '#archichecture/component/choice_mode/ChoiceMode';

type Props = {

}

const DashBoard:React.FC<Props> = () => {
  return (
    <div className={style.wrapper}>

      
      <ChoiceMode/>


      <div className={style.scope}>
        <Player/>
        <Player/>
      </div>

      <div className={style.buttons}>
        <Button_1 text={'reset'} />

      </div>
      
    </div>
  );
}
export default DashBoard;