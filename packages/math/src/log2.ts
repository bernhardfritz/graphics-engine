import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function log2<T extends genType>(x: T): T {
  if (isNumber(x)) {
    return Math.log2(x) as T;
  } else {
    return componentWise(log2, x) as T;
  }
}
