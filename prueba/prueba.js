'use strict'
function Student(nombre,correo,promedio) {

    this.nombre = nombre; 
    this.correo = correo;
    this.promedio = promedio; 

   this.validaPromedio = function(){
       if(studentOne.promedio >= 70){

          return alert("Aprobado");
        }else{
           return alert("Reprobado");
      }

    }

 }
let studentOne = new Student("Juan Perez","jperez@sudamericano.edu.ec",70);

tudentOne.validaPromedio();

let end = studentOne.correo.indexOf('@');
alert(studentOne.correo.slice(0,end));



'use  strict'

let edades= ["15","45","50"];

edades.splice(1,0,"23")

for(let i=0; i<edades.length;i++){

    if(edades[i]>25){
        alert(edades[i]);
    }
}
