import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackListeActualiteComponent } from './back-liste-actualite/back-liste-actualite.component';
import { BackAddActualiteComponent } from './back-add-actualite/back-add-actualite.component';

const routes: Routes = [
  { path: 'liste', component: BackListeActualiteComponent },
  { path: 'add', component: BackAddActualiteComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackActualitesRoutingModule { }
