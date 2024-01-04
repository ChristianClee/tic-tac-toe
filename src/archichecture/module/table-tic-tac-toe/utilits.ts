import { Sell_I } from '#reducers/state'
import { threeToThree } from "#constants/tic-tac-toe-base-answer/3_to_3_answer";


// const CROSS = "cross"
// const ZERRO = "zerro"

export type Winner_T = "cross" | "zerro"



export class Utilits {
  static getArrCount(bool: boolean, arr: Sell_I[]): number[] {
    return arr.filter((elem) => elem.type === bool).map((elem) => elem.index);
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

  static getWinner(arr: Sell_I[]): Winner_T | null {
    const arrTrue = this.getArrCount(true, arr);
    const arrFalse = this.getArrCount(false, arr);
    const isTrueInBase = this.getIsintersection(arrTrue);
    const isFalseInBase = this.getIsintersection(arrFalse);

    return isTrueInBase
      ?
      "cross"
      :
        isFalseInBase
        ?
        "zerro"
        :
        null
  }
}