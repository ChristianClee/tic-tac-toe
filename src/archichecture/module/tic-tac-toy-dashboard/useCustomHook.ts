import { useContext, useEffect } from "react";
import { GameContext } from "#reducers/tic-tac-toe/context";
import {
  Tic_tac_opponent_E,
  Tic_tac_opponent_names_E,
} from "#constants/tic-tac-toe-base/constNames";


type CustomHook = (
  dispatch: React.Dispatch<React.SetStateAction<string[]>>
) => void;

export const useCustomHook: CustomHook = (dispatch) => {
  const { state } = useContext(GameContext);

  useEffect(() => {
    dispatch(getNames());
    function getNames() {
      switch (state.modeGame) {
        case Tic_tac_opponent_E.NOLINK:
          return [
            Tic_tac_opponent_names_E.PLAYER_1,
            Tic_tac_opponent_names_E.PLAYER_2,
          ];
        case Tic_tac_opponent_E.COMPUTER:
          return [
            Tic_tac_opponent_names_E.PLAYER,
            Tic_tac_opponent_names_E.COMPUTER,
          ];
        case Tic_tac_opponent_E.HUMAN:
          const playerOne = state.optionsOneToOne.playerOneName;
          const playerTwo = state.optionsOneToOne.playerTwoName;
          if (playerOne && playerTwo) {
            return [playerOne, playerTwo];
          } else {
            return ["", ""];
          }
          
      }
    }
  }, [state.modeGame, state.optionsOneToOne]);
};
