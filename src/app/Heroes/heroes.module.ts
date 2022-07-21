import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { heroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[heroeComponent,ListadoComponent],
    exports:[ListadoComponent],
    imports:[CommonModule]
})
export class HeroesModule{}
