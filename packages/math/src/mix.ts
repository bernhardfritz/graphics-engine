import { componentWise } from './component-wise';
import { genType } from './genType';
import { isNumber } from './isNumber';

export function mix<T extends genType>(x: T, y: T, a: T | number): T {
  if (isNumber(x) && isNumber(a)) {
    return (x * (1 - a) + (y as number) * a) as T;
  } else {
    if (isNumber(a)) {
      return mix(x, y, genType[(x as Exclude<genType, number>).length](a) as T);
    } else {
      return componentWise(
        mix,
        x as Exclude<genType, number>,
        y as Exclude<genType, number>,
        a
      ) as T;
    }
  }
}
