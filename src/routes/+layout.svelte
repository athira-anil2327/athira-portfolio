<script>
  import '../app.css';
  let { children } = $props();
</script>

<nav>
  <div class="container nav-container">
    <div class="logo">PORTFOLIO<span class="text-orange">.</span></div>
    <div class="links">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
</nav>

<main>
  {@render children()}
</main>

<footer>
  <div class="container footer-container">
    <p>&copy; {new Date().getFullYear()} Athira. Portfolio. All rights reserved.</p>
  </div>
</footer>

<style>
  nav {
    padding: 1.5rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--color-black-light);
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-weight: 900;
    font-size: 1.5rem;
    letter-spacing: -0.05em;
  }

  .links {
    display: flex;
    gap: 2rem;
  }

  .links a {
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .links a:hover {
    color: var(--color-yellow);
  }

  footer {
    padding: 4rem 0;
    background-color: var(--color-black-light);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }

  .footer-container {
    text-align: center;
    color: var(--color-gray);
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
</style>
