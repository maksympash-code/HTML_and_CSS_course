let elems = document.querySelectorAll('div');


let i = 0
while(i < elems.length){
    elems[i].innerHTML += ' <b style = "color: orange">Something my text</b>'
    elems[i].style.background = 'green';
    elems[i].style.color = '#fff';
    i++;
}
