import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function negate<T extends genType>(x: T): T {
  if (isNumber(x)) {
    return (-x) as T;
  } else {
    return componentWise(negate, x) as T;
  }
}
