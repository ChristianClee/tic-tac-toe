import {Winner_E} from "#constants/tic-tac-toe-base/constNames";


interface Scope_I{
  [Winner_E.CROSS]: number;
  [Winner_E.ZERRO]: number
}

export class Utilits {
  static getScopeRessult(win: Winner_E, scope: Scope_I): Scope_I {
    if (win === Winner_E.CROSS) {
      return {
        ...scope,
        [Winner_E.CROSS]: scope[Winner_E.CROSS] += 1,
      };
    }else{
      return {
        ...scope,
        [Winner_E.ZERRO]: scope[Winner_E.ZERRO] += 1,
      };
    }
  }
}