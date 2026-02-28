<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Experience from '$lib/components/Experience.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Education from '$lib/components/Education.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import type { PortfolioData } from '$lib/types';
  import rawData from '$lib/data/data.json';

  const data = rawData as PortfolioData;
</script>

<Nav />
<main>
  <Hero />
  <Experience experience={data.experience} />
  <Projects projects={data.projects} />
  <Skills skills={data.skills} />
  <Education education={data.education} />
  <Contact />
</main>
<footer>
  <div class="container footer-inner">
    <span>Designed & built by Laurence Li</span>
    <a href="https://github.com/laurenceli/laurenceli.github.io" target="_blank" rel="noopener noreferrer">
      View Source
    </a>
  </div>
</footer>

<style>
  main {
    padding-top: 60px;
  }

  footer {
    padding: 32px 0;
    border-top: 1px solid var(--border);
  }

  .footer-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: var(--text-muted);
  }

  .footer-inner a {
    color: var(--text-muted);
    transition: color var(--transition);
  }

  .footer-inner a:hover {
    color: var(--accent);
    opacity: 1;
  }

  @media (max-width: 480px) {
    .footer-inner {
      flex-direction: column;
      gap: 8px;
      text-align: center;
    }
  }
</style>
