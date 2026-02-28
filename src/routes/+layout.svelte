<script lang="ts">
  import { onMount } from 'svelte';

  let { children } = $props();

  onMount(() => {
    // Smooth scroll polyfill is handled via CSS
  });
</script>

<svelte:head>
  <title>Laurence Li</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

{@render children()}

<style>
  :global(*),
  :global(*::before),
  :global(*::after) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :global(:root) {
    --bg: #0d0d0d;
    --surface: #161616;
    --surface-2: #1e1e1e;
    --accent: #48e59f;
    --accent-dim: rgba(72, 229, 159, 0.12);
    --text-primary: #f0f0f0;
    --text-secondary: #888888;
    --text-muted: #555555;
    --border: #2a2a2a;
    --radius: 8px;
    --radius-lg: 12px;
    --max-w: 900px;
    --transition: 0.2s ease;
    --font: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  :global(html) {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  :global(body) {
    font-family: var(--font);
    background-color: var(--bg);
    color: var(--text-primary);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :global(::selection) {
    background: var(--accent);
    color: var(--bg);
  }

  :global(a) {
    color: var(--accent);
    text-decoration: none;
    transition: opacity var(--transition);
  }

  :global(a:hover) {
    opacity: 0.8;
  }

  :global(ul) {
    list-style: none;
  }

  :global(.container) {
    max-width: var(--max-w);
    margin: 0 auto;
    padding: 0 24px;
  }

  :global(.section) {
    padding: 80px 0;
  }

  :global(.section-label) {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  :global(.section-label::after) {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  /* Fade-in animation for IntersectionObserver */
  :global(.fade-in) {
    opacity: 0;
    transform: translateY(24px);
    transition:
      opacity 0.5s ease,
      transform 0.5s ease;
  }

  :global(.fade-in.visible) {
    opacity: 1;
    transform: translateY(0);
  }

  :global(.fade-in:nth-child(1)) { transition-delay: 0ms; }
  :global(.fade-in:nth-child(2)) { transition-delay: 60ms; }
  :global(.fade-in:nth-child(3)) { transition-delay: 120ms; }
  :global(.fade-in:nth-child(4)) { transition-delay: 180ms; }
  :global(.fade-in:nth-child(5)) { transition-delay: 240ms; }
  :global(.fade-in:nth-child(6)) { transition-delay: 300ms; }
</style>
