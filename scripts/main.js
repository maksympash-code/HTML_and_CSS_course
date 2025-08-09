let elem = document.querySelector('.main');
console.log(elem.getAttribute('title'));

elem.setAttribute('title', 'New text');
console.log(elem.getAttribute('title'));

console.log(elem.dataset.aboutBlock); // custom attribute