import type { Action } from 'svelte/action';

export const observe: Action<
  HTMLElement,
  { threshold?: number; rootMargin?: string } | undefined
> = (node, options = {}) => {
  const { threshold = 0.1, rootMargin = '0px 0px -60px 0px' } = options;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.classList.add('visible');
          observer.unobserve(node);
        }
      });
    },
    { threshold, rootMargin }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
};
