import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccompagnementEcouteComponent } from './accompagnement-ecoute/accompagnement-ecoute.component';
import { BoursesComponent } from './bourses/bourses.component';
import { BoursesAlternanceComponent } from './bourses-alternance/bourses-alternance.component';
import { BoursesInternationalesComponent } from './bourses-internationales/bourses-internationales.component';
import { BoursesNationalesComponent } from './bourses-nationales/bourses-nationales.component';
import { ChangementDeParcoursComponent } from './changement-de-parcours/changement-de-parcours.component';
import { CultureSportComponent } from './culture-sport/culture-sport.component';
import { EnquetesComponent } from './enquetes/enquetes.component';
import { InsertionProfessionnelComponent } from './insertion-professionnel/insertion-professionnel.component';
import { MutationComponent } from './mutation/mutation.component';
import { ReorientationComponent } from './reorientation/reorientation.component';

const routes: Routes = [
  { path: 'accompagnement', component: AccompagnementEcouteComponent },
  { path: 'bourses', component: BoursesComponent },
  { path: 'bourses-alternance', component: BoursesAlternanceComponent },
  { path: 'bourses-internationales', component: BoursesInternationalesComponent },
  { path: 'bourses-nationales', component: BoursesNationalesComponent },
  { path: 'changement-de-parcours', component: ChangementDeParcoursComponent },
  { path: 'culture-sport', component: CultureSportComponent },
  { path: 'enquetes', component: EnquetesComponent },
  { path: 'insertion-professionnel', component: InsertionProfessionnelComponent },
  { path: 'mutation', component: MutationComponent },
  { path: 'reorientation', component: ReorientationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontEtudiantsRoutingModule { }
