$(window).scroll(function () {
	let scroll = $(window).scrollTop();

	const sec_start1 = $('.main-title').offset().top;

	if (scroll > sec_start1) {
		gsap.to(".site_list_title h3", { duration: 0.8, opacity: 1, y: 3, delay: .3 });
	}
});






