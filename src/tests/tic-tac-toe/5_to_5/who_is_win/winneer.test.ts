import { testDateMixed } from "./data";
import { CoreTicTac } from "#archichecture/module/table-tic-tac-toe/coreGame";
import { Tic_tac_modes_E } from "#constants/tic-tac-toe-base/constNames";


describe("tic-tac-toe, test 5 to 5 table, winner result", () => {
  testDateMixed.forEach((item) => {
    test(`${item.discribe} - ${item.answer}`, () => {
        expect(CoreTicTac.getWinner(item.request, Tic_tac_modes_E.TWO)).toBe(
          item.answer
        );
      });
  })
});