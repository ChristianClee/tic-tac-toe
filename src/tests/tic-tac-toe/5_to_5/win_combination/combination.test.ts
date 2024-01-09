import { winCombinztion } from "./data";
import { CoreTicTac } from "#archichecture/module/table-tic-tac-toe/coreGame";



describe(`tic-tac-toe , test 5 to 5 table ,combination result result`, () => {
  winCombinztion.forEach(item => {
    test(`${item.discribe} - ${item.answer}`,() => {
      expect(
        CoreTicTac.getWinnerResult(
          item.request.arr,
          item.request.win,
          item.request.mode
        )
      ).toEqual(item.answer);
    })
  } )
});