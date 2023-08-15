import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormationInitialeComponent } from './formation-initiale/formation-initiale.component';
import { MastersComponent } from './masters/masters.component';
import { DoctoratsComponent } from './doctorats/doctorats.component';
import { FormationsCompComponent } from './formations-comp/formations-comp.component';
import { EducationOuverteComponent } from './education-ouverte/education-ouverte.component';
import { EnseignantsComponent } from '../front-universite/enseignants/enseignants.component';
import { EnseignementDistComponent } from './enseignement-dist/enseignement-dist.component';

const routes: Routes = [

  { path: 'formation-Initiale', component: FormationInitialeComponent },
  { path: 'masters', component: MastersComponent },
  { path: 'doctorats', component: DoctoratsComponent },
  { path: 'formations-complementaires', component: FormationsCompComponent },
  { path: 'education-Ouverte', component: EducationOuverteComponent },
  { path: 'enseignement-Distance', component: EnseignementDistComponent }, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontProgrammesRoutingModule { }
