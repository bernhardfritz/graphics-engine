import { componentWise } from "./component-wise";
import { genType } from "./genType";
import { isNumber } from "./isNumber";

export function exp<T extends genType>(x: T): T {
  if (isNumber(x)) {
    return Math.exp(x) as T;
  } else {
    return componentWise(exp, x) as T;
  }
}