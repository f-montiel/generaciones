class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, nacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.nacimiento = nacimiento;
    }
    get obtenerNombre(){
        return this.nombre;
    }
    set cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }
    get obtenerEdad(){
        return this.edad;
    }
    set cambiarEdad(nuevaEdad){
        this.edad = nuevaEdad;
    }
    get obtenerDni(){
        return this.dni;
    }
    set cambiarDni(nuevoDni){
        this.dni = nuevoDni;
    }
    get obtenerSexo(){
        return this.sexo;
    }
    set cambiarSexo(nuevoSexo){
        this.sexo = nuevoSexo;
    }
    get obtenerPeso(){
        return this.peso;
    }
    set cambiarPeso(nuevoPeso){
        this.peso = nuevoPeso;
    }
    get obtenerAltura(){
        return this.altura;
    }
    set cambiarAltura(nuevaAltura){
        this.altura = nuevaAltura;
    }
    get obtenerNacimiento(){
        return this.nacimiento;
    }
    set cambiarNacimiento(nuevoNacimiento){
        this.nacimiento = nuevoNacimiento;
    }
    mostrarGeneracion(){
        if(this.nacimiento >= 1930 && this.nacimiento<= 1948){
            alert(this.nombre + " es de la generacion Silent Generation y su rasgo caracteristico la austeridad");
         }
         if(this.nacimiento >= 1949 && this.nacimiento <= 1968){
             alert(this.nombre + " es de la generacion Baby Boom y su rasgo caracteristico es la ambicion");
         }
         if(this.nacimiento >= 1969 && this.nacimiento <= 1980){
             alert(this.nombre + " es de la generacion X y su rasgo caracteristico es la obsesión por el éxito");
         }
         if(this.nacimiento >= 1981 && this.nacimiento <= 1993){
             alert(this.nombre + " es de la generacion Y y su rasgo caracteristico es la frustración");
         }
         if(this.nacimiento >= 1994 && this.nacimiento <= 2010){
             alert(this.nombre + " es de la generacion Z y su rasgo caracteristico es la irreverencia");
         }
    }
    esMayorDeEdad(){
        if(this.edad >= 18){
            alert(this.nombre + " es mayor de edad");
        } else {
            alert(this.nombre + " es menor de edad");
        }
    }
    mostrarDatos(){
        let nombre = this.nombre;
        let edad = this.edad;
        let dni = this.dni;
        let sexo = this.sexo;
        let peso = this.peso;
        let altura = this.altura;
        let nacimiento = this.nacimiento;
        return {nombre, edad, dni, sexo, peso, altura, nacimiento}
    }
}
let persona;
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", crearPersona);
let botonGeneracion = document.getElementById("generacion");
botonGeneracion.addEventListener("click", ()=>{if(persona){persona.mostrarGeneracion()}});
let botonValidadEdad = document.getElementById("validarEdad");
botonValidadEdad.addEventListener("click", () => {if(persona){persona.esMayorDeEdad()}});

function crearPersona(event){
    event.preventDefault();
    let nombre = formulario.nombre.value;
    formulario.nombre.disabled = true;
    let edad = formulario.edad.value;
    formulario.edad.disabled = true;
    let dni = formulario.dni.value;
    formulario.dni.disabled = true;
    let sexo = formulario.sexo.value;
    formulario.sexo.disabled = true;
    let peso = formulario.peso.value;
    formulario.peso.disabled = true;
    let altura = formulario.altura.value;
    formulario.altura.disabled = true;
    let nacimiento = formulario.nacimiento.value;
    formulario.nacimiento.disabled = true;
    formulario.guardar.disabled = true;
    persona = new Persona(nombre, edad, dni, sexo, peso, altura, nacimiento);
}