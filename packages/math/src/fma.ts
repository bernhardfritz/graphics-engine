import { add } from "./add";
import { genType } from "./genType";
import { multiply } from "./multiply";

export function fma<T extends genType>(a: T, b: T, c: T): T {
  return add(multiply(a, b), c);
}