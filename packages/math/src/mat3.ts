import { vec3 } from './vec3';

export type mat3 = [vec3, vec3, vec3];

export function mat3(...args: (number | number[])[]): mat3 {
  const flattened = args.flat();
  if (flattened.length === 1) {
    const d = flattened[0];
    return [vec3(d, 0, 0), vec3(0, d, 0), vec3(0, 0, d)];
  }
  const m: mat3 = mat3(1);
  for (let i = 0; i < flattened.length; i++) {
    const row = i % 3;
    const col = (i - row) / 3;
    m[col][row] = flattened[i];
  }

  return m;
}
