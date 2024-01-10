import { ActionType_E } from "#reducers/tic-tac-toe/actions";
import { Utilits } from "#commonUtilits/utilits";
import { Winner_E } from "#constants/tic-tac-toe-base/constNames";
import { Game_I } from "#reducers/tic-tac-toe/state"
import { GameActions_T } from "#reducers/tic-tac-toe/actions";


export type ResetFunc_T = (
  state: Game_I,
  dispatch: React.Dispatch<GameActions_T>
) => void;


export const nextGame: ResetFunc_T = ( state, dispatch ) => {
  dispatch({
    type: ActionType_E.SetLastWinner,
    payload: null,
  });
  dispatch({
    type: ActionType_E.SetnoWinner,
    payload: false,
  });
  dispatch({
    type: ActionType_E.SetWinnerCombinatios,
    payload: [],
  });
  dispatch({
    type: ActionType_E.SetMarkerItem,
    payload: Utilits.getCleanSells(state.sells),
  });
};


export const resetGame: ResetFunc_T = (state, dispatch) => {
  nextGame(state, dispatch);

  dispatch({
    type: ActionType_E.ChangeScope,
    payload: {
      [Winner_E.CROSS]: 0,
      [Winner_E.ZERRO]: 0,
    },
  });

  dispatch({
    type: ActionType_E.SetMarker,
    payload: true,
  });
};
