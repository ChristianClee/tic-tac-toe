import { Sell_I } from "#reducers/tic-tac-toe/state";

export class Utilits {
  static getNewSells(arr: Sell_I[], key: string, type: boolean): Sell_I[] {
    return arr.map((elem) => {
      if (elem.key === key) {
        const index = elem.index;
        return { key, index, type };
      } else {
        return elem;
      }
    });
  }
  static isWinnerSell(arr: number[], index: number): boolean {
    return arr.includes(index);
  }
}
