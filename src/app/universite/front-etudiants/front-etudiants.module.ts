import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontEtudiantsRoutingModule } from './front-etudiants-routing.module';
import { BoursesComponent } from './bourses/bourses.component';
import { BoursesNationalesComponent } from './bourses-nationales/bourses-nationales.component';
import { BoursesAlternanceComponent } from './bourses-alternance/bourses-alternance.component';
import { BoursesInternationalesComponent } from './bourses-internationales/bourses-internationales.component';
import { ReorientationComponent } from './reorientation/reorientation.component';
import { MutationComponent } from './mutation/mutation.component';
import { ChangementDeParcoursComponent } from './changement-de-parcours/changement-de-parcours.component';
import { AccompagnementEcouteComponent } from './accompagnement-ecoute/accompagnement-ecoute.component';
import { InsertionProfessionnelComponent } from './insertion-professionnel/insertion-professionnel.component';
import { CultureSportComponent } from './culture-sport/culture-sport.component';
import { EnquetesComponent } from './enquetes/enquetes.component';
import { UniversiteBannerComponent } from '../front-universite/universite-banner/universite-banner.component';
import { FrontUniversiteModule } from '../front-universite/front-universite.module';


@NgModule({
  declarations: [BoursesComponent, BoursesNationalesComponent, BoursesAlternanceComponent, BoursesInternationalesComponent, ReorientationComponent, MutationComponent, ChangementDeParcoursComponent, AccompagnementEcouteComponent, InsertionProfessionnelComponent, CultureSportComponent, EnquetesComponent],
  imports: [
    CommonModule,
    FrontEtudiantsRoutingModule,
    FrontUniversiteModule
  ]
})
export class FrontEtudiantsModule { }
