import { componentWise } from "./component-wise";
import { genType } from "./genType";
import { isNumber } from "./isNumber";

export function subtract<T extends genType>(x: T | number, y: T | number): T {
  if (isNumber(x)) {
    if (isNumber(y)) {
      return (x - y) as T;
    } else {
      return subtract(genType[y.length](x) as T, y);
    }
  } else {
    if (isNumber(y)) {
      return subtract(x, genType[x.length](y) as T);
    } else {
      return componentWise(subtract, x, y) as T;
    }
  }
}