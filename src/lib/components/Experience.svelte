<script lang="ts">
  import type { Experience } from '$lib/types';
  import { observe } from '$lib/actions/observe';

  interface Props {
    experience: Experience[];
  }

  let { experience }: Props = $props();
</script>

<section id="experience" class="section">
  <div class="container">
    <p class="section-label">Experience</p>
    <div class="timeline">
      {#each experience as job}
        <div class="entry fade-in" use:observe>
          <div class="entry-meta">
            <span class="dates">{job.startDate} — {job.endDate}</span>
            <span class="location">{job.location}</span>
          </div>
          <div class="entry-body">
            <div class="entry-header">
              <h3 class="position">{job.position}</h3>
              <span class="company">@ {job.company}</span>
            </div>
            <ul class="summary">
              {#each job.summary as point}
                <li>{point}</li>
              {/each}
            </ul>
            <div class="skill-chips">
              {#each job.skills as skill}
                <span class="chip">{skill}</span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .timeline {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  .entry {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 24px;
  }

  .entry-meta {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-top: 3px;
  }

  .dates {
    font-size: 12px;
    font-weight: 500;
    color: var(--text-secondary);
    white-space: nowrap;
  }

  .location {
    font-size: 11px;
    color: var(--text-muted);
  }

  .entry-header {
    display: flex;
    align-items: baseline;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 14px;
  }

  .position {
    font-size: 17px;
    font-weight: 600;
    color: var(--text-primary);
  }

  .company {
    font-size: 15px;
    font-weight: 500;
    color: var(--accent);
  }

  .summary {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
  }

  .summary li {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.65;
    padding-left: 16px;
    position: relative;
  }

  .summary li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--accent);
    font-size: 10px;
    top: 4px;
  }

  .skill-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .chip {
    font-size: 11px;
    font-weight: 500;
    color: var(--accent);
    background: var(--accent-dim);
    padding: 3px 10px;
    border-radius: 100px;
    border: 1px solid rgba(72, 229, 159, 0.2);
  }

  @media (max-width: 640px) {
    .entry {
      grid-template-columns: 1fr;
      gap: 8px;
    }

    .entry-meta {
      flex-direction: row;
      gap: 12px;
    }
  }
</style>
