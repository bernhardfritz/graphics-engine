import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function asin<T extends genType>(x: T): T {
  if (isNumber(x)) {
    return Math.asin(x) as T;
  } else {
    return componentWise(asin, x) as T;
  }
}
