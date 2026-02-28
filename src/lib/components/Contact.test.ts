import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Contact from './Contact.svelte';

describe('Contact component', () => {
  it('renders section#contact', () => {
    const { container } = render(Contact);
    expect(container.querySelector('#contact')).not.toBeNull();
  });

  it('heading contains "Let\'s build something together."', () => {
    const { container } = render(Contact);
    const heading = container.querySelector('h2');
    expect(heading?.textContent).toContain("Let's build something together.");
  });

  it('email link has correct href and displays address as text', () => {
    const { container } = render(Contact);
    const emailLink = container.querySelector('a[href="mailto:li.laurence55@gmail.com"]');
    expect(emailLink).not.toBeNull();
    expect(emailLink?.textContent).toContain('li.laurence55@gmail.com');
  });

  it('GitHub link has correct href, target, rel, and text', () => {
    const { container } = render(Contact);
    const links = container.querySelectorAll('a');
    const github = Array.from(links).find((a) => a.href.includes('github.com/laurenceli'));
    expect(github).toBeTruthy();
    expect(github?.getAttribute('target')).toBe('_blank');
    expect(github?.getAttribute('rel')).toBe('noopener noreferrer');
    expect(github?.textContent).toContain('github.com/laurenceli');
  });

  it('LinkedIn link has correct href, target, rel, and text', () => {
    const { container } = render(Contact);
    const links = container.querySelectorAll('a');
    const linkedin = Array.from(links).find((a) => a.href.includes('linkedin.com'));
    expect(linkedin).toBeTruthy();
    expect(linkedin?.getAttribute('target')).toBe('_blank');
    expect(linkedin?.getAttribute('rel')).toBe('noopener noreferrer');
    expect(linkedin?.textContent).toContain('linkedin.com/in/laurenceli');
  });
});
