import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Nav from './Nav.svelte';

describe('Nav component', () => {
  it('renders a <nav> element', () => {
    const { container } = render(Nav);
    expect(container.querySelector('nav')).not.toBeNull();
  });

  it('logo link has href="#hero" and text "LL"', () => {
    const { container } = render(Nav);
    const logo = container.querySelector('a.logo');
    expect(logo?.getAttribute('href')).toBe('#hero');
    expect(logo?.textContent?.trim()).toBe('LL');
  });

  it('renders five nav links with correct hrefs', () => {
    const { container } = render(Nav);
    const navLinks = container.querySelectorAll('.nav-links a');
    const hrefs = Array.from(navLinks).map((a) => a.getAttribute('href'));
    expect(hrefs).toContain('#experience');
    expect(hrefs).toContain('#projects');
    expect(hrefs).toContain('#skills');
    expect(hrefs).toContain('#education');
    expect(hrefs).toContain('#contact');
    expect(navLinks).toHaveLength(5);
  });

  it('nav link labels are correct', () => {
    const { container } = render(Nav);
    const navLinks = container.querySelectorAll('.nav-links a');
    const labels = Array.from(navLinks).map((a) => a.textContent?.trim());
    expect(labels).toContain('Experience');
    expect(labels).toContain('Projects');
    expect(labels).toContain('Skills');
    expect(labels).toContain('Education');
    expect(labels).toContain('Contact');
  });
});
