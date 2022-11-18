/**
 * @file script.js - Root file
 * @author Daniel Mera Sachse
 */

const botton = document.querySelector("#boton1");
botton.addEventListener("click", registrarUsuarios);

var jugadores = [];

/**
 *  Objeto Jugador
 * @type {{nombre: string, apellidos: string}}
 */
 const todo = {
    id: 1,
    text: "Hello"
}
 const studentName = 'Marcos López';
class Jugador {
    constructor(nombre, apellidos) {
        if(typeof nombre == "string"){
            this.nombre = nombre;
        }
        if(typeof apellidos == "string"){
            this.apellidos = apellidos;
        } 
        this.nivel = 1;
        this.puntuacion = 1;
    }

    getNombre() {
            return this.nombre;
        }
    setNombre(nombre) {
        this.nombre = nombre;
    }

    getApellidos() {
        return this.apellidos;
        
    }
    setApellidos(apellidos) {
        this.apellidos = apellidos;
    }
    getPuntuacion() {
        return this.puntuacion;
    }
    setPuntuacion(puntuacion) {
    this.puntuacion = puntuacion;
    }
    getNivel() {
        return this.nivel;
    }
    setNivel(nivel) {
            this.nivel = nivel;
    }
    getEstado() {
        return "El jugador "+this.nombre+" "+this.apellidos+", tiene "+this.puntuacion+" puntos, además de tener nivel "+this.nivel;
    }
    sumarPuntuacion(){
        this.puntuacion = this.puntuacion + 1;
        if(this.puntuacion == 10){
            this.puntuacion = 0;
            this.nivel++;
        }
    }

    restarPuntuacion(){
        this.puntuacion = this.puntuacion - 1;
        if(this.puntuacion == 0){
            this.puntuacion = 9;
            this.nivel--;
            if(this.nivel == 0){
                this.resetearPuntuacion();
            }
        }
    }

    resetearPuntuacion(){
        this.nivel = 1;
        this.puntuacion = 1;
        document.querySelector("p[id=comienzo_juego]").innerHTML= "El juego ha sido reseteado."
        alert("Jugador reseteado")
    }
}

function registrarUsuarios(){
    let jug1_nombre = document.getElementById("jug1_nombre").value;
    let jug1_apellidos = document.getElementById("jug1_apellidos").value;
    
    let jug2_nombre = document.getElementById("jug2_nombre").value;
    let jug2_apellidos = document.getElementById("jug2_apellidos").value;
    
    let jugador1 = new Jugador(jug1_nombre, jug1_apellidos);
    let jugador2 = new Jugador(jug2_nombre, jug2_apellidos);
    
    
    jugadores.push(jugador1);
    
    jugadores.push(jugador2);
    
    console.log(jugadores)
    document.querySelector("p[id=comienzo_juego]").innerHTML= "El juego ha empezado."
}
function eliminar_Zombie(){
    jugadores[0].sumarPuntuacion();
    document.querySelector("p[id=estado_jugador]").innerHTML= jugadores[0].getEstado();
}
function contacto_Zombie(){
    jugadores[0].restarPuntuacion();
    document.querySelector("p[id=estado_jugador]").innerHTML= jugadores[0].getEstado();
}