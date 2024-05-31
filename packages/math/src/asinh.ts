import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function asinh<T extends genType>(x: T): T {
  if (isNumber(x)) {
    return Math.asinh(x) as T;
  } else {
    return componentWise(asinh, x) as T;
  }
}
