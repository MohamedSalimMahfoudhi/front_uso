import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartenariatRoutingModule } from './partenariat-routing.module';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { StructuresAppuiComponent } from './structures-appui/structures-appui.component';
import { SocieteCivileComponent } from './societe-civile/societe-civile.component';
import { ConventionsComponent } from './conventions/conventions.component';
import { ProjetsInternationauxComponent } from './projets-internationaux/projets-internationaux.component';
import { FrontUniversiteModule } from '../front-universite/front-universite.module';


@NgModule({
  declarations: [EntrepriseComponent, StructuresAppuiComponent, SocieteCivileComponent, ConventionsComponent, ProjetsInternationauxComponent],
  imports: [
    CommonModule,
    PartenariatRoutingModule,
    FrontUniversiteModule
  ]
})
export class PartenariatModule { }
