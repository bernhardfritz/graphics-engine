import { componentWise } from "./component-wise";
import { genType } from "./genType";
import { isNumber } from "./isNumber";

export function exp2<T extends genType>(x: T): T {
  if (isNumber(x)) {
    return Math.pow(2, x) as T;
  } else {
    return componentWise(exp2, x) as T;
  }
}