<script lang="ts">
  import type { SkillCategory } from '$lib/types';
  import { observe } from '$lib/actions/observe';

  interface Props {
    skills: SkillCategory[];
  }

  let { skills }: Props = $props();

  const contentCategories = ['Programming', 'Web', 'Infrastructure', 'Metrics', 'Workflow'];
  const categoryKeyMap: Record<string, string> = {
    Programming: 'programming',
    Web: 'web',
    Infrastructure: 'infra',
    Metrics: 'metrics',
    Workflow: 'workflow'
  };

  type SkillItem = { text: string; level: number };

  function getItems(cat: SkillCategory): SkillItem[] {
    const key = categoryKeyMap[cat.title] as keyof SkillCategory;
    if (key && Array.isArray(cat[key])) {
      return cat[key] as SkillItem[];
    }
    return [];
  }

  const displayCategories = $derived(skills.filter((s) => contentCategories.includes(s.title)));
</script>

<section id="skills" class="section">
  <div class="container">
    <p class="section-label">Skills</p>
    <div class="categories">
      {#each displayCategories as category}
        <div class="category fade-in" use:observe>
          <h3 class="category-title">{category.title}</h3>
          <div class="pills">
            {#each getItems(category) as item}
              <span class="pill" class:dim={item.level > 0}>
                {item.text}
              </span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .categories {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 36px;
  }

  .category-title {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 16px;
  }

  .pills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .pill {
    font-size: 13px;
    font-weight: 500;
    color: var(--accent);
    background: var(--accent-dim);
    border: 1px solid rgba(72, 229, 159, 0.2);
    padding: 6px 14px;
    border-radius: 100px;
    transition: all var(--transition);
  }

  .pill:hover {
    background: rgba(72, 229, 159, 0.2);
    border-color: var(--accent);
  }

  .pill.dim {
    opacity: 0.45;
  }

  .pill.dim:hover {
    opacity: 0.7;
  }
</style>
