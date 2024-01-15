import { useEffect, useContext } from "react";
import { GameContext } from "#reducers/tic-tac-toe/context";
import { CoreTicTac } from "./coreGame";
import { Utilits as Utl } from "./utilits";
import { ActionType_E } from "#reducers/tic-tac-toe/actions";
import {
  Modal_message_types_E,
} from "#constants/tic-tac-toe-base/constNames";


export function useCustomHook() {
  const { state, dispatch } = useContext(GameContext);

  useEffect(() => {
    const win = CoreTicTac.getWinner(state.sells, state.currentGame); // it determines game winner, CROSS or ZERRO
    const res = CoreTicTac.getWinnerResult(state.sells, win, state.currentGame); // it determines result of winner
    const nowin = CoreTicTac.isNoWinner(state.sells, win);
    // const computer = CoreTicTac.isComputer(state.modeGame, state.typeMarker);
    const moveComputer = CoreTicTac.getCompMove(
      state.sells,
      state.modeGame,
      state.typeMarker,
      win
    );

    if (moveComputer) {

      setTimeout(() => {
        dispatch({
          type: ActionType_E.SetMarkerItem,
          payload: moveComputer,
        });
        dispatch({
          type: ActionType_E.TuggleMarker,
        });
      },2000)

    }
    if (win) {
        dispatch({
          type: ActionType_E.ChangeScope,
          payload: Utl.getScopeRessult(win, state.scope),
        });
        dispatch({
          type: ActionType_E.SetLastWinner,
          payload: win,
        });
        dispatch({
          type: ActionType_E.TuggleModalWindow,
          payload: Modal_message_types_E.WINNER,
        });
    }
    if (res) {
      dispatch({
        type: ActionType_E.SetWinnerCombinatios,
        payload: res,
      });
    }
    if (nowin) {
      dispatch({
        type: ActionType_E.SetnoWinner,
        payload: true,
      });
      dispatch({
        type: ActionType_E.TuggleModalWindow,
        payload: Modal_message_types_E.NOWINNER,
      });
    }
  }, [state.sells]);
}
