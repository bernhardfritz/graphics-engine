import { describe, expect, it } from "vitest";
import { reversed } from "./reversed";

describe('reversed', () => {
  it('should reverse an array immutably', () => {
    const items = [1, 2, 3];

    const reversedItems = Array.from(reversed(items));

    expect(reversedItems).toEqual([3, 2, 1]);
    expect(items).toEqual([1, 2, 3]);
  });
});