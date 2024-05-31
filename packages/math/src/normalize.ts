import { divide } from './divide';
import { genType } from './genType';
import { isNumber } from './isNumber';
import { length } from './length';

export function normalize<T extends genType>(v: T): T {
  if (isNumber(v)) {
    return 1 as T;
  } else {
    return divide(v, length(v));
  }
}