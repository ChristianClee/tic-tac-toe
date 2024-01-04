import {Sell_I} from '#reducers/state'

export class Utilits {
  static getSellsArr(num: number): Sell_I[] {
    const result = []                                                               
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
}
