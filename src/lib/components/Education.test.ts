import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Education from './Education.svelte';
import data from '$lib/data/data.json';
import type { Education as EducationType } from '$lib/types';

const education = data.education as EducationType[];

describe('Education component', () => {
  it('renders section#education', () => {
    const { container } = render(Education, { props: { education } });
    expect(container.querySelector('#education')).not.toBeNull();
  });

  it('renders school name "University of Ottawa"', () => {
    const { getByText } = render(Education, { props: { education } });
    expect(getByText('University of Ottawa')).toBeTruthy();
  });

  it('renders program "Bachelor Science in Computer Science"', () => {
    const { getByText } = render(Education, { props: { education } });
    expect(getByText('Bachelor Science in Computer Science')).toBeTruthy();
  });

  it('renders date range', () => {
    const { container } = render(Education, { props: { education } });
    const dates = container.querySelector('.dates');
    expect(dates?.textContent).toContain('September 2014');
    expect(dates?.textContent).toContain('May 2018');
  });

  it('renders exactly one entry with one-item input', () => {
    const { container } = render(Education, { props: { education } });
    expect(container.querySelectorAll('.entry')).toHaveLength(1);
  });

  it('renders two entries with two-item input', () => {
    const twoEntries: EducationType[] = [
      ...education,
      {
        school: 'MIT',
        program: 'Computer Science',
        startDate: 'September 2020',
        endDate: 'May 2024',
      },
    ];
    const { container } = render(Education, { props: { education: twoEntries } });
    expect(container.querySelectorAll('.entry')).toHaveLength(2);
  });
});
