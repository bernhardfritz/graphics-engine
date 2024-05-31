import { genType } from './genType';
import { isNumber } from './isNumber';

export function length<T extends genType>(x: T): number {
  if (isNumber(x)) {
    return x;
  } else {
    return Math.sqrt(
      x.reduce(
        (accumulator, component) => accumulator + component * component,
        0
      )
    );
  }
}
