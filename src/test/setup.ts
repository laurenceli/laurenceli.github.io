import '@testing-library/jest-dom';
import { vi } from 'vitest';

// IntersectionObserver is not implemented in jsdom.
// Mock it globally so any component using the `observe` action renders without errors.
const mockObserver = {
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
};
vi.stubGlobal(
  'IntersectionObserver',
  vi.fn(function () {
    return mockObserver;
  })
);
