import { describe, expect, it } from 'vitest';
import { product } from './product';
import { range } from './range';

describe('product', () => {
  it('should generate the cartesian product of input iterables', () => {
    expect(Array.from(product('ABCD', 'xy'))).toEqual([
      ['A', 'x'],
      ['A', 'y'],
      ['B', 'x'],
      ['B', 'y'],
      ['C', 'x'],
      ['C', 'y'],
      ['D', 'x'],
      ['D', 'y'],
    ]);
  });

  it('should generate the cartesian product of repeated input iterables', () => {
    expect(Array.from(product(range(2), 3))).toEqual([
      [0, 0, 0],
      [0, 0, 1],
      [0, 1, 0],
      [0, 1, 1],
      [1, 0, 0],
      [1, 0, 1],
      [1, 1, 0],
      [1, 1, 1],
    ]);
  });

  it('something', () => {
    const a = [
      ...product(['x', 'y', 'z', 'w'], 4),
      ...product(['r', 'g', 'b', 'a'], 4),
      ...product(['s', 't', 'p', 'q'], 4),
    ].map((tuple) => tuple.join(''));
    a.forEach((v) => { console.log(v); });
  });
});
