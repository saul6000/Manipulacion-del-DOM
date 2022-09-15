 const h1 = document.querySelector('h1');
 const input1 = document.querySelector('#calculo1');
 const input2 = document.querySelector('#calculo2');
 const btn = document.querySelector('#btnCarcular');
 const resultado = document.querySelector('#resultado');
 const presultador = document.querySelector('#resutaldoparrafo');
const  form = document.querySelector('#formulario')
 form.addEventListener('submit',btnOnclick);
 function btnOnclick(event){
    console.log({event})
    event.preventDefault();
    resultado.value=(Number(input1.value))+(Number(input2.value));
    presultador.innerHTML = "El resultado es: " + resultado.value
    console.log(resultado.value);
return presultador;
 }