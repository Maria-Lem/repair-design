document.addEventListener('DOMContentLoaded', function(){
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  };
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
  closeBtn.addEventListener('click', switchModal);
  
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modal.classList.remove('modal--visible');
    }
  });
  
  // window.addEventListener('click', switchModal);
});