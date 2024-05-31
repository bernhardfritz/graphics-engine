import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function acosh<T extends genType>(x: T): T {
  if (isNumber(x)) {
    return Math.acosh(x) as T;
  } else {
    return componentWise(acosh, x) as T;
  }
}
