<script lang="ts">
  import { observe } from '$lib/actions/observe';
</script>

<section id="contact" class="section">
  <div class="container">
    <p class="section-label">Contact</p>
    <div class="contact-inner fade-in" use:observe>
      <h2 class="contact-heading">Let's build something together.</h2>
      <p class="contact-blurb">
        I'm currently open to new opportunities. Whether you have a role in mind,
        a project to discuss, or just want to say hi — my inbox is open.
      </p>

      <div class="links">
        <a href="mailto:li.laurence55@gmail.com" class="contact-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          li.laurence55@gmail.com
        </a>
        <a href="https://github.com/laurenceli" target="_blank" rel="noopener noreferrer" class="contact-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          github.com/laurenceli
        </a>
        <a href="https://www.linkedin.com/in/laurenceli/" target="_blank" rel="noopener noreferrer" class="contact-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          linkedin.com/in/laurenceli
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .contact-inner {
    max-width: 600px;
  }

  .contact-heading {
    font-size: clamp(24px, 4vw, 36px);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 16px;
    letter-spacing: -0.02em;
  }

  .contact-blurb {
    font-size: 15px;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 40px;
    max-width: 480px;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .contact-link {
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 15px;
    font-weight: 500;
    color: var(--text-secondary);
    transition: color var(--transition), transform var(--transition);
  }

  .contact-link:hover {
    color: var(--accent);
    opacity: 1;
    transform: translateX(4px);
  }

  .contact-link svg {
    color: var(--accent);
    flex-shrink: 0;
  }
</style>
