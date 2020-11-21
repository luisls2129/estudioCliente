/**
 *  * Sacar los numeros primos uno debajo de otro. cambiar css 
 *  * para los primos rojo y no primos azul ejemplo.
 */

let primos = calcularPrimos();

let divPrimos = document.getElementById("listaPrimos");

let tabla = document.createElement("table");
let fila = document.createElement("tr");
let contador = 0;

primos.forEach(primo =>{
    if (contador == 2) {
        fila = document.createElement("tr");
        contador = 0;
    }
    let celda = document.createElement("td");
    let text = document.createTextNode(primo);
    celda.appendChild(text);
    fila.appendChild(celda);
    tabla.appendChild(fila);
    contador++;
})

divPrimos.appendChild(tabla);
function calcularPrimos() {
    let numMax = prompt("introduzca hasta que numero");

    let listaPrimos = [];

    for (let index = 1; index <= numMax; index++) {
        let i = 2;
        let primo = true
        if (index != 1 && index != 2) {
            while (primo == true && i != index) {
                let resto = index % i;
                if (resto == 0) {
                    primo = false;
                }
                i++;
            }
            if (primo) {
                listaPrimos.push(index);
            }
        } else {
            listaPrimos.push(index);
        }


    }

    return listaPrimos;
}