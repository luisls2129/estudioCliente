let num = prompt("Introduzca la tabla que quiere visualizar");

let tabla = [];

for (let index = 1; index < 11; index++) {
    tabla.push(index * num);
}

let div = document.getElementById("contenido");

let table = document.createElement("table");


let contador = 1;
tabla.forEach(result =>{
    let fila = document.createElement("tr");
    fila.appendChild(crearCelda(contador));
    fila.appendChild(crearCelda("X"));
    fila.appendChild(crearCelda(num));
    fila.appendChild(crearCelda("="));
    fila.appendChild(crearCelda(result));
    table.appendChild(fila);
    contador++;
})
console.log(table);
div.appendChild(table);

function crearCelda(valor){
    let celda = document.createElement("td");
    let text = document.createTextNode(valor);
    celda.appendChild(text);
    return celda;
}