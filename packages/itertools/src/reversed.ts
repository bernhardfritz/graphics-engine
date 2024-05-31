export function* reversed<T>(iterable: Iterable<T>): Generator<T> {
  const items = Array.from(iterable).reverse();
  for (const item of items) {
    yield item;
  }
}