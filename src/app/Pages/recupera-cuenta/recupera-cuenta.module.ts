import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperaCuentaPageRoutingModule } from './recupera-cuenta-routing.module';

import { RecuperaCuentaPage } from './recupera-cuenta.page';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperaCuentaPageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
    

  ],
  declarations: [RecuperaCuentaPage]
})
export class RecuperaCuentaPageModule {}
