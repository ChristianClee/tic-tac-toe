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

  const options = {
    _id: null,
    gameName: "",
    playerOne: null,
    playerTwo: null,
    playerOneName: optionsOneToOne.playerOneName,
    playerTwoName: optionsOneToOne.playerTwoName,
    sells,
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

