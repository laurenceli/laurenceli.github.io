<script lang="ts">
  import type { Education } from '$lib/types';
  import { observe } from '$lib/actions/observe';

  interface Props {
    education: Education[];
  }

  let { education }: Props = $props();
</script>

<section id="education" class="section">
  <div class="container">
    <p class="section-label">Education</p>
    <div class="entries">
      {#each education as edu}
        <div class="entry fade-in" use:observe>
          <div class="entry-left">
            <h3 class="school">{edu.school}</h3>
            <p class="program">{edu.program}</p>
          </div>
          <div class="entry-right">
            <span class="dates">{edu.startDate} — {edu.endDate}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .entries {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .entry {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 24px;
    padding: 28px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
  }

  .school {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 4px;
    letter-spacing: 0.01em;
  }

  .program {
    font-size: 14px;
    color: var(--text-secondary);
  }

  .dates {
    font-size: 12px;
    color: var(--text-muted);
    white-space: nowrap;
    padding-top: 4px;
  }

  @media (max-width: 560px) {
    .entry {
      flex-direction: column;
      gap: 8px;
    }
  }
</style>
