import './style.scss';

const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
	faq.addEventListener('click', () => {
		// open faq
		faq.classList.toggle('active');

		// H3  toggle .faq-title font-weight to bold and color to black
		faq.firstElementChild.classList.toggle('faq-title-active');

		// PARAGRAPH   toggle .faq-text add class .expand
		faq.firstElementChild.nextElementSibling.classList.toggle('expand');

		// CHEVRON   toggle .fa-chevron-up add class .rotate
		faq.lastElementChild.firstElementChild.classList.toggle('rotate');
	});
});
