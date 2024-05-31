import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function cos<T extends genType>(x: T): T {
  if (isNumber(x)) {
    return Math.cos(x) as T;
  } else {
    return componentWise(cos, x) as T;
  }
}
