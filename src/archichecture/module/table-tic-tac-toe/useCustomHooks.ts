import { useEffect, useContext } from "react";
import { GameContext } from "#reducers/tic-tac-toe/context";
import { CoreTicTac } from "./coreGame";
import { Utilits as Utl } from "./utilits";
import { ActionType_E } from "#reducers/tic-tac-toe/actions";

export function useCustomHook() {
  const { state, dispatch } = useContext(GameContext);

  useEffect(() => {
    const win = CoreTicTac.getWinner(state.sells, state.currentGame); // it determines game winner, CROSS or ZERRO
    const res = CoreTicTac.getWinnerResult(state.sells, win, state.currentGame); // it determines result of winner
    const nowin = CoreTicTac.isNoWinner(state.sells, win);

    if (win) {
      dispatch({
        type: ActionType_E.ChangeScope,
        payload: Utl.getScopeRessult(win, state.scope),
      });
      dispatch({
        type: ActionType_E.SetLastWinner,
        payload: win,
      });
    }
    if (res) {
      dispatch({
        type: ActionType_E.SetWinnerCombinatios,
        payload: res,
      });
      if (nowin) {
        dispatch({
          type: ActionType_E.SetnoWinner,
          payload: true,
        });
      }
    }
  }, [state.sells]);
}
