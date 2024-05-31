import { describe, expect, it } from 'vitest';
import { vec3 } from './vec3';
import { min } from './min';

describe('min', () => {
  it('should do something', () => {
    expect(min(vec3(1, 2, 3), vec3(3, 2, 1))).toEqual(vec3(1, 2, 1));
  });
});
