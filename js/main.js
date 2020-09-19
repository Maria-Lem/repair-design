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

  var thanks = $('.thanks'),
      thanksBtn = $('[data-toggle=thanks]'),
      closeThanks = $('.thanks__close');
  
  thanksBtn.on('click', function(){
    thanks.toggleClass('thanks--visible');
  });

  closeThanks.on('click', function(){
    thanks.toggleClass('thanks--visible');
  });

  $(document).on('keydown', function(e){
    if (e.key === 'Escape'){
      thanks.removeClass('thanks--visible');
    }
  });

  $(document).click(function (e) {
    if ($(e.target).is('.thanks')) {
      thanks.removeClass('thanks--visible');
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

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', 10 + prev.width() + 25 + bullets.width() + 18)
  bullets.css('left', 10 + prev.width() + 25)

  var scroll = new SmoothScroll('a[href*="#"]', {
    header: '.header'
  });

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
      userPhone: {
        required: true,
        minlength: 17
      },
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
      userPhone: {
        required: "Заполните поле",
        minlength: "Введите корректный номер",
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      },
      policyCheckbox: "Примите соглашение"
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          thanks.toggleClass('thanks--visible');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        }
      });
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
      userPhone: {
        required: true,
        minlength: 17
      },
      policyCheckbox: "required"
    }, // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух символов",
        maxlength: "Имя не длиннее 15 символов"
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Введите корректный номер",
      },
      policyCheckbox: "Примите соглашение"
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "sendControl.php",
        data: $(form).serialize(),
        success: function (response) {
          thanks.toggleClass('thanks--visible');
          $(form)[0].reset();
        }
      });
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
      userPhone: {
        required: true,
        minlength: 17
      },
      userQuestion: "required",
      policyCheckbox: "required"
    }, // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух символов",
        maxlength: "Имя не длиннее 15 символов"
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Введите корректный номер",
      },
      userQuestion: "Заполните поле",
      policyCheckbox: "Примите соглашение"
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "sendFooter.php",
        data: $(form).serialize(),
        success: function (response) {
          thanks.toggleClass('thanks--visible');
          $(form)[0].reset();
        }
      });
    }
  });
  // маска для номера телефона
  $('[type=tel]').mask('+7(000) 000-00-00');
  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '465',
      width: '100%',
      videoId: 'RHzzLqJWqHs',
      events: {
        'onReady': videoPlay,
      }
    });
  });
  function videoPlay(event) {
    event.target.playVideo();
  }
  $(window).scroll(function() {
    if (!YaMapsShown){
      if($(window).scrollTop() + $(window).height() > $(document).height() - 300) {      
      showYaMaps();
      YaMapsShown = true;
      }
    }
  });
  function showYaMaps(){
    var script   = document.createElement("script");
    script.type  = "text/javascript";
    script.src   = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8327f0d95f7b12a93b02458d1bf88d2b39f435bf965ab7b632c79ee68307f5f9&amp;width=100%25&amp;height=465&amp;lang=ru_RU&amp;scroll=false";
    document.getElementById("YaMaps").appendChild(script);
  }
});