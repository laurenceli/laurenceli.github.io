import { describe, it, expect, vi, beforeEach } from 'vitest';
import { observe } from './observe';

describe('observe action', () => {
  let mockObserve: ReturnType<typeof vi.fn>;
  let mockUnobserve: ReturnType<typeof vi.fn>;
  let mockDisconnect: ReturnType<typeof vi.fn>;
  let capturedCallback: IntersectionObserverCallback;
  let capturedOptions: IntersectionObserverInit | undefined;

  beforeEach(() => {
    mockObserve = vi.fn();
    mockUnobserve = vi.fn();
    mockDisconnect = vi.fn();

    vi.stubGlobal(
      'IntersectionObserver',
      vi.fn(function (callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
        capturedCallback = callback;
        capturedOptions = options;
        return {
          observe: mockObserve,
          unobserve: mockUnobserve,
          disconnect: mockDisconnect,
        };
      })
    );
  });

  function makeEntry(isIntersecting: boolean, node: Element): IntersectionObserverEntry {
    return { isIntersecting, target: node } as IntersectionObserverEntry;
  }

  it('calls IntersectionObserver constructor on mount', () => {
    const node = document.createElement('div');
    observe(node, {});
    expect(IntersectionObserver).toHaveBeenCalledOnce();
    expect(mockObserve).toHaveBeenCalledWith(node);
  });

  it('adds visible class when entry isIntersecting: true', () => {
    const node = document.createElement('div');
    observe(node, {});
    capturedCallback([makeEntry(true, node)], {} as IntersectionObserver);
    expect(node.classList.contains('visible')).toBe(true);
  });

  it('does NOT add visible class when isIntersecting: false', () => {
    const node = document.createElement('div');
    observe(node, {});
    capturedCallback([makeEntry(false, node)], {} as IntersectionObserver);
    expect(node.classList.contains('visible')).toBe(false);
  });

  it('calls unobserve after element becomes visible', () => {
    const node = document.createElement('div');
    observe(node, {});
    capturedCallback([makeEntry(true, node)], {} as IntersectionObserver);
    expect(mockUnobserve).toHaveBeenCalledWith(node);
  });

  it('calls disconnect when destroy() is called', () => {
    const node = document.createElement('div');
    const action = observe(node, {});
    action?.destroy?.();
    expect(mockDisconnect).toHaveBeenCalledOnce();
  });

  it('respects custom threshold option', () => {
    const node = document.createElement('div');
    observe(node, { threshold: 0.5 });
    expect(capturedOptions?.threshold).toBe(0.5);
  });

  it('respects custom rootMargin option', () => {
    const node = document.createElement('div');
    observe(node, { rootMargin: '10px' });
    expect(capturedOptions?.rootMargin).toBe('10px');
  });
});
