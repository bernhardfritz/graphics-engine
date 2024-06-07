import { add } from './add';
import { mat4 } from './mat4';
import { multiply } from './multiply';
import { vec3 } from './vec3';

export function translate(m: mat4, v: vec3) {
  return mat4(
    m[0],
    m[1],
    m[2],
    add(
      add(
        add(multiply(m[0], v[0]), multiply(m[1], v[1])),
        multiply(m[2], v[2])
      ),
      m[3]
    )
  );
}
