import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function trunc<T extends genType>(x: T): T {
  if (isNumber(x)) {
    return Math.trunc(x) as T;
  } else {
    return componentWise(trunc, x) as T;
  }
}
