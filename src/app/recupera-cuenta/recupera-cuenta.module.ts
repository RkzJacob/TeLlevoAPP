import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperaCuentaPageRoutingModule } from './recupera-cuenta-routing.module';

import { RecuperaCuentaPage } from './recupera-cuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperaCuentaPageRoutingModule
  ],
  declarations: [RecuperaCuentaPage]
})
export class RecuperaCuentaPageModule {}
