import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Personaje } from '../interface/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private dbzService:dbzService) { }

  ngOnInit(): void {
  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  @Input('dato') nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){return;}
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {nombre:'',poder:0};
  }
}
