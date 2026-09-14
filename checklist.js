/* Interactive checklists for the Zoom guides.
   Any <ol>/<ul class="checklist"> inside a [data-interactive] section becomes
   a tappable checklist with a progress bar; progress persists per page in
   localStorage. Progressive enhancement: with JS off, the lists read normally. */
(function () {
  function init() {
    document.querySelectorAll('[data-interactive]').forEach(function (sec) {
      var key = sec.id || sec.getAttribute('data-interactive') || 'guide';
      var items = [];
      sec.querySelectorAll('.checklist').forEach(function (list) {
        list.querySelectorAll(':scope > li').forEach(function (li) { items.push(li); });
      });
      if (!items.length) return;

      // toolbar
      var bar = document.createElement('div');
      bar.className = 'checkbar';
      bar.innerHTML =
        '<div class="track"><span class="fill"></span></div>' +
        '<span class="pct"></span>' +
        '<span class="done-tag">✓ All done</span>' +
        '<button class="resetbtn" type="button">Reset</button>';
      var anchor = sec.querySelector('.summary') || sec.querySelector('h2');
      anchor.insertAdjacentElement('afterend', bar);
      var fill = bar.querySelector('.fill');
      var pct = bar.querySelector('.pct');

      function storeKey(i) { return 'opp:' + key + ':' + i; }
      function update() {
        var done = items.filter(function (li) { return li.classList.contains('done'); }).length;
        var p = Math.round((done / items.length) * 100);
        fill.style.width = p + '%';
        pct.textContent = done + ' / ' + items.length + ' done';
        bar.classList.toggle('complete', done === items.length);
      }

      items.forEach(function (li, i) {
        li.classList.add('check');
        var box = document.createElement('span');
        box.className = 'cbox';
        box.setAttribute('role', 'checkbox');
        box.tabIndex = 0;
        var on = false;
        try { on = localStorage.getItem(storeKey(i)) === '1'; } catch (e) {}
        function render() {
          li.classList.toggle('done', on);
          box.setAttribute('aria-checked', on ? 'true' : 'false');
        }
        function toggle() {
          on = !on;
          try { localStorage.setItem(storeKey(i), on ? '1' : ''); } catch (e) {}
          render(); update();
        }
        box.addEventListener('click', toggle);
        box.addEventListener('keydown', function (e) {
          if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggle(); }
        });
        li.prepend(box);
        render();
      });

      bar.querySelector('.resetbtn').addEventListener('click', function () {
        items.forEach(function (li, i) {
          try { localStorage.removeItem(storeKey(i)); } catch (e) {}
          li.classList.remove('done');
          var box = li.querySelector('.cbox');
          if (box) box.setAttribute('aria-checked', 'false');
        });
        update();
      });

      update();
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
