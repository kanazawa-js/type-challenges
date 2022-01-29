/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/semi */
import { Equal, Expect } from "@type-challenges/utils";

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

type MyPick<T, K extends keyof T> = { [key in K]: T[key] };

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
];
