export function range(stop: number): Generator<number>;
export function range(start: number, stop: number, step?: number): Generator<number>;
export function* range(start: number, stop?: number, step = 1): Generator<number> {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }
  for (let i = start; step >= 0 ? i < stop : i > stop; i += step) {
    yield i;
  }
}