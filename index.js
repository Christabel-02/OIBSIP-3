let text = document.getElementById("text");
let m_2 = document.getElementById('sky');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let leaf = document.getElementById('leaf');
let plant = document.getElementById('plant');
window.addEventListener ('scroll',() =>{
   let value = window.scrollY;
   text.style.marginTop = value * 2.5 + 'px';
   leaf.style.top = value * -1.5 + 'px';
   leaf.style.left = value * 1.5 + 'px';
   hill5.style.left = value * 1.5 + 'px';
   hill4.style.left= value * -1.5 + 'px';
   
});

let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

function celToFar(){
    let output=(parseFloat(celsius.value) * 9/5) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function farToCel(){
    let output=(parseFloat(fahrenheit.value) -32) * 5/9;
    celsius.value = parseFloat(output.toFixed(2));
    console.log(output);
}
