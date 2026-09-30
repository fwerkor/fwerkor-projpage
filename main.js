(() => {
  const html = document.documentElement;
  html.classList.add('has-js');

  const key = 'fwerkor-proj-theme';
  const modes = ['auto', 'light', 'dark'];
  const media = matchMedia('(prefers-color-scheme: dark)');
  const button = document.querySelector('[data-theme-toggle]');
  const themeColor = document.querySelector('meta[name="theme-color"]');

  const readMode = () => {
    try {
      const value = localStorage.getItem(key);
      return modes.includes(value) ? value : 'auto';
    } catch (_) {
      return 'auto';
    }
  };

  let mode = readMode();

  const applyMode = (next) => {
    mode = next;
    const resolved = next === 'auto' ? (media.matches ? 'dark' : 'light') : next;
    html.dataset.theme = resolved;
    html.dataset.themePreference = next;
    html.style.colorScheme = resolved;
    if (themeColor) themeColor.content = resolved === 'dark' ? '#0c0f13' : '#f6f8fb';
    if (button) {
      button.dataset.mode = next;
      button.title = '显示模式：' + (next === 'auto' ? '跟随系统' : next === 'dark' ? '深色' : '浅色');
    }
  };

  applyMode(mode);

  button?.addEventListener('click', () => {
    const next = modes[(modes.indexOf(mode) + 1) % modes.length];
    try { localStorage.setItem(key, next); } catch (_) {}
    applyMode(next);
  });

  media.addEventListener('change', () => {
    if (mode === 'auto') applyMode('auto');
  });

  const header = document.querySelector('.site-header');
  const onScroll = () => header?.classList.toggle('is-scrolled', scrollY > 16);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();