import { describe, it, expect } from 'vitest';
import data from './data.json';

describe('data.json shape', () => {
  it('has required top-level array keys', () => {
    expect(Array.isArray(data.skills)).toBe(true);
    expect(Array.isArray(data.projects)).toBe(true);
    expect(Array.isArray(data.experience)).toBe(true);
    expect(Array.isArray(data.education)).toBe(true);
  });

  describe('experience entries', () => {
    it('each entry has required fields', () => {
      for (const entry of data.experience) {
        expect(entry).toHaveProperty('company');
        expect(entry).toHaveProperty('position');
        expect(entry).toHaveProperty('startDate');
        expect(entry).toHaveProperty('endDate');
        expect(entry).toHaveProperty('location');
        expect(Array.isArray(entry.skills)).toBe(true);
        expect(Array.isArray(entry.summary)).toBe(true);
      }
    });
  });

  describe('project entries', () => {
    it('each entry has required fields', () => {
      for (const project of data.projects) {
        expect(project).toHaveProperty('ID');
        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('titleLower');
        expect(project).toHaveProperty('hasLink');
        expect(project).toHaveProperty('hasGithub');
        expect(project).toHaveProperty('link');
        expect(project).toHaveProperty('github');
        expect(project).toHaveProperty('image');
        expect(project).toHaveProperty('modalInfo');
      }
    });

    it('projects with hasGithub: true have valid github URLs', () => {
      const withGithub = data.projects.filter((p) => p.hasGithub);
      expect(withGithub.length).toBeGreaterThan(0);
      for (const project of withGithub) {
        expect(project.github).toBeTruthy();
        expect(project.github.startsWith('https://')).toBe(true);
      }
    });

    it('projects with hasLink: true have non-empty link URLs', () => {
      const withLink = data.projects.filter((p) => p.hasLink);
      expect(withLink.length).toBeGreaterThan(0);
      for (const project of withLink) {
        expect(project.link).toBeTruthy();
      }
    });
  });

  describe('education entries', () => {
    it('each entry has required fields', () => {
      for (const edu of data.education) {
        expect(edu).toHaveProperty('school');
        expect(edu).toHaveProperty('program');
        expect(edu).toHaveProperty('startDate');
        expect(edu).toHaveProperty('endDate');
      }
    });
  });

  describe('skills categories', () => {
    const titles = data.skills.map((s) => s.title);

    it('includes all required category titles', () => {
      expect(titles).toContain('Languages');
      expect(titles).toContain('Infrastructure');
      expect(titles).toContain('Observability');
      expect(titles).toContain('Datastores');
      expect(titles).toContain('Workflow and CI/CD');
      expect(titles).toContain('Cloud Providers');
    });

    it('skill items have text (string) and level (number)', () => {
      const contentCategories = [
        'Languages',
        'Infrastructure',
        'Observability',
        'Datastores',
        'Workflow and CI/CD',
        'Cloud Providers',
      ];
      const keyMap: Record<string, string> = {
        Languages: 'languages',
        Infrastructure: 'infra',
        Observability: 'observability',
        Datastores: 'datastores',
        'Workflow and CI/CD': 'workflow',
        'Cloud Providers': 'cloud',
      };
      for (const cat of data.skills.filter((s) => contentCategories.includes(s.title))) {
        const key = keyMap[cat.title] as keyof typeof cat;
        const items = cat[key] as Array<{ text: string; level: number }> | undefined;
        expect(Array.isArray(items)).toBe(true);
        for (const item of items ?? []) {
          expect(typeof item.text).toBe('string');
          expect(typeof item.level).toBe('number');
        }
      }
    });
  });
});
