import { genType } from './genType';
import { reduce, zip } from '@miniengine/itertools';

export function dot<T extends genType>(x: T, y: T): number {
  if (typeof x === 'number') {
    return x * (y as number);
  } else {
    return reduce((accumulator, [a, b]) => accumulator + dot(a, b), zip(x, y as Exclude<genType, number>), 0);
  }
}
