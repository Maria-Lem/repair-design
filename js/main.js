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

  var btnUp = $('.main__scroll-up');
      btnDown = $('.hero__scroll-down');

  $(window).scroll(function(){
    if ($(window).scrollTop() > 1000){
      btnUp.addClass('main__scroll-up--show');
    } else {
      btnUp.removeClass('main__scroll-up--show');
    }
  });

  btnUp.on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 500);
  });
  btnDown.on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('body').height()}, 800);
  });

  var swiper1 = new Swiper ('.swiper-container.swiper-one', {
    spaceBetween: 5,
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $(".swiper-pagination").clone('true').addClass('swiper-pagination-fraction').appendTo('.swiper-two');
  var swiper2 = new Swiper ('.swiper-container.swiper-two', {
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.swiper-pagination-fraction',
      type: 'fraction',
    },
    pagination: {
      el: '.swiper-pagination-two',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next-two',
      prevEl: '.swiper-button-prev-two',
    },
    controller: {
      inverse: true,
      control: galleryThumbs, galleryTop,
      by: 'slide',
    },
  });

  // for (var i = 1; i < swiper.slides.length - 1; i++){
  //   if ( i === 1){ 
  //     // add active class if it is the first bullet
  //     $('#bullets').append('<span class="swiper-pagination-bullet' + ' ' + 'swiper-pagination-bullet-active' + ' ' + 'slide' + i + '"><p>'+ i +'</p></span>');
  //   } else {
  //     $('#bullets').append('<span class="swiper-pagination-bullet' + ' ' + 'slide' + i + '"><p>'+ i +'</p></span>');
  //   }         
  // }
  // var bullets = $('.swiper-pagination-bullet');
  // swiper.on('slideChange', function () {
  //   // Get current slide from fraction pagination number
  //   var slide = "slide"+($('.swiper-pagination-current').html());
  //   // Remove active class from all bullets
  //   bullets.removeClass("swiper-pagination-bullet-active");
  //   // Check each bullet element if it has slideNumber class
  //   $.each(bullets, function (index, value) {
  //     if($(this).hasClass(slide)) {
  //       $(this).addClass("swiper-pagination-bullet-active");
  //       return false;
  //     }
  //   });
  // });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', 10 + prev.width() + 25 + bullets.width() + 18)
  bullets.css('left', 10 + prev.width() + 25)

  var prev2 = $('.swiper-button-prev-two');
  var bullets2 = $('.swiper-pagination-two');
  var next2 = $('.swiper-button-next-two');

  next2.css('left', 10 + prev2.width() + 10 + bullets2.width() + 10)
  bullets2.css('left', 10 + prev2.width() + 10)

  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    slidesPerView: 1,
    loop: true,
    thumbs: {
      swiper: galleryThumbs
    },
    controller: {
      inverse: true,
      control: swiper2,
      by: 'slide',
    },
  });

  galleryTop.controller.control = swiper2;
  swiper2.controller.control = galleryTop;

  new WOW().init();

  //Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // simple rule, converted to {required:true} строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // compound rule правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: "required"
    }, // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух символов",
        maxlength: "Имя не длиннее 15 символов"
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      },
      policyCheckbox: "Примите соглашение"
    }
  });

  $('.control__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // simple rule, converted to {required:true} строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      policyCheckbox: "required"
      // policyCheckbox: function(){
      //     if ($('.policy__checkbox').is(":checked"))
      //     addClass('.policy__checkbox:checked + .policy__label::before');
      // }
    }, // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух символов",
        maxlength: "Имя не длиннее 15 символов"
      },
      userPhone: "Заполните поле",
      policyCheckbox: "Примите соглашение"
    }
  });
  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // simple rule, converted to {required:true} строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      userQuestion: "required",
      policyCheckbox: "required"
    }, // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух символов",
        maxlength: "Имя не длиннее 15 символов"
      },
      userPhone: "Заполните поле",
      userQuestion: "Заполните поле",
      policyCheckbox: "Примите соглашение"
    }
  });
  // маска для номера телефона
  $('[type=tel]').mask('+7(000) 000-00-00');
});