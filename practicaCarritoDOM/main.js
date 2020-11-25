window.addEventListener("load", inicio);
    let carrito ;
    let pPrecioCarrito;
function inicio() {

    carrito = document.getElementById("carrito");
    pPrecioCarrito = document.getElementById("precioTotalCarrito");

}

function anyade(articulo) {

    if (document.getElementById("c" + articulo.id) === null) {
        let art = articulo.cloneNode(true);
        art.id = "c" + articulo.id;
        art.className = "elementoCarrito";

        let precioArt = art.getElementsByTagName("p")[0];
        precioArt = precioArt.firstChild.nodeValue.split(" ")[1];

        art.onclick = null;

        let pPrecio = art.getElementsByTagName("p")[0];
        pPrecio.className = "precio";
        let precio = pPrecio.firstChild.nodeValue.split(" ")[1];
        pPrecio.firstChild.className = "tPrecio";

        let pCantidad = document.createElement("p");
        let textCantidad = document.createTextNode("Cantidad: 1");
        pCantidad.appendChild(textCantidad);
        pCantidad.className = "cantidad";
        art.appendChild(pCantidad);


        let pPrecioTot = document.createElement("p");
        let textPrecioTot = document.createTextNode("Total: " + precioArt + " €");
        pPrecioTot.appendChild(textPrecioTot);
        pPrecioTot.className = "precioTotal";
        art.appendChild(pPrecioTot);

        let bBorrar = document.createElement("button");
        bBorrar.textContent = "Borrar";
        bBorrar.addEventListener("click", () => {
            borrar(art);
        });
        art.appendChild(bBorrar);

        let bBorrarTod = document.createElement("button");
        bBorrarTod.textContent = "Borrar Todo";
        bBorrarTod.addEventListener("click", () => {
            borrarTod(art);
        });
        art.appendChild(bBorrarTod);

        let textPrecioTotalCarrito = parseInt(pPrecioCarrito.firstChild.nodeValue.split(" ")[2]);

        textPrecioTotalCarrito += parseInt(precio);
        pPrecioCarrito.firstChild.nodeValue = "Precio total: " + textPrecioTotalCarrito + " €";

        carrito.appendChild(art);
    } else {

        let art = document.getElementById("c" + articulo.id);
        let pCantidad = art.getElementsByClassName("cantidad")[0];
        let cantidad = pCantidad.firstChild.nodeValue.split(" ")[1];

        cantidad++;

        let pPrecio = art.getElementsByClassName("precio")[0];
        let precio = pPrecio.firstChild.nodeValue.split(" ")[1];
        let pPrecioTot = art.getElementsByClassName("precioTotal")[0];

        let precioTotal = parseInt(pPrecioTot.firstChild.nodeValue.split(" ")[1]);
        precioTotal += parseInt(precio);
        pPrecioTot.firstChild.nodeValue = "Total: " + precioTotal + "€";

        pCantidad.firstChild.nodeValue = "Cantidad: " + cantidad;

        let textPrecioTotalCarrito = parseInt(pPrecioCarrito.firstChild.nodeValue.split(" ")[2]);

        textPrecioTotalCarrito += parseInt(precio);
        pPrecioCarrito.firstChild.nodeValue = "Precio total: " + textPrecioTotalCarrito + " €";
    }
}

function borrar(art) {
    let pCantidad = art.getElementsByClassName("cantidad")[0];
    let cantidad = pCantidad.firstChild.nodeValue.split(" ")[1];
    let precio = art.getElementsByClassName("precio")[0].firstChild.nodeValue.split(" ")[1];

    if (cantidad == 1) {

        carrito.removeChild(art)

        let textPrecioTotalCarrito = parseInt(pPrecioCarrito.firstChild.nodeValue.split(" ")[2]);

        textPrecioTotalCarrito -= parseInt(precio);
        pPrecioCarrito.firstChild.nodeValue = "Precio total: " + textPrecioTotalCarrito + " €";

    } else {
        cantidad--;
        pCantidad.firstChild.nodeValue = "Cantidad: " + cantidad;

        let textPrecioTotalCarrito = parseInt(pPrecioCarrito.firstChild.nodeValue.split(" ")[2]);

        textPrecioTotalCarrito -= parseInt(precio);
        pPrecioCarrito.firstChild.nodeValue = "Precio total: " + textPrecioTotalCarrito + " €";


        let precioTotal = parseInt(art.getElementsByClassName("precioTotal")[0].firstChild.nodeValue.split(" ")[1]);
        precioTotal -= parseInt(precio);
        art.getElementsByClassName("precioTotal")[0].firstChild.nodeValue = "Total: " + precioTotal + "€";
    }
}

function borrarTod(art) {
    carrito.removeChild(art);

    let precioTotal = art.getElementsByClassName("precioTotal")[0].firstChild.nodeValue.split(" ")[1];

    let textPrecioTotalCarrito = parseInt(pPrecioCarrito.firstChild.nodeValue.split(" ")[2]);
    textPrecioTotalCarrito -= parseInt(precioTotal);

    pPrecioCarrito.firstChild.nodeValue = "Precio total: " + textPrecioTotalCarrito + " €";

}

function vaciar() {
    let hijos = document.getElementsByClassName("elementoCarrito");

    hijos = Array.from(hijos);
    hijos.forEach(element => {
        element.remove();
    });

    pPrecioCarrito.firstChild.nodeValue = "Precio total: 0 €";
}