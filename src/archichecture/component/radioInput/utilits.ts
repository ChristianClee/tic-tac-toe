import { Utilits as Utl } from "#commonUtilits/utilits";
import {Sell_I} from '#reducers/state'

export class Utilits {
  static getCount(index: number): Sell_I[] {
    switch (index) {
      case 0:
        return Utl.getSellsArr(9);
      case 1:
        return Utl.getSellsArr(25);
      // case 2:
      //   return Utl.getSellsArr(25);
      default:
        return Utl.getSellsArr(9);
    }
  }
}