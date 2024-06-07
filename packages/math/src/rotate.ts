import { add } from './add';
import { mat4 } from './mat4';
import { multiply } from './multiply';
import { normalize } from './normalize';
import { vec3 } from './vec3';

export function rotate(m: mat4, angle: number, v: vec3) {
  const a = angle;
  const c = Math.cos(a);
  const s = Math.sin(a);

  const axis = normalize(v);
  const temp = vec3(multiply(1 - c, axis));

  return mat4(
    add(
      add(
        multiply(m[0], c + temp[0] * axis[0]),
        multiply(m[1], temp[0] * axis[1] + s * axis[2])
      ),
      multiply(m[2], temp[0] * axis[2] - s * axis[1])
    ),
    add(
      add(
        multiply(m[0], temp[1] * axis[0] - s * axis[2]),
        multiply(m[1], c + temp[1] * axis[1])
      ),
      multiply(m[2], temp[1] * axis[2] + s * axis[0])
    ),
    add(
      add(
        multiply(m[0], temp[2] * axis[0] + s * axis[1]),
        multiply(m[1], temp[2] * axis[1] - s * axis[0])
      ),
      multiply(m[2], c + temp[2] * axis[2])
    ),
    m[3]
  );
}
