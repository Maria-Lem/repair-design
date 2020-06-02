// document.addEventListener('DOMContentLoaded', function(){
//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const closeBtn = document.querySelector('.modal__close');
//   const switchModal = () => {
//     modal.classList.toggle('modal--visible');
//   };
//   modalBtn.forEach(element => {
//     element.addEventListener('click', switchModal);
//   });
//   closeBtn.addEventListener('click', switchModal);
  
//   window.addEventListener('keydown', (event) => {
//     if (event.key === 'Escape') {
//       switchModal();
//     }
//   });
  
//   window.addEventListener("click", e => {
//     if (e.target == modal) {
//       switchModal();
//     }
//   });
// });

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
  
  modalBtn.on('click', function(){
    modal.toggleClass('modal--visible');
  });

  closeBtn.on('click', function(){
    modal.toggleClass('modal--visible');
  });

  $(document).on('keydown', function(e){
    if (e.key === 'Escape'){
      modal.removeClass('modal--visible');
    }
  });

  $(document).click(function (e) {
    if ($(e.target).is('.modal')) {
      modal.removeClass('modal--visible');
    }
  });

  // $(window).on('click', function(){
  //   if (modal.hasClass('modal--visible')) {
  //     modal.removeClass('modal--visible');
  // }
  // });
  
});