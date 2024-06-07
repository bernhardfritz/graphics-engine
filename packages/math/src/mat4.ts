import { vec4 } from './vec4';

export type mat4 = [vec4, vec4, vec4, vec4];

export function mat4(...args: (number | number[] | number[][])[]): mat4 {
  const flattened = args.flat(2);
  if (flattened.length === 1) {
    const d = flattened[0];
    return [
      vec4(d, 0, 0, 0),
      vec4(0, d, 0, 0),
      vec4(0, 0, d, 0),
      vec4(0, 0, 0, d),
    ];
  }
  const m: mat4 = mat4(1);
  for (let i = 0; i < flattened.length; i++) {
    const row = i % 4;
    const col = (i - row) / 4;
    m[col][row] = flattened[i];
  }

  return m;
}
