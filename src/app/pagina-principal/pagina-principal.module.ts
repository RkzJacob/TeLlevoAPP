import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaPrincipalPageRoutingModule } from './pagina-principal-routing.module';
import { PaginaPrincipalPage } from './pagina-principal.page';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaPrincipalPageRoutingModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [PaginaPrincipalPage]
})
export class PaginaPrincipalPageModule {}
