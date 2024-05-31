import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function sign<T extends genType>(x: T): T {
  if (isNumber(x)) {
    return Math.sign(x) as T;
  } else {
    return componentWise(sign, x) as T;
  }
}
