export function* zip<T>(...iterables: Iterable<T>[]): Generator<T[]> {
  const iterators = iterables.map((iterable) => iterable[Symbol.iterator]());
  while (iterators.length > 0) {
    const result = [];
    for (const it of iterators) {
      const elem = it.next();
      if (elem.done) {
        return;
      }
      result.push(elem.value);
    }
    yield result;
  }
}
