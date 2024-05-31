import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function sin<T extends genType>(x: T): T {
  if (isNumber(x)) {
    return Math.sin(x) as T;
  } else {
    return componentWise(sin, x) as T;
  }
}
