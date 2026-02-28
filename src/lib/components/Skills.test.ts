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

  it('renders all six category titles', () => {
    const { getByText } = render(Skills, { props: { skills } });
    expect(getByText('Languages')).toBeTruthy();
    expect(getByText('Infrastructure')).toBeTruthy();
    expect(getByText('Observability')).toBeTruthy();
    expect(getByText('Datastores')).toBeTruthy();
    expect(getByText('Workflow and CI/CD')).toBeTruthy();
    expect(getByText('Cloud Providers')).toBeTruthy();
  });

  it('does NOT render "SKILLS" as a category heading', () => {
    const { container } = render(Skills, { props: { skills } });
    const headings = Array.from(container.querySelectorAll('.category-title'));
    const skillsHeading = headings.find((h) => h.textContent?.trim() === 'SKILLS');
    expect(skillsHeading).toBeUndefined();
  });

  it('renders known skill pills per category', () => {
    const { getByText } = render(Skills, { props: { skills } });
    expect(getByText(/Node\.js \/ TypeScript/)).toBeTruthy();
    expect(getByText(/Kubernetes/)).toBeTruthy();
    expect(getByText(/PostgreSQL/)).toBeTruthy();
    expect(getByText(/New Relic/)).toBeTruthy();
    expect(getByText(/Git & GitHub Actions/)).toBeTruthy();
  });

  it('all skills have level 0 and no "dim" pills are rendered', () => {
    const { container } = render(Skills, { props: { skills } });
    const dimPills = container.querySelectorAll('.pill.dim');
    expect(dimPills).toHaveLength(0);
  });

  it('skill with level 0 does NOT have "dim" class', () => {
    const { container } = render(Skills, { props: { skills } });
    const pills = Array.from(container.querySelectorAll('.pill'));
    const tsPill = pills.find((p) => p.textContent?.trim() === 'Node.js / TypeScript');
    expect(tsPill?.classList.contains('dim')).toBe(false);
  });
});
