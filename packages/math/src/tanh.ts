import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function tanh<T extends genType>(x: T): T {
  if (isNumber(x)) {
    return Math.tanh(x) as T;
  } else {
    return componentWise(tanh, x) as T;
  }
}
