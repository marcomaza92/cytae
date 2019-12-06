var openMenu = document.querySelector('.icon-open-menu');
openMenu.addEventListener("click", function() {
	var menu = document.querySelector('.menu');
	menu.classList.add('open');
});
var closeMenu = document.querySelector('.icon-close-menu');
closeMenu.addEventListener("click", function() {
	var menu = document.querySelector('.menu');
	menu.classList.remove('open');
});
var openObjetives = document.querySelector('.open-about-objetives');
openObjetives.addEventListener("click", function() {
	var objetives = document.querySelector('.about-objetives');
	objetives.classList.add('open');
});
var closeObjetives = document.querySelector('.close-about-objetives');
closeObjetives.addEventListener("click", function() {
	var objetives = document.querySelector('.about-objetives');
	objetives.classList.remove('open');
});
function scrollIt(destination, duration = 200, easing = 'linear', callback) {

  const easings = {
    easeInOut(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
  };

  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }
      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}

document.querySelector('.home-button').addEventListener('click', () => {
  scrollIt(document.querySelector('.home'), 300, 'easeInOut');
	document.querySelector('.menu').classList.remove('open');
});
document.querySelector('.about-button').addEventListener('click', () => {
  scrollIt(document.querySelector('.about'), 300, 'easeInOut');
	document.querySelector('.menu').classList.remove('open');
});
document.querySelector('.motivation-button').addEventListener('click', () => {
  scrollIt(document.querySelector('.motivation'), 300, 'easeInOut');
	document.querySelector('.menu').classList.remove('open');
});
document.querySelector('.people-button').addEventListener('click', () => {
  scrollIt(document.querySelector('.people'), 300, 'easeInOut');
	document.querySelector('.menu').classList.remove('open');
});
document.querySelector('.join-button').addEventListener('click', () => {
  scrollIt(document.querySelector('.join'), 300, 'easeInOut');
	document.querySelector('.menu').classList.remove('open');
});
document.querySelector('.join-button-2').addEventListener('click', () => {
  scrollIt(document.querySelector('.join'), 300, 'easeInOut');
	document.querySelector('.menu').classList.remove('open');
});
document.querySelector('.go-top').addEventListener('click', () => {
  scrollIt(document.querySelector('.home'), 300, 'easeInOut');
	document.querySelector('.menu').classList.remove('open');
});
