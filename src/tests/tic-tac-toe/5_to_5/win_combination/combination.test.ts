import { winCombinztion } from "./data";
import { Utilits } from "#archichecture/module/table-tic-tac-toe/coreGame";



describe(`tic-tac-toe , test 5 to 5 table ,combination result result`, () => {
  winCombinztion.forEach(item => {
    test(`${item.discribe} - ${item.answer}`,() => {
      expect(
        Utilits.getWinnerResult(item.request.arr, item.request.win, item.request.mode)
      ).toEqual(item.answer);
    })
  } )
});