/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/semi */
import { Equal, Expect } from "@type-challenges/utils";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >
];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;

type TupleType = typeof tuple;
// "tesla", "model 3", "model X", "model Y"
type Values = TupleType[number];

type TupleToObject<T extends readonly string[]> = { [key in T[number]]: key };
