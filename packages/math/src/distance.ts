import { genType } from "./genType";
import { subtract } from "./subtract";
import { length } from './length';

export function distance<T extends genType>(p0: T, p1: T): number {
  return length(subtract(p0, p1));
}