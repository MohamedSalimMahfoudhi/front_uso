import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRDRoutingModule } from './front-rd-routing.module';
import { EcolesDoctoralesComponent } from './ecoles-doctorales/ecoles-doctorales.component';
import { UnitesRechercheComponent } from './unites-recherche/unites-recherche.component';
import { LaboratoiresRechercheComponent } from './laboratoires-recherche/laboratoires-recherche.component';
import { BureauTransfertComponent } from './bureau-transfert/bureau-transfert.component';


@NgModule({
  declarations: [EcolesDoctoralesComponent, UnitesRechercheComponent, LaboratoiresRechercheComponent, BureauTransfertComponent],
  imports: [
    CommonModule,
    FrontRDRoutingModule
  ]
})
export class FrontRDModule { }
