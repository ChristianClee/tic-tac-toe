import { Sell_I } from "#reducers/state";
import { threeToThree } from "#constants/tic-tac-toe-base/3_to_3_answer";
import { fiveToFive } from "#constants/tic-tac-toe-base/5_to_5_answer";
import { Tic_tac_modes_E, Winner_E } from "#constants/tic-tac-toe-base/constNames";

export class Utilits {
  static getArrCount(bool: boolean, arr: Sell_I[]): number[] {
    // it returns array from numbers that are accordining type === <bool>
    return arr.filter((elem) => elem.type === bool).map((elem) => elem.index);
  }

  static getIsintersection(arr: number[], mainArr: number[][]): boolean {
    //!!! 1 THIS FUNCTIONS HAVE MORE SIMILAR CODE, IT NEEDS TO REFACTORING
    // it check is arr consisted from values in 'threeToThree', it's main process

    let result: boolean = false;
    mainArr.forEach((item: number[]) => {
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

  static getIntersectionArr(arr: number[], mainArr: number[][]): number[] {
    //!!! 1 THIS FUNCTIONS HAVE MORE SIMILAR CODE, IT NEEDS TO REFACTORING
    let result: number[] = [];
    mainArr.forEach((item: number[]) => {
      console.log(item.length)
      let innerResult: boolean[] = [];

      item.forEach((elem: number) => {
        innerResult.push(arr.includes(elem));
      });
      if (innerResult.every((i) => i === true)) {
        result = item;
      }
    });
    return result;
  }

  static returnWiner(arg_1: boolean, arg_2: boolean): Winner_E | null {
    if (arg_1) return Winner_E.CROSS;
    else if (arg_2) return Winner_E.ZERRO;
    else return null;
  }

  static getTwoVariant(
    arrTrue: number[],
    arrFalse: number[],
    mode: Tic_tac_modes_E
  ) {
    let isTrueInBase;
    let isFalseInBase;
    if (mode === Tic_tac_modes_E.ONE) {
      isTrueInBase = this.getIsintersection(arrTrue, threeToThree);
      isFalseInBase = this.getIsintersection(arrFalse, threeToThree);
    } else {
      isTrueInBase = this.getIsintersection(arrTrue, fiveToFive);
      isFalseInBase = this.getIsintersection(arrFalse, fiveToFive);
    }
    return { isTrueInBase, isFalseInBase };
  }

  static getWinner(arr: Sell_I[], mode: Tic_tac_modes_E): Winner_E | null {
    //arr is array containing from objects, each object has type which
    // is <true> or <false> and they mean 'cross' or 'zerro' accordingly

    const arrTrue = this.getArrCount(true, arr);
    const arrFalse = this.getArrCount(false, arr);
    const { isTrueInBase, isFalseInBase } = this.getTwoVariant(
      arrTrue,
      arrFalse,
      mode
    );
    return this.returnWiner(isTrueInBase, isFalseInBase);
  }

  static getWinnerResult(
    //!!! IT IS WORKING THIS FUNCTION LOOKS AWFUL, IT NEEDS TO REFACTOR
    arr: Sell_I[],
    winner: Winner_E | null,
    mode: Tic_tac_modes_E
  ): void | number[] {
    let arrUser: number[];
    let arrMain: number[][];
    if (winner === Winner_E.CROSS) {
      arrUser = this.getArrCount(true, arr);
    } else if (winner === Winner_E.ZERRO) {
      arrUser = this.getArrCount(false, arr);
    } else return;

    if (mode === Tic_tac_modes_E.ONE) {
      arrMain = threeToThree;
    } else {
      arrMain = fiveToFive;
    }
    
    return this.getIntersectionArr(arrUser, arrMain);
  }
}
