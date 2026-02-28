<script lang="ts">
</script>

<section id="hero" class="hero">
  <div class="container hero-inner">
    <p class="greeting">Hi, my name is</p>
    <h1 class="name">Laurence Li.</h1>
    <h2 class="tagline">Software developer who loves building things.</h2>
    <p class="bio">
      I'm a full-stack developer based in Toronto, specializing in building robust,
      scalable systems and thoughtful user experiences.
    </p>
    <div class="cta-group">
      <a
        href="https://github.com/laurenceli"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-primary"
      >
        GitHub
      </a>
      <a href="/docs/laurenceli_resume_v5.pdf" target="_blank" class="btn btn-outline">
        Resume
      </a>
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 120px 0 80px;
  }

  .hero-inner {
    max-width: 700px;
  }

  .greeting {
    font-size: 15px;
    color: var(--accent);
    font-weight: 500;
    letter-spacing: 0.04em;
    margin-bottom: 16px;
  }

  .name {
    font-size: clamp(40px, 8vw, 72px);
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -0.03em;
    color: var(--text-primary);
    margin-bottom: 12px;
  }

  .tagline {
    font-size: clamp(24px, 4vw, 40px);
    font-weight: 600;
    color: var(--text-secondary);
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin-bottom: 24px;
  }

  .bio {
    font-size: 16px;
    color: var(--text-secondary);
    max-width: 540px;
    line-height: 1.7;
    margin-bottom: 40px;
  }

  .cta-group {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 28px;
    border-radius: var(--radius);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.02em;
    transition: all var(--transition);
  }

  .btn:hover {
    opacity: 1;
    transform: translateY(-2px);
  }

  .btn-primary {
    background: var(--accent);
    color: var(--bg);
  }

  .btn-primary:hover {
    background: #5ffaae;
    box-shadow: 0 4px 20px rgba(72, 229, 159, 0.3);
  }

  .btn-outline {
    border: 1.5px solid var(--accent);
    color: var(--accent);
  }

  .btn-outline:hover {
    background: var(--accent-dim);
  }
</style>
