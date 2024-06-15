import { cross } from './cross';
import { dot } from './dot';
import { mat4 } from './mat4';
import { normalize } from './normalize';
import { subtract } from './subtract';
import { vec3 } from './vec3';

export function lookAt(eye: vec3, center: vec3, up: vec3): mat4 {
  const f = normalize(subtract(center, eye));
  const s = normalize(cross(f, up));
  const u = cross(s, f);

  return mat4(
    s.x,
    u.x,
    -f.x,
    -dot(s, eye),
    s.y,
    u.y,
    -f.y,
    -dot(u, eye),
    s.z,
    u.z,
    -f.z,
    dot(f, eye),
    0,
    0,
    0,
    1
  );
}
