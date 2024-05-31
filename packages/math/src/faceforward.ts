import { genType } from './genType';
import { dot } from './dot';
import { negate } from './negate';

export function faceworward<T extends genType>(N: T, I: T, Nref: T): T {
  if (dot(Nref, I) < 0) {
    return N;
  } else {
    return negate(N);
  }
}
