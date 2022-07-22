import { Component, OnInit } from '@angular/core';

import { Personaje } from '../interface/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  ngOnInit(): void {}
 
   nuevo: Personaje = {
    nombre: 'Roshi', 
    poder: 100
   };   

   constructor(){}

}
