<script lang="ts">
  import { onMount } from 'svelte';

  const links = [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  let activeSection = $state('');
  let scrolled = $state(false);

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 20;
    };

    const sections = links.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection = '#' + entry.target.id;
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((s) => s && observer.observe(s));
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<nav class:scrolled>
  <div class="container nav-inner">
    <a href="#hero" class="logo">LL</a>
    <ul class="nav-links">
      {#each links as link}
        <li>
          <a href={link.href} class:active={activeSection === link.href}>{link.label}</a>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 20px 0;
    transition:
      padding var(--transition),
      background var(--transition),
      border-color var(--transition);
    border-bottom: 1px solid transparent;
  }

  nav.scrolled {
    padding: 14px 0;
    background: rgba(13, 13, 13, 0.92);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-color: var(--border);
  }

  .nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-size: 18px;
    font-weight: 700;
    color: var(--accent);
    letter-spacing: 0.05em;
  }

  .logo:hover {
    opacity: 1;
    text-shadow: 0 0 20px rgba(72, 229, 159, 0.4);
  }

  .nav-links {
    display: flex;
    gap: 32px;
    list-style: none;
  }

  .nav-links a {
    font-size: 13px;
    font-weight: 500;
    color: var(--text-secondary);
    letter-spacing: 0.02em;
    transition: color var(--transition);
    position: relative;
  }

  .nav-links a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--accent);
    transition: width var(--transition);
  }

  .nav-links a:hover,
  .nav-links a.active {
    color: var(--text-primary);
    opacity: 1;
  }

  .nav-links a.active::after,
  .nav-links a:hover::after {
    width: 100%;
  }

  @media (max-width: 600px) {
    .nav-links {
      gap: 20px;
    }

    .nav-links a {
      font-size: 12px;
    }
  }

  @media (max-width: 420px) {
    .logo {
      display: none;
    }
  }
</style>
