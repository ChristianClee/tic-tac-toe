import { testDateMixed } from "./data";
import { Utilits } from "#archichecture/module/table-tic-tac-toe/coreGame";
import { Tic_tac_modes_E } from "#constants/tic-tac-toe-base/constNames";


describe("tic-tac-toe, test 3 to 3 table", () => {
  testDateMixed.forEach((item) => {
    test(`${item.discribe} - ${item.answer}`, () => {
        expect(Utilits.getWinner(item.request, Tic_tac_modes_E.TWO)).toBe(
          item.answer
        );
      });
  })
});