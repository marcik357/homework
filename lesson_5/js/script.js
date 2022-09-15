window.addEventListener('load', function () {
	let menu = document.querySelector('.menu__list');

	if (window.location.hash != '') scrollToId(window.location.hash);

	menu.addEventListener('click', function (e) {
		if (e.target.classList.contains('menu__link')) {
			let link = e.target;
			
			e.preventDefault();
			scrollToId(link.hash);
			menu.querySelector('.menu__link-active').classList.remove('menu__link-active');
			link.classList.add('menu__link-active');
		}
	});

	window.addEventListener('scroll', function () {
		let sections = document.querySelectorAll('h3[id]');
		let centerY = document.documentElement.clientHeight / 2;
		
		sections.forEach(section => {
			if (section.getBoundingClientRect().top <= centerY) {
				menu.querySelector('.menu__link-active').classList.remove('menu__link-active');
				document.querySelector(`a[href$='${section.id}']`).classList.add('menu__link-active');
			}
		});
		// дурацкий костыль - старт
		let sectionH2 = document.querySelector('h2[id]');
		if (sectionH2.getBoundingClientRect().top <= centerY) {
			menu.querySelector('.menu__link-active').classList.remove('menu__link-active');
			document.querySelector(`a[href$='${sectionH2.id}']`).classList.add('menu__link-active');
		}
		// дурацкий костыль - конец
	});

	function scrollToId(id) {
		let target = document.querySelector(id);

		if (target !== null) {
			let pos = window.scrollY + target.getBoundingClientRect().top - document.querySelector('.header').clientHeight - parseFloat(window.getComputedStyle(target).marginTop);

			scrollTo(pos);
		}
	};

	function scrollTo(pos) {
		window.scrollTo({
			top: pos,
			behavior: "smooth"
		});
	}
});