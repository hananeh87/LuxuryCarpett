window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".moveBottom-back").classList.add("show");
  }, 1000);

  setTimeout(() => {
    document.querySelector(".moveRight-carpet").classList.add("show");
  }, 1500);
  setTimeout(() => {
    document.querySelector(".moveLeft-text").classList.add("show");
  }, 1000);
});

//اسلایدر محصولات فرش ماندگار
$('.slider.owl-carousel').owlCarousel({
  loop: true,
  margin: 40,
  rtl: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      dots: true,
      stagePadding: 10,
    },
    768: {
      items: 2,
      dots: false,
      nav: true,
      stagePadding: 20,
    },
    1024: {
      items: 3,
      dots: false,
      nav: true,
      margin: 30,
    }
  }
})
//اسلایدر محصولات فرش ماندگار