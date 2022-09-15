const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafo')
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);
//saber el nombre y el valor 
console.log({
    h1,
    p,
    parrafito,
    pid,
    input
})
function parametrp(paremtro){
    console.log(paremtro)
}
parametrp('valor');

h1.innerText = 'La bomba de huston';
//h1.innerHTML
console.log(h1.getAttribute('pantalla'));
h1.setAttribute('pantalla', 'verde');
console.log(h1.getAttribute('pantalla'));
h1.classList.add('rojo');//agregar argumetno a la clase
h1.classList.remove('remove');//eliminar la clase pasada como argumento
h1.classList.toggle('verde');
//h1.classList.contains();

input.value='4534'
const img = document.createElement('img');
img.setAttribute('src','https://i.ytimg.com/vi/lNOf8olSqPo/maxresdefault.jpg');
console.log(img);

pid.innerHTML='';

pid.appendChild(img);


/*const img = document.createElement('img');
img.setAttribute('src', 'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');
console.log(img);

pid.replaceWith(img);*/
