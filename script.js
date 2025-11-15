
const tg = window.Telegram.WebApp;

tg.expand();

document.body.style.backgroundColor = tg.backgroundColor;
document.body.style.color = tg.textColor;

const user = tg.initDataUnsafe?.user || null;

function sendToBot(data) {
    tg.sendData(JSON.stringify(data));
}

const buttons = document.querySelectorAll('.btn-small');
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        sendToBot({ action: 'open_category', category: btn.innerText });
    });
});

const infoBtn = document.querySelector('.btn');
if (infoBtn) {
    infoBtn.addEventListener('click', () => {
        sendToBot({ action: 'more_info' });
    });
}

<script>
document.addEventListener('DOMContentLoaded', () => {
  // делаем меню кликабельным на тачах: переключаем блок .megamenu при клике на .has-megamenu > a
  const touchBreakpoint = 769;
  function initMenuClicks() {
    document.querySelectorAll('nav.menu .has-megamenu').forEach(item => {
      const trigger = item.querySelector('a');
      const submenu = item.querySelector('.megamenu');
      if (!trigger || !submenu) return;
      // remove any existing handlers to avoid duplicates
      trigger.onclick = null;
      if (window.innerWidth < touchBreakpoint) {
        trigger.addEventListener('click', function (e) {
          e.preventDefault();
          // закрыть все остальные
          document.querySelectorAll('nav.menu .megamenu').forEach(m => {
            if (m !== submenu) m.style.display = 'none';
          });
          submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
        });
      } else {
        // на десктопе убрать клики — оставить hover/обычное поведение
        trigger.onclick = null;
        submenu.style.display = ''; // вернётся к CSS поведению
      }
    });
  }

  initMenuClicks();
  window.addEventListener('resize', () => {
    // при изменении размера обновляем логику
    document.querySelectorAll('nav.menu .megamenu').forEach(m => m.style.display = '');
    initMenuClicks();
  });

  // Скрываем мегаменю при клике вне его (на мобильных)
  document.addEventListener('click', (e) => {
    if (window.innerWidth >= touchBreakpoint) return;
    if (!e.target.closest('nav.menu .has-megamenu')) {
      document.querySelectorAll('nav.menu .megamenu').forEach(m => m.style.display = 'none');
    }
  });
});
</script>

