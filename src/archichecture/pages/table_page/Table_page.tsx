import React, { useState } from 'react';
import style from './Table_page.module.scss'
import TicTacToe from '#archichecture/module/table-tic-tac-toe/TicTacToe';
import DashBoard from '#archichecture/module/tic-tac-toy-dashboard/DashBoard';


const Table_page: React.FC = () => {


  return (
    <div className={style.wrapper}>

      <div className={style.flexCont}>
        <DashBoard />
        <TicTacToe />
      </div>
      
    </div>
  );
}
export default Table_page;