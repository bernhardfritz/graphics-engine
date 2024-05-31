import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function abs<T extends genType>(x: T): T {
  if (isNumber(x)) {
    return Math.abs(x) as T;
  } else {
    return componentWise(abs, x) as T;
  }
}
