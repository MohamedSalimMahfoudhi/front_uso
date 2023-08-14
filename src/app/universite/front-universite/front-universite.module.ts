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
import { ActualitesComponent } from 'src/app/actualites/actualites.component';
import { DetailActualiteComponent } from 'src/app/actualites/detail-actualite/detail-actualite.component';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from 'src/app/pipes/truncate.pipe';
import { AppModule } from 'src/app/app.module';



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
     ActualitesComponent,
     DetailActualiteComponent,
     TruncatePipe,


    ],
  imports: [
    CommonModule,
    FrontUniversiteRoutingModule,
    FormsModule,
    
  ],
  exports:[
    TruncatePipe
  ]
})
export class FrontUniversiteModule { }
