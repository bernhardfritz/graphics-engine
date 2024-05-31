import { range } from './range';
import { reversed } from './reversed'

export function* permutations<T>(iterable: Iterable<T>, r?: number): Generator<T[]> {
  const pool = Array.from(iterable);
  const n = pool.length;
  r = r ?? n;
  if (r > n) {
    return;
  }
  const indices = Array.from(range(n));
  const cycles = Array.from(range(n, n - r, -1));
  yield indices.slice(undefined, r).map((i) => pool[i]);
  const a = Array.from(reversed(range(r)));
  while (n) {
    let cont = false;
    for (const i of a) {
      cycles[i] -= 1;
      if (cycles[i] === 0) {
        indices.push(indices.splice(i, 1)[0]);
        cycles[i] = n - i;
      } else {
        const j = cycles[i];
        [indices[i], indices[n - j]] = [indices[n - j], indices[i]];
        yield indices.slice(undefined, r).map((i) => pool[i]);
        cont = true;
        break;
      }
    }
    if (!cont) {
      return;
    }
  }
}
