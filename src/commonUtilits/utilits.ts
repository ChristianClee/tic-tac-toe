import { Sell_I } from "#reducers/tic-tac-toe/state";
import {
  Tic_tac_modes_E,
  Count_sells_E,
} from "#constants/tic-tac-toe-base/constNames";




export class Utilits {
  static getSellsArr(num: number): Sell_I[] {
    const result = [];
    for (let i = 0; i < num; i++) {
      const obj: Sell_I = {
        key: String(Math.random() + i),
        index: i,
        type: null,
      };

      result.push(obj);
    }
    return result;
  }
  static getCountSells(index: Tic_tac_modes_E): Sell_I[] {
    switch (index) {
      case Tic_tac_modes_E.ONE:
        return this.getSellsArr(Count_sells_E.oneMode);
      case Tic_tac_modes_E.TWO:
        return this.getSellsArr(Count_sells_E.twoMode);
      default:
        return this.getSellsArr(Count_sells_E.oneMode);
    }
  }

  static getCleanSells(arr: Sell_I[]): Sell_I[] {
    return arr.map(item => {
      const type = null
      const key = item.key
      const index = item.index
      return { key, index, type };
    })
  }
}
