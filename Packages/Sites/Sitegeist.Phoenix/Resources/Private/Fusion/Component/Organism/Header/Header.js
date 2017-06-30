import debounce from 'lodash.debounce';

export default el => {
	const topNavigationWrap = document.querySelector('.top-navigation-wrap');
	const bodyPadding = topNavigationWrap ? topNavigationWrap.clientHeight: 20;

	if (topNavigationWrap) {
		topNavigationWrap.classList.add('navbar-fixed-top');
	}

	document.body.style.paddingTop = `${bodyPadding}px`;

	window.addEventListener('scroll', debounce(() => {
		const shouldBeScrolling = window.scrollY > 0;
		const isScrolling = document.body.classList.contains('scrolling');

		if (shouldBeScrolling && !isScrolling) {
			document.body.classList.add('scrolling');
		} else if (!shouldBeScrolling && isScrolling) {
			document.body.classList.remove('scrolling');
		}
	}));
};
