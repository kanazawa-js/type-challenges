/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/semi */

import { Equal, Expect } from "@type-challenges/utils";

// 第2引数に含まれるものを第1引数から除外する
// 第1引数の型...union type,第2引数の型...union type

// - [] ジェネリクスでstringを受け取れるようにする
// - [] stringを返すようにする

type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, Exclude<"a" | "b" | "c", "a">>>,
  Expect<
    Equal<
      MyExclude<"a" | "b" | "c", "a" | "b">,
      Exclude<"a" | "b" | "c", "a" | "b">
    >
  >,
  Expect<
    Equal<
      MyExclude<string | number | (() => void), Function>,
      Exclude<string | number | (() => void), Function>
    >
  >
];

type MyExclude<T extends string, U extends string> = string;

// だめですー
type A = "a" | "b" | "c";
type B = "a";

type C = { [K in A]: any };

type D = {
  // a: never;
  b: "any";
  c: "a";
};

type R = keyof D;

const test: R = "a";
