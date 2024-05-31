import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function log<T extends genType>(x: T): T {
  if (isNumber(x)) {
    return Math.log(x) as T;
  } else {
    return componentWise(log, x) as T;
  }
}
