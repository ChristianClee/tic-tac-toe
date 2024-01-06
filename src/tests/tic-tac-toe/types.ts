import { Sell_I } from "#reducers/state";
import { Winner_E } from "#constants/tic-tac-toe-base/constNames";

export type TestData_T = {
  answer: null | Winner_E;
  discribe: string;
  request: Sell_I[];
};
