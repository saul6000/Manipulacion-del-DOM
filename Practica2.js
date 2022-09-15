//const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

//Ejercicio con un solo if 
const tipoDeSuscripcion = 'ExpertPlus';

const tipoSuscripcion = [
  {
    type: 'Free',
    text: 'Solo puedes tomar los cursos gratis',
  },
  {
    type: 'Basic',
    text: 'Solo puedes tomar los cursos gratis',
  },
  {
    type: 'Expert',
    text: 'Puedes tomar casi todos los cursos de Platzi durante un año',
  },
  {
    type: 'ExpertPlus',
    text: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
  },
];

function condicion(){
    if (tipoDeSuscripcion){
        const element = tipoSuscripcion.find(tipo => tipo.type === tipoDeSuscripcion);
        console.log(element.text);
    }
}
condicion();
//console.log(element.text)
console.warn("function");
let respuesta = '4';
while(respuesta == '4'){
let pregunta = prompt('cuanto es 2 + 2?');
if(pregunta != respuesta){
    console.log('Respondiste mal vuelve a intentarlo');
}else{
    console.log('Correcto');
}
}

// arrays
//Es una lista de elementos
let arreglos = [1,2,3,4]
console.log(arreglos.push(4))

function arreglo(){
    let array2={
        nombre: 'Arreglo',
        lista:[1,45,32,objeto = {
            muestra:'que tienes'
        }],
        apellido: 'Que tiene'
    }
    if (array2){
       let dato = array2;
       console.log(dato.lista)
    }
} 

arreglo();


function primerArray(arreglo){

    console.log(arreglo[0]);
    console.log( )
}
let elementos= [34,34,2,3,1,2]
primerArray(elementos)