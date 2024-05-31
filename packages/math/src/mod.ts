import { divide } from "./divide";
import { floor } from "./floor";
import { genType } from "./genType";
import { multiply } from "./multiply";
import { subtract } from "./subtract";

export function mod<T extends genType>(x: T, y: T): T {
  return subtract(x, multiply(y, floor(divide(x, y))));
}