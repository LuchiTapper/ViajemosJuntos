let cuerpo= document.body;


//funcion 1 para pregunta  1
function determinarDestino(pasaporte) { 
 let salida;
  switch (pasaporte) {
    case "no":
        salida = "Argentina";
        
     break;
   case "si":
     salida = "Extranjero";
     break;
    
     default:
        while ((pasaporte !="no") && (pasaporte !="si")){        
          pasaporte= prompt ("ERROR. ¿Tenes pasaporte? Ingresá si o no"); 
          if (pasaporte=="no") { salida="Argentina";}
          else if (pasaporte=="si") {salida="extranjero";}
                         }
       break;
     }
    
     return salida; 
     }



//segunda funcion para pregunta 2

 function determinarTiempo(paisaje) { 
     let epoca;
     switch (paisaje) {
     case "verano":
          epoca = "Vamos a un lugar cálido";        
          cuerpo.setAttribute("id","BackEncuesta1");
      break;
    case "invierno":
          epoca = "Vamos a un lugar invernal"; 
          cuerpo.setAttribute("id","BackEncuesta2");
     break;   

     default:
      while ((paisaje!="verano") && (paisaje !="invierno")){        
        paisaje= prompt ("ERROR. Ingresá invierno o verano según preferencia"); 
        if (paisaje=="verano") { epoca="Vamos a un lugar cálido";
                                  cuerpo.setAttribute("id","BackEncuesta1");  }
        else if (paisaje=="invierno") {epoca="Vamos a un lugar invernal";
                                cuerpo.setAttribute("id","BackEncuesta2"); }
                       }
       break;
     }    
     return epoca; 
     }



//tercera función 3 para pregunta 3:


function determinarGeneracion(edad) {
     let dest;  
     if (edad <= 32) {
         dest = "Será un viaje de fiesta";  }

    else if ((edad >32) && (edad <= 48)) {
         dest = "Será viaje familiero";
     }
     else {
         dest = "Será un viaje de descanso";
     }          
         return dest; 
         }


//Funcion 4 para pregunta 4

function incluirEEUU(EstadosUnidos) {
     let Visa;  
     switch (EstadosUnidos) {
      case "si":
           Visa = "Con Visa. USA es una opción";
           alert ("Podemos ir a USA! Buenísimo como opción.")        
       break;
     case "no":
           Visa = "Sin visa EEUU"; 
           alert ("No iremos a USA. No importa! El mundo es muy grande :)");
      break;    
      default:        
      while ((EstadosUnidos!="si") && (EstadosUnidos !="no")){        
        EstadosUnidos= prompt ("ERROR. ¿Tenes Visa de USA? Ingresa si o no."); 
        if (EstadosUnidos=="si") {Visa="con Visa. USA es una opción";}
        else if (EstadosUnidos=="no") {Visa="sin visa EEUU";}
                       }

        break;
      }    
      return Visa; 
      }

  
//Función para actualizar como Evento y y otra que crea botón que actualiza por si lo quiero llamar de una
function actualizar() { location.reload(); }   
function Reiniciar(){
        let Father= document.getElementById("Seguimos");
        let Reiniciar= document.createElement("input");
        Reiniciar.type= "submit";
        Reiniciar.value="Reiniciar";
        Reiniciar.setAttribute("class", "ButtonSeguir");
        Father.appendChild(Reiniciar);
        Reiniciar.addEventListener("click",actualizar)
        }


//juntar todas las funxnes de pregs y crear un párrafo para mostrar los resultados/más botones para seguir o reiniciar:


function juntarFunciones(e){
  console.log(e);
  e.preventDefault();
  let destino= determinarDestino(document.formulario.pasaporte.value);
  let lugar= determinarTiempo(document.formulario.temporada.value);
  let ViajeOnda = determinarGeneracion(document.formulario.edad.value);
  let VisaUSA= incluirEEUU(document.formulario.visa.value);

//Array con respuestas de todas las preguntas
const ArrayA= [destino, lugar, ViajeOnda, VisaUSA];
console.log ("Resumen hasta ahora de nuestro viaje: \n" + JSON.stringify(ArrayA));

//DOM párrafo resumen con el Array de respuestas:
let padre= document.getElementById("DOMjs");
let resumen= document.createElement("p");
resumen.innerHTML="Resumen hasta ahora de nuestro viaje: <br>" + ArrayA.join("<br>");
resumen.setAttribute("class","DOM");
padre.appendChild(resumen);

//1- botón para seguir con encuesta, 2-función que ocurre luego de tocarlo (evento agregado al boton abajo de esta gran funcion)
//1boton
let seguir= document.createElement("input");
seguir.type= "submit";
seguir.value="SIGAMOS!";
seguir.setAttribute("class", "ButtonSeguir");
resumen.appendChild(seguir);
//2funcion y segunda tanda de preguntas
   function seguirViaje(){
        let padre3= document.getElementById("Seguimos");
        let siguiendo= document.createElement("form");
        siguiendo.name="formulario2";
        siguiendo.setAttribute("class","Encuesta")
        padre3.appendChild(siguiendo);
        
        let article1= document.createElement("article");
        siguiendo.appendChild(article1);

          let pregunta1= document.createElement("label");
          pregunta1.for="ciudad";
          pregunta1.innerHTML="¿Preferis Ciudad, Montaña o Playa?"
          article1.appendChild(pregunta1);

            let respuesta1=document.createElement("input");
            respuesta1.type="text";
            respuesta1.name="ciudad";
            pregunta1.appendChild(respuesta1);

       let article2= document.createElement("article");
            siguiendo.appendChild(article2);

          let pregunta2= document.createElement("label");
          pregunta2.for="presupuesto";
          pregunta2.innerHTML="¿Presupuesto mayor o menor a 5mil dólares?"
          article2.appendChild(pregunta2);

             let respuesta2=document.createElement("input");
             respuesta2.type="text";
             respuesta2.name="presupuesto";
             pregunta2.appendChild(respuesta2);

        let article3= document.createElement("article");
          siguiendo.appendChild(article3);

          let pregunta3= document.createElement("label");
          pregunta3.for="vacunas";
          pregunta3.innerHTML="¿Estarías dispuesto a vacunarte si es necesario?"
          article3.appendChild(pregunta3);

             let respuesta3=document.createElement("input");
             respuesta3.type="text";
             respuesta3.name="vacunas";
             pregunta3.appendChild(respuesta3);

    
         let botonFinal=document.createElement("input");
         botonFinal.type="submit";
         botonFinal.value="LISTO!"
         siguiendo.appendChild(botonFinal);
         
         let botonFinal2=document.createElement("input");
         botonFinal2.type="submit";
         botonFinal2.value="Reiniciar";         
         botonFinal2.addEventListener("click", actualizar);
         siguiendo.appendChild(botonFinal2);
        

         let preferencia=document.formulario2.ciudad.value;
         let presupuesto=document.formulario2.presupuesto.value;
         let vacunas=document.formulario2.vacunas.value;
         const ArrayB= [preferencia, presupuesto,vacunas];
         function mostrarSegunda(e) {
           e.preventDefault(e);
           console.log("Respuestas segunda tanda: "+ ArrayB.join("br"));}
         
         botonFinal.addEventListener("click", mostrarSegunda);
}
// Evento de clickear el boton para que ocurra todo lo de arriba
seguir.addEventListener("click", seguirViaje);

//boton para actualizar (no lo llamo de arriba en esta porque me queda fuera. Lo creé para appendChild a resumen)
let actualizando=document.createElement("input");
actualizando.type="submit";
actualizando.value="Reiniciar";
actualizando.setAttribute("class", "ButtonSeguir");
resumen.appendChild(actualizando);

actualizando.addEventListener("click", actualizar);
}


//Evento y botón para clickear luego de preguntas y que aparezca el resultado intermedio:

let button = document.getElementById("btn");
button.addEventListener("click", juntarFunciones);








