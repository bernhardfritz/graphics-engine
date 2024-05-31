import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function min<T extends genType>(x: T, y: T): T {
  if (isNumber(x)) {
    return Math.min(x, y as number) as T;
  } else {
    return componentWise(min, x, y as Exclude<genType, number>) as T;
  }
}
