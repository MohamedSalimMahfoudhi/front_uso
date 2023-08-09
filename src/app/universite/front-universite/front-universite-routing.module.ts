import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { HistoriqueComponent } from './historique/historique.component';
import { LocalisationComponent } from './localisation/localisation.component';
import { MotPresidentComponent } from './mot-president/mot-president.component';
import { PersonnelsComponent } from './personnels/personnels.component';
import { ServicesAdministratifsComponent } from './services-administratifs/services-administratifs.component';
import { UniversiteChiffresComponent } from './universite-chiffres/universite-chiffres.component';
import { OrganigrammeComponent } from './organigramme/organigramme.component';

const routes: Routes = [
  { path: 'enseignants', component: EnseignantsComponent },
  { path: 'historique', component: HistoriqueComponent },
  { path: 'localisation', component: LocalisationComponent },
  { path: 'mot-president', component: MotPresidentComponent },
  { path: 'personnels', component: PersonnelsComponent },
  { path: 'service-administratifs', component: ServicesAdministratifsComponent },
  { path: 'universite-chiffres', component: UniversiteChiffresComponent },
  { path: 'organigramme', component: OrganigrammeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontUniversiteRoutingModule { }
