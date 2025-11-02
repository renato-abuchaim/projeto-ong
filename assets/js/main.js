// Funcionalidades JS: menu hambúrguer, toasts e modal simples
document.addEventListener('DOMContentLoaded', function(){
  // hamburger menu
  document.querySelectorAll('.hamburger').forEach(btn=>{
    btn.addEventListener('click', function(){
      // Toggle nav with class 'open' on the nearest .main-nav if exists
      const header = btn.closest('.header-inner') || document;
      const nav = header.querySelector('.main-nav') || document.querySelector('.main-nav');
      if(nav) nav.classList.toggle('open');
      btn.classList.toggle('is-open');
    });
  });

  // Modal close buttons
  document.querySelectorAll('[data-close]').forEach(btn=>{
    btn.addEventListener('click', function(){ 
      const modal = btn.closest('.modal');
      if(modal) modal.setAttribute('aria-hidden','true');
    });
  });

  // Simple toast example: show a toast after form submit
  const form = document.querySelector('form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      showToast('Cadastro enviado com sucesso!');
      form.reset();
    });
  }

  function showToast(msg){
    const container = document.getElementById('toasts');
    if(!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(()=>{ toast.remove(); }, 4000);
  }
});
