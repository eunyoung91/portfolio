// 모바일 스크롤 애니메이션

$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  let wScroll = $(this).scrollTop();
  let sec2_top = $(".about-text").offset().top;
  const offset1 = (wScroll - $(".move_left").offset().top) * 0.8;
  const offset2 = (wScroll - $(".move_right").offset().top) * -0.4;

  if (scroll > sec2_top) {
      gsap.to(".mobile_title", { duration: 0.7, opacity: 1, y: 3, delay: 0.2 })
  }

  $(".move_left").css({ "transform": "translateX(" + offset1 + "px)" });
  $(".move_right").css({ "transform": "translateX(" + offset2 + "px)" });

});





