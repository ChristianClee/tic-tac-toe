import { useContext } from "react";
import { GameContext } from "#reducers/tic-tac-toe/context";
import { CreateGame_T } from "#commonUtilits/websocket";

export function useCustomHook(): CreateGame_T {
  const { state, dispatch } = useContext(GameContext);
  const {
    currentGame,
    sells,
    typeMarker,
    optionsOneToOne,
    lastWinner,
    noWinner,
    winnerCombination,
  } = state;
    
  const cleanSells = sells.map(item => {
    const index = item.index
    const key = item.key
    const type = null
    return { index, key, type};
  })

  const options = {
    _id: null,
    gameName: "",
    playerOne: null,
    playerTwo: null,
    playerOneName: optionsOneToOne.playerOneName,
    playerTwoName: optionsOneToOne.playerTwoName,
    sells:cleanSells,
    typeMarker,
    gameStatus: optionsOneToOne.gameStatus,
    currentGame,
    lastWinner,
    noWinner,
    winnerCombination,
  };

  return options;
}


export function getEmptyDate() {
  return {
    
  }

}

