const btn = document.getElementById("btn");
const textColor = document.getElementById("textColor");
const color = document.getElementById("color");
const show = document.getElementById("copy");

replace()
copied()

btn.addEventListener("click", () => {
    replace()
    copied()

})

function copied(){

    if (!show.classList.contains('show')) {
        show.classList.toggle('show');
        setTimeout(() => {
            show.classList.toggle('show');
        }, 1500)
    }

}


function getRandomColor(){
    let color = Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
    while (color.length != 6) {
        color = Math.floor(Math.random() * 16777215).toString(16).toUpperCase()
    } // sometimes color has only 5 of length
    return color;

}

function copy() {
    let e = document.createElement('textarea');
    e.value = color.textContent;
    e.setAttribute('readonly', '');
    e.style = {position: 'absolute', left: '-10000px'};
    document.body.appendChild(e);
    e.select();
    document.execCommand('copy');
    document.body.removeChild(e);
 }

 function replace(){
    const hex = "#" + getRandomColor()
    document.body.style.backgroundColor = hex;
    color.textContent = hex;
    const lum = lightOrDark(hex)
    color.style.backgroundColor = (lum === "white") ? "black" : "white";
    color.style.color = lum
    btn.style.color = lum;
    textColor.style.color = lum;
    btn.style.borderColor = lum;
    copy();
 }

 function lightOrDark(color) {

    // HEX to R G B values
    color = color.substring(1);
    const bigint = parseInt(color, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    const hsp = Math.sqrt(
      0.299 * (r * r) +
      0.587 * (g * g) +
      0.114 * (b * b)
    );
  
    // Using the HSP value, determine whether the color is light or dark
    return hsp < 127.5 ? "white" : "black";
}