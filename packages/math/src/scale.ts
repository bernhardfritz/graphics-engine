import { mat4 } from './mat4';
import { multiply } from './multiply';
import { vec3 } from './vec3';

export function scale(m: mat4, v: vec3) {
  return mat4(
    multiply(m[0], v[0]),
    multiply(m[1], v[1]),
    multiply(m[2], v[2]),
    m[3]
  );
}
