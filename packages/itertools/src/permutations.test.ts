import { describe, expect, it } from 'vitest';
import { permutations } from './permutations';
import { range } from './range';

describe('permutations', () => {
  it('should generate all possible permutations of specified length', () => {
    expect(Array.from(permutations('ABCD', 2))).toEqual([
      ['A', 'B'],
      ['A', 'C'],
      ['A', 'D'],
      ['B', 'A'],
      ['B', 'C'],
      ['B', 'D'],
      ['C', 'A'],
      ['C', 'B'],
      ['C', 'D'],
      ['D', 'A'],
      ['D', 'B'],
      ['D', 'C'],
    ]);
  });

  it('should generate all possible full-length permutations', () => {
    expect(Array.from(permutations(range(3)))).toEqual([
      [0, 1, 2],
      [0, 2, 1],
      [1, 0, 2],
      [1, 2, 0],
      [2, 0, 1],
      [2, 1, 0],
    ]);
  });

  it('something', () => {
    const a = [
      ...permutations(['x', 'y', /*'z', 'w'*/], 2),
      ...permutations(['r', 'g', /*'b', 'a'*/], 2),
      ...permutations(['s', 't', /*'p', 'q'*/], 2),
    ].map((tuple) => tuple.join(''));
    a.forEach((v) => { console.log(v); });
  });
});
