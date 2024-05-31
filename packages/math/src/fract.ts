import { genType } from './genType';
import { subtract } from './subtract';
import { floor } from './floor';

export function fract<T extends genType>(x: T): T {
  return subtract(x, floor(x));
}
