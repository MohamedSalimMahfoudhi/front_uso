import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontProgrammesRoutingModule } from './front-programmes-routing.module';
import { FormationInitialeComponent } from './formation-initiale/formation-initiale.component';
import { MastersComponent } from './masters/masters.component';
import { DoctoratsComponent } from './doctorats/doctorats.component';
import { FormationsCompComponent } from './formations-comp/formations-comp.component';
import { EducationOuverteComponent } from './education-ouverte/education-ouverte.component';
import { EnseignementDistComponent } from './enseignement-dist/enseignement-dist.component';
import { FrontUniversiteModule } from '../front-universite/front-universite.module';
import { FrontAccordianFormationInitComponent } from './front-accordian-formation-init/front-accordian-formation-init.component';
import { FrontAccordianMastersComponent } from './front-accordian-masters/front-accordian-masters.component';
import { FrontAccordianDocComponent } from './front-accordian-doc/front-accordian-doc.component';


@NgModule({
  declarations: [FormationInitialeComponent, MastersComponent, DoctoratsComponent, FormationsCompComponent, EducationOuverteComponent, EnseignementDistComponent, FrontAccordianFormationInitComponent, FrontAccordianMastersComponent, FrontAccordianDocComponent],
  imports: [
    CommonModule,
    FrontProgrammesRoutingModule,
    FrontUniversiteModule
  ]
})
export class FrontProgrammesModule { }
