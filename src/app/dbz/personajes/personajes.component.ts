import { Component, Input, OnInit } from '@angular/core';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  constructor(private dbzService:dbzService) {}

   get personajes(){
    return this.dbzService.personajes;
   }

  ngOnInit(): void {
  }
 //@Input('datos') personajes: any[] = [];
}
