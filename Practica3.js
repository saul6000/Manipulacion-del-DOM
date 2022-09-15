//const tipoDeSuscripcion = "Basic";
const prompt = require('prompt-sync')();
/*switch (tipoDeSuscripcion) {
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
 }*/
let tipoDeSuscripcion = 'Basic'
let objeto = {
    Free: 'Solo puedes tomar los cursos gratis',
    Basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    Expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    ExpertPlus: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
} 
function arreglo (){
    if (tipoDeSuscripcion){
       return objeto[tipoDeSuscripcion]
    }
 }
console.log(arreglo());
console.log("hola mundo que tal , estoy bien y tu")
