import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function atan<T extends genType>(x: T): T {
  if (isNumber(x)) {
    return Math.atan(x) as T;
  } else {
    return componentWise(atan, x) as T;
  }
}
