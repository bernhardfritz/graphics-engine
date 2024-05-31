import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

export function max<T extends genType>(x: T, y: T): T {
  if (isNumber(x)) {
    return Math.max(x, y as number) as T;
  } else {
    return componentWise(max, x, y as Exclude<genType, number>) as T;
  }
}
