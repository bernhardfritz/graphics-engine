import { dot } from "./dot";
import { genType } from "./genType";
import { multiply } from "./multiply";
import { subtract } from "./subtract";

export function reflect<T extends genType>(I: T, N: T): T {
  return subtract(I, multiply(2 * dot(N, I), N));
}