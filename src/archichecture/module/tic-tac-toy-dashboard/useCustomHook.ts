import { useContext, useEffect } from "react";
import { GameContext } from "#reducers/tic-tac-toe/context";
import {
  Tic_tac_opponent_E,
  Tic_tac_opponent_names_E,
} from "#constants/tic-tac-toe-base/constNames";


type CustomHook = (
  dispatch: React.Dispatch<React.SetStateAction<Tic_tac_opponent_names_E[]>>
) => void;

export const useCustomHook: CustomHook = (dispatch) => {
  const { state } = useContext(GameContext);

  useEffect(() => {
    dispatch(getNames());
  }, [state.modeGame]);


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
        return [
          Tic_tac_opponent_names_E.UNKNOWN,
          Tic_tac_opponent_names_E.UNKNOWN,
        ];
    }
  }
};
