let formulario = document.forms[0];

let contenedorRespuesta = document.createElement("div");
contenedorRespuesta.id = "contenedorRespuesta";
contenedorRespuesta.style.border = "1px solid black";
document.body.appendChild(contenedorRespuesta);

let bEnviar = formulario.enviar;
bEnviar.addEventListener("click", enviarDatos);

let bBorrar  = formulario.borrar;
bBorrar.addEventListener("click", borrarFormulario);

let arrayForm = new Array();

function enviarDatos() {
    event.preventDefault();

    let text = formulario.texto.value;
    let textArea = formulario.textArea.value;
    let listcasado = formulario.casado ;
    let casado;

    listcasado = Array.from(listcasado);
    listcasado.forEach(element => {
        if (element.checked){
            casado = element.value;
        }
    });
    
    let casa = document.getElementById("casa");
    if (casa.checked) {
         casa = "Casa: si";
    }else{
        casa = "Casa: no";
    }
    let mascota = document.getElementById("mascota");
    if (mascota.checked) {
        mascota = "mascota: si";
   }else{
    mascota = "mascota: no";
   }
    let trabajo = document.getElementById("trabajo");
    if (trabajo.checked) {
        trabajo = "trabajo: si";
   }else{
    trabajo = "trabajo: no";
   }

   let sexo = formulario.sexo.value;
   

   let objForm = {
       "texto" : text,
       "textArea" : textArea,
       "casado" : casado,
       "casa" : casa,
       "mascota" : mascota,
       "trabajo" : trabajo,
       "sexo" : sexo
   };

   arrayForm.push(objForm);


   rellenarContenedor();
}

function rellenarContenedor(){

    contenedorRespuesta.innerHTML = "";

    arrayForm.forEach(element =>{

        let text = document.createElement("div");
        let texto = document.createTextNode("Texto : " + element['texto']);
        text.appendChild(texto);

        let texta = document.createElement("div");
        let textoArea = document.createTextNode("TextArea : " + element['textArea']);
        texta.appendChild(textoArea);

        let casado = document.createElement("div");
        let textoCasado = document.createTextNode("Casado : " + element['casado']);
        casado.appendChild(textoCasado);

        let mascota = document.createElement("div");
        let textoMascota = document.createTextNode(element['mascota']);
        mascota.appendChild(textoMascota);

        let casa = document.createElement("div");
        let textoCasa = document.createTextNode(element['casa']);
        casa.appendChild(textoCasa);

        let trabajo = document.createElement("div");
        let textoTrabajo = document.createTextNode(element['trabajo']);
        trabajo.appendChild(textoTrabajo);

        let sexo = document.createElement("div");
        let textoSexo = document.createTextNode("sexo : " + element['sexo']);
        sexo.appendChild(textoSexo);

        contenedorRespuesta.appendChild(text);
        contenedorRespuesta.appendChild(texta);
        contenedorRespuesta.appendChild(casado);
        contenedorRespuesta.appendChild(mascota);
        contenedorRespuesta.appendChild(casa);
        contenedorRespuesta.appendChild(trabajo);
        contenedorRespuesta.appendChild(sexo);
    });

}

function borrarFormulario(){

    formulario.reset();

}
