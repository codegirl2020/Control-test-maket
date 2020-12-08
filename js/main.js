new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
})
$('.works__grid').magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Loading image #%curr%...',
  mainClass: 'mfp-img-mobile',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
  }
});

var hamburger = document.querySelector(".hamburger");
var hiddenNav = document.querySelector(".hidden-nav");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle('is-active');
  hiddenNav.classList.toggle("is-active");
});