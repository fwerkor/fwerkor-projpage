(() => {
  const key = 'fwerkor-proj-theme';
  let pref = 'auto';
  try {
    const saved = localStorage.getItem(key);
    if (saved === 'auto' || saved === 'light' || saved === 'dark') pref = saved;
  } catch (_) {}
  const dark = pref === 'dark' || (pref === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  document.documentElement.dataset.themePreference = pref;
  document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
})();