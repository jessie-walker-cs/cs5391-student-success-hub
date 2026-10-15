(() => {
  const menu = document.querySelector('.menu-button');
  const nav = document.getElementById('site-navigation');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') === 'true';
      menu.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
  }
  const deadline = Date.parse('2026-10-20T04:59:00Z');
  const ms = deadline - Date.now();
  let message;
  if (ms <= 0) message = 'Selection deadline has passed.';
  else {
    const days = Math.floor(ms/86400000), hours=Math.floor((ms%86400000)/3600000);
    message = days + ' day' + (days===1?'':'s') + ' and ' + hours + ' hour' + (hours===1?'':'s') + ' remaining';
  }
  document.querySelectorAll('[data-countdown]').forEach(el => {el.textContent='· '+message});
  const actions=document.querySelector('[data-signup-actions]');
  if(actions && ms<=0) actions.innerHTML='<div class="note"><strong>Selection deadline has passed.</strong><p>Contact Dr. Walker through Canvas Inbox about a late request. GitHub issue timestamps determine timely submissions.</p></div>';
})();
