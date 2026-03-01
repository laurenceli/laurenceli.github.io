import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Hero from './Hero.svelte';

describe('Hero component', () => {
  it('renders section#hero', () => {
    const { container } = render(Hero);
    expect(container.querySelector('#hero')).not.toBeNull();
  });

  it('h1 contains "Laurence Li."', () => {
    const { container } = render(Hero);
    expect(container.querySelector('h1')?.textContent).toContain('Laurence Li.');
  });

  it('h2 contains the tagline', () => {
    const { container } = render(Hero);
    expect(container.querySelector('h2')?.textContent).toContain(
      'Infrastructure engineer who loves building reliable systems.'
    );
  });

  it('renders greeting text "Hi, my name is"', () => {
    const { getByText } = render(Hero);
    expect(getByText('Hi, my name is')).toBeTruthy();
  });

  it('GitHub CTA link has correct href, target, rel', () => {
    const { container } = render(Hero);
    const links = container.querySelectorAll('a');
    const github = Array.from(links).find((a) => a.href.includes('github.com/laurenceli'));
    expect(github).toBeTruthy();
    expect(github?.getAttribute('target')).toBe('_blank');
    expect(github?.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('Resume CTA link contains PDF path and opens in new tab', () => {
    const { container } = render(Hero);
    const links = container.querySelectorAll('a');
    const resume = Array.from(links).find((a) => a.href.includes('.pdf'));
    expect(resume).toBeTruthy();
    expect(resume?.getAttribute('target')).toBe('_blank');
  });
});
