import { mat4 } from './mat4';
import { tan } from './tan';
import { vec4 } from './vec4';

export function perspective(
  fovy: number,
  aspect: number,
  zNear: number,
  zFar: number
) {
  const tanHalfFovy = tan(fovy / 2);

  return mat4(
    vec4(1 / (aspect * tanHalfFovy), 0, 0, 0),
    vec4(0, 1 / tanHalfFovy, 0, 0),
    vec4(0, 0, -(zFar + zNear) / (zFar - zNear), -1),
    vec4(0, 0, -(2 * zFar * zNear) / (zFar - zNear), 0)
  );
}
