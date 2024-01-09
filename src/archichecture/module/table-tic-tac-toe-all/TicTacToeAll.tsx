import React,{ useContext } from 'react';
import style from './TicTacToeAll.module.scss'
import TicTacToe from '#archichecture/module/table-tic-tac-toe/TicTacToe';
import { GameContext } from '#reducers/tic-tac-toe/context';
import {nextGame, resetGame} from '#commonUtilits/resetFunctions'

type PropsT = {

}
const TicTacToeAll: React.FC<PropsT> = () => {
  const { state, dispatch } = useContext(GameContext)
  const trigger = Boolean(state.lastWinner || state.noWinner)
  // console.log(state.lastWinner)
  // console.log(state.noWinner)

  
  return (
    <div
      className={style.wrapper}
    >
      <TicTacToe />
      {
        trigger &&
        <>
          <button
            onClick={()=> nextGame(state, dispatch)}
          >next</button>
          <br/>
          <br/>
          <br/>
          <button
            onClick={()=> resetGame(state, dispatch)}
          >reset</button>
        </>
      }
      
      
    </div>
  );
}
export default TicTacToeAll;