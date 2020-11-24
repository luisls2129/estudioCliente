let carrito = document.getElementById("carrito");

let pPrecioCarrito = document.getElementById("precioTotalCarrito");

function anyade(articulo) {

    if (document.getElementById("c" + articulo.id) === null) {
        let art = articulo.cloneNode(true);
        art.id = "c" + articulo.id;
        art.className = "elementoCarrito";

        let precioArt = art.getElementsByTagName("p")[0];
        precioArt = precioArt.firstChild.nodeValue.split(" ")[1];

        art.onclick = null;

        let pCantidad = document.createElement("p");
        let textCantidad = document.createTextNode("Cantidad : 1");
        pCantidad.appendChild(textCantidad);
        art.appendChild(pCantidad);


        let pPrecioTot = document.createElement("p");
        let textPrecioTot = document.createTextNode("Total : " + precioArt + " €");
        pPrecioTot.appendChild(textPrecioTot);
        art.appendChild(pPrecioTot);

        let bBorrar = document.createElement("button");
        bBorrar.textContent = "Borrar";
        bBorrar.addEventListener("click", () =>{
            borrar(art);
        });
        art.appendChild(bBorrar);

        let bBorrarTod = document.createElement("button");
        bBorrarTod.textContent = "Borrar Todo";
        bBorrarTod.addEventListener("click", () =>{
            borrarTod(art);
        });
        art.appendChild(bBorrarTod);

        carrito.appendChild(art);
    }else{

        let art = document.getElementById("c" + articulo.id);
        let pCantidad = art.getElementsByTagName("p")[1];
        let cantidad = pCantidad.firstChild.nodeValue.split(" ")[2];

        cantidad++;
        
        pCantidad.firstChild.nodeValue = "Cantidad : " + cantidad;
    }
}

function borrar(art) {
    let pCantidad = art.getElementsByTagName("p")[1];
    let cantidad = pCantidad.firstChild.nodeValue.split(" ")[2];

    if(cantidad == 1){

        carrito.removeChild(art)

    }else{
        cantidad--;
        pCantidad.firstChild.nodeValue = "Cantidad : " + cantidad;
    }
}

function borrarTod(art) {
    carrito.removeChild(art)
}

function vaciar() {
    let hijos = document.getElementsByClassName("elementoCarrito");
    
    hijos = Array.from(hijos);
    hijos.forEach(element => {
        element.remove();
    });

    pPrecioCarrito.firstChild.nodeValue = "Precio total: 0 €";
}