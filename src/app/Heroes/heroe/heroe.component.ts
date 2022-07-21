import { Component } from "@angular/core";

@Component({
    selector: 'appHeroe',
    templateUrl: './heroe.component.html'
})

export class heroeComponent{
    nombre:string = 'IronMan';
    edad: number = 45;
    get nombreMayus() {
        return this.nombre.toUpperCase();
        }

    obtenerNombre() {
        return `${this.nombre} - ${this.edad}`;
    }    

    cambiarNombre(){
        this.nombre = 'SpiderMan';
    }

    cambiarEdad(){
        this.edad = 19;
    }

}