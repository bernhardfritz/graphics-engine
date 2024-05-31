import { mat2 } from "./mat2";
import { mat3 } from "./mat3";
import { mat4 } from "./mat4";
import { matn } from "./matn";

export function transpose<T extends mat2 | mat3 | mat4>(m: T): T {
  const t = matn[m.length]();
  for (let col = 0; col < m.length; col++) {
    for (let row = 0; row < m[0].length; row++) {
      t[row][col] = m[col][row];
    }
  }

  return t as T;
}