import { describe, expect, it } from 'vitest';
import { Vec2SwizzleComponentKeys, vec2 } from './vec2';

describe('vec2', () => {
  it('should behave like an array', () => {
    const v = vec2(1, 2);

    expect(v).toEqual([1, 2]);
    expect(v[0]).toBe(1);
    expect(v[1]).toBe(2);
  });

  it('should support read swizzling', () => {
    const v = vec2(1, 2);

    expect(v.x).toBe(1);
    expect(v.y).toBe(2);
    expect(v.r).toBe(1);
    expect(v.g).toBe(2);
    expect(v.s).toBe(1);
    expect(v.t).toBe(2);
    expect(v.xx).toEqual([1, 1]);
    expect(v.xy).toEqual([1, 2]);
    expect(v.yx).toEqual([2, 1]);
    expect(v.yy).toEqual([2, 2]);
    expect(v.rr).toEqual([1, 1]);
    expect(v.rg).toEqual([1, 2]);
    expect(v.gr).toEqual([2, 1]);
    expect(v.gg).toEqual([2, 2]);
    expect(v.xxx).toEqual([1, 1, 1]);
    expect(v.xxy).toEqual([1, 1, 2]);
    expect(v.xyx).toEqual([1, 2, 1]);
    expect(v.xyy).toEqual([1, 2, 2]);
    expect(v.yxx).toEqual([2, 1, 1]);
    expect(v.yxy).toEqual([2, 1, 2]);
    expect(v.yyx).toEqual([2, 2, 1]);
    expect(v.yyy).toEqual([2, 2, 2]);
    expect(v.rrr).toEqual([1, 1, 1]);
    expect(v.rrg).toEqual([1, 1, 2]);
    expect(v.rgr).toEqual([1, 2, 1]);
    expect(v.rgg).toEqual([1, 2, 2]);
    expect(v.grr).toEqual([2, 1, 1]);
    expect(v.grg).toEqual([2, 1, 2]);
    expect(v.ggr).toEqual([2, 2, 1]);
    expect(v.ggg).toEqual([2, 2, 2]);
    expect(v.sss).toEqual([1, 1, 1]);
    expect(v.sst).toEqual([1, 1, 2]);
    expect(v.sts).toEqual([1, 2, 1]);
    expect(v.stt).toEqual([1, 2, 2]);
    expect(v.tss).toEqual([2, 1, 1]);
    expect(v.tst).toEqual([2, 1, 2]);
    expect(v.tts).toEqual([2, 2, 1]);
    expect(v.ttt).toEqual([2, 2, 2]);
  });

  it.each<{
    swizzleComponent: Vec2SwizzleComponentKeys;
    expected: [number, number];
  }>([
    { swizzleComponent: 'x', expected: [1, 0] },
    { swizzleComponent: 'y', expected: [0, 1] },
    { swizzleComponent: 'r', expected: [1, 0] },
    { swizzleComponent: 'g', expected: [0, 1] },
    { swizzleComponent: 's', expected: [1, 0] },
    { swizzleComponent: 't', expected: [0, 1] },
  ])('should support write swizzling', ({ swizzleComponent, expected }) => {
    const v = vec2(0, 0);

    v[swizzleComponent] = 1;

    expect(v).toEqual(expected);
  });

  it.each<{
    swizzleComponent: 'xy' | 'yx';
    expected: [number, number];
  }>([
    { swizzleComponent: 'xy', expected: [1, 2] },
    { swizzleComponent: 'yx', expected: [2, 1] },
    // TODO
  ])('should support write swizzling', ({ swizzleComponent, expected }) => {
    const v = vec2(0, 0);

    v[swizzleComponent] = vec2(1, 2);

    expect(v).toEqual(expected);
  });
});
