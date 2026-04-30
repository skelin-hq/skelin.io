(function () {
  var btn = document.querySelector('[data-theme-toggle]');
  if (!btn) return;

  function getCurrentTheme() {
    var current = document.documentElement.getAttribute('data-theme');
    if (!current) {
      current = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return current;
  }

  function updateToggleState() {
    btn.setAttribute('aria-pressed', getCurrentTheme() === 'dark' ? 'true' : 'false');
  }

  updateToggleState();

  btn.addEventListener('click', function () {
    var next = getCurrentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    updateToggleState();
  });
})();
