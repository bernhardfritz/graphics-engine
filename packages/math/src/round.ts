import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function round<T extends genType>(x: T): T {
  if (isNumber(x)) {
    return Math.round(x) as T;
  } else {
    return componentWise(round, x) as T;
  }
}
