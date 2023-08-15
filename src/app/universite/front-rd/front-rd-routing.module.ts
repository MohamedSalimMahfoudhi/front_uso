import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EcolesDoctoralesComponent } from './ecoles-doctorales/ecoles-doctorales.component';
import { UnitesRechercheComponent } from './unites-recherche/unites-recherche.component';
import { LaboratoiresRechercheComponent } from './laboratoires-recherche/laboratoires-recherche.component';
import { BureauTransfertComponent } from './bureau-transfert/bureau-transfert.component';

const routes: Routes = [
  { path: 'ecoles-doctorales', component: EcolesDoctoralesComponent },
  { path: 'unités-recherche', component: UnitesRechercheComponent },
  { path: 'laboratoires', component: LaboratoiresRechercheComponent },
  { path: 'transfert-technologique', component: BureauTransfertComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRDRoutingModule { }
