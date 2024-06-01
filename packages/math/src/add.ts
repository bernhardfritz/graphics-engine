import { map, zip } from '@miniengine/itertools';
import { componentWise } from './component-wise';
import { genType } from './genType';
import { isNumber } from './isNumber';
import { mat2 } from './mat2';
import { mat3 } from './mat3';
import { mat4 } from './mat4';
import { matn } from './matn';

// One operand is a scalar, and the other is a vector or matrix. In this case, the scalar operation is applied independently to each component of the vector or matrix, resulting in the same size vector or matrix.
export function add<T extends genType | mat2 | mat3 | mat4>(
  x: T | number,
  y: T | number
): T {
  if (isNumber(x)) {
    if (isNumber(y)) {
      return (x + y) as T;
    } else if (isNumber(y[0])) {
      // y is vector
      return add(genType[y.length](x) as T, y);
    } else {
      // y is matrix
      const xx = genType[y[0].length](x);
      return matn[y.length](...y.map((yy) => add(xx, yy))) as T;
    }
  } else if (isNumber(x[0])) {
    // x is vector
    if (isNumber(y)) {
      return add(x, genType[x.length](y) as T);
    } else {
      // y is vector
      return componentWise(
        add,
        x as Exclude<genType, number>,
        y as Exclude<genType, number>
      ) as T;
    }
  } else {
    // x is matrix
    if (isNumber(y)) {
      const yy = genType[x[0].length](y);
      return matn[x.length](...x.map((xx) => add(xx, yy))) as T;
    } else {
      // y is matrix
      return matn[x.length](
        ...map(
          ([xx, yy]) => add(xx, yy),
          zip<Exclude<genType, number>>(
            x as Exclude<T, genType>,
            y as Exclude<T, genType>
          )
        )
      ) as T;
    }
  }
}
