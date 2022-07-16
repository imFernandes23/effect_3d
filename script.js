let ele = document.getElementById('text');
let data = ele.innerHTML;

ele.innerHTML = ''


let l = data.length;

for( i = 0; i < l; i++){
    let letter  = document.createElement('span');
    letter.innerHTML = data[i];
    letter.classList.add('char')
    letter.style.setProperty('--index-letter',`${i+1}`);
    ele.appendChild(letter);
}

let circle = document.getElementsByClassName('circle')[0]
window.onmousemove = function(e){
    let back = document.getElementById('back')
    let x  = e.clientX/-2

    circle.style.transform = "perspective(1000px) rotateX("+ x/15 +"deg) rotateX(30deg) rotateY(" + x + "deg)";

}