import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function floor<T extends genType>(x: T): T {
  if (isNumber(x)) {
    return Math.floor(x) as T;
  } else {
    return componentWise(floor, x) as T;
  }
}
