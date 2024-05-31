import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function ceil<T extends genType>(x: T): T {
  if (isNumber(x)) {
    return Math.ceil(x) as T;
  } else {
    return componentWise(ceil, x) as T;
  }
}
