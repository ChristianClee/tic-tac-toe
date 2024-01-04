import { Utilits } from '#archichecture/module/table-tic-tac-toe/utilits'
import {
  testDateTrue,
  testDateFalse,
  testDateMixed,
  testDateNull,
} from "./data";





describe('test 3 to 3 table', () => {
  testDateTrue.forEach((item) => {
    test(`${item.discribe} - ${item.answer}`, () => {
      expect(Utilits.getWinner(item.request)).toBe(item.answer);
    });
  });
  testDateFalse.forEach((item) => {
    test(`${item.discribe} - ${item.answer}`, () => {
      expect(Utilits.getWinner(item.request)).toBe(item.answer);
    });
  });
  testDateMixed.forEach((item) => {
    test(`${item.discribe} - ${item.answer}`, () => {
      expect(Utilits.getWinner(item.request)).toBe(item.answer);
    });
  });
  testDateNull.forEach((item) => {
    test(`${item.discribe} - ${item.answer}`, () => {
      expect(Utilits.getWinner(item.request)).toBe(item.answer);
    });
  });

})

