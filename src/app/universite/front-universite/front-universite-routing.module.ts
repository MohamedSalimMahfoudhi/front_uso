import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { HistoriqueComponent } from './historique/historique.component';
import { MotPresidentComponent } from './mot-president/mot-president.component';
import { PersonnelsComponent } from './personnels/personnels.component';
import { ServicesAdministratifsComponent } from './services-administratifs/services-administratifs.component';
import { UniversiteChiffresComponent } from './universite-chiffres/universite-chiffres.component';
import { OrganigrammeComponent } from './organigramme/organigramme.component';
import { ActualitesComponent } from 'src/app/actualites/actualites.component';
import { DetailActualiteComponent } from 'src/app/actualites/detail-actualite/detail-actualite.component';

const routes: Routes = [
  { path: 'enseignants', component: EnseignantsComponent },
  { path: 'historique', component: HistoriqueComponent },
  { path: 'mot-president', component: MotPresidentComponent },
  { path: 'personnels', component: PersonnelsComponent },
  { path: 'service-administratifs', component: ServicesAdministratifsComponent },
  { path: 'universite-chiffres', component: UniversiteChiffresComponent },
  { path: 'organigramme', component: OrganigrammeComponent },
  { path: 'actualites', component: ActualitesComponent },
	{ path: 'actualites/:id', component: DetailActualiteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontUniversiteRoutingModule { }
