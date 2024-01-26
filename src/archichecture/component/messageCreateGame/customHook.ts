import { useContext } from "react";
import { GameContext } from "#reducers/tic-tac-toe/context";
import {Options_I} from "#reducers/tic-tac-toe/state";

export function useCustomHook(): Options_I {
  const { state, dispatch } = useContext(GameContext);
  const {
    currentGame,
    sells,
    typeMarker,
    scope,
    noWinner,
    winnerCombination,
    modeGame,
    lastWinner,
  } = state;

  const options = {
    currentGame,
    sells,
    typeMarker,
    scope,
    noWinner,
    winnerCombination,
    modeGame,
    lastWinner,
  };

  return options;
}
