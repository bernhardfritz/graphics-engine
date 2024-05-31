import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function tan<T extends genType>(x: T): T {
  if (isNumber(x)) {
    return Math.tan(x) as T;
  } else {
    return componentWise(tan, x) as T;
  }
}
