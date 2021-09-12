import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperaCuentaPage } from './recupera-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperaCuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperaCuentaPageRoutingModule {}
