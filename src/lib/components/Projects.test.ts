import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import Projects from './Projects.svelte';
import data from '$lib/data/data.json';
import type { Project } from '$lib/types';

const projects = data.projects as Project[];

describe('Projects component', () => {
  it('renders section#projects', () => {
    const { container } = render(Projects, { props: { projects } });
    expect(container.querySelector('#projects')).not.toBeNull();
  });

  it('renders a card per project (6 cards for full dataset)', () => {
    const { container } = render(Projects, { props: { projects } });
    expect(container.querySelectorAll('.card')).toHaveLength(6);
  });

  it('no modal on initial render', () => {
    const { container } = render(Projects, { props: { projects } });
    expect(container.querySelector('[role="dialog"]')).toBeNull();
  });

  it('clicking a card opens the modal', async () => {
    const { container } = render(Projects, { props: { projects } });
    const card = container.querySelector('.card') as HTMLElement;
    await fireEvent.click(card);
    expect(container.querySelector('[role="dialog"]')).not.toBeNull();
  });

  it('modal shows the clicked project title', async () => {
    const { container } = render(Projects, { props: { projects } });
    const firstCard = container.querySelector('.card') as HTMLElement;
    await fireEvent.click(firstCard);
    const modal = container.querySelector('[role="dialog"]');
    expect(modal?.textContent).toContain(projects[0].titleLower);
  });

  it('modal shows Role, Client, Timeline meta labels', async () => {
    const { container } = render(Projects, { props: { projects } });
    const card = container.querySelector('.card') as HTMLElement;
    await fireEvent.click(card);
    const modal = container.querySelector('[role="dialog"]');
    const labels = Array.from(modal?.querySelectorAll('.meta-label') ?? []).map((el) =>
      el.textContent?.trim().toLowerCase()
    );
    expect(labels).toContain('role');
    expect(labels).toContain('client');
    expect(labels).toContain('timeline');
  });

  it('clicking close button dismisses modal', async () => {
    const { container } = render(Projects, { props: { projects } });
    const card = container.querySelector('.card') as HTMLElement;
    await fireEvent.click(card);
    expect(container.querySelector('[role="dialog"]')).not.toBeNull();

    const closeBtn = container.querySelector('.close-btn') as HTMLElement;
    await fireEvent.click(closeBtn);
    expect(container.querySelector('[role="dialog"]')).toBeNull();
  });

  it('pressing Escape dismisses modal', async () => {
    const { container } = render(Projects, { props: { projects } });
    const card = container.querySelector('.card') as HTMLElement;
    await fireEvent.click(card);
    expect(container.querySelector('[role="dialog"]')).not.toBeNull();

    await fireEvent.keyDown(window, { key: 'Escape' });
    expect(container.querySelector('[role="dialog"]')).toBeNull();
  });

  it('clicking the overlay dismisses modal', async () => {
    const { container } = render(Projects, { props: { projects } });
    const card = container.querySelector('.card') as HTMLElement;
    await fireEvent.click(card);
    expect(container.querySelector('[role="dialog"]')).not.toBeNull();

    const overlay = container.querySelector('.modal-overlay') as HTMLElement;
    await fireEvent.click(overlay);
    expect(container.querySelector('[role="dialog"]')).toBeNull();
  });

  it('clicking inside modal body does NOT dismiss modal', async () => {
    const { container } = render(Projects, { props: { projects } });
    const card = container.querySelector('.card') as HTMLElement;
    await fireEvent.click(card);
    expect(container.querySelector('[role="dialog"]')).not.toBeNull();

    const modalBody = container.querySelector('.modal-body') as HTMLElement;
    await fireEvent.click(modalBody);
    expect(container.querySelector('[role="dialog"]')).not.toBeNull();
  });

  it('cards with hasGithub: true show GitHub icon', () => {
    const { container } = render(Projects, { props: { projects } });
    const cards = container.querySelectorAll('.card');
    const cardsWithGithub = projects.filter((p) => p.hasGithub).length;
    let githubIconCount = 0;
    cards.forEach((card) => {
      if (card.querySelector('[title="GitHub"]')) {
        githubIconCount++;
      }
    });
    expect(githubIconCount).toBe(cardsWithGithub);
  });
});
