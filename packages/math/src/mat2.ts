import { vec2 } from './vec2';

export type mat2 = [vec2, vec2];

export function mat2(...args: (number | number[])[]): mat2 {
  const flattened = args.flat();
  if (flattened.length === 1) {
    const d = flattened[0];
    return [vec2(d, 0), vec2(0, d)];
  }
  const m: mat2 = mat2(1);
  for (let i = 0; i < flattened.length; i++) {
    const row = i % 2;
    const col = (i - row) / 2;
    m[col][row] = flattened[i];
  }

  return m;
}
