import { componentWise } from "./component-wise";
import { genType } from "./genType";
import { isNumber } from "./isNumber";

export function pow<T extends genType>(x: T | number, y: T | number): T {
  if (isNumber(x)) {
    if (isNumber(y)) {
      return Math.pow(x, y) as T;
    } else {
      return pow(genType[y.length](x) as T, y);
    }
  } else {
    if (isNumber(y)) {
      return pow(x, genType[x.length](y) as T);
    } else {
      return componentWise(pow, x, y) as T;
    }
  }
}