import { Sell_I } from "#reducers/state";
import { Winner_E } from "#constants/tic-tac-toe-base/constNames";

// const arr: number[][] = [
// it is winning combinations
//   [0, 1, 2],/
//   [3, 4, 5],/
//   [6, 7, 8],/
//   [0, 3, 6],/
//   [1, 4, 7],/
//   [2, 5, 8],/
//   [0, 4, 8],/
//   [2, 4, 6], /
// ];
// const Winner_E.CROSS = Winner_E.Winner_E.CROSS
// const Winner_E.ZERRO = Winner_E.Winner_E.ZERRO

export type TestData_T = {
  answer: null | Winner_E;
  discribe: string;
  request: Sell_I[];
};

export const testDateTrue: TestData_T[] = [
  {
    answer: null,
    discribe: "[0,9]",
    request: [
      { key: "1", index: 0, type: true },
      { key: "1", index: 1, type: null },
      { key: "1", index: 2, type: null },
      { key: "1", index: 3, type: null },
      { key: "1", index: 4, type: null },
      { key: "1", index: 5, type: null },
      { key: "1", index: 6, type: null },
      { key: "1", index: 7, type: null },
      { key: "1", index: 8, type: true },
    ],
  },
  {
    answer: null,
    discribe: "[]",
    request: [
      { key: "1", index: 0, type: null },
      { key: "1", index: 1, type: null },
      { key: "1", index: 2, type: null },
      { key: "1", index: 3, type: null },
      { key: "1", index: 4, type: null },
      { key: "1", index: 5, type: null },
      { key: "1", index: 6, type: null },
      { key: "1", index: 7, type: null },
      { key: "1", index: 8, type: null },
    ],
  },
  {
    answer: Winner_E.CROSS,
    discribe: "[0, 1, 2]",
    request: [
      //   [0, 1, 2]
      { key: "1", index: 0, type: true }, //
      { key: "1", index: 2, type: true }, //
      { key: "1", index: 3, type: null },
      { key: "1", index: 4, type: null },
      { key: "1", index: 5, type: null },
      { key: "1", index: 6, type: null },
      { key: "1", index: 1, type: true }, //
      { key: "1", index: 7, type: null },
      { key: "1", index: 8, type: null },
    ],
  },
  {
    answer: Winner_E.CROSS,
    discribe: "[3, 4, 5]",
    request: [
      //   [3, 4, 5]
      { key: "1", index: 3, type: true }, //
      { key: "1", index: 0, type: null },
      { key: "1", index: 1, type: null },
      { key: "1", index: 2, type: null },
      { key: "1", index: 4, type: true }, //
      { key: "1", index: 5, type: true }, //
      { key: "1", index: 6, type: null },
      { key: "1", index: 7, type: null },
      { key: "1", index: 8, type: null },
    ],
  },
  {
    answer: Winner_E.CROSS,
    discribe: "[6, 7, 8]",
    request: [
      //   [6, 7, 8]
      { key: "1", index: 0, type: null },
      { key: "1", index: 1, type: null },
      { key: "1", index: 2, type: null },
      { key: "1", index: 3, type: null },
      { key: "1", index: 4, type: null },
      { key: "1", index: 5, type: null },
      { key: "1", index: 6, type: true }, //
      { key: "1", index: 7, type: true }, //
      { key: "1", index: 8, type: true }, //
    ],
  },
  {
    answer: Winner_E.CROSS,
    discribe: "[0, 3, 6]",
    request: [
      //   [0, 3, 6]
      { key: "1", index: 0, type: true }, //
      { key: "1", index: 1, type: null },
      { key: "1", index: 2, type: null },
      { key: "1", index: 3, type: true }, //
      { key: "1", index: 4, type: null },
      { key: "1", index: 5, type: null },
      { key: "1", index: 6, type: true }, //
      { key: "1", index: 7, type: null },
      { key: "1", index: 8, type: null },
    ],
  },
  {
    answer: Winner_E.CROSS,
    discribe: "[1, 4, 7]",
    request: [
      // [1, 4, 7]
      { key: "1", index: 0, type: null },
      { key: "1", index: 1, type: true }, //
      { key: "1", index: 2, type: null },
      { key: "1", index: 3, type: null },
      { key: "1", index: 4, type: true }, //
      { key: "1", index: 5, type: null },
      { key: "1", index: 6, type: null },
      { key: "1", index: 7, type: true }, //
      { key: "1", index: 8, type: null },
    ],
  },
  {
    answer: Winner_E.CROSS,
    discribe: "[2, 5, 8]",
    request: [
      //  [2, 5, 8]
      { key: "1", index: 0, type: null },
      { key: "1", index: 1, type: null },
      { key: "1", index: 2, type: true }, //
      { key: "1", index: 3, type: null },
      { key: "1", index: 4, type: null },
      { key: "1", index: 5, type: true }, //
      { key: "1", index: 6, type: null },
      { key: "1", index: 7, type: null },
      { key: "1", index: 8, type: true }, //
    ],
  },
  {
    answer: Winner_E.CROSS,
    discribe: "[0, 4, 8]",
    request: [
      //   [0, 4, 8]
      { key: "1", index: 0, type: true }, //
      { key: "1", index: 1, type: null },
      { key: "1", index: 2, type: null },
      { key: "1", index: 3, type: null },
      { key: "1", index: 4, type: true }, //
      { key: "1", index: 5, type: null },
      { key: "1", index: 6, type: null },
      { key: "1", index: 7, type: null },
      { key: "1", index: 8, type: true }, //
    ],
  },
  {
    answer: Winner_E.CROSS,
    discribe: "[2, 4, 6]",
    request: [
      // [2, 4, 6]
      { key: "1", index: 0, type: null },
      { key: "1", index: 1, type: null },
      { key: "1", index: 2, type: true }, //
      { key: "1", index: 3, type: null },
      { key: "1", index: 4, type: true }, //
      { key: "1", index: 5, type: null },
      { key: "1", index: 6, type: true }, //
      { key: "1", index: 7, type: null },
      { key: "1", index: 8, type: null },
    ],
  },
];

export const testDateFalse: TestData_T[] = [
  {
    answer: Winner_E.ZERRO,
    discribe: "[0, 1, 2]",
    request: [
      //   [0, 1, 2]
      { key: "1", index: 0, type: false }, //
      { key: "1", index: 2, type: false }, //
      { key: "1", index: 3, type: null },
      { key: "1", index: 4, type: null },
      { key: "1", index: 5, type: null },
      { key: "1", index: 6, type: null },
      { key: "1", index: 1, type: false }, //
      { key: "1", index: 7, type: null },
      { key: "1", index: 8, type: null },
    ],
  },
  {
    answer: Winner_E.ZERRO,
    discribe: "[3, 4, 5]",
    request: [
      //   [3, 4, 5]
      { key: "1", index: 3, type: false }, //
      { key: "1", index: 0, type: null },
      { key: "1", index: 1, type: null },
      { key: "1", index: 2, type: null },
      { key: "1", index: 4, type: false }, //
      { key: "1", index: 5, type: false }, //
      { key: "1", index: 6, type: null },
      { key: "1", index: 7, type: null },
      { key: "1", index: 8, type: null },
    ],
  },
  {
    answer: Winner_E.ZERRO,
    discribe: "[6, 7, 8]",
    request: [
      //   [6, 7, 8]
      { key: "1", index: 0, type: null },
      { key: "1", index: 1, type: null },
      { key: "1", index: 2, type: null },
      { key: "1", index: 3, type: null },
      { key: "1", index: 4, type: null },
      { key: "1", index: 5, type: null },
      { key: "1", index: 6, type: false }, //
      { key: "1", index: 7, type: false }, //
      { key: "1", index: 8, type: false }, //
    ],
  },
  {
    answer: Winner_E.ZERRO,
    discribe: "[0, 3, 6]",
    request: [
      //   [0, 3, 6]
      { key: "1", index: 0, type: false }, //
      { key: "1", index: 1, type: null },
      { key: "1", index: 2, type: null },
      { key: "1", index: 3, type: false }, //
      { key: "1", index: 4, type: null },
      { key: "1", index: 5, type: null },
      { key: "1", index: 6, type: false }, //
      { key: "1", index: 7, type: null },
      { key: "1", index: 8, type: null },
    ],
  },
  {
    answer: Winner_E.ZERRO,
    discribe: "[1, 4, 7]",
    request: [
      // [1, 4, 7]
      { key: "1", index: 0, type: null },
      { key: "1", index: 1, type: false }, //
      { key: "1", index: 2, type: null },
      { key: "1", index: 3, type: null },
      { key: "1", index: 4, type: false }, //
      { key: "1", index: 5, type: null },
      { key: "1", index: 6, type: null },
      { key: "1", index: 7, type: false }, //
      { key: "1", index: 8, type: null },
    ],
  },
  {
    answer: Winner_E.ZERRO,
    discribe: "[2, 5, 8]",
    request: [
      //  [2, 5, 8]
      { key: "1", index: 0, type: null },
      { key: "1", index: 1, type: null },
      { key: "1", index: 2, type: false }, //
      { key: "1", index: 3, type: null },
      { key: "1", index: 4, type: null },
      { key: "1", index: 5, type: false }, //
      { key: "1", index: 6, type: null },
      { key: "1", index: 7, type: null },
      { key: "1", index: 8, type: false }, //
    ],
  },
  {
    answer: Winner_E.ZERRO,
    discribe: "[0, 4, 8]",
    request: [
      //   [0, 4, 8]
      { key: "1", index: 0, type: false }, //
      { key: "1", index: 1, type: null },
      { key: "1", index: 2, type: null },
      { key: "1", index: 3, type: null },
      { key: "1", index: 4, type: false }, //
      { key: "1", index: 5, type: null },
      { key: "1", index: 6, type: null },
      { key: "1", index: 7, type: null },
      { key: "1", index: 8, type: false }, //
    ],
  },
  {
    answer: Winner_E.ZERRO,
    discribe: "[2, 4, 6]",
    request: [
      // [2, 4, 6]
      { key: "1", index: 0, type: null },
      { key: "1", index: 1, type: null },
      { key: "1", index: 2, type: false }, //
      { key: "1", index: 3, type: null },
      { key: "1", index: 4, type: false }, //
      { key: "1", index: 5, type: null },
      { key: "1", index: 6, type: false }, //
      { key: "1", index: 7, type: null },
      { key: "1", index: 8, type: null },
    ],
  },
];

export const testDateMixed: TestData_T[] = [
  {
    answer: Winner_E.ZERRO,
    discribe: "[0, 1, 2]=false, [4, 8]=true",
    request: [
      //   [0, 1, 2]
      { key: "1", index: 0, type: false }, //
      { key: "1", index: 2, type: false }, //
      { key: "1", index: 3, type: null },
      { key: "1", index: 4, type: true },
      { key: "1", index: 5, type: null },
      { key: "1", index: 6, type: null },
      { key: "1", index: 1, type: false }, //
      { key: "1", index: 7, type: null },
      { key: "1", index: 8, type: true },
    ],
  },
  {
    answer: Winner_E.CROSS,
    discribe: "[3, 1, 4, 5, 2 ]=true, [0, 8, 7, 1]=false",
    request: [
      //   [3, 4, 5]
      { key: "1", index: 3, type: true }, //
      { key: "1", index: 0, type: false },
      { key: "1", index: 1, type: false },
      { key: "1", index: 2, type: true },
      { key: "1", index: 4, type: true }, //
      { key: "1", index: 6, type: null },
      { key: "1", index: 7, type: false },
      { key: "1", index: 8, type: false },
      { key: "1", index: 5, type: true }, //
    ],
  },
  {
    answer: Winner_E.ZERRO,
    discribe: "[6, 4, 7, 8]=false, [0, 2, 5]=true",
    request: [
      //   [6, 7, 8]
      { key: "1", index: 0, type: true },
      { key: "1", index: 1, type: null },
      { key: "1", index: 2, type: true },
      { key: "1", index: 6, type: false }, //
      { key: "1", index: 3, type: null },
      { key: "1", index: 4, type: false },
      { key: "1", index: 5, type: true },
      { key: "1", index: 7, type: false }, //
      { key: "1", index: 8, type: false }, //
    ],
  },
  {
    answer: Winner_E.CROSS,
    discribe: "[0, 1, 3, 6]=true, [5, 8, 1]=false",
    request: [
      //   [0, 3, 6]
      { key: "1", index: 0, type: true }, //
      { key: "1", index: 1, type: false },
      { key: "1", index: 2, type: null },
      { key: "1", index: 3, type: true }, //
      { key: "1", index: 4, type: null },
      { key: "1", index: 5, type: false },
      { key: "1", index: 6, type: true }, //
      { key: "1", index: 7, type: null },
      { key: "1", index: 8, type: false },
    ],
  },
  {
    answer: Winner_E.ZERRO,
    discribe: "[1, 4, 7]=false, [0, 6, 7]=true",
    request: [
      // [1, 4, 7]
      { key: "1", index: 0, type: true },
      { key: "1", index: 1, type: false }, //
      { key: "1", index: 2, type: null },
      { key: "1", index: 3, type: null },
      { key: "1", index: 4, type: false }, //
      { key: "1", index: 5, type: null },
      { key: "1", index: 6, type: true },
      { key: "1", index: 7, type: false }, //
      { key: "1", index: 8, type: true },
    ],
  },
  {
    answer: Winner_E.CROSS,
    discribe: "[2, 5, 8]=true, [0, 1, 7]=false",
    request: [
      //  [2, 5, 8]
      { key: "1", index: 0, type: false },
      { key: "1", index: 1, type: false },
      { key: "1", index: 2, type: true }, //
      { key: "1", index: 3, type: null },
      { key: "1", index: 4, type: null },
      { key: "1", index: 5, type: true }, //
      { key: "1", index: 6, type: null },
      { key: "1", index: 7, type: false },
      { key: "1", index: 8, type: true }, //
    ],
  },
  {
    answer: Winner_E.CROSS,
    discribe: "[0, 4, 8]=true, [1, 5, 7]=false",
    request: [
      //   [0, 4, 8]
      { key: "1", index: 0, type: true }, //
      { key: "1", index: 1, type: false },
      { key: "1", index: 2, type: null },
      { key: "1", index: 3, type: null },
      { key: "1", index: 4, type: true }, //
      { key: "1", index: 5, type: false },
      { key: "1", index: 6, type: null },
      { key: "1", index: 7, type: false },
      { key: "1", index: 8, type: true }, //
    ],
  },
  {
    answer: Winner_E.ZERRO,
    discribe: "[2, 4, 6]=false, [1,7,8]=true",
    request: [
      // [2, 4, 6]
      { key: "1", index: 0, type: null },
      { key: "1", index: 1, type: true },
      { key: "1", index: 2, type: false }, //
      { key: "1", index: 3, type: null },
      { key: "1", index: 4, type: false }, //
      { key: "1", index: 5, type: null },
      { key: "1", index: 6, type: false }, //
      { key: "1", index: 7, type: true },
      { key: "1", index: 8, type: true },
    ],
  },
];

export const testDateNull: TestData_T[] = [
  {
    answer: null,
    discribe: "[0,9]=true [4]=false",
    request: [
      { key: "1", index: 0, type: true },
      { key: "1", index: 1, type: null },
      { key: "1", index: 2, type: null },
      { key: "1", index: 3, type: null },
      { key: "1", index: 4, type: false },
      { key: "1", index: 5, type: null },
      { key: "1", index: 6, type: null },
      { key: "1", index: 7, type: null },
      { key: "1", index: 8, type: true },
    ],
  },
  {
    answer: null,
    discribe: "[]",
    request: [
      { key: "1", index: 0, type: null },
      { key: "1", index: 1, type: null },
      { key: "1", index: 2, type: null },
      { key: "1", index: 3, type: null },
      { key: "1", index: 4, type: null },
      { key: "1", index: 5, type: null },
      { key: "1", index: 6, type: null },
      { key: "1", index: 7, type: null },
      { key: "1", index: 8, type: null },
    ],
  },
  {
    answer: null,
    discribe: "[2, 3, 1]=true, [0, 7, 8]=true ",
    request: [
      //   [0, 1, 2]
      { key: "1", index: 0, type: false },
      { key: "1", index: 2, type: true },
      { key: "1", index: 3, type: true },
      { key: "1", index: 4, type: null },
      { key: "1", index: 5, type: null },
      { key: "1", index: 6, type: null },
      { key: "1", index: 1, type: true },
      { key: "1", index: 7, type: false },
      { key: "1", index: 8, type: false },
    ],
  },
  {
    answer: null,
    discribe: "[0, 1, 5, 6, 8]=true, [2, 3, 4, 7]=false",
    request: [
      { key: "1", index: 3, type: false },
      { key: "1", index: 0, type: true },
      { key: "1", index: 1, type: true },
      { key: "1", index: 2, type: false },
      { key: "1", index: 4, type: false },
      { key: "1", index: 5, type: true },
      { key: "1", index: 6, type: true },
      { key: "1", index: 7, type: false },
      { key: "1", index: 8, type: true },
    ],
  },
];
