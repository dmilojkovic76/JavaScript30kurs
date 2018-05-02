const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNav(){
	if(this.scrollY > topOfNav) {
		document.body.classList.add('fixed-nav');
		document.body.style.paddingTop = nav.offsetHeight + 'px';
	} else {
		document.body.classList.remove('fixed-nav');
		document.body.style.paddingTop = 0;
	}
}

window.addEventListener('scroll', fixNav);