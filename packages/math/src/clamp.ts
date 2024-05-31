import { genType } from "./genType";
import { max } from "./max";
import { min } from "./min";

export function clamp<T extends genType>(x: T, minVal: T, maxVal: T): T {
  return min(max(x, minVal), maxVal);
}