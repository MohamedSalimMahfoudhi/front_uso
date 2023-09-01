import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackOfficeComponent } from './back-office/back-office.component';

const routes: Routes = [
  	
    {
      path: 'actualites',component: BackOfficeComponent,
      children: [
          {path:'', loadChildren:
            ()=>import('./back-actualites/back-actualites.module').then(m=>m.BackActualitesModule)},
      
      ],
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
