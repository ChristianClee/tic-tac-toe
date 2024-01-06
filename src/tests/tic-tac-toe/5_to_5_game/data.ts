import { TestData_T } from "../types";
import { Winner_E } from "#constants/tic-tac-toe-base/constNames";




export const testDateMixed: TestData_T[] = [
  {
    answer: Winner_E.CROSS,
    discribe: "[0, 1, 2, 3]=true, [4, 9, 14]=false",
    request: [
      //   [0, 1, 2, 3],
      { key: "1", index: 0, type: true }, //
      { key: "1", index: 1, type: true }, //
      { key: "1", index: 2, type: true }, //
      { key: "1", index: 3, type: true }, //
      { key: "1", index: 4, type: false },
      { key: "1", index: 5, type: null },
      { key: "1", index: 6, type: null },
      { key: "1", index: 7, type: null },
      { key: "1", index: 8, type: null },
      { key: "1", index: 9, type: false },
      { key: "1", index: 10, type: null },
      { key: "1", index: 11, type: null },
      { key: "1", index: 12, type: null },
      { key: "1", index: 13, type: null },
      { key: "1", index: 14, type: false },
      { key: "1", index: 15, type: null },
      { key: "1", index: 16, type: null },
      { key: "1", index: 17, type: null },
      { key: "1", index: 18, type: null },
      { key: "1", index: 19, type: null },
      { key: "1", index: 20, type: null },
      { key: "1", index: 21, type: null },
      { key: "1", index: 22, type: null },
      { key: "1", index: 23, type: null },
      { key: "1", index: 24, type: null },
    ],
  },
  {
    answer: Winner_E.CROSS,
    discribe:
      "[23, 5, 7, 11, 8, 12, 17, 19]=true, [0, 1, 4, 9, 14, 15, 16, 20]=false",
    request: [
      //   [5, 11, 17, 23],
      { key: "1", index: 23, type: true }, //
      { key: "1", index: 0, type: false },
      { key: "1", index: 1, type: false },
      { key: "1", index: 5, type: true }, //
      { key: "1", index: 2, type: null },
      { key: "1", index: 3, type: null },
      { key: "1", index: 4, type: false },
      { key: "1", index: 6, type: null },
      { key: "1", index: 7, type: true },
      { key: "1", index: 11, type: true }, //
      { key: "1", index: 8, type: true },
      { key: "1", index: 9, type: false },
      { key: "1", index: 10, type: null },
      { key: "1", index: 12, type: true },
      { key: "1", index: 13, type: null },
      { key: "1", index: 14, type: false },
      { key: "1", index: 17, type: true }, //
      { key: "1", index: 15, type: false },
      { key: "1", index: 16, type: false },
      { key: "1", index: 18, type: null },
      { key: "1", index: 19, type: true },
      { key: "1", index: 20, type: false },
      { key: "1", index: 21, type: null },
      { key: "1", index: 22, type: null },
      { key: "1", index: 24, type: null },
    ],
  },
  {
    answer: Winner_E.ZERRO,
    discribe: "[18, 3, 7, 9, 13, 8 ]=false, [11, 1, 4, 10, 16, 20, 23]=true",
    request: [
      //   3, 8, 13, 18,
      { key: "1", index: 11, type: true },
      { key: "1", index: 18, type: false }, //
      { key: "1", index: 0, type: null },
      { key: "1", index: 1, type: true },
      { key: "1", index: 2, type: null },
      { key: "1", index: 3, type: false }, //
      { key: "1", index: 4, type: true },
      { key: "1", index: 5, type: null },
      { key: "1", index: 6, type: null },
      { key: "1", index: 7, type: false },
      { key: "1", index: 9, type: false },
      { key: "1", index: 10, type: true },
      { key: "1", index: 12, type: null },
      { key: "1", index: 13, type: false }, //
      { key: "1", index: 14, type: null },
      { key: "1", index: 15, type: null },
      { key: "1", index: 16, type: true },
      { key: "1", index: 17, type: null },
      { key: "1", index: 8, type: false }, //
      { key: "1", index: 19, type: null },
      { key: "1", index: 20, type: true },
      { key: "1", index: 21, type: null },
      { key: "1", index: 22, type: null },
      { key: "1", index: 23, type: true },
      { key: "1", index: 24, type: null },
    ],
  },
  {
    answer: null,
    discribe: "[0,2,4,6,7,11,13,14,15,16,19,22,23]=true, [1,3,5,8,9,10,12,17,18,20,21,24]=false",
    request: [
      //   [],
      { key: "1", index: 0, type: true }, 
      { key: "1", index: 1, type: false}, 
      { key: "1", index: 2, type: true }, 
      { key: "1", index: 3, type: false}, 
      { key: "1", index: 4, type: true },
      { key: "1", index: 5, type: false},
      { key: "1", index: 6, type: true },
      { key: "1", index: 7, type: true },
      { key: "1", index: 8, type: false},
      { key: "1", index: 9, type: false},
      { key: "1", index: 10, type: false},
      { key: "1", index: 11, type: true },
      { key: "1", index: 12, type: false},
      { key: "1", index: 13, type: true },
      { key: "1", index: 14, type: true },
      { key: "1", index: 15, type: true },
      { key: "1", index: 16, type: true },
      { key: "1", index: 17, type: false},
      { key: "1", index: 18, type: false},
      { key: "1", index: 19, type: true },
      { key: "1", index: 20, type: false},
      { key: "1", index: 21, type: false},
      { key: "1", index: 22, type: true },
      { key: "1", index: 23, type: true },
      { key: "1", index: 24, type: false},
    ],
  },
];
