import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import Experience from './Experience.svelte';
import data from '$lib/data/data.json';
import type { Experience as ExperienceType } from '$lib/types';

const experience = data.experience as ExperienceType[];

describe('Experience component', () => {
  it('renders section#experience', () => {
    const { container } = render(Experience, { props: { experience } });
    expect(container.querySelector('#experience')).not.toBeNull();
  });

  it('renders 5 entries', () => {
    const { container } = render(Experience, { props: { experience } });
    expect(container.querySelectorAll('.entry')).toHaveLength(5);
  });

  it('renders company names', () => {
    const { getAllByText } = render(Experience, { props: { experience } });
    expect(getAllByText(/Xero \(Hubdoc\)/).length).toBeGreaterThan(0);
    expect(getAllByText(/Rubikloud/).length).toBeGreaterThan(0);
    expect(getAllByText(/DLS Technology Corporation/).length).toBeGreaterThan(0);
  });

  it('renders position titles', () => {
    const { getAllByText } = render(Experience, { props: { experience } });
    expect(getAllByText('Infrastructure Engineer').length).toBeGreaterThan(0);
    expect(getAllByText('Software Engineer').length).toBeGreaterThan(0);
    expect(getAllByText('Software Developer Intern').length).toBeGreaterThan(0);
    expect(getAllByText('Front-End Developer Intern').length).toBeGreaterThan(0);
  });

  it('renders start/end dates for first entry', () => {
    const { container } = render(Experience, { props: { experience } });
    const firstEntry = container.querySelectorAll('.entry')[0];
    expect(firstEntry.textContent).toContain('September 2022');
    expect(firstEntry.textContent).toContain('Present');
  });

  it('renders location "Toronto, Ontario"', () => {
    const { getAllByText } = render(Experience, { props: { experience } });
    expect(getAllByText('Toronto, Ontario').length).toBeGreaterThan(0);
  });

  it('renders at least one skill chip for first entry', () => {
    const { container } = render(Experience, { props: { experience } });
    const firstEntry = container.querySelectorAll('.entry')[0];
    const chips = firstEntry.querySelectorAll('.chip');
    expect(chips.length).toBeGreaterThan(0);
    const chipTexts = Array.from(chips).map((c) => c.textContent?.trim());
    expect(chipTexts).toContain('Kubernetes');
  });

  it('renders at least one summary bullet for first entry', () => {
    const { container } = render(Experience, { props: { experience } });
    const firstEntry = container.querySelectorAll('.entry')[0];
    const bullets = firstEntry.querySelectorAll('.summary li');
    expect(bullets.length).toBeGreaterThan(0);
  });

  it('collapse entries start with summary and chips hidden', () => {
    const { container } = render(Experience, { props: { experience } });
    // entries 2, 3, 4 are collapse: true (Rubikloud intern, DLS intern, DLS coordinator)
    for (const i of [2, 3, 4]) {
      const entry = container.querySelectorAll('.entry')[i];
      expect(entry.querySelector('.summary')).toBeNull();
      expect(entry.querySelector('.skill-chips')).toBeNull();
    }
  });

  it('collapse entries render a toggle button', () => {
    const { container } = render(Experience, { props: { experience } });
    for (const i of [2, 3, 4]) {
      const entry = container.querySelectorAll('.entry')[i];
      expect(entry.querySelector('.toggle-btn')).not.toBeNull();
    }
  });

  it('non-collapse entries do not render a toggle button', () => {
    const { container } = render(Experience, { props: { experience } });
    // entries 0 and 1 are the two Xero roles (no collapse flag)
    for (const i of [0, 1]) {
      const entry = container.querySelectorAll('.entry')[i];
      expect(entry.querySelector('.toggle-btn')).toBeNull();
    }
  });

  it('clicking toggle reveals summary and chips', async () => {
    const { container } = render(Experience, { props: { experience } });
    const entry = container.querySelectorAll('.entry')[2]; // Rubikloud intern
    const btn = entry.querySelector('.toggle-btn') as HTMLElement;
    await fireEvent.click(btn);
    expect(entry.querySelector('.summary')).not.toBeNull();
    expect(entry.querySelector('.skill-chips')).not.toBeNull();
  });

  it('Technical Support Coordinator is collapsed by default', () => {
    const { container } = render(Experience, { props: { experience } });
    const entry = container.querySelectorAll('.entry')[4];
    expect(entry.querySelector('.summary')).toBeNull();
    expect(entry.querySelector('.toggle-btn')).not.toBeNull();
  });
});
