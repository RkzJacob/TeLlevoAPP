import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cmp2Component } from '../../Components/cmp2/cmp2.component';
import { Cmp1Component } from '../../Components/cmp1/cmp1.component';
import { ConfigPage } from './config.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigPage,


    children:[
      {
        path:'global',
        component:Cmp1Component
      },
      {
        path:'app',
        component:Cmp2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigPageRoutingModule {}
