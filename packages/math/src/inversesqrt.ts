import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function inversesqrt<T extends genType>(x: T): T {
  if (isNumber(x)) {
    return (1 / Math.sqrt(x)) as T;
  } else {
    return componentWise(inversesqrt, x) as T;
  }
}
