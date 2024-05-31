import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function degrees<T extends genType>(radians: T): T {
  if (isNumber(radians)) {
    return ((180 * radians) / Math.PI) as T;
  } else {
    return componentWise(degrees, radians) as T;
  }
}
