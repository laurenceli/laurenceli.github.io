import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
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
});
