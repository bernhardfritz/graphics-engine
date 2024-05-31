import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function radians<T extends genType>(degrees: T): T {
  if (isNumber(degrees)) {
    return ((Math.PI * degrees) / 180) as T;
  } else {
    return componentWise(radians, degrees) as T;
  }
}
