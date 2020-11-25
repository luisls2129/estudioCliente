class persona{
    nombre;
    edad;

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    getNombre(){
        return this.nombre;
    }

    getEdad(){
        return this.edad;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }
}

let luis = new persona("Luis", 25);

console.log(luis);

luis.setNombre(prompt("Di su nuevo nombre"));

console.log(luis);
