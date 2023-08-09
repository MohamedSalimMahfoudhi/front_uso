import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontProgrammesRoutingModule } from './front-programmes-routing.module';
import { FormationInitialeComponent } from './formation-initiale/formation-initiale.component';
import { MastersComponent } from './masters/masters.component';
import { DoctoratsComponent } from './doctorats/doctorats.component';
import { FormationsCompComponent } from './formations-comp/formations-comp.component';
import { EducationOuverteComponent } from './education-ouverte/education-ouverte.component';
import { EnseignementDistComponent } from './enseignement-dist/enseignement-dist.component';


@NgModule({
  declarations: [FormationInitialeComponent, MastersComponent, DoctoratsComponent, FormationsCompComponent, EducationOuverteComponent, EnseignementDistComponent],
  imports: [
    CommonModule,
    FrontProgrammesRoutingModule
  ]
})
export class FrontProgrammesModule { }
