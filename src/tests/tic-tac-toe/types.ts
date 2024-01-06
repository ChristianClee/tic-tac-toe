import { Sell_I } from "#reducers/tic-tac-toe/state";
import {
  Winner_E,
  Tic_tac_modes_E,
} from "#constants/tic-tac-toe-base/constNames";

export type TestWinner_T = {
  answer: null | Winner_E;
  discribe: string;
  request: Sell_I[];
};

export type TestCombination_T = {
  answer: number[] | [];
  discribe: string;
  request: {
    arr: Sell_I[];
    win: Winner_E | null;
    mode: Tic_tac_modes_E;
  };
};
