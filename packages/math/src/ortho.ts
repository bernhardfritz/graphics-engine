import { mat4 } from './mat4';

export function ortho(
  left: number,
  right: number,
  bottom: number,
  top: number,
  zNear = -1,
  zFar = 1
) {
  return mat4(
    2 / (right - left),
    0,
    0,
    0,
    0,
    2 / (top - bottom),
    0,
    0,
    0,
    0,
    -2 / (zFar - zNear),
    0,
    -(right + left) / (right - left),
    -(top + bottom) / (top - bottom),
    -(zFar + zNear) / (zFar - zNear),
    1
  );
}
