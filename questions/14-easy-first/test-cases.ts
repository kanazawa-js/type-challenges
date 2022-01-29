/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/semi */

import { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];

type _First<T extends any[]> = T[0];
type First<T extends any[]> = T extends [] ? never : T[0];

// 条件で型を分岐してる
// [] が空の配列

type Tuple<T> = [T, ...any];

type A = First<[]>;
