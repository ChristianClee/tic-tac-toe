import { Utilits as Utl } from "#commonUtilits/utilits";
import { Sell_I } from "#reducers/tic-tac-toe/state";
import {
  Tic_tac_modes_E,
  Count_sells_E,
} from "#constants/tic-tac-toe-base/constNames";

export class Utilits {
  static getCount(index: Tic_tac_modes_E): Sell_I[] {
    switch (index) {
      case Tic_tac_modes_E.ONE:
        return Utl.getSellsArr(Count_sells_E.oneMode);
      case Tic_tac_modes_E.TWO:
        return Utl.getSellsArr(Count_sells_E.twoMode);
      default:
        return Utl.getSellsArr(Count_sells_E.oneMode);
    }
  }
}
