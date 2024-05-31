import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function sqrt<T extends genType>(x: T): T {
  if (isNumber(x)) {
    return Math.sqrt(x) as T;
  } else {
    return componentWise(sqrt, x) as T;
  }
}
