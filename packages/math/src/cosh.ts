import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function cosh<T extends genType>(x: T): T {
  if (isNumber(x)) {
    return Math.cosh(x) as T;
  } else {
    return componentWise(cosh, x) as T;
  }
}
