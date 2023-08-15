import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { StructuresAppuiComponent } from './structures-appui/structures-appui.component';
import { SocieteCivileComponent } from './societe-civile/societe-civile.component';
import { ConventionsComponent } from './conventions/conventions.component';
import { ProjetsInternationauxComponent } from './projets-internationaux/projets-internationaux.component';

const routes: Routes = [
  { path: 'entreprise', component: EntrepriseComponent },
  { path: 'structures', component: StructuresAppuiComponent },
  { path: 'societe-civile', component: SocieteCivileComponent },
  { path: 'conventions', component: ConventionsComponent },
  { path: 'projets-internationaux', component: ProjetsInternationauxComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartenariatRoutingModule { }
