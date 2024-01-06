import { Utilits } from "#archichecture/module/table-tic-tac-toe/coreGame";
import { Tic_tac_modes_E } from "#constants/tic-tac-toe-base/constNames";
import {
  testDateCROSS,
  testDateZERRO,
  testDateMixed,
  testDateNull,
} from "./data";

describe("tic-tac-toe, test 3 to 3 table", () => {
  testDateCROSS.forEach((item) => {
    test(`${item.discribe} - ${item.answer}`, () => {
      expect(Utilits.getWinner(item.request, Tic_tac_modes_E.ONE)).toBe(
        item.answer
      );
    });
  });
  testDateZERRO.forEach((item) => {
    test(`${item.discribe} - ${item.answer}`, () => {
      expect(Utilits.getWinner(item.request, Tic_tac_modes_E.ONE)).toBe(
        item.answer
      );
    });
  });
  testDateMixed.forEach((item) => {
    test(`${item.discribe} - ${item.answer}`, () => {
      expect(Utilits.getWinner(item.request, Tic_tac_modes_E.ONE)).toBe(
        item.answer
      );
    });
  });
  testDateNull.forEach((item) => {
    test(`${item.discribe} - ${item.answer}`, () => {
      expect(Utilits.getWinner(item.request, Tic_tac_modes_E.ONE)).toBe(
        item.answer
      );
    });
  });
});
