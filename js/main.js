$(document).ready(function(){const hotelSLider=new Swiper('.hotel-slider',{loop:true,navigation:{nextEl:'.hotel-slider__button--next',prevEl:'.hotel-slider__button--prev',},keyboard:{enabled:true,onlyInViewport:false,},});const reviewsSlider=new Swiper('.reviews-slider',{loop:true,navigation:{nextEl:'.reviews-slider__button--next',prevEl:'.reviews-slider__button--prev',},keyboard:{enabled:true,onlyInViewport:false,},});$('.parallax-window').parallax({imageSrc:'./img/newsletter-bg.jpg',speed:0.6,});var menuButton=document.querySelector(".menu-button");menuButton.addEventListener('click',function(){document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");document.querySelector(".navbar-top__menu-button").classList.toggle("menu__button--hidden");document.querySelector(".close").classList.toggle("close--visible")});var menuClose=document.querySelector(".close");menuClose.addEventListener('click',function(){document.querySelector(".close").classList.toggle("close--visible");document.querySelector(".navbar-top__menu-button").classList.toggle("menu__button--hidden");document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible")});var modalButton=$('[data-toggle=modal]');var closeModalButton=$(".modal__close");modalButton.on('click',openModal);closeModalButton.on('click',closeModal);function openModal(){var modalOverlay=$(".modal__overlay");var modalDialog=$(".modal__dialog");modalOverlay.addClass('modal__overlay--visible');modalDialog.addClass('modal__dialog--visible');offScroll()};function closeModal(event){event.preventDefault();var modalOverlay=$(".modal__overlay");var modalDialog=$(".modal__dialog");modalOverlay.removeClass('modal__overlay--visible');modalDialog.removeClass('modal__dialog--visible');$(window).unbind('scroll')};$(document).keyup(function(e){var modalOverlay=$(".modal__overlay");var modalDialog=$(".modal__dialog");if(e.key==="Escape"){modalOverlay.removeClass('modal__overlay--visible');modalDialog.removeClass('modal__dialog--visible');$(window).unbind('scroll')}});$(document).mouseup(function(e){var modalOverlay=$(".modal__overlay");var modalDialog=$(".modal__dialog");if(!modalDialog.is(e.target)&&modalDialog.has(e.target).length===0){modalOverlay.removeClass('modal__overlay--visible');modalDialog.removeClass('modal__dialog--visible');$(window).unbind('scroll')}});function offScroll(){var winScrollTop=$(window).scrollTop();$(window).bind('scroll',function(){$(window).scrollTop(winScrollTop)})};$('.form').each(function(){$(this).validate({errorClass:"invalid",rules:{email:{pattern:/[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i,},},messages:{name:{required:"Please specify your name",minlength:2,},email:{required:"We need your email address to contact you",email:"Your email address must be in the format of name@domain.com",pattern:'Format for email: name@domain.com',},phone:{required:"Please specify your phone",}},})});$('body').on('input','.input-name',function(){this.value=this.value.replace(/[^a-zа-яё\s]/gi,'')});$('.input-phone').mask('+7 (999) 999-99-99');AOS.init();document.addEventListener('touchstart',onTouchStart,{passive: true});});