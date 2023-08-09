import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontUniversiteRoutingModule } from './front-universite-routing.module';
import { MotPresidentComponent } from './mot-president/mot-president.component';
import { HistoriqueComponent } from './historique/historique.component';
import { UniversiteChiffresComponent } from './universite-chiffres/universite-chiffres.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { PersonnelsComponent } from './personnels/personnels.component';
import { ServicesAdministratifsComponent } from './services-administratifs/services-administratifs.component';
import { OrganigrammeComponent } from './organigramme/organigramme.component';
import { LocalisationComponent } from './localisation/localisation.component';
import { UniversiteBannerComponent } from './universite-banner/universite-banner.component'; 



@NgModule({
  declarations: [MotPresidentComponent,
     HistoriqueComponent,
     UniversiteChiffresComponent,
     EnseignantsComponent,
     PersonnelsComponent,
     ServicesAdministratifsComponent,
     OrganigrammeComponent,
     LocalisationComponent,
     UniversiteBannerComponent,
    ],
  imports: [
    CommonModule,
    FrontUniversiteRoutingModule
  ]
})
export class FrontUniversiteModule { }
