import { Sell_I } from '#reducers/state'
import { threeToThree } from "#constants/tic-tac-toe-base-answer/3_to_3_answer";
import { CROSS, ZERRO, Cross_T, Zerro_T} from "#constants/tic-tac-toe-base-answer/constNames";





export type Winner_T = Cross_T | Zerro_T | null;

export class Utilits {
  static getArrCount(bool: boolean, arr: Sell_I[]): number[] {
    // it returns array from numbers that are accordining type === <bool>
    return arr.filter((elem) => elem.type === bool)
      .map((elem) => elem.index);
  }

  static getIsintersection(arr: number[]): boolean {
    let result: boolean = false;
    threeToThree.forEach((item: number[]) => {
      let innerResult: boolean[] = [];

      item.forEach((elem: number) => {
        innerResult.push(arr.includes(elem));
      });

      if (innerResult.every((i) => i === true)) {
        result = true;
      }
    });
    return result;
  }

  static getWinner(arr: Sell_I[]): Winner_T {
    //arr is array containing from objects, each object has type which 
    // is <true> or <false> and they mean 'cross' or 'zerro' accordingly

    const arrTrue = this.getArrCount(true, arr);
    const arrFalse = this.getArrCount(false, arr);
    const isTrueInBase = this.getIsintersection(arrTrue);
    const isFalseInBase = this.getIsintersection(arrFalse);

    if (isTrueInBase) return CROSS 
    else if (isFalseInBase) return ZERRO
    else return null
  }
}