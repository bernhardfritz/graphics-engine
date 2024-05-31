export function* map<T, U>(
  fn: (t: T) => U,
  iterable: Iterable<T>
): Generator<U> {
  for (const t of iterable) {
    yield fn(t);
  }
}
