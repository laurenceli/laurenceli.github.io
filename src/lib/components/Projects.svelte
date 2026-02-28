<script lang="ts">
  import type { Project } from '$lib/types';
  import { observe } from '$lib/actions/observe';

  interface Props {
    projects: Project[];
  }

  let { projects }: Props = $props();

  let activeModal: Project | null = $state(null);

  function openModal(project: Project) {
    activeModal = project;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    activeModal = null;
    document.body.style.overflow = '';
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') closeModal();
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<section id="projects" class="section">
  <div class="container">
    <p class="section-label">Projects</p>
    <div class="grid">
      {#each projects as project}
        <button class="card fade-in" use:observe onclick={() => openModal(project)}>
          <div class="card-top">
            <div class="card-icons">
              {#if project.hasGithub}
                <span class="icon-hint" title="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </span>
              {/if}
              {#if project.hasLink}
                <span class="icon-hint" title="Live site">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </span>
              {/if}
            </div>
            <h3 class="card-title">{project.titleLower}</h3>
            <p class="card-subtitle">{project.subtitle}</p>
            {#if project.modalInfo.client !== 'fun'}
              <p class="card-client">{project.modalInfo.client}</p>
            {/if}
          </div>
          <div class="card-bottom">
            <p class="card-desc">{project.modalInfo.description}</p>
            <div class="tech-chips">
              {#each project.modalInfo.tech.slice(0, 4) as t}
                <span class="chip">{t}</span>
              {/each}
            </div>
          </div>
        </button>
      {/each}
    </div>
  </div>
</section>

{#if activeModal}
  <div
    class="modal-overlay"
    onclick={closeModal}
    onkeydown={(e) => e.key === 'Escape' && closeModal()}
    role="dialog"
    aria-modal="true"
    aria-label="Project details"
    tabindex="-1"
  >
    <div
      class="modal"
      onclick={(e) => e.stopPropagation()}
      onkeydown={(e) => e.stopPropagation()}
      role="document"
    >
      <button class="close-btn" onclick={closeModal} aria-label="Close modal">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div class="modal-header">
        <div>
          <h2 class="modal-title">{activeModal.titleLower}</h2>
          <p class="modal-sub">{activeModal.modalInfo.modalSub}</p>
        </div>
        <div class="modal-links">
          {#if activeModal.hasGithub}
            <a href={activeModal.github} target="_blank" rel="noopener noreferrer" class="modal-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          {/if}
          {#if activeModal.hasLink}
            <a href={activeModal.link} target="_blank" rel="noopener noreferrer" class="modal-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live Site
            </a>
          {/if}
        </div>
      </div>

      <div class="modal-body">
        <div class="modal-row">
          <span class="meta-label">Role</span>
          <span class="meta-val">{activeModal.modalInfo.role}</span>
        </div>
        <div class="modal-row">
          <span class="meta-label">Client</span>
          <span class="meta-val">{activeModal.modalInfo.client}</span>
        </div>
        <div class="modal-row">
          <span class="meta-label">Timeline</span>
          <span class="meta-val">{activeModal.modalInfo.date}</span>
        </div>

        <p class="modal-desc">{activeModal.modalInfo.fullDescription}</p>

        <div class="tech-chips modal-tech">
          {#each activeModal.modalInfo.tech as t}
            <span class="chip">{t}</span>
          {/each}
        </div>

        {#if activeModal.image}
          <img src={activeModal.image} alt={activeModal.titleLower} class="modal-img" />
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 28px;
    text-align: left;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
    font-family: var(--font);
  }

  .card:hover {
    border-color: var(--accent);
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  }

  .card-top {
    flex: 1;
  }

  .card-icons {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
    color: var(--text-secondary);
  }

  .icon-hint {
    transition: color var(--transition);
  }

  .card:hover .icon-hint {
    color: var(--accent);
  }

  .card-title {
    font-size: 17px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 4px;
  }

  .card-subtitle {
    font-size: 13px;
    color: var(--text-secondary);
    margin-bottom: 4px;
  }

  .card-client {
    font-size: 12px;
    color: var(--accent);
    font-weight: 500;
  }

  .card-desc {
    font-size: 13px;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 16px;
  }

  .tech-chips {
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

  /* Modal */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    animation: fade-overlay 0.2s ease;
  }

  @keyframes fade-overlay {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .modal {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    max-width: 580px;
    width: 100%;
    max-height: 80vh;
    overflow-y: auto;
    padding: 36px;
    position: relative;
    animation: slide-modal 0.25s ease;
  }

  @keyframes slide-modal {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    color: var(--text-secondary);
    cursor: pointer;
    padding: 4px;
    border-radius: var(--radius);
    transition: color var(--transition), background var(--transition);
    font-family: var(--font);
  }

  .close-btn:hover {
    color: var(--text-primary);
    background: var(--surface-2);
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 28px;
    padding-right: 32px;
  }

  .modal-title {
    font-size: 22px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 4px;
  }

  .modal-sub {
    font-size: 14px;
    color: var(--accent);
  }

  .modal-links {
    display: flex;
    gap: 12px;
    flex-shrink: 0;
  }

  .modal-link {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 500;
    color: var(--text-secondary);
    border: 1px solid var(--border);
    padding: 6px 14px;
    border-radius: var(--radius);
    transition: all var(--transition);
  }

  .modal-link:hover {
    color: var(--accent);
    border-color: var(--accent);
    opacity: 1;
  }

  .modal-body {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .modal-row {
    display: flex;
    gap: 12px;
  }

  .meta-label {
    font-size: 12px;
    font-weight: 600;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    width: 72px;
    flex-shrink: 0;
    padding-top: 1px;
  }

  .meta-val {
    font-size: 14px;
    color: var(--text-secondary);
  }

  .modal-desc {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.7;
    padding-top: 8px;
    border-top: 1px solid var(--border);
  }

  .modal-tech {
    padding-bottom: 4px;
  }

  .modal-img {
    width: 100%;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    margin-top: 8px;
  }

  @media (max-width: 640px) {
    .grid {
      grid-template-columns: 1fr;
    }

    .modal {
      padding: 24px;
    }

    .modal-header {
      flex-direction: column;
    }

    .modal-links {
      flex-direction: row;
    }
  }
</style>
