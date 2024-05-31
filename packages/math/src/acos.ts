import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function acos<T extends genType>(x: T): T {
  if (isNumber(x)) {
    return Math.acos(x) as T;
  } else {
    return componentWise(acos, x) as T;
  }
}
