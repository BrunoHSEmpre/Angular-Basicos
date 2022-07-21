import { Component } from '@angular/core';

@Component({
    selector: 'appContador',
    template: `
    <h1>{{titulo}}</h1>
    <h3>La base es:<strong> {{base}}</strong></h3>
    <button (click)="acumular(-base)">-{{base}}</button>
    <span>{{numero}}</span>
    <button (click)="acumular(+base)">+{{base}}</button>`
})


export class contadorComponent{
    titulo = 'Contador App';
    numero:number = 0;
    base: number = 5;
   // Sumar(){
   //   this.numero = this.numero + 1;
   // }
   // Restar(){
   //   this.numero = this.numero - 1;
   // }
   acumular (valor:number)
   {
    this.numero += valor;
   }
   }