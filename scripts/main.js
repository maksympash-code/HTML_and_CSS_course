let elems = document.querySelectorAll('div');

for(let i of elems){
    i.innerHTML += ' <b style = "color: orange">Something my text</b>'
    i.style.background = 'green';
    i.style.color = '#fff';
}
