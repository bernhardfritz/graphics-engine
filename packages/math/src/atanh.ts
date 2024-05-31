import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function atanh<T extends genType>(x: T): T {
  if (isNumber(x)) {
    return Math.atanh(x) as T;
  } else {
    return componentWise(atanh, x) as T;
  }
}
