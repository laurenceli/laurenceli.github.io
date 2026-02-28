import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Skills from './Skills.svelte';
import data from '$lib/data/data.json';
import type { SkillCategory } from '$lib/types';

const skills = data.skills as SkillCategory[];

describe('Skills component', () => {
  it('renders section#skills', () => {
    const { container } = render(Skills, { props: { skills } });
    expect(container.querySelector('#skills')).not.toBeNull();
  });

  it('renders all five category titles', () => {
    const { getByText } = render(Skills, { props: { skills } });
    expect(getByText('Programming')).toBeTruthy();
    expect(getByText('Web')).toBeTruthy();
    expect(getByText('Infrastructure')).toBeTruthy();
    expect(getByText('Metrics')).toBeTruthy();
    expect(getByText('Workflow')).toBeTruthy();
  });

  it('does NOT render "SKILLS" as a category heading', () => {
    const { container } = render(Skills, { props: { skills } });
    const headings = Array.from(container.querySelectorAll('.category-title'));
    const skillsHeading = headings.find((h) => h.textContent?.trim() === 'SKILLS');
    expect(skillsHeading).toBeUndefined();
  });

  it('renders known skill pills per category', () => {
    const { getByText } = render(Skills, { props: { skills } });
    expect(getByText(/JavaScript \/ Node\.js/)).toBeTruthy();
    expect(getByText(/HTML\/CSS\/SASS/)).toBeTruthy();
    expect(getByText(/PostgreSQL/)).toBeTruthy();
    expect(getByText(/Sumo Logic/)).toBeTruthy();
    expect(getByText(/Github \/ Git/)).toBeTruthy();
  });

  it('skill with level > 0 has "dim" CSS class', () => {
    const { container } = render(Skills, { props: { skills } });
    // D3 has level: 10 in the Web category
    const pills = Array.from(container.querySelectorAll('.pill'));
    const d3Pill = pills.find((p) => p.textContent?.trim() === 'D3');
    expect(d3Pill?.classList.contains('dim')).toBe(true);
  });

  it('skill with level 0 does NOT have "dim" class', () => {
    const { container } = render(Skills, { props: { skills } });
    const pills = Array.from(container.querySelectorAll('.pill'));
    const jsPill = pills.find((p) => p.textContent?.trim() === 'JavaScript / Node.js');
    expect(jsPill?.classList.contains('dim')).toBe(false);
  });
});
