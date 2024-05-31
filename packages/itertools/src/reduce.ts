export function reduce<T, U = T>(fn: (accumulator: U, updateValue: T) => U, iterable: Iterable<T>, initializer?: U): U {
  const it = iterable[Symbol.iterator]();
  let result;
  if (initializer === undefined) {
    let tmp = it.next();
    if (tmp.done) {
      throw new TypeError('Reduce of empty iterable with no initial value');
    }
    result = tmp;
  } else {
    result = { done: false, value: initializer } as IteratorYieldResult<U>;
  }
  let value = result.value as U;
  for (let r = it.next(); !r.done; r = it.next()) {
    value = fn(value, r.value);
  }
  return value;
}
