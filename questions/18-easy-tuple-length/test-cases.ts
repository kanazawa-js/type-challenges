/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/semi */

import { Equal, Expect } from "@type-challenges/utils";

const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
const spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT",
] as const;

// TODO
// - [] readonlyのtoubple型を受け取って要素数を返す
// - [] 引数が数字のときはコンパイルエラー
// - [] 引数が文字列のときはコンパイルエラー

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<"hello world">
];

type Length<T extends readonly unknown[]> = T["length"];
// unknown[]
// 引数の数で条件分岐するときに使えるかも？

type Tesla = typeof tesla;
type length = Tesla["length"];
type a = Tesla[0];
type b = Tesla["1"];
type c = Tesla["keys"];
