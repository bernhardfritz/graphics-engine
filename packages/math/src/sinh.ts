import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function sinh<T extends genType>(x: T): T {
  if (isNumber(x)) {
    return Math.sinh(x) as T;
  } else {
    return componentWise(sinh, x) as T;
  }
}
